import react from 'react'
import{Alert, Text, View, Button} from "react-native";
import { block } from 'react-native-reanimated';
import { ImageBackground } from 'react-native-web';
import { NavigationContainer } from '@react-navigation/native';
import PaginaMateria from '../src/ui/PaginaMateria';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ClasesConsulta from '../App';

const Stack = createNativeStackNavigator()

export default function MainStack() { 

    return (  
    <View className="body">
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen 
          name = "Clases consulta"
          component = {ClasesConsulta}
          />
          <Stack.Screen 
          name = "materia"
          component = {PaginaMateria}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
    )
}