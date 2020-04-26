import {Button, Icon, Layout, Text} from "@ui-kitten/components";
import {StyleSheet, View} from "react-native";
import React, {Component} from "react";


import UserManager from '../scripts/userManager';
import * as Firestore from '../scripts/firestore';

//create user manager
let userManager = new UserManager();


export default class Home extends Component {
  componentDidMount() {
    userManager.loginListener();
  }


  render() {
  return (
      <Layout style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text style={styles.text} category='h1'>
          Welcome to UI Kitten 😻
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
  }
}

const HeartIcon = (style) => (
  <Icon name='heart' {...style} />
);

const FacebookIcon = (props) => (
  <Icon name='facebook' {...props} />
);

const LoginButton = () => (
  <Button onPress={() => {userManager.logInWithFacebook();}} accessoryLeft={FacebookIcon}>Login with Facebook</Button>
);

const styles = StyleSheet.create({
  text: {
    textAlign: 'center',
    color: 'black',
  },
  likeButton: {
    marginVertical: 16,
  },
});
