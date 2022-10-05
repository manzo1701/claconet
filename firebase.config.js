import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

export default function bd(){

    const firebaseConfig = {
        apiKey: "AIzaSyAZvNPgbwzay7-xsENI8HTCNJR6ALMho-0",
        authDomain: "claconet-35b91.firebaseapp.com",
        projectId: "claconet-35b91",
        storageBucket: "claconet-35b91.appspot.com",
        messagingSenderId: "540813190742",
        appId: "1:540813190742:web:6d5b4aa9aa380494363df7",
        measurementId: "G-MXZE4X2423"
      };
    
      const bd = initializeApp(firebaseConfig);
      const analytics = getAnalytics(bd);
}