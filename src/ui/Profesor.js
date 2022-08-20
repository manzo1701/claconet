import react from 'react'
import{Alert, Text, View, Button} from "react-native";
import { block } from 'react-native-reanimated';
import { ImageBackground } from 'react-native-web';


const Profesor = (props) => { 
    const {profe} = props
    return (  
    <View >
    <Text>Profesor:</Text>
    <Text>{profe}</Text>
    </View>
    )
}
export default Profesor