import React, {useState} from 'react';
import {SocialIcon} from 'react-native-elements';
import {FacebookApi} from '../../utils/Social';
import * as FaceBook from 'expo-facebook';
import * as firebase from 'firebase';

const LoginFacebook = () => {
  const login = async () => {
    try {
      await FaceBook.initializeAsync(
        FacebookApi.application_id,
        FacebookApi.app_name,
      );
      const {type, token} = await FaceBook.logInWithReadPermissionsAsync({
        permissions: FacebookApi.permissions,
      });

      if (type === 'success') {
        const credentials = firebase.auth.FacebookAuthProvider.credential(
          token,
        );
        try {
          await firebase.auth().signInWithCredential(credentials);
          console.log('correct login');
        } catch {
          console.log('Error: cannot connect with Facebook');
        }
      } else if (type === 'cancel') {
        console.log('Sign in canceled');
      }
    } catch {
      console.log('Error: unknown try later');
    }
  };

  return (
    <SocialIcon
      title="Sign in with Facebook"
      button
      type="facebook"
      onPress={login}
    />
  );
};
export default LoginFacebook;
