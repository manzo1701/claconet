//COMPONENTE EN PRUEBA, AUN NO SE IMPLEMENTA
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';    //Se importa las caracteristicas de React Navigation
import infoMateria from '../src/screens/infoMateria';
import HomeScreen from '../src/screens/inicio';

const HomeStackScreen = () => {

    const HomeStack = createStackNavigator();
    return(
        <HomeStack.Navigator>
            <HomeStack.Screen name='inicio' component={ HomeScreen }/>
            <HomeStack.Screen name='infoMateria' component={ infoMateria }/>
        </HomeStack.Navigator>
    );
};

//contenedor que que maneja el arbol de navegacion

export default HomeStackScreen;