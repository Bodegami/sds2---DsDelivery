
import React from 'react';
import { Text, View } from 'react-native';
import { Order } from '../types';
import dayjs from 'dayjs';
import 'dayjs/locale/pt-br';
import relativeTime from 'dayjs/plugin/relativeTime';
import "intl";
import "intl/locale-data/jsonp/pt-BR.js";
import styles from './styles';

dayjs.locale('pt-br');
dayjs.extend(relativeTime);

type Props = {
  order: Order;
}

function dateFromNow(date: string) {
  return dayjs(date).fromNow();
}

export function formatPrice(price: number) {
  const formatter = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
    minimumFractionDigits: 2,
  }).format(price).replace(/^(\D+)/, 'R$ ');
  return formatter;
}

function OrderCard({ order }: Props) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.orderName}>Pedido {order.id}</Text>
        <Text style={styles.orderPrice}>{formatPrice(order.total)}</Text>
      </View>
      <Text style={styles.text}>{dateFromNow(order.moment)}</Text>
      <View style={styles.productsList}>
        {order.products.map(product => (
          <Text key={product.id} style={styles.text}>{product.name}</Text>
        ))}
      </View>
    </View>
  );
}

export default OrderCard;