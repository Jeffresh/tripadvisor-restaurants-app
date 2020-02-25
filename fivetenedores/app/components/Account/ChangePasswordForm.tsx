import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {Input, Button} from 'react-native-elements';
import * as firebase from 'firebase';
import reauthenticate from '../../utils/Api';

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

const ChangePasswordForm = (props) => {
  const {setIsVisibleModal, toastRef} = props;
  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [newPasswordRepeat, setNewPasswordRepeat] = useState("");
  const [error, setError] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [hidePassword, setHidePassword] = useState(true);
  const [hideNewPassword, setHideNewPassword] = useState(true);
  const [hideNewPasswordRepeat, setHideNewPasswordRepeat] = useState(true);

  const updatePassword = () => {
    console.log("password updated");
  };

  return(
    <View style={styles.view}>
      <Input
        placeholder='Password'
        containerStyle={styles.input}
        // defaultValue={}
        // onChange={}
        rightIcon={{
          type: "material-community",
          name: "account-circle-outline",
          color: "#c2c2c2",
        }}
        // errorMessage={}
      />
      <Button
        title="Change password"
        containerStyle={styles.buttonContainer}
        />

    </View>
  );
};

export default  ChangePasswordForm
