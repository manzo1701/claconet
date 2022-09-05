//COMPONENTE EN PRUEBA, AUN NO SE IMPLEMENTA

import React from 'react'
import { NavigationContainer } from '@react-navigation/native';    //Se importa las caracteristicas de React Navigation
import Mensaje from '../UI/components/Mensajes';    //Se importa las caracteristicas de React Navigation
import { createStackNavigator } from 'react-navigation-stack';    //Se importa las caracteristicas de React Navigation

const Stack = createStackNavigator();       /*Se guarda en una variable constante la función createStackNavigator que devuelve 2 propiedades
                                            Screen y Navigator.*/

const MainStack = () => {
    return(

           <NavigationContainer>            
            <Stack.Navigator>
                <Stack.Screen
                    name = "home"
                    component = { Mensaje }
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

//contenedor que que maneja el arbol de navegacion

export default MainStack

