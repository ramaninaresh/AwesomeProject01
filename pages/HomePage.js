import React from 'react';
import { Button, View, Alert, Text, StyleSheet } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
       <View style={styles.buttonContainer}>
      <Button
        title="Login"
        onPress={() => navigation.navigate('Login', { name: 'Login Page' })}
        style={styles.button}
      />
      </View>
      <View style={styles.buttonContainer}>
      <Button
        title="About"
        onPress={() => navigation.navigate('About', { name: 'About US' })}
        style={styles.button}
      />
      </View>
    </View>
  );
};

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
  
});

export default HomeScreen;
