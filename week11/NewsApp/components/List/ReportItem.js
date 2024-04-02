import { View, Text, StyleSheet, Pressable, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

// Component for rendering individual report items
function ReportItem(props) {
  const navigation = useNavigation();

  // Function to handle navigation to report detail screen
  function selectedReportHandler() {
    navigation.navigate("ReportDetail", {
      reportId: props.id,
    });
  }

  return (
    // Container for the report item
    <View
      style={[
        styles.itemContainer,
        { backgroundColor: props.listIndex % 2 == 0 ? "#ccc" : "#fff" },
      ]}
    >
      <Pressable onPress={selectedReportHandler}>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={{ uri: props.imageUrl }} />
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.header}>{props.headline}</Text>
          <Text style={styles.date}>{props.date}</Text>
        </View>
      </Pressable>
    </View>
  );
}

export default ReportItem;

const styles = StyleSheet.create({
  itemContainer: {
    paddingHorizontal: 5,
    paddingTop: 5,
    marginBottom: 10,
    borderRadius: 7,
  },
  button: {
    flex: 1,
  },
  imageContainer: {
    height: 300,
  },
  image: {
    height: "100%",
    resizeMode: "cover",
    borderRadius: 7,
  },
  infoContainer: {
    flex: 1,
    alignItems: "center",
  },
  header: {
    fontSize: 35,
    fontFamily: "breakingNews",
    padding: 10,
    textAlign: "center",
    fontWeight: "bold",
  },
  date: {
    fontSize: 25,
    fontFamily: "breakingNews",
    paddingBottom: 5,
  },
});
