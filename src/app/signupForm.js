import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-auth.js"
import {auth} from './firebase.js'
const signupForm = document.querySelector('#signup-form') //Identifico el elemento "signup-form" y lo guardo en una constante

signupForm.addEventListener('submit', async (event) => { //De signupForm uso el evento "addEventListener", que escucha cuando se envia el formulario
    event.preventDefault() //para que no se recargue la pag

    const email = signupForm['signup-email'].value
    const password = signupForm['signup-password'].value

    console.log(email, password)

    try {
        const userCredentials = await createUserWithEmailAndPassword(auth, email, password) //Promesa await
        console.log(userCredentials)

        const signupModal = document.querySelector('#signupModal')
        bootstrap.Modal.getInstance(signupModal)
    } catch (error) {
        console.log(error)
    }
})