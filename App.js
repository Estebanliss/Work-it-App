import React, { useState } from "react";
import { StyleSheet, Text, View,Alert } from 'react-native';
import Formulario from "./src/components/Formulario";
import List from "./src/components/List"


export default function App() {
  const [textItem, setTextItem] = useState("")
  const [list, setList] = useState([])
  const [itemSelected, setItemSelected] = useState("")
  const [modalVisible, setModalVisible] = useState(false)


  // const onItem = (event) => {
  //   setTextItem(event)
  // }

  // const addItem = () => {
  //   setList(prevState => [...prevState, textItem])
  //   setTextItem("")
  // }

  const handleModal = ({ item, tarea }) => {
    setItemSelected(tarea)
    setModalVisible(true)
  }

  

  const completeTask = () => {
    Alert.alert("Se completó la tarea")
  }

  const handleDelete = () => {
    Alert.alert("Se eliminó la tarea")

    // setList(prevState => prevState.filter(element => element !== item));
    // setModalVisible(!modalVisible)
  }


  return (
    <View style={styles.container}>
      <View style={styles.titleApp1}>
        <Text style={styles.titleApp}>WORK-IT</Text>
      </View>
      <Formulario />
      
      
      <List lista={list}/>



      {/* <ModalEdit eliminar={handleDelete()} complete={completeTask()} itemSelected={itemSelected} visible={modalVisible}/> */}
    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    flexDirection: "column",
    backgroundColor: "#E6E6E6",

  },

  //TITULO
  titleApp1: {
    flex: 1,
    width: "100%",
  },

  titleApp: {
    textAlign: 'center',
    marginTop: 70,
    fontSize: 30,
    fontWeight: "800",
    color: "#49AAF3",
  },

  //INPUT


  
});
