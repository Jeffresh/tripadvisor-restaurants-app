import React from 'react';
import {StyleSheet, View, ScrollView, Text, Image} from 'react-native';
import {Divider} from 'react-native-elements';
import {useNavigation} from '@react-navigation/native';
import LoginForm from '../../components/Account/LoginForm';

const Login = () => {
  const navigation = useNavigation();

  return (
    <ScrollView>
      <Image
        source={require('../../../assets/5forks-logo.png')}
        style={styles.logo}
        resizeMode="contain"
      />
      <View style={styles.viewContainer}>
        <LoginForm />
        <CreateAccount navigation={navigation} />
      </View>
      <Divider style={styles.divider} />
      <View style={styles.viewContainer}>
        <Text>Login Facebook... </Text>
      </View>
    </ScrollView>
  );
};

const CreateAccount = (props: {navigation: any}) => {
  const {navigation} = props;
  return (
    <Text style={styles.textRegister}>
      No account? create one!{' '}
      <Text
        style={styles.buttonRegister}
        onPress={() => navigation.navigate('Register')}>
        Sing up
      </Text>
    </Text>
  );
};

const styles = StyleSheet.create({
  logo: {
    width: '100%',
    height: 150,
    marginTop: 20,
  },
  viewContainer: {
    marginRight: 40,
    marginLeft: 40,
  },
  textRegister: {
    marginTop: 15,
    marginLeft: 10,
    marginRight: 10,
  },
  buttonRegister: {
    color: '#00a680',
    fontWeight: 'bold',
  },
  divider: {
    backgroundColor: '#00a680',
    margin: 40,
  },
});

export default Login;
