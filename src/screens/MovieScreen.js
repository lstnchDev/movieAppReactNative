import { useEffect, useState } from "react"
import { Button, FlatList, Image, StyleSheet, Text, View } from "react-native"
import Loader from "../components/Loader"
import ReviewCard from "../components/ReviewCard"
import Colors from "../constants/Colors"
import { getMovieDetail, getReview } from "../services/MovieServices"


const MovieScreen = ({navitgation, route})=>{

    const [dataMovie, setDataMovie] = useState([])
    const [dataReview, setDataReview] = useState([])
    const [reviewStatus, setReviewStatus] = useState(false)

    useEffect(()=>{
        getMovieDetail(route.params.movieTitle).then((movieResp)=>setDataMovie(movieResp.data.docs[0]))
    }, [dataReview])

    const onGetReview = ()=> {
        setReviewStatus(!reviewStatus)
        if (!reviewStatus) getReview(dataMovie.id).then((reviewResp)=>setDataReview(reviewResp.data.docs))
    }
    const poster = (dataMovie.poster == undefined ? "none" : dataMovie.poster.url)
    const rating = (dataMovie.rating == undefined ? "none" : dataMovie.rating)
 
    const btnTitle = reviewStatus ? "Свернуть отзывы" : "Развернуть отзывы"
    console.log(dataReview)
    return(
        <>
            {dataMovie.length <1 ? <Loader />
            :
                <View>
                <View style={{width: 400}}>
                    <Image  source={{uri: 'https://st.kp.yandex.net/images/film_big/1009017.jpg'}} />
                </View>
                <Text>{dataMovie.name}</Text>
                <Text>{dataMovie.description}</Text>
                <Text>IMDB: {rating.imdb}, KP: {rating.kp}</Text>
                <Text>Дата выхода: {dataMovie.year}</Text>
                <Button 
                    title={btnTitle}
                    color={Colors.DEFAULT_BTN}
                    onPress={onGetReview}
                />
                <View style={{display: `${reviewStatus ? "flex" : "none"}`}}>
                    {dataReview.length <1 ? <Loader />
                        : <FlatList
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
                    }
                       
                </View>
            </View>
            }
        </>
       
    )
}

const styles = StyleSheet({
    container:{

    }
})

export default MovieScreen