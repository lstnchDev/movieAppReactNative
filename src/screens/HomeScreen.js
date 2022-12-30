import { ScrollView, StatusBar, StyleSheet, Text, View } from "react-native"
import Colors from "../constants/Colors"


const HomeScreen = ()=>{
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.headerContainer}>
                <Text style={styles.headerTitle}>Now Showing</Text>
                <Text style={styles.headerSubtitle}>VIEW ALL</Text>
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