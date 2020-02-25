import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {Input, Button} from 'react-native-elements';
import * as firebase from 'firebase';
import reauthenticate from '../../utils/Api';


const styles = StyleSheet.create({
  view: {
    alignItems: 'center',
    paddingTop: 10,
    paddingBottom: 10,
  },
  input: {
    marginBottom: 10,
    marginTop: 10,
  },
  buttonContainer: {
    marginTop: 20,
    width: "95%",
  },
  button: {
    backgroundColor: "#00a680"
  }

});

const ChangeEmailForm = (props) => {
  const {email, setIsVisibleModal, setReloadData, toastRef} = props;
  const [newEmail, setNewEmail] = useState("");
  const [error, setError] = useState({});
  const [hidePassword, setHidePassword] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [password, setPassword] = useState("");

  const updateEmail = () => {
    setError({});
    if(!newEmail || email == newEmail) {
      setError({email: "Email cannot be the same or empty"})
    } else {
      setIsLoading(true);
      reauthenticate(password).then(() => {
        firebase
          .auth()
          .currentUser.updateEmail(newEmail).then(() =>{
            setIsLoading(false);
            setReloadData(true);
            toastRef.current.show("Email updated");
            setIsVisibleModal(false);
        }).catch((e) => {
          setError({email: `Error updating email ${e}`});
          setIsLoading(false);
        })

      }).catch(() => {
        setError({password: "Password incorrect"});
        setIsLoading(false);
      });
    }
  };

  return(
    <View style={styles.view}>
      <Input
        placeholder="Email"
        containerStyle={styles.input}
        defaultValue={email && email}
        onChange={ e => setNewEmail(e.nativeEvent.text)}
        rightIcon={{
          type: "material-community",
          name: "email",
          color: "#c2c2c2"
        }}
        errorMessage={error.email}
      />
      <Input
        placeholder="Password"
        containerStyle={styles.input}
        secureTextEntry={hidePassword}
        onChange={ e => setPassword(e.nativeEvent.text)}
        rightIcon={{
          type: "material-community",
          name: hidePassword ? "eye-outline" : "eye-off-outline",
          color: "#c2c2c2",
          onPress: () => setHidePassword(!hidePassword)
        }}
        errorMessage={error.password}
      />
      <Button
        title="Update Email"
        containerStyle={styles.buttonContainer}
        buttonStyle={styles.button}
        onPress={updateEmail}
        loading={isLoading}
      />
    </View>
  );
};

export default  ChangeEmailForm;

