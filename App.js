import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ClasesConsulta from './src/ui/ClasesConsulta';


export default function App() {
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
  container2: {
    borderColor: '#f0f8ff',
    color: '#f0ffff',
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'top',
  }
});
