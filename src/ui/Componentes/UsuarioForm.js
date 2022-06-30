import react from "react";
import{Text, View, Button, TextInput} from "react-native";
export default function UsuarioForm(){
    return(
        <View>
        <TextInput placeholder="Email"/>
        <TextInput placeholder="contraseña"/>
        <Button title="aceptar"></Button>
        </View>
    )
}