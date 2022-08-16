import react from 'react'
import '../../stylesheet/ClasesConsulta.css'
import{Alert, Text, View, Button, TextInput, StyleSheet} from "react-native";
import { block } from 'react-native-reanimated';
import { ImageBackground } from 'react-native-web';
import ClasesConsulta from './ClasesConsulta';

export default function PaginaMateria() { //funcion que se encarga de la plantilla de una materia
    return (  //contenido de la plantilla
    
    <View>
            
            <TextInput placeholder="Email"/><br/>
            <TextInput placeholder="Contraseña"/><br/>
          
            <Button title="Aceptar" onPress={() => console.log("Enviar")}/><br/>
            <Button style="" title="Cancelar" onPress={() => console.log("Cancelar")}/>
            
        </View>
    
    )
}


