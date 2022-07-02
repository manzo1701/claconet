import react from 'react'
import{Alert, Text, View, Button, TextInput, StyleSheet, TouchableOpacity} from "react-native";
import { ImageBackground } from 'react-native-web';

export default function ClasesConsulta() {
    return (
    <View style={styles.contenedor}>
<Text style={styles.header}>Clase de consulta</Text>
        <TouchableOpacity onPress={() => Alert.alert('texto tocado')}>    
        <Text style={styles.button}>Nombre jefatura</Text>
        </TouchableOpacity>
        
        <Text style={styles.box}>Profesor: </Text>
        <Text>Nombre profe </Text>
        <Text>Horarios: </Text>
        <Text>Dia-horario </Text>
    
    
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
    button:{
    color: '#ffff',
    fontSize: 30,
    fontFamily: 'nunito',
    backgroundcolor:'black',
    }
})

