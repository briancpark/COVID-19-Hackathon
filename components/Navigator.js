import React from 'react';
import {StyleSheet, View} from "react-native";
import { ApplicationProvider, Button, Icon, IconRegistry, Layout, Text } from '@ui-kitten/components';
import { BottomNavigation, BottomNavigationTab } from '@ui-kitten/components';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Login from './Login';
import Home from './Home';

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
    <React.Fragment>

      <BottomNavigation style={styles.bottomNavigation} {...topState}
        selectedIndex={state.index}
        onSelect={index => navigation.navigate(state.routeNames[index])}>
        <BottomNavigationTab title='Recents' icon={PersonIcon}/>
        <BottomNavigationTab title='Add' icon={BellIcon}/>
        <BottomNavigationTab title='Nearby' icon={EmailIcon}/>
      </BottomNavigation>

    </React.Fragment>
  );
};

export default function Navigator() {
  return (
      // <MainNavigator tabBar={props => <BottomTabBar {...props} />}>
      //   <Screen name='Recents' component={Home}/>
      //   <Screen name='Add' component={Login}/>
      //   <Screen name='Nearby' component={Login}/>
      // </MainNavigator>
      <View>
              <Tab.Navigator tabBar={props => <BottomTabBar {...props} />}>
        <Tab.Screen name='Recents' component={Home}/>
        <Tab.Screen name='Add' component={Home}/>
        <Tab.Screen name='Nearby' component={Login}/>
      </Tab.Navigator>
        <Text>very long string of text that will take up the whole screen</Text></View>
  )
};

const styles = StyleSheet.create({
  bottomNavigation: {
    marginVertical: 8,
  },
});
