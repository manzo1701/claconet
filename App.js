import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import HomeScreen from './src/screens/inicio';
console.reportErrorsAsExceptions = false;


const App = () => {

  return(
    <View style={styles.container}>
      <HomeScreen/>
    </View>
  )
}
export default App;

const styles = StyleSheet.create({      //style para el fondo de la app
  container: {

    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  container2: {

    borderColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    width: 100,
    borderWidth: 3,
    height: 30,
    padding: 10,
    margin: 10,
    borderRadius: 20,
    fontFamily: 'Arial',
    
  },
  boton: {

    borderColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    width: 100,
    borderWidth: 3,
    height: 30,
    borderRadius: 20,
    fontFamily: 'Arial',
  }
});