import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {Avatar} from 'react-native-elements';
import * as firebase from 'firebase';
import * as Permissions from 'expo-permissions';
import * as ImagePicker from 'expo-image-picker';


const InfoUser = (props) =>{
  const {
    userInfo, userInfo:{ uid, displayName, email, photoURL},
    setReloadData,
    toastRef,
    setIsLoading,
    setTextLoading,
  } = props;
  const changeAvatar = async () => {
    const resultPermissions = await Permissions.askAsync(Permissions.CAMERA_ROLL);
    const resultPermissionCamera = resultPermissions.permissions.cameraRoll.status;

    if(resultPermissionCamera === "denied"){
      toastRef.current.show('Its necessary accept the permissions');

    } else{
      const result = await ImagePicker.launchImageLibraryAsync({
        allowsEditing: true,
        aspect: [4,3]
      });

      if(result.cancelled) {
        toastRef.current.show('Gallery closed without chose any image')
      } else {
        await uploadImage(result.uri, uid);
        await updatePhotoUrl(uid);
      }
    }
  };

  const uploadImage = async (uri, nameImage) => {
    setTextLoading("Updating Avatar");
    setIsLoading(true);
    const response = await fetch(uri);
    const blob = await response.blob();
    const ref = firebase.storage().ref().child(`avatar/${nameImage}`);
    return ref.put(blob);
  };

  const updatePhotoUrl = uid => {
    firebase
      .storage()
      .ref(`avatar/${uid}`)
      .getDownloadURL()
      .then(async result => {
        const update = {
          photoURL: result
        };
        await firebase.auth().currentUser.updateProfile(update);
        setReloadData(true);
        setIsLoading(false);
      }).catch((e) => {
      toastRef.currrent.show('Error: 500 avatar');
    });
  };
  return(
    <View style={styles.viewUserInfo}>
      <Avatar
        rounded
        size="large"
        showEditButton
        onEditPress={changeAvatar}
        containerStyle={styles.viewUserInfoAvatar}
        source={{
          uri: photoURL
            ? photoURL
            : "https://api.adorable.io/avatars/266/abott@adorable.png"
        }}
      />
      <View>
        <Text style={styles.displayName}>
          {displayName ? displayName : "Anonymous"}
        </Text>
        <Text>{email ? email : "Social Login"}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  viewUserInfo: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    backgroundColor: "#f2f2f2",
    paddingTop: 30,
    paddingBottom: 30,
  },
  viewUserInfoAvatar: {
    marginRight: 20,
  },
  displayName: {
    fontWeight: "bold",
  }

});

export default InfoUser;

