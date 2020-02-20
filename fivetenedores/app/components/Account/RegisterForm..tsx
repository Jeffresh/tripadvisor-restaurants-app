import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {Input, Icon, Button} from 'react-native-elements';
import {validateEmail} from '../../utils/Validation';
import * as firebase from 'firebase';
import Loading from '../Loading';

const RegisterForm = (props: {navigationRef: any; toastRef: any}) => {
  const {toastRef, navigationRef} = props;
  const [hidePassword, setHidePassword] = useState(true);
  const [hideRepeatPassword, setRepeatHidePassword] = useState(true);
  const [isVisibleLoading, setIsVisibleLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');

  const register = async () => {
    setIsVisibleLoading(true);
    if (!email || !password || !repeatPassword) {
      // console.log(toastRef);
      toastRef.current.show('Error: All fields must be filled in');
    } else {
      if (!validateEmail(email)) {
        toastRef.current.show('Error: Invalid email format');
      } else {
        if (password !== repeatPassword) {
          toastRef.current.show('Error: passwords must match');
        } else {
          try {
            const auth = await firebase.auth();
            await auth.createUserWithEmailAndPassword(email, password);
            toastRef.current.show('User created correctly');
            navigationRef.navigate('Account');
          } catch {
            toastRef.current.show('Error: user could not be crated');
          }
        }
      }
    }
    setIsVisibleLoading(false);
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

      <Loading isVisible={isVisibleLoading} text="Creating account..." />
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
