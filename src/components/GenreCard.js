import { useState } from "react"
import { Alert, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import Colors from "../constants/Colors"

const GenreCard = ({genre, btnActive, pressGenre, genreId})=>{

    return (
        <TouchableOpacity style={{
            ...styles.container,
            backgroundColor: btnActive ? Colors.DEFAULT_BTN : Colors.WHITE,
            }} onPress={()=>pressGenre(genreId)}>
            <Text style={{
                ...styles.title,
                color: btnActive ? Colors.WHITE : "black"
            }}>{genre}</Text>
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
    },
    title: {
        fontWeight: "bold",
    }
})
export default GenreCard