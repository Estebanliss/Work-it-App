import React from "react";
import { StyleSheet, Text, View, Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { BottomTabNavigator } from "./src/navigation/BottomTab"
 
export default function App() {

  return (
      <NavigationContainer>
        <BottomTabNavigator />
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    flexDirection: "column",
    backgroundColor: "#E6E6E6",

  },

});
