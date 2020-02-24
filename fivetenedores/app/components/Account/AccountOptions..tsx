import React, {useState} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {ListItem} from 'react-native-elements';
import Modal from '../Modal';

const styles = StyleSheet.create({
  menuItem: {
    borderBottomWidth: 1,
    borderBottomColor: "#e3e3e3",
  }
});

const AccountOptions = () =>{
  const [isVisibleModal, setIsVisibleModal] = useState(false);

  const menuOptions = [
    {
      title: "Change Name/Surname",
      iconType: "material-community",
      iconNameLeft: "account-circle",
      iconColorLeft: "#ccc",
      iconNameRight: "chevron-right",
      iconColorRight: "#ccc",
      onPress: () => selectedComponent()
    },
    {
      title: "Change Email",
      iconType: "material-community",
      iconNameLeft: "email",
      iconColorLeft: "#ccc",
      iconNameRight: "chevron-right",
      iconColorRight: "#ccc",
      onPress: () => console.log("Change Email")
    },
    {
      title: "Change Password",
      iconType: "material-community",
      iconNameLeft: "lock-reset",
      iconColorLeft: "#ccc",
      iconNameRight: "chevron-right",
      iconColorRight: "#ccc",
      onPress: () => console.log("Change Password")
    },
  ];

  const selectedComponent = () => {
    setIsVisibleModal(true)
  };
  return(
    <View>
      {menuOptions.map(
        (menu, index) => (
          <ListItem
            key ={index}
            title={menu.title}
            leftIcon={{
              type: menu.iconType,
              name: menu.iconNameLeft,
              color: menu.iconColorLeft
            }}
            rightIcon={{
              type: menu.iconType,
              name: menu.iconNameRight,
              color: menu.iconColorRight,
            }}
            onPress={menu.onPress}
            containerStyle={styles.menuItem}
          />

        )
      )}
      <Modal isVisible={isVisibleModal} setIsVisible={setIsVisibleModal}>
        <View>
          <Text>
            Im in the modal.
          </Text>
        </View>
      </ Modal>
    </View>
  );
};


export default AccountOptions;
