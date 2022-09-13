import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Cartel from './UI/components/cartelMaterias';    //Se importa el componente Cartel
import { Bienvenida } from './UI/components/bienvenida';    //Se importa el componente Bienvenida
import 'react-native-gesture-handler';    //Se importa las caracteristicas de React Navigation




export default function App() {



    return (
      
        <View style={styles.container}>    

          <Bienvenida profesor = "Wiedermann"/>
          <Cartel
            materia = "Matematica"
            horario1 = "18:30"
            profesor = "Wiedermann"
            horario2 = "20:30"

    
          />
          <Cartel
            materia = "Física"
            profesor = "Wiedermann"
            horario1 = "15:00"
            horario2 = "16:30"
          />

          <Cartel
            materia = "Programación Web Dinámica"
            horario1 = "14:20"
            horario2 = "15:50"
  
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
    borderColor: '#f0f8ff',
    color: '#f0ffff',
    flex: 1,
    alignItems: 'top',
  }


});