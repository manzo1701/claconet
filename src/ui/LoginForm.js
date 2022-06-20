
import react from "react";
import {TextInput, Button, Text, View} from "react-native"


export default function LoginForm (){
    return(
 
        <View>
            
            <TextInput placeholder="Email"/><br/>
            <TextInput placeholder="Contraseña"/><br/>
          
            <Button title="Aceptar" onPress={() => console.log("Enviar")}/><br/>
            <Button style="" title="Cancelar" onPress={() => console.log("Cancelar")}/>
            
        </View>
    )
}



