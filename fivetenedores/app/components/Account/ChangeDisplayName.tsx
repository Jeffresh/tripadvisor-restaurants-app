import React, {useState} from 'react';
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
  const [newDisplayName, setNewDisplayName] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const updateDisplayName = () =>{
    console.log("Name updated")
  };

  return(
    <View style={styles.view}>
      <Input
        placeholder='Name'
        containerStyle={styles.input}
        defaultValue={displayName && displayName}
        onChange={ e => setNewDisplayName(e.nativeEvent.text)}
        rightIcon={{
          type: "material-community",
          name: "account-circle-outline",
          color: "#c2c2c2",
        }}
        errorMessage={error}
      />
      <Button
        title="Change name"
        containerStyle={styles.buttonContainer}
        buttonStyle={styles.button}
        onPress={updateDisplayName}
        loading={isLoading}
      />

    </View>

  );
};

export default  ChangeDisplayNameForm;
