import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyByeTUcoJ_AIakt668gefTHKC8Yr9TS2yg',
  authDomain: 'kb-aviary.firebaseapp.com',
  databaseURL: 'https://kb-aviary.firebaseio.com',
  projectId: 'kb-aviary',
  storageBucket: 'kb-aviary.appspot.com',
  messagingSenderId: '793131587314',
  appId: '1:793131587314:web:7f9afe4947342f67e4226b',
  measurementId: 'G-8Q4E4R4L6E',
};

//Initialize Firebase

firebase.initializeApp(firebaseConfig);
export const firestore = firebase.firestore();
export const auth = firebase.auth();
export const storage = firebase.storage();

firebase.firestore().settings({ timestampsInSnapshots: true });
export default firebase;
