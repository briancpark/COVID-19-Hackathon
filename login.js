// login form built from this tutorial:
// https://medium.com/react-native-development/easily-build-forms-in-react-native-9006fcd2a73b
import React, { Component } from 'react';
import { Text, View, Button, StyleSheet, TouchableOpacity } from 'react-native';
import t from 'tcomb-form-native';

// Form
const Form = t.form.Form;

// Form model
const User = t.struct({
  user: t.String,
  email: t.String,
  password: t.String
});

export default class App extends Component {
  handleSubmit() {
    console.log(this.loginform);
  }
  
  render() {
    return (
      <View style={styles.container}>
      <Text>Login</Text>
        <Form ref={c => this.loginform = c} type={User} />
        <TouchableOpacity style={styles.forms}
          title="Login"
          onPress={this.handleSubmit}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    marginTop: 150,
    padding: 20,
    backgroundColor: '#ffffff',
  },
  forms: {
    color: '#fff',
    backgroundColor: '#1c1c1c',
    borderRadius: 45
  }
 });
