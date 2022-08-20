import react from 'react'
import {Container} from './stylesheet/styles'
import{Alert, Text, View, Button, TextInput, StyleSheet, Touchable} from "react-native";
import { block } from 'react-native-reanimated';
import { ImageBackground } from 'react-native-web';
import MainStack from './navigation/MainStack';
import PaginaMateria from './src/ui/PaginaMateria';


export default function App() { //funcion que se encarga de la plantilla de una materia
    
    return (  //contenido de la plantilla
    <View>
    <PaginaMateria
        materia = "Biologia"
    />

    </View>
    
    
    
    
    /*<View>
    
        <MainStack/>
        
    </View>*/
    )
}
