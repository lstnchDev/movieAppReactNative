import { useEffect, useState } from "react"
import { Button, FlatList, Image, StyleSheet, Text, View } from "react-native"
import ReviewCard from "../components/ReviewCard"
import Colors from "../constants/Colors"
import { getMovieDetail, getReview } from "../services/MovieServices"


const MovieScreen = ({navitgation, route})=>{

    const [dataMovie, setDataMovie] = useState([])
    const [dataReview, setDataReview] = useState([])

    useEffect(()=>{
        getMovieDetail(route.params.movieTitle).then((movieResp)=>setDataMovie(movieResp.data.docs[0]))
    }, [dataReview])

    const onGetReview = ()=> getReview(dataMovie.id).then((reviewResp)=>setDataReview(reviewResp.data.docs))
    const poster = (dataMovie.poster == undefined ? "none" : dataMovie.poster.url)
    const rating = (dataMovie.rating == undefined ? "none" : dataMovie.rating)

    console.log(dataReview)
    return(
        <View>
            <View style={{width: 400}}>
                <Image  source={{uri: 'https://st.kp.yandex.net/images/film_big/1009017.jpg'}} />
            </View>
            <Text>{dataMovie.name}</Text>
            <Text>{dataMovie.description}</Text>
            <Text>IMDB: {rating.imdb}, KP: {rating.kp}</Text>
            <Text>Дата выхода: {dataMovie.year}</Text>
            <Button 
                title="Раскрыть отзывы"
                color={Colors.DEFAULT_BTN}
                onPress={onGetReview}
            />
            <View>
                <FlatList
                    data={dataReview}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    renderItem={({item})=>
                        <ReviewCard 
                            key={item.id}
                            title={item.title}
                            type={item.type}
                            review={item.review}
                            keyExtractor={item=>item.id}
                        />
                }/>      
            </View>
        </View>
    )
}

const styles = StyleSheet({
    container:{

    }
})

export default MovieScreen