const googleButton = document.querySelector('#googleLogin') //Identifico el boton de Login
import { googleAuthProvider, signInwithPopup } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-auth.js"
import { Auth } from './firebase,js'

googleButton.addEventListener('click', () => {

    const provider = new googleAuthProvider() //Instancia de googleAuth, la clase devuelve un objeto

    signInwithPopup(Auth, provider) //Lanzar ventana de autenticacion

})