import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Cartel from './UI/components/cartelMaterias';


export default function App() {

    return (
      <View style={styles.container}>
        <Cartel/>
      </View>
    
    
    )
}



const styles = StyleSheet.create({
  container: {

    backgroundColor: 'grey',
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
