import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MainStack from './Navigation/MainStack';
import './Styles/Styles.css'
export default function App() {
  return (
    <div className='fondo'>
    <View >
      
      <h1 className='header'>Claconet</h1>

      <MainStack />
      
         </View>
         </div>
  );
}

