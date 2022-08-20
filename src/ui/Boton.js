import react from 'react'
import{Alert, Text, View, Button, TextInput, StyleSheet, Touchable} from "react-native";
import { block } from 'react-native-reanimated';
import { ImageBackground } from 'react-native-web';
import { TouchableOpacity } from 'react-native-gesture-handler';


const Boton = (props) => { 
    const {onPress,text} = props
    return (  
    <View >
        <View>
        <TouchableOpacity
            onPress ={onPress}
        >                  
            <Text>
                {text}
            </Text>
            </TouchableOpacity>
        </View>
    </View>
    )
}
export default Boton




