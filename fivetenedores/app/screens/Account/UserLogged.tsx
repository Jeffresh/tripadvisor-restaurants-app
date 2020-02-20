import React from 'react';
import {View, Text} from 'react-native';
import {Button} from 'react-native-elements';
import * as firebase from 'firebase';

const UserLogged = () => {
  return (
    <View>
      <Text>UserLogged...</Text>
      <Button title="Close session" onPress={() => firebase.auth().signOut()} />
    </View>
  );
};
export default UserLogged;
