import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Pressable, Button, TouchableOpacity } from 'react-native'
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import AsyncStorage from '@react-native-async-storage/async-storage';


const schema = yup.object({
    tarea: yup.string().required("Defina una tarea a realizar"),
    prioridad: yup.number().required("Se requiere dar un nivel de prioridad a la tarea").max(10, "La prioridad debe ser del 1 al 10"), 
})

export default function Formulario() {
    const { reset, control, handleSubmit, formState: { errors } } = useForm({
        defaultValues:{
            tarea: "",
            prioridad: "",
        },
        resolver: yupResolver(schema)
    });

    const [list, setList] = useState([])

    function handleSignIn(data) {
        storeData(data),
        reset(),
        console.log("Esto es data SetItem", data)
    }

    
    const storeData = async (data) => {
        try {

            const task = JSON.stringify(data)
            await AsyncStorage.setItem('LIST-TASK', task)
        } catch (e) {
            console.log(e)
        }
    }


    

    


    return (
        <>
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

                <TouchableOpacity style={styles.containerButton} onPress={handleSubmit(handleSignIn)}>
                    <Text style={styles.button}>Guardar</Text>
                </TouchableOpacity>

                
            </View>
        </>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 2,
        width: "100%",
        alignItems: 'center',
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

})