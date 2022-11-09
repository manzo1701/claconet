import React from 'react';
import 'react-native-gesture-handler';    //Se importa las caracteristicas de React Navigation
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import crearMateria from '../src/screens/crearMateria';
import infoMateria from '../src/screens/infoMateria';
import HomeScreen from '../src/screens/inicio';

const Stack = createNativeStackNavigator();

const mainStack = () => {

    return(
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen
                name='home'
                component={ HomeScreen }
            />
            <Stack.Screen
                name='materia'
                component={ crearMateria }
            />
            <Stack.Screen
                name='infoMateria'
                component={ infoMateria }
            />
        </Stack.Navigator>
    </NavigationContainer>
    )
}



export default mainStack;

//contenedor que maneja el arbol de navegacion

