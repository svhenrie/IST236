import { StyleSheet, View, Text } from "react-native";
import Colors from "../constants/colors";
import { Button } from "react-native";

function RecipesItem(props) {
  return (
    <View style={styles.item}>
      <View style={styles.itemTitleContainer}>
        <Text style={styles.itemTitle}>{props.title}</Text>
      </View>
      {/* Button to view a recipe */}
      <View style={styles.itemButtonContainer}>
        <View style={styles.button}>
          <Button title="View" onPress={props.onView} />
        </View>
        {/* Button to delete a recipe */}
        <View style={styles.button}>
          <Button title="Delete" onPress={props.onDelete} />
        </View>
      </View>
    </View>
  );
}

export default RecipesItem;

const styles = StyleSheet.create({
  item: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 8,
    borderRadius: 6,
    backgroundColor: Colors.accent500,
  },
  itemTitleContainer: {
    justifyContent: "center",
  },
  itemTitle: {
    fontSize: 20,
    color: Colors.primary300,
    padding: 8,
  },
  itemButtonContainer: {
    flexDirection: "row",
  },
  button: {
    marginVertical: 5,
    marginHorizontal: 3,
  },
});
