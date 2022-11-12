import React from 'react';
import { StyleSheet, View } from 'react-native';
import MainStack from './navigation/MainStack';

function App() {
  
  return(

    <View style={styles.container}>
      <MainStack/>
    </View>
  )
}
export default App;

const styles = StyleSheet.create({      //style para el fondo de la app
  container: {

    alignContent: 'center',
    justifyContent: 'center',
    flex: 1,
  }

})