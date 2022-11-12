import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import  Cartel  from './../UI/components/cartelMateria'

const HomeScreen = ({ navigation }) => {

    return(
        
        <View style={styles.container}>

            <Text style={{fontSize: 24}}>Agrega una nueva clase</Text><br></br>
            <Button
                title='Agregar Clase'
                onPress={() => 
                setTimeout(() => {
                    navigation.navigate('Materia')
                }, 1000)
            }
            /><br></br>

            <Text style={{fontSize: 24}}>Mis clases</Text>
            <Cartel 
                materia='Programación Web Dinámica'
                horario1='18:00'
                horario2='19:20'
            />

            <Cartel
                materia='Seguridad Informática'
                horario1='22:20'
                horario2='23:00'
            />
            <Cartel
                materia='Programación Web Estática'
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