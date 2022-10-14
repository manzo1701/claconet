import { Text, View } from 'react-native'
import React from 'react'
import { Bienvenida } from '../../UI/components/bienvenida'
import Cartel from '../../UI/components/cartelMaterias'

const HomeScreen = (props) => {

    return(
        <View style={{justifyContent: 'center', flex: 1, alignContent: 'center'}}>
            <Bienvenida profesor = "Wiedermann"/>
            <Cartel
            materia = "Programación Web Dinámica"
            horario1 = "18:30"
            horario2 = "20:30"

    
          />
          <Cartel
            materia = "Programación Web Estática"
            horario1 = "15:00"
            horario2 = "16:30"
          />

          <Cartel
            materia = "Sistemas Operativos I"
            horario1 = "14:20"
            horario2 = "15:50"
  
          />
          <Cartel
            materia = "Seguridad Informática"
            horario1 = "19:20"
            horario2 = "20:50"
          />
          <Cartel
            materia = "Testing"
            horario1 = "16:50"
            horario2 = "17:50"
          />
        </View>
    )
}


export default HomeScreen;