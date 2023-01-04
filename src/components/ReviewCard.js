import { StyleSheet, Text, View } from "react-native"


const ReviewCard = ({title, type, review})=>{
    return (
        <View style={styles.container}>
            <Text>{title} - {type}</Text>
            <Text>{review}</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    container:{
        width: 400,
    }
})
export default ReviewCard