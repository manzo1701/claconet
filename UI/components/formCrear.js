import { View, Text, TextInput } from 'react-native'
import React, { Component } from 'react'

export default class Formulario extends Component{
    constructor(){
        super()

        this.state = {
            clase: '',
            profesor: ''
        }
    }
    changeClase(clase){
        this.setState({clase})
    }
    changeProfesor(profesor){
        this.setState({profesor})
    }
    render() {
        return(
            <View style={styles.contenedor}>
                <TextInput
                    style={styles.input}
                    placeholder='clase'
                    value={this.state.clase}
                    onChangeText={(clase) => this.changeClase(clase)}
                />
                <TextInput
                    placeholder='profesor'
                    value={this.state.profesor}
                    onChangeText={(profesor) => this.changeProfesor(profesor)}
                />
            </View>
        )
    }

}

const styles = StyleSheet.create({
    contenedor: {
        flex: 1,
        backgroundColor: 'lightgrey',
    },
    input: {
        height: 40,
        borderColor: 'black',
        borderWidth: 'black',
        marginBottom: 20
    }
})