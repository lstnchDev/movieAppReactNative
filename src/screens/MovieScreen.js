import { useEffect, useState } from "react"
import { Button, Dimensions, FlatList, Image, ScrollView, StyleSheet, Text, View } from "react-native"
import SwiperFlatList from "react-native-swiper-flatlist"
import Loader from "../components/Loader"
import ReviewCard from "../components/ReviewCard"
import Colors from "../constants/Colors"
import { getMovieDetail, getReview } from "../services/MovieServices"


const MovieScreen = ({route})=>{

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
                <ScrollView style={styles.container}>
                    <View >
                        <Image style={styles.poster}  source={{uri: poster}} />
                    </View>
                    <Text style={styles.title}>{dataMovie.name}</Text>
                    <Text style={styles.subTitle}>{dataMovie.description}</Text>
                    <View style={styles.rating}>
                        <Text style={styles.textRating}>IMDB: {rating.imdb}, KP: {rating.kp}</Text>
                        <Text style={styles.textRating}>Дата выхода: {dataMovie.year}</Text>
                    </View>
                    <Button 
                        title={btnTitle}
                        color={Colors.DEFAULT_BTN}
                        onPress={onGetReview}
                    />
                    <View style={{display: `${reviewStatus ? "flex" : "none"}`}}>
                        {dataReview.length <1 ? <Loader />
                            : 
                            <View style={styles.reviewContainer}>
                                <SwiperFlatList
                                    autoplayDelay={2}
                                    autoplayLoop
                                    index={2}
                                    data={dataReview}
                                    renderItem={({ item }) => (
                                        <View style={[styles.child, { backgroundColor: item }]}>
                                            <Text style={styles.title}>{item.title} - {item.type}</Text>
                                            <Text style={styles.review}>{item.review}</Text>
                                        </View>
                                    )}
                                />
                            </View>
                        }
                        
                    </View>
            </ScrollView>
            }
        </>
       
    )
}

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
    poster: {
        width: 350,
        height: 350,
        marginVertical: 20,
        alignSelf: "center",
    },
    container:{
        width: width,
    },
    title:{
        fontSize: 20,
        fontStyle: "normal",
        fontWeight: "bold"
    },
    subTitle: {
        fontSize: 16,
        marginVertical: 10,
        textAlign: 'center'
    },
    rating: {
        flexDirection: "row", 
        justifyContent: "space-around",
        marginVertical: 5,
    },
    textRating: {
        fontSize: 16,
        fontWeight: "bold"
    },
    title: {
        fontSize: 20,
        textAlign: "center",
        marginVertical: 10,
    },

    reviewContainer: { 
        flex: 1,
        justifyContent: "center",
        backgroundColor: 'white',
        padding: 5,
    },
    child: { 
        width: width-10,

     },

    review: {
        padding: 25,
        marginHorizontal: 10,
        fontSize: 16,
        backgroundColor: "yellow",
        borderRadius: 10,

    }
})

export default MovieScreen