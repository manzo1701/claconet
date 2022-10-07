import React from 'react'
import { View, Text } from 'react-native'
import Boton from '../Components/Boton'
import '../Styles/Styles.scss'
const Materias  = ({ navigation, props }) => {
  return (
    
    <div className='body'>
      <div>
        <div className='boton'>
        <Boton
      text = "Programacion Web Dinamicas"
        onPress = {() => {
        navigation.navigate('asignatura_1')
        }}
      />
        </div>
        <div className='boton'>       
      <Boton
      text = "Sistema Operativos"
        onPress = {() => {
        navigation.navigate('asignatura_2')
        }}
      />
        </div>
        <div className='boton'>         
      <Boton
      text = "Organizacion y Arquitectura"
        onPress = {() => {
        navigation.navigate('asignatura_3')
        }}
      />
      </div>

      <div className='boton'>       

      <Boton
      text = "Sistema de Gestion y calidad de Software"
        onPress = {() => {
        navigation.navigate('asignatura_4')
        }}
      />
        </div>

      <div className='boton'>       

      <Boton
      text = "Tecnologia y redeas"
        onPress = {() => {
        navigation.navigate('asignatura_5')
        }}
      />
        </div>

      <div className='boton'>       
      <Boton
      text = "Ingles"
        onPress = {() => {
        navigation.navigate('asignatura_6')
        }}
      />
        </div>

              <div className='boton'>       

      <Boton
      text = "Etica y Deontologia"
        onPress = {() => {
        navigation.navigate('asignatura_7')
        }}
      />
        </div>

              <div className='boton'>       

      <Boton
      text = "Computacion Grafica"
        onPress = {() => {
        navigation.navigate('asignatura_8')
        }}
      />
        </div>
         <div className='boton'>       
      <Boton
      text = "Seguridad Informatica"
        onPress = {() => {
        navigation.navigate('asignatura_9')
        }}
      />
      </div>

      </div>
    </div>
  )
}

export default Materias