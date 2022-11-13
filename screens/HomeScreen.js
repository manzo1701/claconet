import { useRoute } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import Boton from '../UI/components/Boton';
import Cartel from '../UI/components/cartelMaterias';

const HomeScreen = ({ navigation }) => {


    return(
        
        <View style={{alignItems: 'center'}}>

            <Text style={{fontSize: 24}}>Agrega una nueva clase</Text><br></br>
            
            
            <Boton
                text= 'Agregar'
                onPress = {() => navigation.navigate('Materia')}
            />
            
            
            
            <br></br>

            <Text style={{fontSize: 24}}>Mis clases</Text>
            <Cartel 
                nom = 'Programación Web Dinámica'
                horario1='18:00'
                horario2='19:20'
            />

            <Cartel
                nom = 'Seguridad Informática'
                horario1='22:20'
                horario2='23:00'
            />
            <Cartel
                nom = 'Programación Web Estática'
                horario1='19:30'
                horario2='20:50'
            />
        </View>

    
    )
}



const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

export default HomeScreen;