import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import './src/ui/Components/UsuarioForm'
import Cartel from './src/ui/cartelMaterias';


export default function App() {
  return (
    <View style={styles.container}>
      
    
     
     <Cartel/>
    
    
    </View>
    
  );
}



const styles = StyleSheet.create({
  container: {
    borderColor: '#f0f8ff',
    color: '#f0ffff',
    flex: 1,
    backgroundColor: "grey",
    alignItems: 'center',
    justifyContent: 'center',
  },
  container2: {
    borderColor: '#f0f8ff',
    color: '#f0ffff',
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'top',
  }
});
