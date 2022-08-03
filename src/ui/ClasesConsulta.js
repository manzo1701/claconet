import react from 'react'
import{Alert, Text, View, Button, TextInput, StyleSheet, TouchableOpacity} from "react-native";
import { block } from 'react-native-reanimated';
import { ImageBackground } from 'react-native-web';

export default function ClasesConsulta() { //funcion que se encarga de la plantilla de una materia
    return (  //contenido de la plantilla
    
    <div className='header'>
    <h1 className='titulo'>Clases de consulta</h1>
    <div className='header_materia'>
<h2 className='titulo_materia'>nombre_materia</h2>
    </div>
    </div>
    /*<View style={styles.contenedor}>  
<Text style={styles.header}>Clases de Consulta</Text>
        <TouchableOpacity onPress={() => Alert.alert('texto tocado')}> 
        <Text style={styles.button}>Nombre Jefatura</Text>
        </TouchableOpacity>
<View style={styles.box}>
        <Text style={styles.text}>Profesor: </Text>
        <Text style={styles.text}>Nombre profe </Text>
        </View>
        <View style={styles.box2}>
        <Text style={styles.text}>Horarios: </Text>
        <Text style={styles.text}>Dia-horario </Text>
</View>                                
        
    
    
    </View>*/
    )
}

const styles = StyleSheet.create({ //estilos de la plantilla
   box:{ //estilo que intenta generar bordes en el contenido
    backgroundcolor:'#ffff',
    borderColor: '#ffff',
    boxsizing:'content-box',
    display: 'inline-block',
    padding: 20,
   },
   box2:{ //estilo que intenta generar bordes en el contenido
    backgroundcolor:'#ffff',
    borderColor: '#ffff',
    display: 'inline-block',
   },
   
    header:{ //estilo encargado del header, este se encuentra en clase de consulta
    fontSize: 40,
    alignItems: 'center',
    justifyContent: 'center',
    color: '#ffff',
   },
   text:{ //estilo encargado del texto osea profesr, nombre profe, horarios y dia horario
    color: 'black',
    backgroundColor:'#ffff',
    fontSize: 20,
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
