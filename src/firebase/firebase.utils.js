import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
  apiKey: "AIzaSyAhHj6bmxyDJAYADJOFjheEKGvNhgGkvyA",
  authDomain: "clothes-shop-db-8a4c3.firebaseapp.com",
  projectId: "clothes-shop-db-8a4c3",
  storageBucket: "clothes-shop-db-8a4c3.appspot.com",
  messagingSenderId: "306170472194",
  appId: "1:306170472194:web:00f1b4d27dcec66039441b"
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({prompt: 'select_account'})

export const signInWithGoogle = () => auth.signInWithPopup(provider)
export default firebase