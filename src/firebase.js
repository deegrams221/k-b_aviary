import 'firebase/analytics';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyAe7bn0IXLuugTa1yccJxjpCMdC8T0El18',
  authDomain: 'kbaviary.firebaseapp.com',
  databaseURL: 'https://kbaviary.firebaseio.com',
  projectId: 'kbaviary',
  storageBucket: 'kbaviary.appspot.com',
  messagingSenderId: '4836528908',
  appId: '1:4836528908:web:39f1d3a1eb829fad6caf29',
  measurementId: 'G-2N1MTD0FBF',
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const firestore = firebase.firestore();
const projectStorage = firebase.storage();
const analytics = firebase.analytics();

export { projectStorage, analytics, firestore, auth };

export default firebase;
