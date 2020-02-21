import React, {useState} from 'react';
import {SocialIcon} from 'react-native-elements';
import {FacebookApi} from '../../utils/Social';
import * as FaceBook from 'expo-facebook';
import * as firebase from 'firebase';
import Loading from '../Loading';

const LoginFacebook = props => {
  const {toastRef, navigation} = props;
  const [isLoading, setIsLoading] = useState(false);
  const login = async () => {
    setIsLoading(true);
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
          navigation.navigate('Account');
        } catch {
          toastRef.current.show('Error: cannot connect with Facebook');
        }
      } else if (type === 'cancel') {
        toastRef.current.show('Sign in canceled');
      }
    } catch {
      toastRef.current.show('Error: unknown try later');
    }
    setIsLoading(false);
  };

  return (
    <>
      <SocialIcon
        title="Sign in with Facebook"
        button
        type="facebook"
        onPress={login}
      />
      <Loading isVisible={isLoading} text="Loading..." />
    </>
  );
};
export default LoginFacebook;
