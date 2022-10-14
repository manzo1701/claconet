import { View, Text, Button } from 'react-native'
import React from 'react'


const infoMateria = () => {

  return(

    <View>
      <Text>Materia: Testing</Text>
      <Button 
        title='Volver'
        onPress={() => navigation.navigate("HomeScreen")}
      />
    </View>
  )
}
export default infoMateria;