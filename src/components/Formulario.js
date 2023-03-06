import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, TextInput, Pressable, Button, TouchableOpacity, Alert, Modal } from 'react-native'
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import AsyncStorage from '@react-native-async-storage/async-storage';


const schema = yup.object({
    tarea: yup.string().required("Defina una tarea a realizar"),
    prioridad: yup.number().required("Se requiere dar un nivel de prioridad a la tarea").max(10, "La prioridad debe ser del 1 al 10"),
})

export default function Formulario() {
    const [modalVisible, setModalVisible] = useState(false);


    const [listaTarea, setListaTarea] = React.useState([])
    const { reset, control, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });

    const removeItem = async () => {
        try {
            setListaTarea("")
            const remove = await AsyncStorage.removeItem('DATO_GLOBAL');
            console.log("Datos eliminados de lista de tarea", listaTarea)
            console.log("Datos eliminados de storage", remove)
        } catch (error) {
            console.log("Este es el error de storeData", error)
        }
    }
    // const getData = async () => {
    //     const value = await AsyncStorage.getItem('DATO_GLOBAL');
    //     if (value !== null) {
    //         const valorGet = JSON.parse(value);
    //         console.log("valorGet", valorGet)
    //     }
    // }

    // const [testValue, setTestValue] = useState(null);
    // AsyncStorage.getItem("DATO_GLOBAL").then((value) => { setTestValue(value) });
    // console.log("testValue", testValue)



    const storeData = async (data) => {
        try {
            const value = await AsyncStorage.getItem('DATO_GLOBAL');
            console.log("Dato getValue", value)

            if (value !== null || value !== string) {
                const valueParse = JSON.parse(value)
                setListaTarea(valueParse)
            } else {
                setListaTarea("")
            }
            setListaTarea(prev => [...prev, JSON.stringify(data)])

            await AsyncStorage.setItem(
                'DATO_GLOBAL',
                "Este dato se lee"
            );
            const value2 = await AsyncStorage.getItem('DATO_GLOBAL');
            console.log("Dato getValue2", value2)
            console.log("Dato dentro de listaTarea", listaTarea)

            reset()
        } catch (error) {
            console.log("Este es el error de storeData", error)
        }

    }

    console.log("Esto seria lo que lee el FlatList", listaTarea)

    // useEffect(() => {
    //     const valueGet = async () => {
    //         const value = await AsyncStorage.getItem('DATO_GLOBAL');
    //         console.log("DATO_GLOBAL dentro del useEffects", value)
    //         // setListaTarea(value)
    //     }
    //     valueGet()
    // }, [listaTarea])




    return (
        <View style={styles.centeredView}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    Alert.alert('Modal has been closed.');
                    setModalVisible(!modalVisible);
                }}>
                <View style={styles.container}>
                    <Controller
                        control={control}
                        name="tarea"
                        render={({ field: { onChange, onBlur, value } }) => (
                            <TextInput
                                onChangeText={onChange}
                                onBlur={onBlur}
                                value={value}
                                placeholder='Escribe una tarea'
                                style={styles.input}
                            />
                        )}
                    />
                    {errors.tarea && <Text style={styles.labelError}>{errors.tarea?.message}</Text>}

                    <Controller
                        control={control}
                        name="prioridad"
                        render={({ field: { onChange, onBlur, value } }) => (
                            <TextInput
                                onChangeText={onChange}
                                onBlur={onBlur}
                                value={value}
                                placeholder='Define la prioridad'
                                keyboardType='number-pad'
                                style={styles.input}
                            />
                        )}
                    />

                    {errors.prioridad && <Text style={styles.labelError}>{errors.prioridad?.message}</Text>}

                    <TouchableOpacity style={styles.containerButton} onPress={handleSubmit(storeData)}>
                        <Text style={styles.button}>Guardar</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <Button
                        title="Eliminar datos"
                        onPress={removeItem}
                    />
                </View>
            </Modal>

        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 2,
        width: "100%",
        alignItems: 'center',
        marginBottom: 150,
    },

    input: {
        borderRadius: 20,
        width: "90%",
        height: 70,
        backgroundColor: "white",
        paddingHorizontal: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
        elevation: 10,
        marginBottom: 10,
    },

    containerButton: {
        backgroundColor: "#49AAF3",
        width: 230,
        height: 55,
        borderRadius: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
        elevation: 3,
        justifyContent: "center",
        marginTop: 25,

    },

    button: {
        textAlign: "center",
        fontWeight: "bold",
        color: "white",
        fontSize: 16,
    },

    labelError: {
        color: "#EA3333",
        fontSize: 14,
        fontWeight: "bold",
        textAlign: "center",
        marginBottom: 20,

    },

    // MODAL
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
        
    },
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
    },
    buttonOpen: {
        backgroundColor: '#F194FF',
    },
    buttonClose: {
        backgroundColor: '#2196F3',
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
    },

})