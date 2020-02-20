import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Input, Icon, Button} from 'react-native-elements';

const LoginForm = () => {
  return (
    <View style={styles.formContainer}>
      <Input placeholder="Email" />
      <Input placeholder="Password" />
      <button title="Sign in" />
    </View>
  );
};

const styles = StyleSheet.create({
  formContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
  },
});
export default LoginForm;
