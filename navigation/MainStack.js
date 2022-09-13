//COMPONENTE EN PRUEBA, AUN NO SE IMPLEMENTA
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';    //Se importa las caracteristicas de React Navigation
import { createNativeStackNavigator } from 'react-navigation-stack';
import 'react-native-gesture-handler';    //Se importa las caracteristicas de React Navigation
import Home from '../UI/components/cartelMaterias';

const Stack = createNativeStackNavigator();

const MainStack = () => {
    return(

           <NavigationContainer>            
                <Stack.Navigator>
                    <Stack.Screen
                        name = "cartelMaterias"
                        component = { Home }
                    />
                </Stack.Navigator>
            </NavigationContainer>
    )
}

//contenedor que que maneja el arbol de navegacion

export default MainStack

