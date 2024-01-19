import {initializeApp} from 'firebase/app'
// authebtication
import { getAuth } from 'firebase/auth'
// storage bucket
import { getStorage } from 'firebase/storage'
// firesorage
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBgq8pX7t8b6cokT5UueMDSVJUOzmwADGM",
    authDomain: "react-chat-4f9e4.firebaseapp.com",
    databaseURL: "https://react-chat-4f9e4-default-rtdb.firebaseio.com",
    projectId: "react-chat-4f9e4",
    storageBucket: "react-chat-4f9e4.appspot.com",
    messagingSenderId: "199682340730",
    appId: "1:199682340730:web:797f83b9836fa62d8948c3",
    measurementId: "G-L2RMBHC6XM"
  };

  //firebase instance
  export const app = initializeApp(firebaseConfig)
  // auth instance
  export const auth = getAuth()
  // storege 
  export const store = getStorage()
  // firestorage
  export const db = getFirestore()