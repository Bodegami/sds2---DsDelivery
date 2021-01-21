
import { NavigationHelpersContext, useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, View, Text, Alert, Linking } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { confirmDelivery } from '../api';
import Header from '../Header';
import OrderCard from '../OrderCard';
import { Order } from '../types';

type Props = {
  route: {
    params: {
      order: Order;
    }
  }
}


function OrderDetails({ route }: Props) {
  const { order } = route.params;
  const navigation = useNavigation();

  const handleOnCancel = () => {
    navigation.navigate('Orders');
  }

  const handleConfirmDelivery = () => {
    confirmDelivery(order.id)
      .then(() => {
        Alert.alert(`Pedido ${order.id} realizado com sucesso!`);
        navigation.navigate('Orders');
      })
      .catch(() => {
        Alert.alert(`Houve um erro ao confirmar o pedido ${order.id}`);
      })
  }

  const handleStartNavigation = () => {
    Linking.openURL(`https://www.google.com/maps/dir/?api=1&travelmode=driving&dir_action=navigate&destination=${order.latitude},${order.longitude}`)
  }

  return (
    <>
      <Header />
      <View style={styles.container}>
        <OrderCard order={order} />
        <RectButton style={styles.button} onPress={handleStartNavigation}>
          <Text style={styles.buttonText}>INICIAR NAVEGAÇÂO</Text>
        </RectButton>
        <RectButton style={styles.button} onPress={handleConfirmDelivery}>
          <Text style={styles.buttonText}>CONFIRMAR ENTREGA</Text>
        </RectButton>
        <RectButton style={styles.button} onPress={handleOnCancel}>
          <Text style={styles.buttonText}>CANCELAR</Text>
        </RectButton>
      </View>
    </>
  );
}

export default OrderDetails;