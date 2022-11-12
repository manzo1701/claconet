import { Text, View, TextInput, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import Boton from '../UI/components/Boton';
import { Button } from 'react-native-web';

const Materia = ({ navigation }) => {

    const [ state, setState ] = useState({

        nom: "",
        desde: "",
        hasta: "",
    })

    const handleChangeText = (nom, value) => {
        setState({ ...state, [nom]: value})
    }

    return(
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>

            <TextInput style={estilo.input} placeholder='Nombre de la materia'
                onChangeText={(value) => handleChangeText('nom', value)}
            />
            <TextInput style={estilo.input} placeholder='Desde'
                onChangeText={(value) => handleChangeText('desde', value)}
            />
            <TextInput style={estilo.input} placeholder='Hasta'
                onChangeText={(value) => handleChangeText('hasta', value)}
            />

            <Button title='Subir' onPress={() => console.log(state)}/>
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