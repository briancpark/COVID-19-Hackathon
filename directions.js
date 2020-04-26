import getDirections from 'react-native-google-maps-directions';
import React, { Component } from 'react';
import { View, Button, Alert, StyleSheet } from 'react-native';
 
export default class gmapsDirections extends Component {
 
  handleGetDirections = () => {
    const data = {
       source: {
        latitude: 51.897745,
        longitude: -8.475152
      },
      destination: {
        latitude: 51.904121,
        longitude: -8.475110
      },
      
      params: [
        {
          key: "travelmode",
          value: "walking"        // may be "walking", "bicycling" or "transit" as well
        },
        {
          key: "dir_action",
          value: "navigate"       // this instantly initializes navigation using the given travel mode 
        },
        {
          key: "waypoints",
          value: [51.898625,-8.477390]
        }
      ]
    }
 
    getDirections(data)
  }
 
  render() {
    return (
      <View style={styles.container}>
        <Button onPress={this.handleGetDirections} title="Get Directions" />
      </View>
    );
  }
}

const styles = StyleSheet.create(
{
    container:
    {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
}
)
