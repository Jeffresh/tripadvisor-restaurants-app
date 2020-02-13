import React from 'react';
import {Icon} from 'react-native-elements';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import RestaurantsStack from './RestaurantsStack';

const NavigationStacks = createBottomTabNavigator();

function MainTabs() {
  return (
    <NavigationContainer>
      <NavigationStacks.Navigator>
        <NavigationStacks.Screen
          name="Restaurants"
          component={RestaurantsStack}
          options={{
            tabBarLabel: 'Restaurants',
            tabBarIcon: ({color, size}) => (
              <Icon
                type="material-community"
                name="linux"
                size={size}
                color={color}
              />
            ),
          }}
        />
      </NavigationStacks.Navigator>
    </NavigationContainer>
  );
}

export default MainTabs;
