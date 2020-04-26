import React from "react";
import { Button, Icon, List, ListItem } from '@ui-kitten/components';
import { StyleSheet, Text } from 'react-native';

const data = new Array(18).fill({
  title: 'Joe Lorem',
  description: 'Anyone have a spare Ipsum?',
});

data[0] = {title: 'John is asking', description: 'Which groceries are in stock? 2km away'};
data[1] = {title: 'Tim is requesting', description: 'Masks. 3km away'};
data[2] = {title: 'Bob wants to donate', description: 'Handsanitizer. 5km away'};

export default function Recents() {

  const renderItemAccessory = (props) => (
    <Button size='tiny' status={'success'}></Button>
  );

  const renderItemIcon = (props) => (
    <Icon {...props} name='person' fill={'gray'}/>
  );

  const renderItem = ({ item, index }) => (
    <ListItem
      title={<Text style={{fontSize:16}}>{item.title}</Text>}
      description={item.description}
      accessoryLeft={renderItemIcon}
      accessoryRight={renderItemAccessory}
    />
  );

  return (
    <List
      style={styles.container}
      data={data}
      renderItem={renderItem}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 90,
  },
});
