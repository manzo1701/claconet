import { View, Text } from 'react-native'
import React from 'react'

export default function infoMateria(props) {
    const { materia } = props

    return (
    <View>
      <Text>Materia : { materia }</Text>
    </View>
  )
}