import { Text, StyleSheet, View, TouchableOpacity } from 'react-native'
import React from 'react'


function Boton(){
    return(
        
            <TouchableOpacity onPress={() => navigation.navigate('materia')}>
                <Text>Materia</Text>
            </TouchableOpacity>
        
    )
}

console.log(Boton)

export default Boton;

const styles = StyleSheet.create({

    buttonContainer: {

        marginBottom: 10,
        backgroundColor: 'blue',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: '5px',
    }
})