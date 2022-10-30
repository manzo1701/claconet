import React from 'react';
import 'react-native-gesture-handler';    //Se importa las caracteristicas de React Navigation
import { createStackNavigator } from 'react-navigation-stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '../src/screens/inicio';
import infoMateria from '../src/screens/infoMateria';

const Stack = createStackNavigator();


const HomeStackScreen = () => {

    const HomeStack = createStackNavigator();
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='home' component= { HomeScreen }/>
                <Stack.Screen name='info' component= { infoMateria }/>
            </Stack.Navigator>
        </NavigationContainer>
    );
};

//contenedor que maneja el arbol de navegacion

export default HomeStackScreen;