import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/DashboardPage';

const Stack = createStackNavigator();
const MyStack = () => {
   return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomePage} />
          <Stack.Screen name="Login" component={LoginPage} />
          <Stack.Screen name="Dashboard" component={DashboardPage} />
          <Stack.Screen name="About" component={AboutPage} />
      </Stack.Navigator>
      </NavigationContainer>
   );
};
export default MyStack;