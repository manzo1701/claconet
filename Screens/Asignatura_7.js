import React from 'react'
import { Text, View, TextInput, Button } from 'react-native'
import Boton from '../Components/Boton'
import Horario from '../Components/Horarios'
import Profesor from '../Components/Profesor'

const Asignatura_7 = ({ navigation }) => {
    return (
      <View>
        <Text>waw</Text>
        <View>
            <Text>asignatura</Text>
        <Profesor
                profe= "manuel"
            />
            <Horario
                hora= "9:00 a 10:00"
            />
        </View>
           
            <TextInput placeholder="Campo a rellenar (Obligatorio) especificando que materiales se lllevan para poder estudiar"/><br/>
   
          
            <div className=''>
           <Boton
      text = "volver a la lista"
        onPress = {() => {
        navigation.navigate('Materia')
        }}
          />
           </div>            
      
      </View>
    )
  
}

export default Asignatura_7
