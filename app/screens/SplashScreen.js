import React, {Component} from 'react'
import { View, StatusBar } from 'react-native'
import * as Animatable from 'react-native-animatable'
import { ImageBackgroundStyle } from '@styles/General'

export default class LoginScreen extends Component{

    goToScreen(routeName){//Funcion como parametro routeName
        this.props.navigation.navigate(routeName)//Para saltar de pantalla
    }

    componentDidMount(){//Metodo
        setTimeout(() =>{
            this.goToScreen('Login')
        }, 4000, this)
    }

    render(){
        return(
            <View style={ImageBackgroundStyle.image}//Uso del estilo de la carpeta styles
        )
    } 
}