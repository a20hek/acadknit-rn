import {
  ScrollView,
  View,
  Center,
  Button,
  Flex,
  TextArea,
  Input,
} from 'native-base';
import React, {useState, useEffect, useContext, useRef} from 'react';
import {useRoute} from '@react-navigation/native';
import {Auth, API, graphqlOperation} from 'aws-amplify';

import {messagesbyClub} from '../graphql/queries';
import {createMessage} from '../graphql/mutations';
import {onCreateMessage} from '../graphql/subscriptions';

import UserContext from '../context/UserContext';
import MessageCard from '../../components/MessageCard';

export default function ClubChatScreen() {
  const route = useRoute();
  const clubID = route?.params?.clubID;

  const [userID, setUserID] = useState('');
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const [show, setShow] = useState('');

  // const [height, setHeight] = useState(16);

  useEffect(() => {
    if (clubID) {
      getMessages();
      console.log(messages);
    }
  }, []);

  useEffect(() => {
    getUserID();
  }, []);

  useEffect(() => {
    try {
      const subscription = API.graphql(
        graphqlOperation(onCreateMessage, {owner: userID}),
      ).subscribe({
        next: event => {
          setMessages([...messages, event.value.data.onCreateMessage]);
        },
      });
      return () => {
        subscription.unsubscribe();
      };
    } catch (e) {
      console.log(e.message);
    }
  }, [messages]);

  const getUserID = async () => {
    const currentUser = await Auth.currentAuthenticatedUser();
    setUserID(currentUser.attributes.sub);
  };

  const getMessages = async () => {
    const retriveMessages = await API.graphql(
      graphqlOperation(messagesbyClub, {clubID: clubID, sortDirection: 'ASC'}),
    );
    const messageData = retriveMessages.data.messagesbyClub.items;
    setMessages(messageData);
  };

  useEffect(() => {
    if (message && message.length) {
      setShow('Send');
    } else {
      setShow('');
    }
  }, [message]);

  const onMessageSend = async () => {
    try {
      await API.graphql(
        graphqlOperation(createMessage, {
          input: input,
        }),
      );
    } catch (e) {
      console.warn(e);
    }
    setMessage('');
  };
  const userData = useContext(UserContext);
  const userName = userData.name;
  const input = {content: message, clubID: clubID, userName: userName};

  const scrollViewRef = useRef();

  return (
    <View bg="#fff" flex={1} px="16px">
      <ScrollView
        ref={scrollViewRef}
        onContentSizeChange={() =>
          scrollViewRef.current.scrollToEnd({animated: true})
        }>
        <Flex direction="column">
          {messages &&
            messages.map(messagemapped => (
              <MessageCard
                author={messagemapped.userName}
                content={messagemapped.content}
                userName={userName}
                key={messagemapped.id}
                timestamp={messagemapped.createdAt}
              />
            ))}
        </Flex>
      </ScrollView>
      <View>
        <Center>
          <Input
            // minH="unset"
            overflow="hidden"
            mt="15px"
            placeholder="Message..."
            bottom="5px"
            multiline={true}
            // size=""
            // h="24px"
            w="96%"
            size="lg"
            // rounded="full"
            // h={height}
            // maxH="280px"
            // height="24px"
            // multiline
            onChangeText={text => setMessage(text)}
            value={message}
            // onContentSizeChange={e => heightChange(e)}
            // maxLength={1000}
            // display="flex"
            // ref={inputRef}
            // multiline
            InputRightElement={
              <Button
                mr="16px"
                _text={{color: '#00bb9e', fontWeight: 'bold', fontSize: '16px'}}
                color="#00bb9e"
                variant="unstyled"
                onPress={onMessageSend}>
                {show}
              </Button>
            }
          />
        </Center>
      </View>
    </View>
  );
}
