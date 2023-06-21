import React from 'react';
import {Text, View} from 'react-native';
import { WebView } from 'react-native-webview';



function App() 
{
  
  return <WebView source={{ uri: 'http://retailhub.pythonanywhere.com/' }} style={{ flex: 1 }} />;
 
  
}

export default App;
