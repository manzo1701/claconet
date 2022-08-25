import AsyncStorage from "@react-native-community/async-storage" //Dependencia

const USUARIO_KEY = '@usuario:key'


async function saveUsuario(usuario){ //Recibo usuario que esta convertido en JSON
    try{
        await AsyncStorage.setItem(USUARIO_KEY, JSON.stringify(usuario)) //Uso la funcion stringify para comvertirlo a string
        return JSON.stringify(usuario)
    } catch (error) { //Manejo de errores
        console.log('Error al guardar: ' +error.message)
        return 'Error de sintaxis'
    }
}

