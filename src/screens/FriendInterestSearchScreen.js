import {Box} from 'native-base';
import React, {useState, useEffect, useContext} from 'react';
import {interestByInterestName} from '../graphql/queries';
import {API, graphqlOperation} from 'aws-amplify';
import SearchQueryContext from '../context/SearchQueryContext';
import FriendInterestSearchCard from '../../components/FriendInterestSearchCard';
import EmptyState from '../../components/EmptyState';

export default function FriendInterestSearchScreen() {
  const {searchQuery, setSearchQuery} = useContext(SearchQueryContext);
  const [interestInfo, setInterestInfo] = useState([]);

  async function searchbyInterest(query) {
    const interestData = await API.graphql(
      graphqlOperation(interestByInterestName, {interestName: query}),
    );
    setInterestInfo(
      interestData?.data?.interestByInterestName?.items[0]?.users?.items,
    );
  }

  useEffect(() => {
    if (searchQuery) {
      searchbyInterest(searchQuery);
    }
  }, [searchQuery]);

  return (
    <Box bg="#fff" flex={1}>
      {interestInfo && interestInfo.length > 0 ? (
        interestInfo.map(user => (
          <FriendInterestSearchCard userData={user} key={user.user.id} />
        ))
      ) : (
        <EmptyState query={searchQuery} />
      )}
    </Box>
  );
}
