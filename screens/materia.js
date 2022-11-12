import { Text, View, TextInput, StyleSheet } from 'react-native'
import React from 'react'
import Boton from '../UI/components/Boton';

const Materia = ({ navigation }) => {

    return(
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>

            <TextInput style={estilo.input} placeholder='Nombre de la materia'/>
            <TextInput style={estilo.input} placeholder='Desde'/>
            <TextInput style={estilo.input} placeholder='Hasta'/>
            <Boton
                text= 'volver'
                onPress = {()=> navigation.navigate("Home")}
            />
        </View>
    )
}

export default Materia;


const estilo = StyleSheet.create({

    input: {

        backgroundColor: 'white',
        borderWidth: 2,
        borderColor: 'black',
        borderRadius: 10,
        marginBottom: 10,
        height: 40,
        padding: 10,
    }
})