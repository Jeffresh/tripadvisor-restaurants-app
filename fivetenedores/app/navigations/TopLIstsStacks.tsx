import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import TopRestaurantsScreen from '../screens/RakingRestaurantsStacks';

const TopListScreenStacks = createStackNavigator();

const RakingRestaurantsStacks = () => {
  return (
    <TopListScreenStacks.Navigator>
      <TopListScreenStacks.Screen
        name="TopRestaurants"
        component={TopRestaurantsScreen}
        options={{
          title: 'Top Restaurants',
        }}
      />
    </TopListScreenStacks.Navigator>
  );
};

export default RakingRestaurantsStacks;
