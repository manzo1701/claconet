import react from 'react'
import{Alert, Text, View, Button} from "react-native";
import '../Styles/Styles.css'


const Horario = (props) => { 
    const {hora} = props //declarando constante la variable hora y dando elvalor props
    return (  
    <div>
        <div>
        <Text>Horario:</Text>
        </div>
        <div>
        <Text>{hora}</Text>
        </div> 
    
    </div> 
    )
}
export default Horario