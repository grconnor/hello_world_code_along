import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { useSelector } from 'react-redux';
import { StyleSheet, Text, View } from 'react-native';

const MainScreen = (props) => {
  const greeting = useSelector(state => state.mainPageGreeting)
  return (
    <View style={styles.container}>
      <Text>{greeting}</Text>
      <Button
        title="Press Me!"
        onPress={() => props.navigation.navigate("Another Page", {customParameter: "Hi there Connor!"})}
      />
    </View>
  )
}

export default MainScreen

const styles = StyleSheet.create({
  flex: 1,
  backgroundColor: '#fff',
  alignItems: 'center',
  justifyContent: 'center'
})
