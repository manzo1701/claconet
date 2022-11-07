import { signOut } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-auth.js"
import { auth } from './firebase.js'

const logout = document.querySelector('#logout') //Lo que viene del id=logout

logout.addEventListener('click', async () => {
await signOut(auth)
console.log('user signed out')
})