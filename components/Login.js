// login form built from this tutorial:
// https://medium.com/react-native-development/easily-build-forms-in-react-native-9006fcd2a73b
import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import t from 'tcomb-form-native';
import { Button } from '@ui-kitten/components';

// Form
const Form = t.form.Form;

// Form model
const User = t.struct({
  user: t.String,
  email: t.String,
  password: t.String
});

export default class Login extends Component {
  handleSubmit = () => {
    const value = this._form.getValue(); // use that ref to get the form value
    console.log('value: ', value);
  }

  render() {
    return (
      <View style={styles.container}>
      <Text>Login</Text>
        <Form ref={c => this._form = c} type={User} />
        <Button style={styles.forms} onPress={this.handleSubmit}>
          Log In!
        </Button>
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
