import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {Input, Button} from 'react-native-elements';
import * as firebase from 'firebase';


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

const ChangeEmailForm = (props) =>{
  const {email, setIsVisible, setReloadData, toastRef} = props;
  const [newEmail, setNewEmail] = useState("");
  const [error, setError] = useState({});
  const [hidePassword, setHidePassword] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [password, setPassword] = useState("");

  const updateEmail = () => {
    console.log("Updated email")
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

