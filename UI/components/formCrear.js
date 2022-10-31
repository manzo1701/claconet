import { View, Text } from 'react-native'
import React from 'react'

const FormCrear = () => {
  return (
    <View>
      <form>
        <label type='text' name='materia'/>
        <label type='text' name='profesor'/>
      </form>
    </View>
  )
}

export default FormCrear;