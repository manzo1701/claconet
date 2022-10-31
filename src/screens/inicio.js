import { Text, View, Button } from 'react-native'
import React from 'react'
import { Bienvenida } from '../../UI/components/bienvenida'
import { TouchableOpacity } from 'react-native-gesture-handler'

const HomeScreen = ({ navigation }) => {

        return(
            <View>
              
            <Bienvenida profesor = "Wiedermann"/>

            <TouchableOpacity style={{justifyContent: 'center', alignItems: 'center', backgroundColor: 'lightgrey', width: 120, borderRadius: 10, left: 100, borderColor: 'black', borderWidth: 2, height: 30}} onPress={() => navigation.navigate('form')}>
              
              Agregar clase</TouchableOpacity>

            
        </View>             //Se guarda, por cada componente Cartel, en cada variable los datos para que despues se lean desde el props
    )
}
export default HomeScreen;
