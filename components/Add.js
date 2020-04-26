import {Button, Icon, Layout, Text, Input} from "@ui-kitten/components";
import {StyleSheet, View} from "react-native";
import React, {Component} from "react";


import UserManager from '../scripts/userManager';
import * as Firestore from '../scripts/firestore';
//create user manager
let userManager = new UserManager();
Firestore.firebaseInit();

export default class Add extends Component {

  render() {
    return (
      <Layout style={{flex: 1, marginTop: 70, alignItems: 'center'}}>
        <Input
          // value={value}
          placeholder='Search'
          accessoryLeft={SearchIcon}
          accessoryRight={MicIcon}
          // captionIcon={AlertIcon}
          // onChangeText={nextValue => setValue(nextValue)}
          style={{marginBottom:140}}
        />
        <Text style={styles.text} category='h5'>
          Please add your items you want to donate here
        </Text>
        <Text style={styles.text} category='s1'>
          Thank you. Oh, you're so kind.
        </Text>
        <Button style={styles.likeButton} accessoryLeft={HeartIcon} onPress={() => pulseIconRef.current.startAnimation()}>
          DONATE
        </Button>
      </Layout>
  );
  }
}
const pulseIconRef = React.createRef();
const HeartIcon = (style) => (
  <Icon name='heart' ref={pulseIconRef} animation='pulse' {...style} />
);
const SearchIcon = (style) => (
  <Icon name='search' {...style} fill={'black'}/>
);
const MicIcon = (style) => (
  <Icon name='mic' {...style} fill={'black'} onPress={() => Firestore.searchFood("Kraf")}/>
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
