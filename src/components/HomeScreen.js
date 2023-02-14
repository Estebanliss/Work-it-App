import React from 'react'
import { StyleSheet, Text, View, Pressable } from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faChartLine, faBullseye, faListUl, faHome, faPlus } from '@fortawesome/free-solid-svg-icons'

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const HomeScreen = () => {
  return (
      <Pressable
        style={styles.buttonNavBar}
        onPress={() => Alert.alert("Estas en el Home")}>
        <FontAwesomeIcon size={30} color={"silver"} icon={faHome} />
      </Pressable>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})