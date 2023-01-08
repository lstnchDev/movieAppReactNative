import { Dimensions, StyleSheet, Text, View } from "react-native"
import SwiperFlatList from "react-native-swiper-flatlist"

const TestCart = ()=>{
    const colors = ['tomato', 'thistle', 'skyblue', 'teal'];
    return (
        <View style={styles.container}>
            <SwiperFlatList
                index={2}
                data={colors}
                renderItem={({ item }) => (
                    <View style={[styles.child, { backgroundColor: item }]}>
                    <Text style={styles.text}>{item}</Text>
                    </View>
                )}
            />
        </View>
    )
}

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: 'white' },
    child: { width, justifyContent: 'center' },
    text: { fontSize: width * 0.5, textAlign: 'center' },
  });
  
export default TestCart