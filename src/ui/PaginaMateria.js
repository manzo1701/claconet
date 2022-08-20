import react from 'react'
import{Alert, Text, View, Button, TextInput, StyleSheet} from "react-native";
import { block } from 'react-native-reanimated';
import { ImageBackground } from 'react-native-web';
import ClasesConsulta from './ClasesConsulta';
import Profesor from './Profesor'
import Horario from './Horaroi';

export default function PaginaMateria(props) { //funcion que se encarga de la plantilla de una materia
    const {materia} = props
    return (  
    
    <View>
        <View>
            <Text>{materia}</Text>
        <Profesor
                profe= "manuel"
            />
            <Horario
                hora= "9:00 a 10:00"
            />
        </View>
           
            <TextInput placeholder="Campo a rellenar (Obligatorio) especificando que materiales se lllevan para poder estudiar"/><br/>
   
          
            <Button title="Aceptar" onPress={() => console.log("Enviar")}/>
            
        </View>
    
    )
}


