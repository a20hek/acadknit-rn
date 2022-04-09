import {Input} from 'native-base';
import React from 'react';
import {SearchIcon} from 'native-base';

export default function SearchInput({value, onChangeText, onSubmitEditing}) {
  return (
    <Input
      InputLeftElement={<SearchIcon size="4" color="#7b7b7b" ml="8px" />}
      bg="#f5f5f5"
      type="search"
      my="12px"
      px="8px"
      w="90%"
      h="42px"
      fontSize="16px"
      placeholder="Search for clubs"
      value={value}
      onChangeText={onChangeText}
      returnKeyType="go"
      onSubmitEditing={onSubmitEditing}
    />
  );
}
