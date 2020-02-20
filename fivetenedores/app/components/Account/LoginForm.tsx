import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {Input, Icon, Button} from 'react-native-elements';

const LoginForm = () => {
  const [hidePassword, setHidePassword] = useState(true);
  return (
    <View style={styles.formContainer}>
      <Input
        placeholder="Email"
        containerStyle={styles.inputForm}
        onChange={() => console.log('updated email')}
        rightIcon={
          <Icon
            type="material-community"
            name="email"
            iconStyle={styles.iconRight}
          />
        }
      />
      <Input
        placeholder="Password"
        containerStyle={styles.inputForm}
        secureTextEntry={hidePassword}
        onChange={() => console.log('updated password')}
        rightIcon={
          <Icon
            name={hidePassword ? 'eye-outline' : 'eye-off-outline'}
            type="material-community"
            iconStyle={styles.iconRight}
            onPress={() => setHidePassword(!hidePassword)}
          />
        }
      />
      <Button
        title="Sign in"
        containerStyle={styles.buttonContainerLogin}
        buttonStyle={styles.buttonLogin}
        onPress={login}
      />
      <Loading isVisible={isVisibleLoading} text="Signing in" />
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
  inputForm: {
    width: '100%',
    marginTop: 20,
  },
  iconRight: {
    color: '#c1c1c1',
  },
  buttonContainerLogin: {
    marginTop: 20,
    width: '95%',
  },
  buttonLogin: {
    backgroundColor: '#00a680',
  },
});
export default LoginForm;
