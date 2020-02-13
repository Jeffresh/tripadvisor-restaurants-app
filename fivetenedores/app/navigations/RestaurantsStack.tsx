import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Restaurants from '../screens/Restaurants';

const RestaurantsScreenStacks = createStackNavigator();

const RestaurantsStack = () => {
  return (
    <RestaurantsScreenStacks.Navigator>
      <RestaurantsScreenStacks.Screen
        name="Restaurants"
        component={Restaurants}
        options={{
          title: 'Restaurants',
        }}
      />
    </RestaurantsScreenStacks.Navigator>
  );
};

export default RestaurantsStack;
