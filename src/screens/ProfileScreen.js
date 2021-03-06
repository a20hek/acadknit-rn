import {Text, Heading, Flex, Box, Badge, Pressable, Divider} from 'native-base';
import React, {useContext} from 'react';
import {Auth} from 'aws-amplify';
import UserContext from '../context/UserContext';

export default function ProfileScreen({navigation}) {
  const userData = useContext(UserContext);
  const interestData = userData.interests?.items;

  const ListButton = ({text, onPress, txtclr}) => {
    return (
      <>
        <Pressable onPress={onPress}>
          <Box w="100%" my="10px">
            <Text textAlign="left" fontSize="18px" color={txtclr || '#4d4d4d'}>
              {text}
            </Text>
          </Box>
        </Pressable>
        <Divider />
      </>
    );
  };

  const signOut = () => {
    Auth.signOut();
  };

  return (
    <Box bg="#fff" flex={1} p="32px">
      <Heading
        mt="10%"
        fontSize="24px"
        fontFamily="body"
        fontWeight={100}
        fontStyle="normal">
        {userData.name}
      </Heading>
      <Text fontSize="16px" mt="8px">
        {userData.college}
      </Text>
      <Flex direction="row" mt="8px" flexWrap="wrap">
        {interestData &&
          interestData.map(interest => (
            <Badge
              bgColor="#A475C0"
              rounded="sm"
              w="auto"
              _text={{
                fontSize: 10,
                color: '#fff',
              }}
              key={interest.interest.id}>
              {interest.interest.interestName}
            </Badge>
          ))}
      </Flex>
      <Box mt="32px">
        <ListButton
          text="Edit Personal Info"
          onPress={() => navigation.navigate('Edit Personal Info', {userData})}
          key="editpro"
        />
        <ListButton
          text="Edit Interests"
          onPress={() =>
            navigation.navigate('Edit Interests', {
              interestData: interestData,
              userData: userData,
            })
          }
          key="editint"
        />

        <ListButton
          text="Log Out"
          txtclr="#E53935"
          onPress={signOut}
          key="logout"
        />
      </Box>
    </Box>
  );
}
