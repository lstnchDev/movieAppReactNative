import { ActivityIndicator, StyleSheet, View } from "react-native"
import Colors from "../constants/Colors"

const Loader = ()=>{
    return (
        <View style={[styles.container, styles.horizontal]}>
            <ActivityIndicator size="large" color={Colors.IMDB_COLOR} />
        </View>
    )
}

const styles = StyleSheet.create({

})

export default Loader