import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
    apiKey: "AIzaSyAK8UVhZw-sMHzdtzTDQKqq4XT9kwFCTUk",
    authDomain: "crwn-db-b4afc.firebaseapp.com",
    projectId: "crwn-db-b4afc",
    storageBucket: "crwn-db-b4afc.appspot.com",
    messagingSenderId: "158947489676",
    appId: "1:158947489676:web:22eeca45310ab4246b88a9",
    measurementId: "${config.measurementId}"
  };

  firebase.initializeApp(config);
  
  export const createUserProfileDocument = async (userAuth, additionalData)=> {
    if (!userAuth) return;

    const userRef=firestore.doc(`users/${userAuth.uid}`);

    const snapShot=await userRef.get();

    if(!snapShot.exists){
      const {displayName,email}=userAuth;
      const createdAt=new Date();

      try{
await userRef.set({
  displayName,email,createdAt,...additionalData
})
      } catch (error) {
console.log('error creating user',error.message);
      }
    }
    return userRef;
  }
  
  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt:'select_account'});
  export const signInWithGoogle= ()=>auth.signInWithPopup(provider);

  export default firebase;