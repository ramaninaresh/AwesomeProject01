import React from 'react';
import { Button, View, Alert, Text, StyleSheet } from 'react-native';

const AboutPage = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>You have reached inside About Page!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  buttonContainer: {
    width: 200, // Adjust the width as desired
    paddingVertical: 10,
  },
  text: {
    color: 'white', // Set the text color to white
  },
});

export default AboutPage;
