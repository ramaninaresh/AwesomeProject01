import React, { Component } from 'react';
import { Button, Text, TextInput, View, Alert, Keyboard, StyleSheet } from 'react-native';
import axios from 'axios';

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = { username: '', password: '' };
  }

  userlogin = async () => {
    const { username, password } = this.state;
    const { navigation } = this.props; // Add this line to extract the navigation prop
    if (username.length === 0 || password.length === 0) {
      console.log('Username and Password not provided');
      Alert.alert('Error', 'Please enter both username and password');
    } else {
      Keyboard.dismiss();
      try {
        const response = await axios.post('http://10.33.25.114:3000/login', {
          username: username,
          password: password,
        });

        if (response.status === 200) {
          // The request was successful.
          Alert.alert(response.data.message);
          navigation.navigate('Dashboard'); // Navigate to the Dashboard page
          
        }
      } catch (error) {
        const errorString = `There is an error during login. Error: ${error}`;
        console.error(errorString);
        Alert.alert('Error', errorString);
      }
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          placeholder={'Username'}
          onChangeText={(username) => this.setState({ username })}
          style={[styles.textInput, styles.TestBoxInputMargin]}
        />
        <TextInput
          placeholder={'Password'}
          onChangeText={(password) => this.setState({ password })}
          style={[styles.textInput, styles.TestBoxInputMargin]}
        />
        <View style={styles.buttonContainer}>
        <Button title={'Login'} onPress={this.userlogin} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black', // Set the background color to black
  },
  buttonContainer: {
    width: 200, // Adjust the width as desired
    paddingVertical: 10,
  },

  textInput: {
    color: 'black', // Set the text color to white
    backgroundColor: 'white', // Set the text input background color to white
    width: 300,
    padding: 10, // Add padding of 10 units
    
  },

  TestBoxInputMargin: {
    marginBottom: 30, // Add margin to the bottom of the first text input
  },
});

export default LoginPage;
