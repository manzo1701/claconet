import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import UsuarioForm from './src/ui/Components/UsuarioForm'
import Saludar from './src/ui/saludar';
import './src/ui/Components/LoginForm'


export default function App() {
  return (
    <View style={styles.container}>
      
    
     
     <LoginForm/>
    
    
    </View>
    
  );
}

const App = () => (
  <View>
    <Text> Iniciando Login</Text>
  </View>
)

const styles = StyleSheet.create({
  container: {
    borderColor: '#f0f8ff',
    color: '#f0ffff',
    flex: 1,
    backgroundColor: "red",
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
