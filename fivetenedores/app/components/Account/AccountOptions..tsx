import React, {useState} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {ListItem} from 'react-native-elements';
import Modal from '../Modal'
import ChangeDisplayNameForm from './ChangeDisplayNameForm';
import ChangeEmailForm from './ChangeEmailForm';
import ChangePasswordForm from './ChangePasswordForm';
import InfoUser from './InfoUser';

const styles = StyleSheet.create({
  menuItem: {
    borderBottomWidth: 1,
    borderBottomColor: "#e3e3e3",
  }
});

const AccountOptions = (props) =>{
  const {userInfo, setReloadData, toastRef} = props;
  const [isVisibleModal, setIsVisibleModal] = useState(false);
  const [renderComponent, setRenderComponent] = useState(null);

  const menuOptions = [
    {
      title: "Change Name/Surname",
      iconType: "material-community",
      iconNameLeft: "account-circle",
      iconColorLeft: "#ccc",
      iconNameRight: "chevron-right",
      iconColorRight: "#ccc",
      onPress: () => selectedComponent("displayName")
    },
    {
      title: "Change Email",
      iconType: "material-community",
      iconNameLeft: "email",
      iconColorLeft: "#ccc",
      iconNameRight: "chevron-right",
      iconColorRight: "#ccc",
      onPress: () => selectedComponent("email")
    },
    {
      title: "Change Password",
      iconType: "material-community",
      iconNameLeft: "lock-reset",
      iconColorLeft: "#ccc",
      iconNameRight: "chevron-right",
      iconColorRight: "#ccc",
      onPress: () => selectedComponent("password")
    },
  ];

  const selectedComponent = (key) => {
    switch (key) {
      case "displayName":
        setRenderComponent(
          <ChangeDisplayNameForm
          displayName={userInfo.displayName}
          setIsVisibleModal={setIsVisibleModal}
          setReloadData={setReloadData}
          toastRef={toastRef}
          />
          );
        setIsVisibleModal(true);
        break;
      case "email":
        setRenderComponent(
          <ChangeEmailForm
            email={userInfo.email}
            setIsVisibleModa={setIsVisibleModal}
            setReloadData={setReloadData}
            toasRef={toastRef}
            />
        );
        setIsVisibleModal(true);
        break;
      case "password":
        setRenderComponent(ChangePasswordForm);
        setIsVisibleModal(true);
        break;
      default:
        break;
    }
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

      {renderComponent && (
        <Modal isVisible={isVisibleModal} setIsVisible={setIsVisibleModal}>
          {renderComponent}
        </ Modal>
      )}
    </View>
  );
};


export default AccountOptions;
