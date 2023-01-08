import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
import Colors from "../constants/Colors"
import { AntDesign, Fontisto  } from '@expo/vector-icons'; 
import { useState } from "react";

const MovieCard = ({title, vote_imdb, vote_count, subTitle, release_date, onPressMovie, original_title})=>{
    const [likeState, setLike] = useState(false)
    
    const onPressLike=()=>setLike(!likeState)
    
    const onPress = ()=> onPressMovie(title)

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
                <Text style={styles.title}>{original_title}</Text>
                <Fontisto 
                    name="imdb" 
                    size={35} 
                    color="yellow" 
                    style={styles.vote}
                >
                    <Text style={styles.voteText}>{vote_imdb}</Text>
                </Fontisto>
            </TouchableOpacity>
            <View style={styles.titleContainer}>
                <View>
                        <Text style={styles.movieTitle} numberOfLines={2}>{title}</Text>
                    </View>
                    <View style={styles.rating}>
                        <Text>Release: {release_date}</Text>
                            <View style={styles.rating}>
                                <AntDesign 
                                    name="heart" 
                                    size={24} 
                                    color="red" 
                                    style={{marginHorizontal: 5}} 
                                />
                                <Text>{vote_count}</Text>
                            </View>
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
        borderRadius: 12,
        height: 300,


    },
    rating:{
        flexDirection: "row",
        justifyContent: "space-between",

    },
    title: {
        textAlign: "center",
        color: Colors.WHITE,
        fontWeight: "bold",
        fontSize: 22,
        marginVertical: 120,
    },
    vote: {
        position: "absolute", 
        right: 5,
        flexDirection: "column"
    },
    voteText: {
        textAllign: "center",
        color: Colors.IMDB_COLOR, 
        fontSize: 20, 
        title: {

    },
    titleContainer:{
        marginVertical: 10,
    },
    movieTitle: {
        marginVertical: 5,
    }
})

export default MovieCard