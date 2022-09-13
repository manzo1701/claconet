import React from "react";
import { StyleSheet } from "react-native";
import { View } from "react-native-animatable";
export function Bienvenida(props){


    return(
    
    <View style={styles.estilo}>    
        <h1>Bienvenido { props.profesor }</h1>
    </View>
    )
}

const styles = StyleSheet.create({

    estilo:{
        fontSize: 14,
        fontFamily: 'Arial'
    }
})