import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {Input, Icon, Button} from 'react-native-elements';
import {validateEmail} from '../../utils/Validation';
import * as firebase from 'firebase';
import Loading from '../Loading';

const LoginForm = (props: any) => {
  const {toastRef} = props;
  const [hidePassword, setHidePassword] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isVisibleLoading, setIsVisibleLoading ] = useState(false);
  const login = async () => {
    setIsVisibleLoading(true);
    if (!email || !password) {
      toastRef.current.show('Error: fields must be filled in');
    } else {
      if (!validateEmail(email)) {
        toastRef.current.show('Error: invalid email format  ');
      } else {
        try {
          const auth = await firebase.auth();
          await auth.signInWithEmailAndPassword(email, password);
          toastRef.current.show('User logged');
        } catch {
          toastRef.current.show('Error: cannot sign in');
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
