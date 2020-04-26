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
        <Text style={styles.text} category='h3'>
          Welcome to Stockket
        </Text>
        <Text style={styles.text} category='s1'>
          Made with 🧻 by Brian, Edward, Sean, and Karl
        </Text>
        <Button style={styles.likeButton} accessoryLeft={HeartIcon} onPress={() => pulseIconRef.current.startAnimation()}>
          LIKE
        </Button>
        <LoginButton/>
      </Layout>
  );
  }
}

const pulseIconRef = React.createRef();
const HeartIcon = (style) => (
  <Icon name='heart' ref={pulseIconRef} animation='shake' {...style} />
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
    marginTop: 10,
  },
  likeButton: {
    marginTop: 50,
    marginVertical: 16,
  },
});
