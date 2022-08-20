import react from 'react'
import{Alert, Text, View, Button, TextInput, StyleSheet, Touchable} from "react-native";
import { block } from 'react-native-reanimated';
import { ImageBackground } from 'react-native-web';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Boton from './Boton';


export default function ClasesConsulta({ navigation }) { //funcion que se encarga de la plantilla de una materia
    const {onPress,text} = props
    return (  //contenido de la plantilla
    
        <View>
        <Boton 
            text = "ir a biologia"
            onPress = { () => {
                navigation.navigate('materia')
            }}
        />
        </View>
    
    )
}




