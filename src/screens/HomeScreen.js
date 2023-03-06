import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, Pressable, FlatList } from 'react-native'

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCircleCheck, faTrashAlt } from '@fortawesome/free-regular-svg-icons'
import { useFonts } from 'expo-font';

import TareaItem from '../components/TareaItem';
import Task from "../components/Task";
import { COLORS } from '../constants/Color';
import { TAREAS } from '../data/Tareas';
import Percentage from '../components/Percentage';


const HomeScreen = () => {

  const [task, setTask] = useState([])
  const [inProcess, setInProcess] = useState([])
  const [taskComplete, setTaskComplete] = useState([])

  useEffect(() => {
    const data = TAREAS;
    const dataOrder = data.sort(((a, b) => a.prioridad - b.prioridad))
    setTask(dataOrder)
    setInProcess(task.slice(0, 3))

  }, [task])

  useEffect(() => {
    task.forEach(task => {
      if (task.complete === true) {
        setTaskComplete(task)
      }
    })
  }, [task])


  const renderPrincipalesTareas = ({ item }) => {
    if (inProcess.length !== 0) {
      return (
        <View style={styles.containerTask} >
          <Task item={item} />
        </View>
      )
    } else {
      <View style={styles.containerTask} >
        <Text>Mostrar pantalla de inicio</Text>
      </View>
    }
  }

  const [fontsLoaded] = useFonts({
    RobotoBlack: require("../assest/fonts/Roboto-Black.ttf"),
    RobotoBold: require("../assest/fonts/Roboto-Bold.ttf"),
    RobotoLight: require("../assest/fonts/Roboto-Light.ttf"),
    RobotoRegular: require("../assest/fonts/Roboto-Regular.ttf"),
    RobotoThin: require("../assest/fonts/Roboto-Thin.ttf"),
    EmilysCandy: require("../assest/fonts/EmilysCandy-Regular.ttf"),
  })

  if (!fontsLoaded) {
    return null
  }

  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.title}>Éstas son tus tareas</Text>
        <Text style={styles.subtitle}>No pienses en otra cosa que no sea trabajar para cumplir con estas principales tareas</Text>
      </View >
      <FlatList
        data={inProcess}
        keyExtractor={item => item.id}
        renderItem={renderPrincipalesTareas}
      />
      <View style={styles.percentage}>
        <Percentage newStyle={{ fontFamily: "RobotoBold" }} />
      </View>
      <Pressable style={styles.buttonPressable} onPress={()=> console.log("Voy a ir a revisar tareas") }>
        <Text style={styles.textButtonPressable}>Mis tareas</Text>
      </Pressable>


    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },

  containerTask: {
    alignItems: "center",
    padding: 12,
  },

  textContainer: {
    marginTop: 100,
    alignItems: "center",
    height: 100,
  },

  title: {
    fontSize: 20,
    fontFamily: "RobotoBold",
    color: COLORS.quinto,
  },

  subtitle: {
    textAlign: "center",
    fontSize: 14,
    fontFamily: "RobotoThin",
    fontStyle: "italic",
    color: COLORS.quinto,

  },

  flatList: {
    maxHeight: 450,
    backgroundColor: "red",
  },

  percentage: {
    marginTop: 30,
    marginBottom: 30,
  },

  buttonPressable:{
    marginTop: 20,
  },

  textButtonPressable:{
    color: "blue",
    fontWeight: "bold",
  },

})