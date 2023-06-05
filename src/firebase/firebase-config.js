// Import the functions you need from the SDKs you need
import {initializeApp} from 'firebase/app'
import {getFirestore} from 'firebase/firestore'
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAyhQx0g2coPwWhbvBX6CeoBNvneGKn0Ks',
  authDomain: 'the-thao-plus.firebaseapp.com',
  projectId: 'the-thao-plus',
  storageBucket: 'the-thao-plus.appspot.com',
  messagingSenderId: '971403796835',
  appId: '1:971403796835:web:2607f8fcb019309e4ef356',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

// Init services
export const db = getFirestore(app)
export const auth = getAuth(app)
