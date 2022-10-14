//COMPONENTE EN PRUEBA, AUN NO SE IMPLEMENTA
import React from 'react';
import { createNativeStackNavigator } from 'react-navigation-stack';
import 'react-native-gesture-handler';    //Se importa las caracteristicas de React Navigation
import infoMateria from '../UI/components/infoMateria';

const Stack = createNativeStackNavigator();

function MainStack(){
    return(

           <Stack.Navigator>
            <Stack.Screen name="infoMateria" component={ infoMateria }/>
           </Stack.Navigator>
    )
}

//contenedor que que maneja el arbol de navegacion

export default MainStack

