import React from 'react';
import { FaGoogle } from 'react-icons/fa';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import Cartel from './UI/components/cartelMaterias';    //Se importa el componente Cartel
import { Bienvenida } from './UI/components/bienvenida';    //Se importa el componente Bienvenida
import 'react-native-gesture-handler';    //Se importa las caracteristicas de React Navigation
import HomeScreen from './src/screens/inicio';

export default function App() {



    return (
      
        
        <View style={styles.container}>
          <HomeScreen/>
        </View>     //Se guarda, por cada componente Cartel, en cada variable los datos para que despues se lean desde el props
        

    
    )
}



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