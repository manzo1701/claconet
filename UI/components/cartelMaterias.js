import 'react-native-gesture-handler';
import React from "react";
import{Text, View, StyleSheet, TouchableOpacity, Button} from "react-native";

const Cartel = (props) => {
    const { materia, horario1, horario2 } = props       //Se lee lo que contienen las variables en el props

    return(

        <View>
            <TouchableOpacity style={estilo.contenedor}>
            <Text style={{fontSize: 22}}>Materia: { materia }<br></br>Horario: {horario1} a {horario2}</Text>
            <TouchableOpacity style={estilo.boton}><Text>Editar</Text></TouchableOpacity>
            </TouchableOpacity>
        </View>     //Se arma un cartel con la información que se extrajo del props para mostrar la info de la materia
        
    )

}

export default Cartel;
const estilo = StyleSheet.create({      //style para armar el cartel de materia
    contenedor:{
        padding: 15,
        margin: 20,
        width: 400,
        borderRadius: 20,
        backgroundColor: 'white',
        borderColor: 'black',
        borderWidth: 3,
        justifyContent: 'center',
        fontSize: 24,
    },
    boton:{
        width: 50,
        borderColor: 'black',
        marginTop: 10,
        borderWidth: 2,
        backgroundColor: 'white',
        borderRadius: 10,
        alignItems: 'center',
        position: 'relative',
        left: 310,
        
    }
    

})