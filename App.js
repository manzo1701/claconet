import { StatusBar } from 'expo-status-bar';
import './App.css';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ClasesConsulta from './src/ui/ClasesConsulta'; //importacion del componente Clases de consulta



export default function App() { //funcion encargada de solo mostrar las demas, la cual asta ahora es clasesconsulta
  return (
    <View> 
     <ClasesConsulta
    text='nombre_materia'
    onPress = { () => {
      alert('ir a pagina')
    }}
    />
    </View>
    
  );
}

