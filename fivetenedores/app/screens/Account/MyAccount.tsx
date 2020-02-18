import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import {firebaseApp} from '../../utils/FireBase';
import Loading from '../../components/Loading';
import UserLogged from './UserLogged';
import UserGuest from './UserGuest';

export default function MyAccount() {
  const [login, setLogin] = useState(null);

  useEffect(() => {
    firebaseApp.auth().onAuthStateChanged(user => {
      // @ts-ignore
      !user ? setLogin(false) : setLogin(true);
    });
  });

  if (login === null) {
    return <Loading isVisible={true} text={'Loading...'} />;
  }
  return login ? <UserLogged /> : <UserGuest />;
}
