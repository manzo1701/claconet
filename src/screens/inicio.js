import { Text, View, Button } from 'react-native'
import React from 'react'
import { Bienvenida } from '../../UI/components/bienvenida'
import Cartel from '../../UI/components/cartelMaterias'
import { render } from 'react-dom'

const HomeScreen = () => {

        return(
            <View>
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
        </View>             //Se guarda, por cada componente Cartel, en cada variable los datos para que despues se lean desde el props
    )
}
export default HomeScreen;