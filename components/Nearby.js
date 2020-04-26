import {Icon, Input, Layout, Text} from "@ui-kitten/components";
import {Dimensions, StyleSheet, Image, View} from "react-native";
import React, { useState, useEffect} from "react";
import MapView from 'react-native-maps';
import * as Location from 'expo-location';

export default function Nearby() {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

  let text = 'Waiting...';
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }

    return (
      <Layout style={{flex: 1, marginTop: 70, alignItems: 'center'}}>
        <Input
          placeholder='Search'
          accessoryLeft={SearchIcon}
          accessoryRight={MicIcon}
        />
        {location && <MapView style={styles.mapStyle}
         initialRegion={{
          latitude: location['coords']['latitude'],
          longitude: location['coords']['longitude'],
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421
        }}/>}
        {!location && <View style={{flex:1, alignItems:'center'}}><Text>{text}</Text>
        <Image
          style={styles.tinyLogo}
          source={require('../assets/splash.png')}/></View>
        }
      </Layout>
  );
}
const SearchIcon = (style) => (
  <Icon name='search' {...style} fill={'black'}/>
);
const MicIcon = (style) => (
  <Icon name='mic' {...style} fill={'black'}/>
);

const styles = StyleSheet.create({
  text: {
    textAlign: 'center',
    color: 'black',
  },
  mapStyle: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});
