import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Cartel from './UI/components/cartelMaterias';
import { Bienvenida } from './UI/components/bienvenida';
export default function App(props) {



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
      </View>
      
    
    
    )
}



const styles = StyleSheet.create({
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
