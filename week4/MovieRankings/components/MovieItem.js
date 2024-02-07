import { Image, View, Text, StyleSheet } from "react-native";

function MovieItem(props) {
  return (
    <View style={styles.itemContainer}>
      <View style={styles.titleContainer}>
        <Text style={styles.itemTitle}>{props.name}</Text>
      </View>
      <View style={styles.imageContainer}>
        <Image style={styles.itemImage} source={props.image}/>
      </View>
      <View style={styles.ratingContainer}>
        <Text style={styles.itemRating}>{props.rating} / 10</Text>
      </View>
    </View>
  );
}

export default MovieItem;

const styles = StyleSheet.create({
    itemContainer: {
        marginBottom: 20
    },
    titleContainer: {
        backgroundColor: "#6365ba",
        borderWidth: 3,
        borderRadius: 5,
        borderStyle: "dotted",
        borderColor: "yellow",
    },
    itemTitle: {
        fontSize: 30,
        fontWeight: "bold",
        textAlign: "center"
    },
    imageContainer: {
        alignItems: "center",
        borderWidth: 5,
        borderRadius: 5,
        borderStyle: "double"
    },
    itemImage: {
        width: "100%",
        height: 525,
        resizeMode: "cover"
    },
    ratingContainer: {
        backgroundColor: "#6365ba",
        borderWidth: 3,
        borderRadius: 5,
        borderStyle: "dotted",
        borderColor: "yellow",
    },
    itemRating: {
        fontSize: 30,
        fontWeight: "bold",
        textAlign: "center"
    }
});