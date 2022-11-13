import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-auth.js"
import { auth } from "./app/firebase.js"
import {loginCheck} from './app/loginCheck.js'
import './app/signupForm.js'
import './app/signinForm.js'
import './app/googleLogin.js'
import './app/logout.js'
// import { View } from "react-native"
// import MainStack from "../navigation/mainStack.js"
    
// function main(){
//     return(
//        <View style = {{flex: 1}}>
//             <MainStack />
//        </View>
//     )
// }

// const styles = StyleSheet.create({

//     container: {
//       flex: 1,
//       backgroundColor: '#fff',
//       alignItems: 'center',
//       justifyContent: 'center',
//     },

//   });


onAuthStateChanged(auth, async (user) =>{ //Pendiente del estado del usuario
    loginCheck(user)
    // if (user){
    // }else{
    //     loginCheck(user)
    // }
})

export default main;