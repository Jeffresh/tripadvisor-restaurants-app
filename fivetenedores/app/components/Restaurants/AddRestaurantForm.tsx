import React, {useState, useEffect} from 'react';
import {StyleSheet, View, ScrollView, Alert, Dimensions} from 'react-native';
import {Icon, Avatar, Image, Input, Button} from 'react-native-elements';
import * as Permissions from 'expo-permissions';
import * as ImagePicker from 'expo-image-picker';

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
        imagesSelect={imagesSelected}
        setImagesSelected={setImagesSelected}
        toastRef={toastRef}
      />
    </ScrollView>
  )
};

const UploadImage = (props) => {
  const {imagesSelected, setImagesSelected, toastRef} = props;
  const imageSelect = async  () => {
    const resultPermission = await Permissions.askAsync(Permissions.CAMERA_ROLL);
    const resultPermissionCamera = resultPermission.permissions.cameraRoll.status;
    if (resultPermissionCamera === "denied") {
      toastRef.current.show("You must accept the gallery permissions", 1000)
    }
    else {
      const result = await ImagePicker.launchImageLibraryAsync({
        allowsEditing: true,
        aspect: [4, 3]
      });
      if(result.cancelled) {
        toastRef.current.show(
          "You closed the gallery without select a image"
        );
      }
      else {
        setImagesSelected([...imagesSelected, result.uri]);
      }
    }
  };
  return (
    <View style={styles.viewImages}>
      <Icon
        name="camera"
        type="material-community"
        color="#7a7a7a"
        containerStyle={styles.containerIcon}
        onPress={imageSelect}
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
