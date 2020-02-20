import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {Input, Icon, Button} from 'react-native-elements';
import {validateEmail} from '../../utils/Validation';
import * as firebase from 'firebase';

const RegisterForm = () => {
  const [hidePassword, setHidePassword] = useState(true);
  const [hideRepeatPassword, setRepeatHidePassword] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');

  const register = async () => {
    if (!email || !password || !repeatPassword) {
      console.log('Error: You have a Empty field');
    } else {
      if (!validateEmail(email)) {
        console.log('Error: Invalid email');
      } else {
        if (password !== repeatPassword) {
          console.log('Error: Passwords do not match');
        } else {
          try {
            const auth = await firebase.auth();
            await auth.createUserWithEmailAndPassword(email, password);
            console.log('user created correctly');
          } catch {
            console.log('Error: cannot create the user');
          }
        }
      }
    }
  };
  return (
    <View style={styles.formContainer}>
      <Input
        placeholder="Email"
        containerStyle={styles.inputForm}
        onChange={e => setEmail(e.nativeEvent.text)}
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
        onChange={e => setPassword(e.nativeEvent.text)}
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
        onChange={e => setRepeatPassword(e.nativeEvent.text)}
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
