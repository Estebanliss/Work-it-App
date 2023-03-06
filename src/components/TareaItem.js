import React from 'react'
import { StyleSheet, Text, View, Pressable } from 'react-native'
// import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
// import { faCircleCheck, faTrashAlt } from '@fortawesome/free-regular-svg-icons'
import { COLORS } from '../constants/Color'
import Ionicons from "@expo/vector-icons/Ionicons"




const TareaItem = ({ item }) => {
    return (
        <View style={styles.container}>
            <View style={styles.tareaContainer}>
                <Text>{item.tarea}</Text>
            </View>
            <View style={styles.buttonContainer}>
                <Pressable
                    style={[styles.buttonTareaItem, styles.finish]}
                    onPress={() => console.log("Estas en el List")}>
                    <Ionicons name="list-sharp" size={20} color="black" />

                    {/* <FontAwesomeIcon size={20} color={COLORS.tercero} icon={faCircleCheck} /> */}
                </Pressable>
                <Pressable
                    style={[styles.buttonTareaItem, styles.delete]}
                    onPress={() => console.log("Estas en Metas")}>
                    <Ionicons name="list-sharp" size={20} color="black" />

                    {/* <FontAwesomeIcon size={20} color={COLORS.cuarto} icon={faTrashAlt} /> */}
                </Pressable>
            </View>
        </View>
    )
}

export default TareaItem

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "left",
        alignItems: "left",
        flexDirection: "row"
    },

    buttonContainer: {
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        backgroundColor: "blue",
    },

    buttonTareaItem: {
        padding: 12,
        borderColor: COLORS.quinto
    },

})