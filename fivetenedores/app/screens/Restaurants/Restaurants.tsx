import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import AddButton from '../../components/AddButton'

const styles = StyleSheet.create({
  viewBody:{
    flex: 1,
  }
});

const Restaurants = (props) => {
  return (
    <View style={styles.viewBody}>
      <Text>Restaurants</Text>
      <AddButton text={"Added restaurants"} />
    </View>
  );
};

export default Restaurants;
