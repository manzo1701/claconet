import { GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-auth.js"
import { auth } from './firebase.js'
import { showMessage } from './showMessage.js'

const googleButton = document.querySelector('#googleLogin') //Identifico el boton de Login

googleButton.addEventListener('click', async () => {
    
    const provider = new GoogleAuthProvider() //Instancia de googleAuth, la clase devuelve un objeto

    try {
     const credentials = await signInWithPopup(auth, provider) //Lanzar ventana de autenticacion
     console.log(credentials)

     const modal = bootstrap.Modal.getInstance(document.querySelector('#signinModal'))
     modal.hide()
     showMessage('Welcome '+ credentials.user.displayName, 'success')
        
    } catch (error) {
        console.log(error)
        
    }


})