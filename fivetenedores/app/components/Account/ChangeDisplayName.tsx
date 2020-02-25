import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Button, Input} from 'react-native-elements';

const styles = StyleSheet.create({
  view:{
    alignItems: "center",
    paddingTop: 10,
    paddingBottom: 10,
  },
  input: {
    marginBottom: 10
  },
  buttonContainer: {
    marginTop: 20,
  },
  button: {
    backgroundColor: "#00a680"
  }
});

const ChangeDisplayNameForm = (props) => {
  const {displayName, setIsVisibleModal, setReloadData, toastRef} = props;
  console.log(props);

  const updateDisplayName = () =>{
    console.log("Name updated")
  };

  return(
    <View style={styles.view}>
      <Input
        placeholder='Name'
        containerStyle={styles.input}
        defaultValue={displayName && displayName}
        // onChange={}
        rightIcon={{
          type: "material-community",
          name: "account-circle-outline",
          color: "#c2c2c2",
        }}
        // errorMessage={}
      />
      <Button
        title="Change name"
        containerStyle={styles.buttonContainer}
        buttonStyle={styles.button}
        onPress={updateDisplayName}
        // loading={}
      />

    </View>

  );
};

export default  ChangeDisplayNameForm;
