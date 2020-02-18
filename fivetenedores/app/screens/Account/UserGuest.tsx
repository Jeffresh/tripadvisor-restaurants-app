import React from 'react';
import {StyleSheet, View, ScrollView, Text, Image} from 'react-native';
import {Button} from 'react-native-elements';
import {useNavigation} from '@react-navigation/native';

const UserGuest = () => {
  const navigation = useNavigation();
  console.log(navigation);
  return (
    <ScrollView style={styles.viewBody} centerContent={true}>
      <Image
        source={require('../../../assets/user-guest.jpg')}
        style={styles.image}
        resizeMode="contain"
      />
      <Text style={styles.title}>See your profile</Text>
      <Text style={styles.description}>
        How do you describe your favourite restaurant? Search and see the best
        restaurants. Vote, like and comment which one did you like the most.
      </Text>
      <View style={styles.viewButton}>
        <Button
          buttonStyle={styles.buttonStyle}
          containerStyle={styles.buttonContainer}
          title="Your profile"
          onPress={() => navigation.navigate('Login')}
        />
      </View>
    </ScrollView>
  );
};

export default UserGuest;

const styles = StyleSheet.create({
  viewBody: {
    marginLeft: 30,
    marginRight: 30,
  },
  image: {
    height: 300,
    width: '100%',
    marginBottom: 40,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 19,
    marginBottom: 10,
    textAlign: 'center',
  },
  description: {
    textAlign: 'center',
    marginBottom: 20,
  },
  viewButton: {
    flex: 1,
    alignItems: 'center',
  },
  buttonStyle: {
    backgroundColor: '#00a680',
  },
  buttonContainer: {
    width: '70%',
  },
});
