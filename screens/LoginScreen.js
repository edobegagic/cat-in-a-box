import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, TextInput, Image } from 'react-native';

import firebase from 'firebase';

export default class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
  }

  SignUp = (email, password) => {
    try {
      firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then(user => {
          alert('ulogiran', user);
        });
    } catch (error) {
      console.log(error.toString(error));
    }
  };

  LogIn = (email, password) => {
    try {
      firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then(res => {
          alert(res.user.email);
        });
    } catch (error) {
      console.log(error.toString(error));
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={{ padding: 15 }}>
          <Image
            style={{ width: 200, height: 200 }}
            source={require('../img/logo.png')}
          />
        </View>
        <Text>Username</Text>
        <View style={{ padding: 10, paddingBottom: 15 }}>
          <TextInput
            style={styles.input}
            onChangeText={email => this.setState({ email })}
          />
        </View>
        <Text>Password</Text>
        <View style={{ padding: 10 }}>
          <TextInput
            style={styles.input}
            onChangeText={password => this.setState({ password })}
          />
        </View>
        <Button
          onPress={() => this.LogIn(this.state.email, this.state.password)}
          title='Log In'
        />
        <View style={{ padding: 5 }} />
        <Button
          onPress={() => this.SignUp(this.state.email, this.state.password)}
          title='SignUp'
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'steelblue',
    alignItems: 'center',
    paddingTop: 20
  },
  input: {
    height: 30,
    width: 150,
    backgroundColor: 'lightblue',
    color: 'black',
    padding: 5,
    borderWidth: 2,
    borderColor: 'white'
  }
});
