import React from 'react';
import {StyleSheet, View} from "react-native";
import { ApplicationProvider, Button, Icon, IconRegistry, Layout, Text } from '@ui-kitten/components';
import { BottomNavigation, BottomNavigationTab } from '@ui-kitten/components';

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

export default function Navigator() {

  const topState = useBottomNavigationState();

  return (
    <React.Fragment>

      <BottomNavigation style={styles.bottomNavigation} {...topState}>
        <BottomNavigationTab title='Recents' icon={PersonIcon}/>
        <BottomNavigationTab title='Add' icon={BellIcon}/>
        <BottomNavigationTab title='Nearby' icon={EmailIcon}/>
      </BottomNavigation>

    </React.Fragment>
  );
};

const styles = StyleSheet.create({
  bottomNavigation: {
    marginVertical: 8,
  },
});
