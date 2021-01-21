import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({
  container: {
    marginTop: '10%',
    marginLeft: '2%',
    marginRight: '2%',
    marginBottom: '2%',
    padding: 15,
    backgroundColor: '#FFF',
    shadowOpacity: 0.25,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 20,
    borderRadius: 10,
    elevation: 5
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  productTitle: {
    fontWeight: 'bold',
    fontSize: 18,
    lineHeight: 25,
    letterSpacing: -0.24,
    color: '#263238',
    fontFamily: 'OpenSans_700Bold'
  },
  description: {
    borderTopColor: '#E6E6E6',
    borderTopWidth: 1,
    marginTop: 20,
    paddingTop: 15
  },
  orderName: {
    fontWeight: 'bold',
    fontSize: 18,
    lineHeight: 25,
    letterSpacing: -0.24,
    color: '#263238',
    fontFamily: 'OpenSans_700Bold'
  },
  productPrice: {
    fontWeight: 'bold',
    fontSize: 18,
    lineHeight: 25,
    textAlign: 'right',
    letterSpacing: -0.24,
    color: '#DA5C5C',
    fontFamily: 'OpenSans_700Bold'
  },
  productsList: {
    borderTopColor: '#E6E6E6',
    borderTopWidth: 1,
    marginTop: 20,
    paddingTop: 15
  },
  productImage: {

  }
});

export default styles;