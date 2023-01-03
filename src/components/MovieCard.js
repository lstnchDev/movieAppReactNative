import { Alert, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import Colors from "../constants/Colors"
import { AntDesign, EvilIcons, Fontisto  } from '@expo/vector-icons'; 
import { useState } from "react";

const MovieCard = ({title, vote_imdb, vote_count, subTitle, release_date, onPressMovie})=>{
    const [likeState, setLike] = useState(false)
    
    const onPressLike=()=>setLike(!likeState)
    
    const onPress = ()=> onPressMovie(0)

    return(
        <View style={styles.container}>
            <TouchableOpacity style={styles.movieContainer} onPress={onPress}>
                <AntDesign 
                    name="heart" 
                    size={22} 
                    color={likeState ? "red" : "white"}
                    style={{position: "absolute", bottom: 10, left: 5}} 
                    onPress={onPressLike}
                    />
                <Text style={styles.title}>{title}</Text>
                <Fontisto 
                    name="imdb" 
                    size={35} 
                    color="yellow" 
                    style={{position: "absolute", right: 5}}
                >
                    <Text style={styles.vote}>{vote_imdb}</Text>
                </Fontisto>
            </TouchableOpacity>
            <View>
                <Text numberOfLines={2}>{subTitle}</Text>
            </View>
            <View style={styles.rating}>
                <Text>Release: {release_date}</Text>
                    <View style={styles.rating}>
                        <AntDesign 
                            name="heart" 
                            size={24} 
                            color="red" 
                            style={{marginHorizontal: 10}} 
                        />
                        <Text>{vote_count}</Text>
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

    },
    title: {
        textAlign: "center",
        color: Colors.WHITE,
        fontWeight: 600,
        fontSize: 22,
        marginVertical: 120,
    },
    vote: {
        color:"red", 
        fontSize: 22, 
        backgroundColor: Colors.IMDB_COLOR,
        paddingHorizontal: 5,
        paddingVertical: 5,
        textAlign: "center",
    }
})

export default MovieCard