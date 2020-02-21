import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import {Button} from 'react-native-elements';
import * as firebase from 'firebase';
import InfoUser from '../../components/Account/InfoUser';

const UserLogged = () => {
  const [userInfo, setUserInfo] = useState({});
  useEffect(() => {
    (async () => {
      const user = await firebase.auth().currentUser;
      setUserInfo(user.providerData[0]);
    })();
  }, []);

  return (
    <View>
      <InfoUser userInfo={userInfo} />
      <Button title="Close session" onPress={() => firebase.auth().signOut()} />
    </View>
  );
};
export default UserLogged;
