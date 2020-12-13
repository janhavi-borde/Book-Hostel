import * as firebase from 'firebase';
import 'firebase/firestore'
import 'firebase/auth'
const settings={timestampsInSnapshots:true }
var firebaseConfig = {
  apiKey: "AIzaSyCkhuHz42_57tEU4bF9fyZA19hj8okXRYs",
  authDomain: "finalproject2-a3646.firebaseapp.com",
  databaseURL: "https://finalproject2-a3646.firebaseio.com",
  projectId: "finalproject2-a3646",
  storageBucket: "finalproject2-a3646.appspot.com",
  messagingSenderId: "489379931647",
  appId: "1:489379931647:web:52bb6f428c1d63f19fb3ca",
  measurementId: "G-3KG6VLMPNV"
  };
firebase.initializeApp(firebaseConfig);
firebase.firestore().settings(settings);
export const auth=firebase.auth()
export default firebase;