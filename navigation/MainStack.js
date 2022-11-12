import React from 'react';    //Se importa las caracteristicas de React Navigation
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import Materia from '../screens/Materia';


const Stack = createNativeStackNavigator();

const MainStack = () => {

    return(//initialRouteName hace que la primera pantalla que se vea al abrir la app sea Home.
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Materia'>
                <Stack.Screen
                    name = "Home"
                    component = { HomeScreen }
                />
                <Stack.Screen
                    name = "Materia"
                    component = { Materia }
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}



export default MainStack;

//contenedor que maneja el arbol de navegacion

