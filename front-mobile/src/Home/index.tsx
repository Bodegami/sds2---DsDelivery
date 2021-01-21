import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import Header from '../Header';
import styles from './styles';

function Home() {
  const navigation = useNavigation();

  const addProductsOnPress = () => {
    navigation.navigate('AddProducts');
  }

  const handleOnPress = () => {
    navigation.navigate('Orders');
  }

  const makeOrderOnPress = () => {
    navigation.navigate('MakeOrder');
  }

  return (
    <>
      <Header />
      <View style={styles.container}>
        <Image source={require('../assets/deliveryman.png')} />
        <Text style={styles.title}>Acompanhe os pedidos e {'\n'} entregue no prazo!</Text>
        <Text style={styles.subTitle}>Receba todos os pedidos do seu {'\n'} restaurante na palma da sua mão</Text>
      </View>
      <View style={styles.footer}>
        <RectButton style={styles.button} onPress={addProductsOnPress}>
          <Text style={styles.buttonText}>ADICIONAR PRODUTOS</Text>
        </RectButton>
        <RectButton style={styles.button} onPress={handleOnPress}>
          <Text style={styles.buttonText}>VER PEDIDOS</Text>
        </RectButton>
        <RectButton style={styles.button} onPress={makeOrderOnPress}>
          <Text style={styles.buttonText}>FAZER UM PEDIDO</Text>
        </RectButton>
      </View>
    </>
  );
}



export default Home;