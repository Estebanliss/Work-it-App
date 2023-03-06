import React from 'react'
import { StyleSheet, Text, View, Pressable, Alert } from 'react-native'

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCircleCheck, faTrashAlt } from '@fortawesome/free-regular-svg-icons'

import { COLORS } from '../constants/Color'


const Task = ({ item }) => {

    const buttonAlert = () =>
    Alert.alert('¡Bien hecho!, haz finalizado una nueva tarea.', 'Confirma si quieres darla por finalizada.', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {text: 'OK', onPress: () => console.log('OK Pressed')},
    ]);



    return (
        <View style={styles.container}>
            <View style={styles.tareaContainer}>
                <Text>{item.tarea}</Text>
            </View>
            <View style={styles.buttonContainer}>
                <Pressable
                    style={[styles.bottonTareaItem, styles.finish]}
                    onPress={buttonAlert}>
                    <FontAwesomeIcon size={25} color={COLORS.tercero} icon={faCircleCheck} style={styles.buttonIcon} />
                </Pressable>
            </View>
            <View style={styles.buttonContainer}>
            </View>
        </View>
    )
}

export default Task

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        width: "95%",
        padding: 15,
        borderColor: "black",
        borderWidth: 1,
        borderRadius: 15,
        alignItems: "center",
        backgroundColor: "white",

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,

    },
    tareaContainer: {
        width: "90%",
        justifyContent: "center",
    },
    buttonContainer: {
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
    },

    buttonTareaItem: {
        borderColor: COLORS.quinto
    },

    buttonIcon: {
        margin: 7,
    },

})