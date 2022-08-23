import React from "react";
import{Text, View, Button, TextInput} from "react-native";
import { StyleSheet } from "react-native-web";

export default function Cartel(){

    return(
        <View>
        <Text style={estilo.contenedor}>Hola buenas tardes, como anda?</Text>
        </View>
    )

}

const estilo = StyleSheet.create({
    contenedor:{
        padding: 10,
        margin: 10,
        backgroundColor: 'white',
        borderRadius: 10,
    }


})

