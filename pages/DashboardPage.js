import React from 'react';
import { View, Button, StyleSheet } from 'react-native';

const DashboardPage = ({ navigation }) => {
  const handleLogoff = () => {
    navigation.popToTop(); // Navigate to the Home page by popping all screens from the stack
  };

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: null, // Hide the back button
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <Button title="Logoff" onPress={handleLogoff} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black' // Set the background color to black
  },
  buttonContainer: {
    width: 200, // Adjust the width as desired
    paddingVertical: 10,
  },
});

export default DashboardPage;
