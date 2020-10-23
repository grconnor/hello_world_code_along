import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MainScreen from "./src/components/MainScreen";
import SecondScreen from "./src/components/SecondScreen";
import Login from './src/components/Login';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator()

const App = () => {
  return (

    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="The First Page" component={MainScreen} />
        <Stack.Screen name="The Second Page" component={SecondScreen} />
      </Stack
      .Navigator>
    </NavigationContainer>
  )
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
