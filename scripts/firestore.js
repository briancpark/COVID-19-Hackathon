import * as firebase from 'firebase';

import "firebase/firestore";

export function firebaseInit() {
  const firebaseConfig = {
    apiKey: "AIzaSyBQarxIjRiG-s6rClLynmR74hBXxzAbmUs",
    authDomain: "hacknow-275317.firebaseapp.com",
    databaseURL: "https://hacknow-275317.firebaseio.com",
    projectId: "hacknow-275317",
    storageBucket: "hacknow-275317.appspot.com",
    messagingSenderId: "493237187020",
    appId: "1:493237187020:web:6dc6e50b87840d3092ad69"
  };
  firebase.initializeApp(firebaseConfig);

  console.log('Firebase Initialized!');
}


export function storeProductRequest(userId, productId) {
  firebase.firestore()
    .collection("users")
    .doc(userId)
    .collection("requests")
    .add({
      id: productId,
      lat: 300,
      long: 300,
    });
}

export function getProductRequests(userId) {
  firebase.firestore()
    .collection("users")
    .doc(userId)
    .collection("requests")
    .get()
    .then(snapshot => {
      snapshot.docs.forEach(doc => {

      })
    })
}

export function storeUser(userId, userData) {
  firebase.firestore()
    .collection("users")
    .doc(userId)
    .set(userData);
  console.log('User data added to firestore');
}