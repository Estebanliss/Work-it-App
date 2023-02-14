import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import Formulario from './Formulario'
import ListScreen from './ListScreen'

const ContentComponents = () => {
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
    }
    return (
        <View>
            <Formulario />
            {/* <ListScreen lista={list} /> */}
        </View>
    )
}

export default ContentComponents

const styles = StyleSheet.create({})