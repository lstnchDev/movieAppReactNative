import { useEffect } from "react"
import { useState } from "react"
import { FlatList, ScrollView, StatusBar, StyleSheet, Text, View } from "react-native"
import GenreCard from "../components/GenreCard"
import MovieCard from "../components/MovieCard"
import Colors from "../constants/Colors"
import { getComingMovies, getGenres, getNowShowingMovies } from "../services/MovieServices"

const genres = ["All", "Action", "Comedy", "Romance", "Horror", "Sci-Fi"]

const HomeScreen = ({navigation})=>{
    const [btnActive, setActive] = useState()
    const [dataMovie, setDataMovie] = useState([])
    const [genresMovie, setGenres] = useState([])
    const [upcomingMovies, setComingMovie] = useState([])
    const onPressGenre = (activeGenre)=> setActive(activeGenre)
    const onPressMovie = (movieTitle)=> navigation.navigate("Movie", {movieTitle: movieTitle})
    console.log(dataMovie)
    useEffect(()=>{
        getNowShowingMovies().then((movieResp)=> setDataMovie(movieResp.data))
        getGenres().then((movieGengres)=> setGenres(movieGengres.data))
        getComingMovies().then((moviesUpcoming)=> setComingMovie(moviesUpcoming.data))
    }, [])

    console.log(upcomingMovies)
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.headerContainer}>
                <Text style={styles.headerTitle}>Now Showing</Text>
                <Text style={styles.headerSubtitle}>VIEW ALL</Text>
            </View>
            <View>
                <FlatList 
                    data={genresMovie}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    renderItem={({item})=> <GenreCard 
                        key={item.id} 
                        genre={item.name} 
                        pressGenre={onPressGenre} 
                        btnActive={item.name === btnActive ? true : false}
                    />}
                    keyExtractor={item=>item.id}
                    
                />
            </View>
            <View>
                <FlatList 
                    data={dataMovie}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    renderItem={({item, index})=><MovieCard 
                        title={item.title}
                        vote_imdb={item.vote_average}
                        subTitle={item.overview}
                        release_date={item.release_date}
                        vote_count={item.vote_count}
                        onPressMovie={onPressMovie}
                    />
                    }
                />

            </View>
            <View style={styles.headerContainer}>
                <Text style={styles.headerTitle}>Now Showing</Text>
                <Text style={styles.headerSubtitle}>VIEW ALL</Text>
            </View>
            <View>
                <FlatList 
                    data={upcomingMovies}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    renderItem={({item})=><MovieCard
                    title={item.title}
                    vote_imdb={item.vote_average}
                    subTitle={item.overview}
                    release_date={item.release_date}
                    vote_count={item.vote_count}

                    />}
                />
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.DEFAULT_BACKGROUND
    },
    headerContainer:{
        flexDirection: "row",
        justifyContent:"space-between",
        paddingHorizontal: 25,
        paddingVertical: 20
    },
    headerTitle: {
        fontSize: 28
    },
    headerSubtitle: {
        fontSize: 20,
        color: Colors.DEFAULT_BTN
    }
})

export default HomeScreen