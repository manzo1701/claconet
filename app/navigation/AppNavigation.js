import { createAppContainer } from "react-navigation"; /*Importe dos funciones*/ 
import { createStackNavigator } from "react-navigation-stack";
import SplashScreen from '@screens/SplashScreen' //Importar las pantallas
import LoginScreen from '@screens/LoginScreen'
import PrincipalScreen from '@screens/PrincipalScreen'
const AppNavigation = createStackNavigator({
    
    Splash: {
        screen: SplashScreen,
        navigationOptions: {
            headerShown: false, //El toolback de la pantalla lo elimino
        }
    },
    Login: {
        screen: LoginScreen,
        navigationOptions: {
            headerShown: false, //El toolback de la pantalla lo elimino
        }
    }, 
    Principal: {
        screen: PrincipalScreen,
        navigationOptions: {
            headerShown: false, //El toolback de la pantalla lo elimino
        }
    },
}) 

export default createAppContainer(AppNavigation) //Funcion, le paso la variable que declare en la constate