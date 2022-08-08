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
  <ClasesConsulta
  jefatura='biologia'
  profesor='mabel'
  horario='miercoles, 8:00 a 9:00'
  />
  <ClasesConsulta
  jefatura='proramacion avanzada'
  profesor='wity'
  horario='miercoles, 8:30 a 10:00'
  />
  <ClasesConsulta
  jefatura='proramacion web'
  profesor='juanjo'
  horario='viernes, 8:30 a 10:00'
  />
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