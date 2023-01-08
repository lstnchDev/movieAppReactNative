import { Dimensions, StyleSheet, Text, View } from "react-native"
import { SwiperFlatList } from 'react-native-swiper-flatlist';
import Colors from "../constants/Colors";


const ReviewCard = ({dataReview})=>{
    return (
        <View style={styles.container}>
            <SwiperFlatList
                autoplayDelay={2}
                autoplayLoop
                index={2}
                data={dataReview}
                renderItem={({ item }) => (
                    <View style={styles.child}>
                        <Text style={styles.title}>{item.title} - {item.type}</Text>
                        <Text style={styles.review}>{item.review}</Text>
                    </View>
                )}
            />
         </View>
    )
}

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: { 
        flex: 1,
        justifyContent: "center",
        backgroundColor: Colors.WHITE,
        padding: 5,

    },
    child: { 
        width: width-10,

     },

    review: {
        padding: 25,
        marginHorizontal: 10,
        fontSize: 16,
        backgroundColor: Colors.REVIEW,
        borderRadius: 10,
        width: width-10,

    }

})
export default ReviewCard