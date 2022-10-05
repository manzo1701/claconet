import React from 'react'
import { Text, View, StyleSheet,TouchableOpacity } from 'react-native'
import '../Styles/Styles.css'


const Boton = (props) => {
    const {onPress, text} = props
    return(
        <div className='buttoncontainer'>
            <TouchableOpacity 
        onPress = {onPress}
        >
            <Text>
                {text}
                
            </Text>
        </TouchableOpacity>
        </div>
        
    )
}
export default Boton

const styles = StyleSheet.create({
    buttonContainer: {
    marginBottom: 10,
    backgroundColor: '#1e90ff',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: '5px',
    },

   butonText: {
        color: '#fff'

    },
})