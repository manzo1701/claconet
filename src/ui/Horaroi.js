import react from 'react'
import{Alert, Text, View, Button} from "react-native";
import { block } from 'react-native-reanimated';
import { ImageBackground } from 'react-native-web';


const Horario = (props) => { 
    const {hora} = props
    return (  
    <View >
    <Text>Horario:</Text>
    <Text>{hora}</Text>
    </View>
    )
}
export default Horario