import AsyncStorage from "@react-native-community/async-storage" //Dependencia

const USUARIO_KEY = '@usuario:key'

//Funciones

async function saveUsuario(usuario){ //Recibo usuario que esta convertido en JSON
    try{
        await AsyncStorage.setItem(USUARIO_KEY, JSON.stringify(usuario)) //Uso la funcion stringify para comvertirlo a string
        return JSON.stringify(usuario)
    } catch (error) { //Manejo de errores
        console.log('Error al guardar: ' +error.message)
        return 'Error de sintaxis'
    }
}

async function getUsuario(){
    try {
        const item = await AsyncStorage.getItem(USUARIO_KEY) //Llamo a AsyncStorage y con la funcion getItem le mando el key 
        return JSON.parse(item) //Con parse transformo el string a JSON
    } catch (error) {
        console.log("Error al recuperar:" + error.message)
        return null
    }
}

async function deleteUsuario(){ //Usuario elimine su sesion
    try {
        await AsyncStorage.removeItem(USUARIO_KEY) //Envio de KEY para que lo puede remover
        const item = await AsyncStorage.getItem(USUARIO_KEY) //Llamo a getItem 
        return (item == null?"usuario removido":"usuario no removido") //nul para ver si se removio al usuario 
    } catch (error) {
        console.log("Error al eliminar" + error.message)
        return "Error de sintaxis"
    }
}

export {saveUsuario, getUsuario, deleteUsuario} 
