import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Cartel from './UI/components/cartelMaterias';
export default function App() {

    return (
      
      

      <View style={styles.container}>
        <Cartel
          materia = "Matematica"
          profesor = "Exequiel Wiedermann"
          horario1 = "18:30"
          horario2 = "20:30"

          
        />
        <Cartel
          materia = "Física"
          profesor = "Alejandro Zeballos"
          horario1 = "15:00"
          horario2 = "16:30"
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
