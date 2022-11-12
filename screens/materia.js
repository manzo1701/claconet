import { Text, View } from 'react-native'
import React from 'react'
import Boton from '../UI/components/Boton';

const Materia = ({ navigation }) => {

    return(
        <View style={{flex: 1}}>

            <Text>Buenas</Text>
            <Boton
                text= 'volver'
                onPress = {()=> navigation.navigate("Home")}
            />
        </View>
    )
}

export default Materia;