// Firebase core
import { initializeApp } from 'firebase/app'

// Firestore
import { getFirestore } from 'firebase/firestore'

// Configuración real del proyecto
const firebaseConfig = {
    apiKey: "AIzaSyAGbtCNNJpkOV4sLgrufVG0GPxwMydMr84",
    authDomain: "solution-landing.firebaseapp.com",
    projectId: "solution-landing",
    storageBucket: "solution-landing.firebasestorage.app",
    messagingSenderId: "712481578260",
    appId: "1:712481578260:web:28c6011909f764a4807601"
}

// Inicializar Firebase
const app = initializeApp(firebaseConfig)

// 👉 EXPORT NOMBRADO (ESTO FALTABA)
export const db = getFirestore(app)
