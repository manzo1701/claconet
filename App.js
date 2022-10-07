import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MainStack from './Navigation/MainStack';
import './Styles/Styles.scss'
export default function App() {
  return (
    <View >
      <div>
      <h1 className='header'>Claconet</h1>

      <MainStack />
      </div>
         </View>
  );
}

