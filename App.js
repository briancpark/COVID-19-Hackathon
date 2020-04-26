import React, {useState, useEffect} from 'react';
import {StyleSheet, View} from "react-native";
import * as eva from '@eva-design/eva';
import { ApplicationProvider, Button, Icon, IconRegistry, Layout, Text } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import {
  mapping,
  light as theme,
} from '@eva-design/eva';
import Navigator from './components/Navigator';
import UserManager from './scripts/userManager';
import * as Firestore from './scripts/firestore';

//initialize firebase
Firestore.firebaseInit();

//create user manager
let userManager = new UserManager();

const HomeScreen = () => (
  <Layout style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text style={styles.text} category='h1'>
          Welcome {userName} 😻
        </Text>
        <Text style={styles.text} category='s1'>
          Start with editing App.js to configure your App
        </Text>
        <Text style={styles.text} appearance='hint'>
          For example, try changing theme to Dark by simply changing an import
        </Text>
        <Button style={styles.likeButton} accessoryLeft={HeartIcon}>
          LIKE
        </Button>
        <LoginButton/>
  </Layout>
);

const HeartIcon = (style) => (
  <Icon name='heart' {...style} />
);

const FacebookIcon = (props) => (
  <Icon name='facebook' {...props} />
);

export const LoginButton = () => (
  <Button onPress={userManager.logInWithFacebook} accessoryLeft={FacebookIcon}>Login with Facebook</Button>
);

export default function App() {

  useEffect(() => {
    userManager.loginListener();
  })

  return (
    <View style={styles.container}>
     <IconRegistry icons={EvaIconsPack}/>
     <ApplicationProvider mapping={mapping} theme={theme}>
       <HomeScreen/>
       <Navigator/>
     </ApplicationProvider>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    textAlign: 'center',
    color: 'black',
  },
  likeButton: {
    marginVertical: 16,
  },
});
