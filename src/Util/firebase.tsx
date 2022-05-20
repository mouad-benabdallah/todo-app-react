// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyA-3l0Intf9ny0RS31wNc5qhCYMDzb3k48',
  authDomain: 'todo-app-d5a7e.firebaseapp.com',
  projectId: 'todo-app-d5a7e',
  storageBucket: 'todo-app-d5a7e.appspot.com',
  messagingSenderId: '427080028993',
  appId: '1:427080028993:web:c4d89bea5eace07dccc7c0',
  measurementId: 'G-KNJDG0Q0NF',
}

// Initialize Firebase
export const app = initializeApp(firebaseConfig)
export const analytics = getAnalytics(app)
export const auth = getAuth(app)
