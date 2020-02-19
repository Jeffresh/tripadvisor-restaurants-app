import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

const Register = () => {
  return (
    <KeyboardAwareScrollView>
      <Image
        source={require('../../../assets/5forks-logo.png')}
        style={styles.logo}
        resizeMode="contain"
      />
      <View style={styles.viewForm}>
        <Text> Form Register</Text>
      </View>
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
  }

});

export default Register;
