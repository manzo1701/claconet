import { Text, View } from 'react-native'
import { StyleSheet } from 'react-native'
import React from 'react'
import Boton from '../../UI/components/Boton'


const HomeScreen = () =>{


    return(

        <View style={style.boton}>
            <Text>Agrega una nueva clase de consulta</Text>
            <div>
                <Boton/>
            </div>
            
        </View>
    )
}


export default HomeScreen;


const style = StyleSheet.create({

    boton: {
        flex: 1,
        margin: 10,
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',

    }
})