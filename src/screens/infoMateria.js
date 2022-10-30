import { View, Text, Button } from 'react-native'
import React from 'react'


 infoMateria = () => {

  return(

    <View>
      <Text>Materia: Testing</Text>
      <Button 
        title='Volver'
        onPress={() => navigation.goBack()}
      />
    </View>
  )
}
export default infoMateria;