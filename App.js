import React from 'react';
import { StyleSheet, Text, View, Button, SafeAreaView } from 'react-native';
import MainStack from './navigation/MainStack';




function App() {

    return(
      <SafeAreaView style={{flex:1}}>
        <MainStack/>
      </SafeAreaView>
    );
}

export default App;


const styles = StyleSheet.create({      //style para el fondo de la app
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