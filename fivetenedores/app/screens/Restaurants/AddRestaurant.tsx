import React, {useRef, useState} from 'react';
import {View} from 'react-native';
import Toast from 'react-native-easy-toast';
import Loading from '../../components/Loading';
import AddRestaurantsForm from '../../components/Restaurants/AddRestaurantForm';

const AddRestaurant = (props) => {
  const toastRef = useRef();
  const [isLoading, setIsLoading] = useState(false);
  const {navigation} = props;
  return (
    <View>
      <AddRestaurantsForm navigation={navigation}/>
      <Toast ref={toastRef} position="center" opacity={0.5} />
      <Loading isVisible={isLoading} text={"Adding new Restaurant"} />
    </View>
  )
};

export default AddRestaurant;
