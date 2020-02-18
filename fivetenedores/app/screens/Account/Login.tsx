import React from 'react';
import {StyleSheet, View, ScrollView, Text, Image} from 'react-native';
import {Divider} from 'react-native-elements';
import {useNavigation} from '@react-navigation/native';

const Login = () => {
  return (
    <Image
      source={require('../../../assets/5forks-logo.png')}
      style={styles.logo}
      resizeMode="contain"
    />
  );
};

const styles = StyleSheet.create({
  logo: {
    width: '100%',
    height: 150,
    marginTop: 20,
  },
});

export default Login;
