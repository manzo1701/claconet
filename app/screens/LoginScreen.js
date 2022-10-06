import React, {Component, useState} from 'react'
import { Text, 
    View, TouchableOpacity, StatusBar, Image } from 'react-native'
import { loginStyles } from '@styles/General'
import MyTextInput from '@components/MyTextInput'
import Colors from '@styles/Colors'


export default function LoginScreen(){

    const [hidePassword, setHidePassword] = useState(false)

        return(
            <View style={[loginStyles.container, {padding:20}]}>
                <StatusBar backgroundColor={Colors.BLUE} translucent={true}/>
                <View style={[loginStyles.logo]}>
                    <Image source={require('@recursos/consultas.png')}
                    style={{height:250, width:250}}/>
                    
                </View>
                <MyTextInput keyboardType='email-address' placeholder='E-mail' image='user'/>
                <MyTextInput keyboardType={null} placeholder='contraseña' image='look'      
                bolGone={true} secureTextEntry={hidePassword}
                onPress={() => setHidePassword(!hidePassword)}/>
                <View style={loginStyles.btnMain}>
                    <TouchableOpacity>
                        <Text style={loginStyles.btntxt}>Iniciar Sesión</Text>
                    </TouchableOpacity>
                </View>

                <View style={loginStyles.btnTransparent}>
                    <TouchableOpacity>
                        <Text style={[loginStyles.btntxt, {color: Colors.BLUE}]}>Registrarse</Text>
                    </TouchableOpacity>
                </View>

                <View>
                    <TouchableOpacity>
                        <Text style={[loginStyles.txtTransparent, {textDecorationLine: 'underline'}]}>Olvide mi Contraseña</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
} 