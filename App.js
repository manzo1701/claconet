import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import MainStack from './navigation/MainStack';


function App() {
  
  return(

    <View style={{flex:1, justifyContent: 'center', alignContent: 'center'}}>

      <MainStack/>
    </View>
  )
}
export default App;

const styles = StyleSheet.create({      //style para el fondo de la app
  container: {

    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1

  }

})