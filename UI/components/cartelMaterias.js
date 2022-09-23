import React from "react";
import{Text, View, Button, StyleSheet, TouchableOpacity} from "react-native";
export default function Cartel(props){
    const { materia, horario1, horario2 } = props       //Se lee lo que contienen las variables en el props
    return(

        
        <View>
            <TouchableOpacity>
            <Text style={estilo.contenedor}>Materia: { materia }<br></br>Horario: {horario1} a {horario2}</Text>

            </TouchableOpacity>
        </View>     //Se arma un cartel con la información que se extrajo del props para mostrar la info de la materia
        
    )

}


const estilo = StyleSheet.create({      //style para armar el cartel de materia
    contenedor:{
        padding: 20,
        margin: 20,
        width: 400,
        borderRadius: 20,
        borderColor: 'black',
        borderWidth: 5,
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 24,
    }

})