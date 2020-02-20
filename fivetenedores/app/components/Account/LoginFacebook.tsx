import React from 'react';
import {SocialIcon} from 'react-native-elements';

const LoginFacebook = () => {
  const login = () => {
    console.log('Signing in with Facebook');
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
