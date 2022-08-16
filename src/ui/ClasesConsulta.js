import react from 'react'
import '../../stylesheet/ClasesConsulta.css'
import{Alert, Text, View, Button, TextInput, StyleSheet, Touchable} from "react-native";
import { block } from 'react-native-reanimated';
import { ImageBackground } from 'react-native-web';
import { TouchableOpacity } from 'react-native-gesture-handler';


export default function ClasesConsulta(props) { //funcion que se encarga de la plantilla de una materia
    const {onPress,text} = props
    return (  //contenido de la plantilla
    <View className="body">
        <View>
        <TouchableOpacity
            onPress ={onPress}
        >                  
            <Text>
                {text}
            </Text>
            </TouchableOpacity>
        </View>
    </View>
    )
}




