import React from "react";
import {TextInput, Button, Text, View, TouchableOpacity, Alert} from "react-native"
import App from './scene/App';
import React, { Component } from 'react';
import {TextInput, Button, View} from "react-native"
import { render } from "react-dom";



export default function LoginForm (){
    return(
 
        <View>
            
            <TextInput placeholder="Email"/><br/>
            <TextInput placeholder="Contraseña"/><br/>
          
            <Button title="Aceptar" onPress={() => console.log("Enviar")}/><br/>
            <Button title="Cancelar" onPress={() => console.log("Cancelar")}/>
            
        </View>
    )
    render();
}



