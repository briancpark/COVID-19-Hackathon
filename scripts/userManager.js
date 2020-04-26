import * as Facebook from 'expo-facebook';
import { Alert } from 'react-native';
import * as Firestore from './firestore.js';

import * as firebase from 'firebase';
import "firebase/auth";



export default class UserManager {
    constructor(){
        this.user = {};
    }


    getCurrentUserName(){
        console.log('Getting username: ', this.user.displayName);
        return this.user.displayName;
    }
    getCurrentUserPhoto(){
        return this.user.photoURL;
    }

    setCurrentUser(userId, userData) {
        this.user = {userId, ...userData};
        console.log('Current user set:', userData.displayName);
    }

    async logInWithFacebook() {
        try {
            await Facebook.initializeAsync('2030824550394470');
            const {
                type,
                token,
                expires,
                permissions,
                declinedPermissions,
            } = await Facebook.logInWithReadPermissionsAsync({
                permissions: ['public_profile'],
            });
            if (type === 'success') {
                // Get the user's name using Facebook's Graph API
                const response = await fetch(`https://graph.facebook.com/me?access_token=${token}`);
                Alert.alert('Logged in!', `Hi ${(await response.json()).name}!`);

                //connect user's token to firebase authentication
                authenticateUser(token);
            } else {
                // type === 'cancel'
            }
        } catch ({ message }) {
            alert(`Facebook Login Error: ${message}`);
        }
    }

    loginListener() {
        firebase.auth().onAuthStateChanged((user) => {
            if (user != null) {
                let userData = {
                    displayName: user.displayName,
                    photoURL: user.photoURL,
                }
                Firestore.storeUser(user.uid, userData);
                this.setCurrentUser(user.uid, userData);
            }
        })
    }
}

function authenticateUser(token) {
    const credential = firebase.auth.FacebookAuthProvider.credential(token);
    firebase.auth().signInWithCredential(credential).catch((error) => {
        console.log("Firebase Auth Error: ", error)
    }
    );
    console.log('User authenticated with firebase');
}