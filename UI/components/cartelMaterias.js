import React from "react";
import{Text, View, Button, TextInput} from "react-native";
import { StyleSheet } from "react-native-web";

export default function Cartel(props){
    const { materia, horario1, horario2 } = props
    return(

        
        <View>
        <Text style={estilo.contenedor}>Materia: { materia }<br></br>Horario: {horario1} a {horario2}</Text>
        </View>
        
    )

}


const estilo = StyleSheet.create({
    contenedor:{
        padding: 10,
        margin: 10,
        width: 400,
        backgroundColor: 'grey',
        borderRadius: 10,
        borderColor: 'black',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 24,
    }


})