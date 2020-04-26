import React from 'react';
import {StyleSheet, View, Dimensions} from "react-native";
import { ApplicationProvider, Button, Icon, IconRegistry, Layout, Text } from '@ui-kitten/components';
import { BottomNavigation, BottomNavigationTab } from '@ui-kitten/components';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Login from './Login';
import Home from './Home';
import Add from './Add';
import Nearby from './Nearby';

const Tab = createBottomTabNavigator();

const PersonIcon = (props) => (
  <Icon {...props} name='clock-outline' fill={'black'}/>
);

const BellIcon = (props) => (
  <Icon {...props} name='plus-outline' fill={'black'}/>
);

const EmailIcon = (props) => (
  <Icon {...props} name='pin-outline' fill={'black'}/>
);

const useBottomNavigationState = (initialState = 0) => {
  const [selectedIndex, setSelectedIndex] = React.useState(initialState);
  return { selectedIndex, onSelect: setSelectedIndex };
};

const BottomTabBar = ({ navigation, state }) => {

  const topState = useBottomNavigationState();

  return (
      <BottomNavigation style={styles.bottomNavigation} {...topState}
        selectedIndex={state.index}
        onSelect={index => navigation.navigate(state.routeNames[index])}>
        <BottomNavigationTab title='Recents' icon={PersonIcon}/>
        <BottomNavigationTab title='Add' icon={BellIcon}/>
        <BottomNavigationTab title='Nearby' icon={EmailIcon}/>
      </BottomNavigation>
  );
};

export default function Navigator() {
  return (
    <Tab.Navigator tabBar={props => <BottomTabBar {...props} />}>
      <Tab.Screen name='Recents' component={Home}/>
      <Tab.Screen name='Add' component={Add}/>
      <Tab.Screen name='Nearby' component={Nearby}/>
    </Tab.Navigator>
  )
};

const WIDTH = Dimensions.get('window').width;

const styles = StyleSheet.create({
  bottomNavigation: {
    marginVertical: 8,
    width: WIDTH,
  },
});
