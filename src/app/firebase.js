  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries
  import { getAuth } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-auth.js"

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyAZvNPgbwzay7-xsENI8HTCNJR6ALMho-0",
    authDomain: "claconet-35b91.firebaseapp.com",
    projectId: "claconet-35b91",
    storageBucket: "claconet-35b91.appspot.com",
    messagingSenderId: "540813190742",
    appId: "1:540813190742:web:6d5b4aa9aa380494363df7",
    measurementId: "G-MXZE4X2423"
  };

  // Initialize Firebase
  export const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  export const auth = getAuth(app)
  // export default app