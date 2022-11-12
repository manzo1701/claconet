import { Text, View, TextInput, StyleSheet, Button, createElement } from 'react-native'
import React, { useState } from 'react'
import Boton from '../UI/components/Boton';



const Materia = ({ navigation }) => {

    const [ state, setState ] = useState({

        nom: "",
        desde: "",
        hasta: "",
    })

    const handleChangeText = (nom, value) => {
        setState({ ...state, [nom]: value})
    }

    const agregarClase = () => {

        if(state.nom === ''){

            alert('Completa todos los campos')
        } else if (state.desde === ''){

            alert('Completa todos los campos')
        } else if(state.hasta === ''){
            alert('Completa todos los campos')
        } else{

        }
    }

    /*const guardarClase = async () => {

        if(state.nom === ''){
            alert('Pon un nombre a la clase')
        } else {
           await bd.collection('clases').add({

            horario1: state.desde,
            horario2: state.hasta,
            nombre: state.nom,
            profesor: 'wiedermann'
           })
            console.log('Agregado')
        }
    }*/


    return(
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>

            <Text style={{fontSize: 24, marginBottom: 10}}>Crea una nueva clase de consulta...</Text>

            <TextInput style={estilo.input} placeholder='Nombre de la materia'
                onChangeText={(value) => handleChangeText('nom', value)}
            />
            <TextInput style={estilo.input} placeholder='Desde'
                onChangeText={(value) => handleChangeText('desde', value)}
            />
            <TextInput style={estilo.input} placeholder='Hasta'
                onChangeText={(value) => handleChangeText('hasta', value)}
            />

            <Button title='Subir' onPress={() => agregarClase()}/><br></br>

            <Boton
                text= 'Volver'
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