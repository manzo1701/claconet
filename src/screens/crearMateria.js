import { View, Text, Button } from 'react-native'
import React from 'react'
import Formulario from '../../UI/components/formCrear'

const crearMateria = (props) => {
  
    return (
    <View>
        <Formulario/>
        <Button
          title='volver'
          onPress={() => navigation.navigate('home', props)}
        />
    </View>
  )
}

export default crearMateria;