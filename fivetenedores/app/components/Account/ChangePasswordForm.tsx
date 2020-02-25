import React, {useState} from 'react';
import {StyleSheet, View, Text} from 'react-native';
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
    setError({});
    if(!password || !newPassword || !newPasswordRepeat){
      let objError={};
      !password && (objError.password = "Cant be empty");
      !newPassword &&(objError.newPassword ="Cant be empty");
      !newPasswordRepeat &&(objError.newPasswordRepeat =" Cant be empty");
      setError(objError)
    } else {
      if(newPassword !== newPasswordRepeat) {
        setError({
          newPassword: "New passwords not match",
          newPasswordRepeat: "New passwords not match",
        });
      } else {
        setIsLoading(true);
        reauthenticate(password).then(() => {
          firebase
            .auth()
            .currentUser
            .updatePassword(newPassword)
            .then(() => {
              setIsLoading(false);
              toastRef.current.show("Password Updated successfully");
              setIsVisibleModal(false);
              firebase.auth().signOut();
            }).catch(() =>{
              setError({general: "Error trying to update password"});
              setIsLoading(false);
          });
        }).catch(() => {
          setError({password: "Incorrect password"});
          setIsLoading(false);
        });
      }
    }
  };

  return(
    <View style={styles.view}>
      <Input
        placeholder="Password"
        containerStyle={styles.input}
        password={true}
        secureTextEntry={hidePassword}
        onChange={e => setPassword(e.nativeEvent.text)}
        rightIcon={{
          type: "material-community",
          name: hidePassword ? "eye-outline": "eye-off-outline",
          color: "#c2c2c2",
          onPress: () => setHidePassword(!hidePassword),
        }}
        errorMessage={error.password}
      />
      <Input
        placeholder="New Password"
        containerStyle={styles.input}
        password={true}
        secureTextEntry={hideNewPassword}
        onChange={e => setNewPassword(e.nativeEvent.text)}
        rightIcon={{
          type: "material-community",
          name: hideNewPassword ? "eye-outline" : "eye-off-outline",
          color: "#c2c2c2",
          onPress: () => setHideNewPassword(!hideNewPassword)
        }}
        errorMessage={error.newPassword}
      />
      <Input
        placeholder="Repeat new Password"
        containerStyle={styles.input}
        password={true}
        secureTextEntry={hideNewPasswordRepeat}
        onChange={e => setNewPasswordRepeat(e.nativeEvent.text)}
        rightIcon={{
          type: "material-community",
          name: hideNewPasswordRepeat ? "eye-outline" : "eye-off-outline",
          color: "#c2c2c2",
          onPress: () => setHideNewPasswordRepeat(!hideNewPasswordRepeat)
        }}
        errorMessage={error.newPasswordRepeat}
        />
      <Button
        title="Change password"
        containerStyle={styles.buttonContainer}
        buttonStyle={styles.button}
        onPress={updatePassword}
        loading={isLoading}
      />

      <Text>{error.general}</Text>

    </View>
  );
};

export default  ChangePasswordForm
