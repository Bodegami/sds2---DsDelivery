
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import styles from './styles';

function Header() {
  const navigation = useNavigation();

  const handleOnPress = () => {
    navigation.navigate('Home');
  }

  return (
    <TouchableWithoutFeedback onPress={handleOnPress}>
      <View style={styles.container}>
        <Image source={require('../assets/logo.png')} />
        <Text style={styles.text}>Test Mobile</Text>
      </View>
    </TouchableWithoutFeedback>
  );
}

export default Header;