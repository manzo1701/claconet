import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import UsuarioForm from './UI/components/UsuarioForm';
import LoginForm from './UI/components/LoginForm';
import Saludar from './UI/components/Saludar';
import 'react-native-gesture-handler';
import ProfesorForm from './UI/components/ProfesorForm';

export default function App() {
  return (
    <View style={styles.container}>
      
    
      <ProfesorForm/><br/>
      <LoginForm/>
    
    
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {

    borderColor: '#f0f8ff',
    color: 'black',
    flex: 1,
    backgroundColor: "grey",
    alignItems: 'center',
    justifyContent: 'center',
  },
  container2: {
    borderColor: '#f0f8ff',
    color: '#f0ffff',
    flex: 1,
    alignItems: 'top',
  }
});
