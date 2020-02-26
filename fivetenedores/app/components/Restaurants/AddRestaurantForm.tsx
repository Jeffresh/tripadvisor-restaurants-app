import React, {useState, useEffect} from 'react';
import {StyleSheet, View, ScrollView, Alert, Dimensions} from 'react-native';
import {Icon, Avatar, Image, Input, Button} from 'react-native-elements';

const styles = StyleSheet.create({
  viewImages: {
    flexDirection: 'row',
    marginLeft: 20,
    marginRight: 20,
    marginTop: 30,
  },

  containerIcon: {
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
    height: 70,
    width: 70,
    backgroundColor: "#e3e3e3",
  },

  miniatureStyle: {
    width: 70,
    height: 70,
    marginRight: 10,
  },

});

const AddRestaurantsForm = (props) => {
  const {toastRef, setIsLoading, Navigation} = props;
  const [imagesSelected, setImagesSelected] = useState([]);
  return (
    <ScrollView>
      <UploadImage
        imageSelect={imagesSelected}
        setImagesSelected={setImagesSelected}
      />
    </ScrollView>
  )
};

const UploadImage = (props) => {
  const {imageSelected, setImageSelected} = props;
  return (
    <View style={styles.viewImages}>
      <Icon
        name="camera"
        type="material-community"
        color="#7a7a7a"
        containerStyle={styles.containerIcon}
        onPress={() => console.log("Uploading image ...")}
      />
      <Avatar
        onPress={() => console.log("Deleting image")}
        style ={styles.miniatureStyle}
        // source={{url miniature restaurant}}
      />
    </View>
  )
};

export default AddRestaurantsForm;
