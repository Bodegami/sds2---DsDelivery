import React, { useEffect, useState } from 'react';
import Header from '../Header';
import { Product } from '../types';
import ProductCard from '../ProductDetails';
import { useIsFocused, useNavigation } from '@react-navigation/native';
import { fetchProducts } from '../api';
import { ScrollView, Text, Alert } from 'react-native';
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import styles from './styles';

function MakeOrder() {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const navigation = useNavigation();
  const isFocused = useIsFocused();

  const fetchData = () => {
    setIsLoading(true);
    fetchProducts()
      .then((response) => setProducts(response.data))
      .catch(() => Alert.alert("Houve um erro ao buscar os pedidos!"))
      .finally(() => setIsLoading(false));
  };

  useEffect(() => {
    if (isFocused) {
      fetchData();
    }
  }, [isFocused]);

  const handleOnPress = (product: Product) => {
    navigation.navigate("ProductDetails", {
      product,
    });
  };


  return (
    <>
      <Header />
      <ScrollView style={styles.container}>
        {isLoading ? (
          <Text>Buscando pedidos...</Text>
        ) : (
            products.map((product) => (
              <TouchableWithoutFeedback
                key={product.id}
                onPress={() => handleOnPress(product)}
              >
                <ProductCard product={product} />
              </TouchableWithoutFeedback>
            ))
          )}
      </ScrollView>
    </>
  );
}

export default MakeOrder;