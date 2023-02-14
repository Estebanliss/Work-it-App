import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Header = () => {
    return (
        <View style={styles.titleApp1}>
            <Text style={styles.titleApp}>WORK-IT</Text>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    //TITULO
    titleApp1: {
        flex: 1,
        width: "100%",
        marginBottom: 25,
    },

    titleApp: {
        textAlign: 'center',
        marginTop: 70,
        fontSize: 30,
        fontWeight: "800",
        color: "#49AAF3",
    },


})