import { useState } from "react"
import { FlatList, ScrollView, StatusBar, StyleSheet, Text, View } from "react-native"
import GenreCard from "../components/GenreCard"
import MovieCard from "../components/MovieCard"
import Colors from "../constants/Colors"

const genres = ["All", "Action", "Comedy", "Romance", "Horror", "Sci-Fi"]

const HomeScreen = ()=>{
    const [btnActive, setActive] = useState("All")
    const press = (activeGenre="All")=> setActive(activeGenre)

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.headerContainer}>
                <Text style={styles.headerTitle}>Now Showing</Text>
                <Text style={styles.headerSubtitle}>VIEW ALL</Text>
            </View>
            <View>
                <FlatList 
                    data={genres}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    renderItem={({item, index})=> <GenreCard key={index} genre={item} press={press} btnActive={item === btnActive ? true : false}/>}
                    keyExtractor={item=>item.id}
                />
            </View>
            <View>
                <FlatList 
                    data={genres}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    renderItem={({item, index})=><MovieCard />
                    }
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