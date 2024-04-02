import { View, StyleSheet, FlatList } from "react-native";
import ReportItem from "./ReportItem";

// Function to render a list of report items
function List(props) {
  // Function to render each report item
  function renderReportItem(itemData) {
    const reportItemProps = {
      id: itemData.item.id,
      type: itemData.item.type,
      imageUrl: itemData.item.imageUrl,
      headline: itemData.item.headline,
      date: itemData.item.date,
      author: itemData.item.author,
      agency: itemData.item.agency,
      description: itemData.item.description,
      listIndex: itemData.index,
    };
    return <ReportItem {...reportItemProps} />;
  }
  // Returning JSX to render the list
  return (
    <View style={styles.container}>
      <FlatList
        data={props.items}
        keyExtractor={(item) => item.id}
        renderItem={renderReportItem}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

export default List;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "black"
  },
  backgroundImage: {
    opacity: 0.1,
  },
});
