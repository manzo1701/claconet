import { StatusBar } from 'expo-status-bar';
import './App.css';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ClasesConsulta from './src/ui/ClasesConsulta'; //importacion del componente Clases de consulta


export default function App() { //funcion encargada de solo mostrar las demas, la cual asta ahora es clasesconsulta
  return (
    <View> 
    <div className='App'>
      <div className='contenedor-principal'>
        <h1 className='titulo'>Clases de consulta</h1>
  <ClasesConsulta/>
  </div>
  </div>
    </View>
    
  );
}

/*

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
*/