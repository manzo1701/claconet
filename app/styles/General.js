import { StyleSheet } from "react-native"
import Colors from "./Colors"

//Estilo para SplashScreen
const splashStyles = StyleSheet.create({
    image: {
        flex:1,
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:Colors.WHITE
    }
})


//Estilo para LoginScreen
const loginStyles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },

    logo: {
        paddingTop: 50,
        alignItems: 'center',
    },
})

export {imageBackgroundStyle}
