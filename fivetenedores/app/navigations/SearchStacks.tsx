import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Search from '../screens/Search';

const SearchScreenStacks = createStackNavigator();

const SearchStacks = () => {
  return (
    <SearchScreenStacks.Navigator>
      <SearchScreenStacks.Screen
        name="Search"
        component={Search}
        options={{
          title: 'Search',
        }}
      />
    </SearchScreenStacks.Navigator>
  );
};

export default SearchStacks;
