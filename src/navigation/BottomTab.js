import React from 'react'
import { StyleSheet, View, Text } from "react-native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from "../screens/HomeScreen"
import ListScreen from '../screens/ListScreen';
import GoalsScreen from '../screens/GoalsScreen';
import SummaryScreen from '../screens/SummaryScreen';
import Ionicons from "@expo/vector-icons/Ionicons"

const BottomTabs = createBottomTabNavigator();

export const BottomTabNavigator = () => {
  return (
    <BottomTabs.Navigator
      initialRouteName="Inicio"
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBar
      }}
    >
      <BottomTabs.Screen name="Inicio" component={HomeScreen}
        options={{
          tabBarIcon: () => (
            <View style={styles.icons}>
              <Ionicons name="home-sharp" size={20} color="black" />
              <Text>Home</Text>
            </View>
          )
        }}
      />
      <BottomTabs.Screen name="Lista" component={ListScreen}
        options={{
          tabBarIcon: () => (
            <View style={styles.icons}>
              <Ionicons name="list-sharp" size={20} color="black" />
              <Text>Tareas</Text>
            </View>
          )
        }} />
      <BottomTabs.Screen name="Tareas" component={GoalsScreen}
        options={{
          tabBarIcon: () => (
            <View style={styles.icons}>
              <Ionicons name="scan-sharp" size={20} color="black" />
              <Text>Objetivos</Text>
            </View>
          )
        }}
      />
      <BottomTabs.Screen name="Estadisticas" component={SummaryScreen}
      options={{
        tabBarIcon: () => (
          <View style={styles.icons}>
            <Ionicons name="analytics-sharp" size={20} color="black" />
            <Text>Historial</Text>
          </View>
        )
      }}/>
    </BottomTabs.Navigator>
  )
}

const styles = StyleSheet.create({
  tabBar: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    position: "absolute",
    bottom: 25,
    left: 20,
    right: 20,
    borderRadius: 15,
    height: 90,
  },
  icons: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
})