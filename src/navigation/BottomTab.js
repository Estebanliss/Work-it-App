import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react'
import HomeScreen from "../components/HomeScreen"
import ListScreen from '../components/ListScreen';
import GoalsScreen from '../components/GoalsScreen';
import SummaryScreen from '../components/SummaryScreen';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faChartLine, faBullseye, faListUl, faHome, faPlus } from '@fortawesome/free-solid-svg-icons'

const Tab = createBottomTabNavigator();

export const BottomTab = () => {
  return (
    <Tab.Navigator>
        <Tab.Screen name = "Inicio" component ={HomeScreen} />
        <Tab.Screen name = "Lista" component ={ListScreen} />
        <Tab.Screen name = "Objetivos" component ={GoalsScreen} />
        <Tab.Screen name = "Estadisticas" component ={SummaryScreen} />
    </Tab.Navigator>
  )
}

