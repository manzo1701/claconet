import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Materias from '../Screens/Materias'
import Asignatura_1 from '../Screens/Asignatura_1'
import Asignatura_2 from '../Screens/Asignatura_2'
import Asignatura_3 from '../Screens/Asignatura_3'
import Asignatura_4 from '../Screens/Asignatura_4'
import Asignatura_5 from '../Screens/Asignatura_5'
import Asignatura_6 from '../Screens/Asignatura_6'
import Asignatura_7 from '../Screens/Asignatura_7'
import Asignatura_8 from '../Screens/Asignatura_8'
import Asignatura_9 from '../Screens/Asignatura_9'
import '../Styles/Styles.css'
import { Easing } from 'react-native'

const Stack = createNativeStackNavigator()


const MainStack = () => {
    return (
        <div>

            <NavigationContainer> 
        <Stack.Navigator
        screenOptions= {{
            transitionSpec: {
                headerShown: false,
                open: config,
                close: closeConfig,    

            },
            cardStyleInterpolators: CardStyleInterpolators.forHorizontalIOS
            }}
        > 

            <Stack.Screen 
            name='Materia'
            component= {Materias}
            />
            <Stack.Screen 
            name='asignatura_1'
            component= {Asignatura_1}
            />
            <Stack.Screen 
            name='asignatura_2'
            component= {Asignatura_2}
            />
            <Stack.Screen 
            name='asignatura_3'
            component= {Asignatura_3}
            />
            <Stack.Screen 
            name='asignatura_4'
            component= {Asignatura_4}
            />
            <Stack.Screen 
            name='asignatura_5'
            component= {Asignatura_5}
            />
            <Stack.Screen 
            name='asignatura_6'
            component= {Asignatura_6}
            />
            <Stack.Screen 
            name='asignatura_7'
            component= {Asignatura_7}
            />
            <Stack.Screen 
            name='asignatura_8'
            component= {Asignatura_8}
            />
            <Stack.Screen 
            name='asignatura_9'
            component= {Asignatura_9}
            />
        </Stack.Navigator>
    </NavigationContainer>
        </div>
    
    )
}

export default MainStack
