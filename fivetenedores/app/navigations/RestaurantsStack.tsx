import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import RestaurantsScreen from '../screens/Restaurants';

const RestaurantsScreenStacks = createStackNavigator();

function RestaurantsStack() {
  return (
    <RestaurantsScreenStacks.Navigator>
      <RestaurantsScreenStacks.Screen
        name="Restaurants"
        component={RestaurantsScreen}
        options={{
          title: 'Restaurants',
        }}
      />
    </RestaurantsScreenStacks.Navigator>
  );
}
export default RestaurantsStack;
