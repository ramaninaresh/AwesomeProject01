import React, { Component } from 'react';
import { Button, Text, TextInput, View, Alert, Keyboard } from 'react-native';
import axios from 'axios';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = { username: '', password: '' };
  }

  userlogin = async () => {
    const { username, password } = this.state;
    if (username.length === 0 || password.length === 0) {
      console.log('Username and Password not provided');
      Alert.alert('Error', 'Please enter both username and password');
    } 
    else {
     
      Keyboard.dismiss();
       try
       {
          const response = await axios.post('http://10.33.25.114:3000/login', {
          username: username,
          password: password,
        });
        
        if (response.status === 200) {
          // The request was successful.
          Alert.alert(response.data.message);
        
       //   this.props.navigation.navigate('Dashboard');
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
      
        <View>
          <Text>Retailhub</Text>
          <TextInput
            placeholder={'Username'}
            onChangeText={(username) => this.setState({ username })}
          />
          <TextInput
            placeholder={'Password'}
            onChangeText={(password) => this.setState({ password })}
          />
          <Button title={'Login'} onPress={this.userlogin} />
        </View>
      
    );
  }
}


export default App;