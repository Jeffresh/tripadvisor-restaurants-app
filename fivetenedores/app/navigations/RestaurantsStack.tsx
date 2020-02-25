import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Restaurants from '../screens/Restaurants/Restaurants';
import AddRestaurantsScreen from '../screens/Restaurants/AddRestaurants';

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
      <RestaurantsScreenStacks.Screen
        name="AddRestaurantsScreen"
        component={AddRestaurantsScreen}
        options={{
          title: 'New Restaurant'
        }}

      />
    </RestaurantsScreenStacks.Navigator>
  );
};

export default RestaurantsStack;
