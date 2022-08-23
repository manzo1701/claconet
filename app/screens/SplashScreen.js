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
        return( //Uso el estilo de la carpeta styles
            <View style={ImageBackgroundStyle.image}> 
                <StatusBar translucent backgroundColor='rgba(0,0,0,0.2)'/>
                <Animatable.Image //Uso el Componente y sus propiedades
                    animation="pulse"//Animancion pulsante
                    easing="ease-in-out"//Animacion hacia afuera
                    iterationCount="infinite"//Animacion infinita
                    style={{
                        width:200,
                        height:200,
                        margin:100,
                    }}
                    source={require('@recursos/consultas.png')}
                
                />
            </View> 
        )
    } 
}