import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import Mensaje from '../UI/components/Mensajes';
import { createStackNavigator } from 'react-navigation-stack';

const Stack = createStackNavigator();

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

export default MainStack

