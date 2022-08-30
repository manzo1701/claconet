import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Bienvenida from './UI/components/bienvenida';
import Cartel from './UI/components/cartelMaterias';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigation } from '@react-navigation/stack';

const Stack = createStackNavigation();
class App extends React.Component {

  render(){
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="HomeProfe"
            component={Cartel}
          />
          <Stack.Screen
            name="Bienvenida"
            component={Bienvenida}
          />
        </Stack.Navigator>
      </NavigationContainer>
    )
  }

}


const styles = StyleSheet.create({
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

export default App;

