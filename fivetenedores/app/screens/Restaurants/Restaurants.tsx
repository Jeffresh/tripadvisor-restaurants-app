import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import AddButton from '../../components/AddButton'
import * as firebase from 'firebase';

const styles = StyleSheet.create({
  viewBody:{
    flex: 1,
  }
});

const Restaurants = (props) => {
  const{navigation} = props;
  const [user, setUser] = useState(null);
  useEffect(() => {
    firebase.auth().onAuthStateChanged(userInfo =>{
      setUser(userInfo);
    })
  });
  return (
    <View style={styles.viewBody}>
      <Text>Restaurants</Text>
      {user && <AddButton navigation={navigation}/>
      }
    </View>
  );
};

export default Restaurants;
