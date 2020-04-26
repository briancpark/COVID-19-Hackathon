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

import { NavigationContainer } from '@react-navigation/native';

import * as Firestore from './scripts/firestore';


Firestore.firebaseInit();

export default function App() {

  return (
    <View style={styles.container}>
     <IconRegistry icons={EvaIconsPack}/>
     <ApplicationProvider mapping={mapping} theme={theme}>
      <NavigationContainer>
        <Navigator/>
      </NavigationContainer>
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
