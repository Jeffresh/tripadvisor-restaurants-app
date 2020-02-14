import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import MyAccount from '../screens/MyAccount';

const MyAccountScreenStacks = createStackNavigator();

const MyAccountStacks = () => {
  return (
    <MyAccountScreenStacks.Navigator>
      <MyAccountScreenStacks.Screen
        name="Account"
        component={MyAccount}
        options={{
          title: 'Account',
        }}
      />
    </MyAccountScreenStacks.Navigator>
  );
};

export default MyAccountStacks;
