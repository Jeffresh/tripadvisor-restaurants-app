import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import MyAccount from '../screens/Account/MyAccount';
import LoginScreen from '../screens/Account/Login';
import RegisterScreen from '../screens/Account/Register';

const MyAccountScreenStacks = createStackNavigator();

const MyAccountStacks = () => {
  return (
    <MyAccountScreenStacks.Navigator>
      <MyAccountScreenStacks.Screen
        name="Account"
        component={MyAccount}
        options={{
          title: 'My Account',
        }}
      />
      <MyAccountScreenStacks.Screen
        name="Login"
        component={LoginScreen}
        options={{
          title: 'Login',
        }}
      />
      <MyAccountScreenStacks.Screen
        name="Register"
        component={RegisterScreen}
        options={{
          title: 'Register',
        }}
      />
    </MyAccountScreenStacks.Navigator>
  );
};

export default MyAccountStacks;
