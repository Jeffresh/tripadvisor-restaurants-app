import ActionButton from 'react-native-action-button';
import React from 'react';

const AddButton = (props) => {
  const {navigation} = props;
  return (
      <ActionButton
        buttonColor="#00a680"
        onPress={() => navigation.navigate("AddRestaurantsScreen")}
      />
  );
};
export default AddButton;
