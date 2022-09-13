import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import Cartel from './UI/components/cartelMaterias';    //Se importa el componente Cartel
import { Bienvenida } from './UI/components/bienvenida';    //Se importa el componente Bienvenida
import 'react-native-gesture-handler';    //Se importa las caracteristicas de React Navigation




export default function App() {



    return (
      
        
        <View style={styles.container}>    
          <TouchableOpacity style={styles.container2}>Log Out</TouchableOpacity>
          <Bienvenida profesor = "Wiedermann"/>
          <Cartel
            materia = "Programación Web Dinámica"
            horario1 = "18:30"
            horario2 = "20:30"

    
          />
          <Cartel
            materia = "Programación Web Estática"
            horario1 = "15:00"
            horario2 = "16:30"
          />

          <Cartel
            materia = "Sistemas Operativos I"
            horario1 = "14:20"
            horario2 = "15:50"
  
          />
          <Cartel
            materia = "Seguridad Informática"
            horario1 = "19:20"
            horario2 = "20:50"
          />
          <Cartel
            materia = "Testing"
            horario1 = "16:50"
            horario2 = "17:50"
          />

        </View>     //Se guarda, por cada componente Cartel, en cada variable los datos para que despues se lean desde el props
        

    
    )
}



const styles = StyleSheet.create({      //style para el fondo de la app
  container: {

    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  container2: {
    backgroundColor: 'grey',
    color: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    width: 100,
    height: 30,
    padding: 10,
    margin: 10,
    borderRadius: 10,
    fontFamily: 'Arial',
  }
});