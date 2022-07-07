import react from 'react'
import{Alert, Text, View, Button, TextInput, StyleSheet, TouchableOpacity} from "react-native";
import { ImageBackground } from 'react-native-web';

export default function ClasesConsulta() { //funcion que se encarga de la plantilla de una materia
    return (  //contenido de la plantilla
    <View style={styles.contenedor}>  
<Text style={styles.header}>Clases de Consulta</Text>
        <TouchableOpacity onPress={() => Alert.alert('texto tocado')}> 
        <Text style={styles.button}>Nombre Jefatura</Text>
        </TouchableOpacity>

        <Text style={styles.text}>Profesor: </Text>
        <Text style={styles.text}>Nombre profe </Text>
        <Text style={styles.text}>Horarios: </Text>
        <Text style={styles.text}>Dia-horario </Text>
    
    
    </View>
    
    )
}

const styles = StyleSheet.create({ //estilos de la plantilla
   box:{ //estilo que intenta generar bordes en el contenido
    borderColor: '#ffff',
   },
   
    header:{ //estilo encargado del header, este se encuentra en clase de consulta
    fontSize: 40,
    alignItems: 'center',
    justifyContent: 'center',
    color: '#ffff',
   },
   text:{ //estilo encargado del texto osea profesr, nombre profe, horarios y dia horario
    color: '#ffff',
    fontSize: 10,
    alignItems: 'center',
    justifyContent: 'center',
   },
    button:{ //estilo dedicado a los botones este se situa temporalmente en nombre jefatura
    color: '#ffff',
    fontSize: 30,
    fontFamily: 'nunito',
    backgroundcolor:'black',
    }
})

