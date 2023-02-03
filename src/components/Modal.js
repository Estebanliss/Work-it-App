import React, { useState } from "react";
import { StyleSheet, Text, View, Modal, Pressable } from 'react-native'


const ModalEdit = ({ itemSelected, modalVisible, eliminar, complete } ) => {
    return (
        <View>
            <Text>Modal</Text>
            < Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                itemSelected={itemSelected}
            >
                <View style={styles.containerModal}>
                    <View style={styles.modalStyles}>
                        <Text>Estás por eliminar la siguiente tarea</Text>
                        <Text style={styles.textTareaModal}>{itemSelected}</Text>
                        <View style={styles.buttonsModal}>
                            <Pressable onPress={()=> eliminar}>
                                <Text style={[styles.buttons, styles.buttonNegative]} >Eliminar</Text>
                            </Pressable>
                            <Pressable onPress={()=> complete}>
                                <Text style={[styles.buttons, styles.buttonPositive]}>Completar</Text>
                            </Pressable>
                        </View>
                    </View>
                </View>
            </Modal >
        </View>
    )
}

export default ModalEdit

const styles = StyleSheet.create({

    //MODAL
    containerModal: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "rgba(52, 52, 52, 0.8)",
    },

    modalStyles: {
        justifyContent: "space-evenly",
        alignItems: "center",
        paddingVertical: 30,
        width: "90%",
        borderRadius: 10,
        backgroundColor: "white",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
        elevation: 10,
    },

    buttonsModal: {
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        width: "90%",
    },

    buttons: {
        width: 130,
        height: 50,
        textAlign: "center",
        fontWeight: "bold",
        color: "white",
        paddingHorizontal: 10,
        borderRadius: 20,
        paddingVertical: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
        elevation: 3,
    },

    buttonPositive: {
        backgroundColor: "#49AAF3",
    },

    buttonNegative: {
        backgroundColor: "#FDBF50",
    },

    textTareaModal: {
        fontSize: 20,
        fontWeight: "800",
        paddingTop: 15,
        paddingBottom: 35,
    }



})









