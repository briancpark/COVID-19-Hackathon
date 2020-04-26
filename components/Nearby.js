import {Button, Icon, Layout, Text, Input} from "@ui-kitten/components";
import {StyleSheet, View, Dimensions} from "react-native";
import React, {Component} from "react";
import MapView from 'react-native-maps';


export default class Nearby extends Component {

  render() {
    return (
      <Layout style={{flex: 1, marginTop: 70, alignItems: 'center'}}>
        <Input
          placeholder='Search'
          accessoryLeft={SearchIcon}
          accessoryRight={MicIcon}
          style={{marginBottom:50}}
        />
        <MapView style={styles.mapStyle}
         initialRegion={{
          latitude: 37.871666,
          longitude: -122.272781,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421
        }}/>
      </Layout>
  );
  }
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
