import React, { useState } from 'react'
import { Text, View, TextInput, Button, StyleSheet } from 'react-native'
import Horario from '../Components/Horarios'
import Profesor from '../Components/Profesor'
import Boton from '../Components/Boton'
import '../Styles/Styles.css'

const Asignatura_1 = ({ navigation }) => {
  
  return (
      <div className='body_Materia'>
        <div >
          <div>
          <h2>asignatura</h2>
          </div>
          <div >
            <div className='box_1'>
            <Profesor
                profe= "Exequiel"
            />
            </div>
          
            <div className='box_2'>
              <Horario
                hora= "9:00 a 10:00"
              />
            </div>
          </div>
        </div>

        <div className='consulta'>
           
            
          </div>

           <div className=''> 
           <Boton
      text = "volver a la lista"
        onPress = {() => {
        navigation.navigate('Materia')
        }}
          />
           </div>
        
      
      </div>
    )
  
}

export default Asignatura_1
/*
<TextInput placeholder="Campo a rellenar (Obligatorio) especificando que materiales se lllevan para poder estudiar"/><br/>
   
          
            <Button title="Aceptar" onPress={() => console.log("Enviar")}/>
            
const styles = StyleSheet.create({
  contenedor:{
    fontFamily: 'nunito',
    fontSize: '60px',
 justifyContent: 'center',
 alignItems: 'center',
 backgroundColor: '#b0c4de',
 margin: '20px'
  },
});*/
