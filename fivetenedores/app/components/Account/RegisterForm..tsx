import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Input, Icon, Button} from 'react-native-elements';

const RegisterForm = () => {
  const [hidePassword, setHidePassword] = useState(true);
  const [hideRepeatPassword, setRepeatHidePassword] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const register = () => {
    console.log('User registered');
  };
  return (
    <View style={styles.formContainer}>
      <Input
        placeholder="Email"
        containerStyle={styles.inputForm}
        onChange={() => console.log('Updated Email')}
        rightIcon={
          <Icon
            name="email"
            type="material-community"
            iconStyle={styles.iconRight}
          />
        }
      />
      <Input
        placeholder="Password"
        secureTextEntry={hidePassword}
        containerStyle={styles.inputForm}
        onChange={() => console.log('Updated password')}
        rightIcon={
          <Icon
            name={hidePassword ? 'eye-outline' : 'eye-off-outline'}
            type="material-community"
            iconStyle={styles.iconRight}
            onPress={() => setHidePassword(!hidePassword)}
          />
        }
      />
      <Input
        placeholder="Repeat Password"
        secureTextEntry={hideRepeatPassword}
        containerStyle={styles.inputForm}
        onChange={() => console.log('Updated repeat password')}
        rightIcon={
          <Icon
            name={hideRepeatPassword ? 'eye-outline' : 'eye-off-outline'}
            type="material-community"
            iconStyle={styles.iconRight}
            onPress={() => setRepeatHidePassword(!hideRepeatPassword)}
          />
        }
      />
      <Button
        title="Join in"
        containerStyle={styles.buttonContainerRegister}
        buttonStyle={styles.buttonRegister}
        onPress={register}
      />
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
  buttonContainerRegister: {
    marginTop: 20,
    width: '95%',
  },
  buttonRegister: {
    backgroundColor: '#00a680',
  },
});

export default RegisterForm;
