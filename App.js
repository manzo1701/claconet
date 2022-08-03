import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ClasesConsulta from './src/ui/ClasesConsulta'; //importacion del componente Clases de consulta


export default function App() { //funcion encargada de solo mostrar las demas, la cual asta ahora es clasesconsulta
  return (
    <View style={styles.container}> 
        
  <ClasesConsulta/>
    
    </View>
    
  );
}



const styles = StyleSheet.create({
  
  container: {
    borderColor: '#f0f8ff',
    color: 'FFFFFF',
    flex: 1,
    backgroundColor: "blue",
    alignItems: 'center',
    justifyContent: 'center',
  },

});
