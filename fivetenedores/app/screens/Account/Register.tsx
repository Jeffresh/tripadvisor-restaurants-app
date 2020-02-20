import React, {useRef} from 'react';
import {View, StyleSheet, Image} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import RegisterForm from '../../components/Account/RegisterForm.';
import Toast from 'react-native-easy-toast';
import {useNavigation} from '@react-navigation/native';

const Register = () => {
  const toastRef = useRef();
  const navigationRef = useNavigation();

  return (
    <KeyboardAwareScrollView>
      <Image
        source={require('../../../assets/5forks-logo.png')}
        style={styles.logo}
        resizeMode="contain"
      />
      <View style={styles.viewForm}>
        <RegisterForm toastRef={toastRef} navigationRef={navigationRef} />
      </View>
      <Toast ref={toastRef} position="center" opacity={0.5} />
    </KeyboardAwareScrollView>
  );
};

const styles = StyleSheet.create({
  logo: {
    width: '100%',
    height: 150,
    marginTop: 20,
  },
  viewForm: {
    marginRight: 40,
    marginLeft: 40,
  },
});

export default Register;
