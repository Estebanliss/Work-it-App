import React from "react";
import { StyleSheet, Text, View, Alert } from 'react-native';
import Header from "./src/components/Header"
import NavBar from "./src/components/NavBar";
import ContentComponents from "./src/components/ContentComponents";
import { NavigationContainer } from '@react-navigation/native';
import { BottomTab } from "./src/navigation/BottomTab";
import { Provider } from "react-redux";
import store from "./src/store"


export default function App() {

  return (
    <Provider store={store}>
      <NavigationContainer>
        <BottomTab />
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    flexDirection: "column",
    backgroundColor: "#E6E6E6",

  },



  //INPUT



});
