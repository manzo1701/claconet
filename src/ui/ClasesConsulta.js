import react from 'react'
import{Alert, Text, View, Button, TextInput, StyleSheet, TouchableOpacity} from "react-native";
import { ImageBackground } from 'react-native-web';

export default function ClasesConsulta() {
    return (
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

const styles = StyleSheet.create({
   box:{
    borderColor: '#ffff',
   },
    unification:{
        
   },
    header:{
    fontSize: 40,
    alignItems: 'center',
    justifyContent: 'center',
    color: '#ffff',
   },
   text:{
    color: '#ffff',
    fontSize: 20,
    alignItems: 'center',
    justifyContent: 'center',
   },
    button:{
    color: '#ffff',
    fontSize: 30,
    fontFamily: 'nunito',
    backgroundcolor:'black',
    }
})

