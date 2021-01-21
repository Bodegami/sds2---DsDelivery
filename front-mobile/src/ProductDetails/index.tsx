
import React from 'react';
import { Image, Text, View } from 'react-native';
import { Product } from '../types';
import 'dayjs/locale/pt-br';
import "intl";
import "intl/locale-data/jsonp/pt-BR.js";
import styles from './styles';

const logo = {
  uri: 'https://i.ytimg.com/vi/A3kQjw40Vvo/maxresdefault.jpg',
  width: 200,
  height: 200,
};

type Props = {
  product: Product;
}

export function formatPrice(price: number) {
  const formatter = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
    minimumFractionDigits: 2,
  }).format(price).replace(/^(\D+)/, 'R$ ');
  return formatter;
}

function ProductCard({ product }: Props) {

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.productTitle}>{product.name}</Text>
        <Text style={styles.productPrice}>{formatPrice(product.price)}</Text>

      </View>
      <Image source={logo} />
      <Text style={styles.description}>{product.description}</Text>
    </View>
  );
}

export default ProductCard;