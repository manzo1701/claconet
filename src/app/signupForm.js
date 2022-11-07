import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-auth.js"
import {auth} from './firebase.js'
import {showMessage} from './showMessage.js'

const signupForm = document.querySelector('#signup-form') //Identifico el elemento "signup-form" y lo guardo en una constante

signupForm.addEventListener('submit', async (event) => { //De signupForm uso el evento "addEventListener", que escucha cuando se envia el formulario
    event.preventDefault() //para que no se recargue la pag

    const email = signupForm['signup-email'].value
    const password = signupForm['signup-password'].value

    console.log(email, password)

    try {
        const userCredentials = await createUserWithEmailAndPassword(auth, email, password) //Promesa await
        console.log(userCredentials)

        //Cerrar el modal de registro
        const signupModal = document.querySelector('#signupModal')
        const modal = bootstrap.Modal.getInstance(signupModal)
        modal.hide()

        showMessage("Welcome " + userCredentials.user.email)


    } catch (error) {
        if (error.code === 'auth/email-already-in-use') {
            showMessage("Email already in use", "error")
        } else if (error.code === 'auth/invalid-email') {
            showMessage("Invalid email", "error")
        } else if (error.code === 'auth/weak-password') {
            showMessage("Weak password", "error")
        } else if (error.code) {
            showMessage("Something went wrong", "error")
        }  
    }   
})