import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import { COLORS } from '../constants/Color';


const Percentage = ({ newStyle }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.titlePercentage}>Hasta el momento has completado un</Text>
            <View style={styles.containerPercentage}>
                <Text style={{ ...styles.percentage, ...newStyle }}>60</Text>
                <Text style={styles.textPercentage}>%</Text>
            </View>
        </View>
    )
}

export default Percentage

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
    },

    containerPercentage: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },

    titlePercentage: {
        fontSize: 25,
        textAlign: "center",
    },

    percentage: {
        fontSize: 70,
        margin: 0,
        height: 90,
        color: COLORS.tercero

    },

    textPercentage: {
        fontSize: 25,
        textAlign: "center",
        color: COLORS.tercero
    },
})