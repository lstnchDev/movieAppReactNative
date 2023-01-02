import { Alert, StyleSheet, Text, View } from "react-native"
import Colors from "../constants/Colors"
import { AntDesign, EvilIcons, Fontisto  } from '@expo/vector-icons'; 
import { useState } from "react";

const MovieCard = ()=>{
    const [likeState, setLike] = useState(false)
    
    const onPressLike=()=>setLike(!likeState)
    
    return(
        <View style={styles.container}>
            <View style={styles.movieContainer}>
                <AntDesign 
                    name="heart" 
                    size={22} 
                    color={likeState ? "red" : "white"}
                    style={{position: "absolute", bottom: 10, left: 5}} 
                    onPress={onPressLike}
                    />
                <Fontisto 
                    name="imdb" 
                    size={35} 
                    color="yellow" 
                    style={{position: "absolute", right: 5}}
                >
                    <Text style={{color:"red", fontSize: 22}}>9.4</Text>
                </Fontisto>
            </View>
            <View>
                <Text numberOfLines={2}>IRO - Surgial Strike Web Collection Steet Wev sadsadsadsadsa</Text>
            </View>
            <View style={styles.rating}>
                <Text>Hindi | (U/A)</Text>
                    <View style={styles.rating}>
                        <AntDesign 
                            name="heart" 
                            size={24} 
                            color="red" 
                            style={{marginHorizontal: 10}} 
                        />
                        <Text>90%</Text>
                    </View>
                </View>
            </View>
    )
}

const styles= StyleSheet.create({
    container: {
        marginVertical: 10,
        marginHorizontal: 15,
        width: 200,

    },
    movieContainer:{
        backgroundColor: Colors.DEFAULT_BTN,
        height: 300,
        borderRadius: 12,
    },
    rating:{
        flexDirection: "row",
        justifyContent: "space-between",

    }
})

export default MovieCard