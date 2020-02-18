import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import MyAccount from '../screens/Account/MyAccount';
import Login from '../screens/Account/Login';

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
      <MyAccountScreenStacks.Screen
        name="Login"
        component={Login}
        options={{
          title: 'Login',
        }}
      />
    </MyAccountScreenStacks.Navigator>
  );
};

export default MyAccountStacks;
