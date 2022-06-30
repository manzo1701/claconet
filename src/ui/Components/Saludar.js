import react from "react";
import{Text, View, Button, TextInput} from "react-native";
export default function Saludar(){
    return(
        <View>
        <Text>hola ingrese su nombre</Text>
        <TextInput placeholder="nombre"></TextInput>
        
        </View>
    )
}