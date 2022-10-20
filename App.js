import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MainStack from './Navigation/MainStack';
import './Styles/Styles.css'
import Video from 'react-native-video';
export default function App() {
  return (
    <div className='fondo'>
    <View >
      
      <h1 className='header'>Claconet</h1>

      <MainStack/>
      <div className='video'>
<Video source={require('./Resources/background.mp4')} repeat resizeMode='cover' muted rate={1.0}/>
      </div>
      
         </View>
         </div>
  );
}

