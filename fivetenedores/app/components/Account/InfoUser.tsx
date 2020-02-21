import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {Avatar} from 'react-native-elements';

const InfoUser = props => {
  const {
    userInfo: {uid, displayName, email, photoURL},
  } = props;
  const changeAvatar = () => {
    console.log('updating avatar');
  };
  return (
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
            : 'https://api.adorable.io/avatars/266/abott@adorable.png',
        }}
      />
      <View>
        <Text style={styles.displayName}>
          {displayName ? displayName : 'Anonymous'}
        </Text>
        <Text>{email ? email : 'Social Login'}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  viewUserInfo: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    backgroundColor: '#f2f2f2',
    paddingTop: 30,
    paddingBottom: 30,
  },
  viewUserInfoAvatar: {
    marginRight: 20,
  },
  displayName: {
    fontWeight: 'bold',
  },
});

export default InfoUser;
