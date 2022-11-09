import { View, Text, Button } from 'react-native'
import React from 'react'


const infoMateria = (props) => {
 
    return(

      <View>
        <Text>Materia: Testing</Text>
        <Button 
          title='Volver'
          onPress={() =>
              navigation.navigate('home')
            
          }
        />
      </View>
    )
}
export default infoMateria;