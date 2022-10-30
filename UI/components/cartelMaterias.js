import React from "react";
import{Text, View, StyleSheet, TouchableOpacity, Button} from "react-native";
import 'react-native-gesture-handler';
const Cartel = (props) => {
    const { materia, horario1, horario2 } = props       //Se lee lo que contienen las variables en el props

    return(

        <View>
            <TouchableOpacity style={estilo.contenedor}>
            <Text>Materia: { materia }<br></br>Horario: {horario1} a {horario2}</Text>
            <Button title="Editar" onPress={() => navigation.navigate("infoMateria")}></Button>
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
        backgroundColor: 'chartreuse',
        borderColor: 'black',
        borderWidth: 3,
        justifyContent: 'center',
        fontSize: 24,
    },
    

})