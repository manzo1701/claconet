import React from 'react';
import 'react-native-gesture-handler';    //Se importa las caracteristicas de React Navigation
import { createStackNavigator } from 'react-navigation-stack';



const HomeStackScreen = () => {

    const HomeStack = createStackNavigator();
    return(
        <HomeStack.Navigator>
            <HomeStack.Screen name='HomeScreen' component={ HomeScreen }/>
            <HomeStack.Screen name='infoMateria' component={ infoMateria }/>
            <HomeStack.Screen name='form' component={ crearMateria }/>
        </HomeStack.Navigator>
    );
};

//contenedor que maneja el arbol de navegacion

export default HomeStackScreen;