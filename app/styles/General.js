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

    btnMain: {
        width: 280,
        marginTop:40,
        marginBottom: 20,
        backgroundColor: Colors.BLUE,
        borderRadius: 60
    },

    btnTransparent: {
        backgroundColor: 'rgba(52, 52, 52, 0)',
        borderColor: Colors.BLUE,
        width: 280,
        borderWidth: 2,
        marginBottom: 20,
        borderRadius: 60
    },

    btntxt: {
        textAlign: 'center',
        fontSize: 17,
        color: Colors.WHITE,
        paddingVertical: 15,
        fontFamily: 'nunito.semibold',
    },

    txtTransparent: {
        color: Colors.LIGHTPRIMARYCOLOR,
        fontSize: 14,
        fontFamily: 'nunito.semibold',
    }
})

export { loginStyles, splashStyles }