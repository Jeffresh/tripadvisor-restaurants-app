import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Input, Icon, Button} from 'react-native-elements';

const RegisterForm = () => {
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
        secureTextEntry={true}
        containerStyle={styles.inputForm}
        onChange={() => console.log('Updated password')}
        rightIcon={
          <Icon
            name="key"
            type="material-community"
            iconStyle={styles.iconRight}
          />
        }
      />
      <Input
        placeholder="Repeat Password"
        secureTextEntry={true}
        containerStyle={styles.inputForm}
        onChange={() => console.log('Updated repeat password')}
        rightIcon={
          <Icon
            name="key"
            type="material-community"
            iconStyle={styles.iconRight}
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
