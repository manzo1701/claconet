import react from 'react'
import{Alert, Text, View, Button} from "react-native";
import '../Styles/Styles.css'


const Profesor = (props) => { 
    const {profe} = props //declarando constante la variable hora y dando elvalor props
    return (  
    <View >
    <Text>Profesor:</Text>
    <Text>{profe}</Text>
    </View>
    )
}
export default Profesor