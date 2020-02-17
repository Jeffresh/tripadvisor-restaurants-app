import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import MyAccount from '../screens/Account/MyAccount';

const MyAccountScreenStacks = createStackNavigator();

const MyAccountStacks = () => {
  return (
    <MyAccountScreenStacks.Navigator>
      <MyAccountScreenStacks.Screen
        name="account"
        component={MyAccount}
        options={{
          title: 'My Account',
        }}
      />
    </MyAccountScreenStacks.Navigator>
  );
};

export default MyAccountStacks;
