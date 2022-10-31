
const signupForm = document.querySelector('#signup-form') //Identifico el elemento "signup-form" y lo guardo en una constante

signupForm.addEventListener('submit', (e) => { //De signupForm uso el evento "addEventListener", que escucha cuando se envia el formulario
    e.preventDefault() //para que no se recargue la pag

    const email = signupForm ['signup-email'].values
    const password = signupForm ['signup-password'].values

    console.log(email, password)
})