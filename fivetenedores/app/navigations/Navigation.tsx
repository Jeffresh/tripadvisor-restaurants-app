import React from 'react';
import {Icon} from 'react-native-elements';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import RestaurantsStack from './RestaurantsStack';
import TopRestaurants from './TopLIstsStacks';
import SearchStacks from './SearchStacks';

const NavigationStacks = createBottomTabNavigator();

const MainTabs = () => {
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
                name="silverware-fork-knife"
                size={size}
                color={color}
              />
            ),
          }}
        />

        <NavigationStacks.Screen
          name="Top List"
          component={TopRestaurants}
          options={{
            tabBarLabel: 'Ranking',
            tabBarIcon: ({color, size}) => (
              <Icon
                type="material-community"
                name="podium-gold"
                size={size}
                color={color}
              />
            ),
          }}
        />

        <NavigationStacks.Screen
          name="Search"
          component={SearchStacks}
          options={{
            tabBarLabel: 'Search',
            tabBarIcon: ({color, size}) => (
              <Icon
                type="material-community"
                name="cloud-search-outline"
                size={size}
                color={color}
              />
            ),
          }}
        />
      </NavigationStacks.Navigator>
    </NavigationContainer>
  );
};

export default MainTabs;
