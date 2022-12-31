import { useState } from "react"
import { Alert, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import Colors from "../constants/Colors"

const GenreCard = ({genre, btnActive, press})=>{

    return (
        <TouchableOpacity style={{
            ...styles.container,
            backgroundColor: btnActive ? Colors.DEFAULT_BTN : Colors.WHITE
            }} onPress={()=>press(genre)}>
            <Text>{genre}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        paddingVertical: 8,
        borderRadius: 5,
        margin: 5,
        width: 100,
    }
})
export default GenreCard