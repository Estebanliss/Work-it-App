import { StyleSheet, Text, View, Pressable, Button, Alert } from 'react-native'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faChartLine, faBullseye, faListUl, faHome, faPlus } from '@fortawesome/free-solid-svg-icons'

const NavBar = () => {
    return (
        <View style={styles.containertNavBar}>
            <View style={styles.containerButton}>
                <Pressable
                    style={styles.buttonNavBar}
                    onPress={() => Alert.alert("Estas en el Home")}>
                    {/* <FontAwesomeIcon size={20} color={"white"} icon={faHause} /> */}
                    <FontAwesomeIcon size={20} color={"white"} icon={faHome} />
                </Pressable>
                <Pressable
                    style={styles.buttonNavBar}
                    onPress={() => Alert.alert("Estas en el List")}>
                    <FontAwesomeIcon size={20} color={"white"} icon={faListUl} />
                </Pressable>
                <Pressable
                    style={styles.buttonNavBar}
                    onPress={() => Alert.alert("Estas en Metas")}>
                    <FontAwesomeIcon size={20} color={"white"} icon={faBullseye} />
                </Pressable>
                <Pressable
                    style={styles.buttonNavBar}
                    onPress={() => Alert.alert("Estas en el Resumen")}>
                    <FontAwesomeIcon size={20} color={"white"} icon={faChartLine} />
                </Pressable>
            </View>
            <View style={styles.containerButtonAdd}>
                <Pressable
                    style={styles.buttonAdd}
                    onPress={() => setModalVisible(true)}>
                    <FontAwesomeIcon size={40} color={"white"} icon={faPlus} style={styles.buttonPlus}/>
                </Pressable>
            </View>
        </View>
    )
}

export default NavBar

const styles = StyleSheet.create({
    containertNavBar: {
        flex: 1,
        backgroundColor: "#49AAF3",
        // height: 50,
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-around",
        margin: "auto",
        // position: "absolute",
    },

    containerButton: {
        flexDirection: "row",
        fontSize: 5,
    },

    buttonNavBar: {
        marginRight: 10,
        padding: 20,
    },

    containerButtonAdd:{
        backgroundColor: "Black", 
        height: 100,
    },

    buttonAdd: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        height: 75,
        width: 75,
        backgroundColor: "#B0D8F6",
        borderRadius: 50,
        borderColor: "white",
        borderWidth: 5,
    },



})