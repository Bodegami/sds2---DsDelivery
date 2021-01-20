import React, { useEffect, useState } from 'react';
import Header from '../Header';
import { Product } from '../types';
import { useNavigation } from '@react-navigation/native';



type Props = {
  product: Product;
}


function AddProducts() {
  const navigation = useNavigation();

  const handleOnPress = (product: Product) => {
    navigation.navigate("OrderDetails", {
      product,
    });
  };

  return (
    <Header />


  );
}
export default AddProducts;