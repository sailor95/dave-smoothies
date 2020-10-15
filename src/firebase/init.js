import firebase from 'firebase';
import firestore from 'firebase/firestore';

var firebaseConfig = {
  apiKey: 'AIzaSyAUFIq5JUfAQQcVkaURDtVF67q-poylbTw',
  authDomain: 'ninja-smoothies-f902f.firebaseapp.com',
  databaseURL: 'https://ninja-smoothies-f902f.firebaseio.com',
  projectId: 'ninja-smoothies-f902f',
  storageBucket: 'ninja-smoothies-f902f.appspot.com',
  messagingSenderId: '946925424388',
  appId: '1:946925424388:web:a1db593d00c06f07c44a51',
  measurementId: 'G-V9MNX27K1F',
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default firebaseApp.firestore();
