import React from 'react';
import {Icon} from 'react-native-elements';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import RestaurantsStack from './RestaurantsStack';
import RankingRestaurantsStack from './TopLIstsStacks';
import SearchStacks from './SearchStacks';
import MyAccountStacks from './MyAccountStack';

const NavigationStacks = createBottomTabNavigator();

const MainTabs = () => {
  return (
    <NavigationContainer>
      <NavigationStacks.Navigator
        initialRouteName="My Account"
        tabBarOptions={{
          inactiveBackgroundColor: '#000',
          activeBackgroundColor: '#1f1f1f',
          activeTintColor: '#00a680',
          inactiveTintColor: '#747474',
        }}>
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
          component={RankingRestaurantsStack}
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
        <NavigationStacks.Screen
          name="My Account"
          component={MyAccountStacks}
          options={{
            tabBarLabel: 'Account',
            tabBarIcon: ({color, size}) => (
              <Icon
                type="material-community"
                name="account-box-outline"
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
