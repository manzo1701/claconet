import React from 'react'
import {StyleSheet, TouchableOpacity, Image} from 'react-native'
import {Icon, Input } from 'react-native-elements'//componente react elements
import Colors from '@styles/Colors'//Uso los colores

export default function MyTextInput(props){//Estoy recibiendo atraves de props, componente tipo funcion

    return (
      <Input
        style={{alignItems: 'center'}}
        containerStyle={{marginBottom:20,borderBottomColor: Colors.LIGHTPRIMARYCOLOR, borderBottomWidth: 1}}
        inputStyle={{ fontSize:18,paddingVertical: 10,
            paddingHorizontal:8, marginTop:12,
            color: Colors.PRIMARYCOLOR,
            fontFamily:"nunito.semibold",}}
        placeholderTextColor={Colors.LIGHTPRIMARYCOLOR}
        placeholder={props.placeholder}
        leftIconContainerStyle={{ marginLeft:0 }}
        leftIcon={<Icon size={24} color={Colors.PRIMARYCOLOR} 
        type={'font-awesome'} name={props.image}/>}
        rightIcon={props.bolGone? //opcion de ojo de contraseña
        <TouchableOpacity activeOpacity = { 0.8 } style={styles.btnVisibility} onPress = {props.onPress}>
        <Image style={ styles.btnImage} tintColor={Colors.PRIMARYCOLOR} 
        source = {(props.secureTextEntry) ? require('@recursos/eye-icon.png') : require('@recursos/icon-password.jpg')}/>
        </TouchableOpacity>:
        <Icon size={24} color={Colors.PRIMARYCOLOR}
        type={'font-awesome'} name={props.imageRight}/>}
        errorStyle={{ color: Colors.RED }}
        errorMessage={(props.bolError)?props.strError:''}
        editable={props.editable}
        secureTextEntry={props.secureTextEntry}
        keyboardType={props.keyboardType} //tipo de input email y password
        onChangeText={props.onChangeText}
        value={props.value}/>
    )
}

const styles = StyleSheet.create({  

      btnVisibility:
      {
        height: 40,
        width: 35,
        paddingTop: 8,
        paddingLeft:5,
        paddingRight:5
      },
     
      btnImage:
      {
        resizeMode: 'contain',
        height: '100%',
        width: '100%'
      },
})
