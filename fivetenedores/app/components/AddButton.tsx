import ActionButton from 'react-native-action-button';
import React from 'react';

const AddButton = (props) => {
  const {text} = props;
  return (
      <ActionButton
        buttonColor="#00a680"
        onPress={() => console.log(text)}
      />
  );
};
export default AddButton;
