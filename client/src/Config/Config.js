import * as firebase from 'firebase';
import 'firebase/firestore'
import 'firebase/auth'
const settings={timestampsInSnapshots:true }
var firebaseConfig = {
  apiKey: "",
  authDomain: "",
  databaseURL: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: "",
  measurementId: ""
  };
firebase.initializeApp(firebaseConfig);
firebase.firestore().settings(settings);
export const auth=firebase.auth()
export default firebase;
