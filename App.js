import React, {useState, useEffect} from 'react';
import {Dimensions, StyleSheet, View} from "react-native";
import * as eva from '@eva-design/eva';
import { ApplicationProvider, Button, Icon, IconRegistry, Layout, Text } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import {
  mapping,
  light as theme,
} from '@eva-design/eva';
import Navigator from './components/Navigator';
import Home from './components/Home';
import Login from './components/Login';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import * as Firestore from './scripts/firestore';

const Stack = createStackNavigator();
Firestore.firebaseInit();

export default function App() {

  return (
    <View style={styles.container}>
     <IconRegistry icons={EvaIconsPack}/>
     <ApplicationProvider mapping={mapping} theme={theme}>
      <NavigationContainer>
        <View style={styles.everything}/>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Navigator" component={Navigator} options={{ headerShown: false }}/>
        </Stack.Navigator>
      </NavigationContainer>
     </ApplicationProvider>
    </View>
  );
}

const WIDTH = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    alignSelf: 'stretch',
    justifyContent: 'center',
  },
  text: {
    textAlign: 'center',
    color: 'black',
  },
  likeButton: {
    marginVertical: 16,
  },
  everything: {
    width: WIDTH,
  }
});
