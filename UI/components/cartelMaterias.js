import React from "react";
import{Text, View, Button, TextInput} from "react-native";
import { StyleSheet } from "react-native-web";

export default function Cartel () {

    return (
        <View style={estilo.contenedor}>
            <Text>Hola buenas tardes, como</Text>
        </View>
    )

}

const estilo = StyleSheet.create({
    contenedor: {
        padding: 10,
        backgroundColor: 'grey',
        margin: 10,
        borderRadius: 10,
    }


});