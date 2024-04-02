import { View, Text, StyleSheet } from "react-native";
import { useContext } from "react";
import { BookmarksContext } from "../store/context/bookmarks-context";
import { REPORTS } from "../data/dummy_data";
import List from "../components/List/List";
import Colors from "../constants/colors";

// Function to render the bookmarks screen component
function BookmarksScreen() {
    const bookmarkedReportsCtx = useContext(BookmarksContext);
    const bookmarkedReports = REPORTS.filter((reportItem) => {
      return bookmarkedReportsCtx.ids.includes(reportItem.id);
    });
  
    // If no reports are bookmarked, display a message
    if (bookmarkedReports.length === 0) {
      return (
        <View style={styles.rootContainer}>
          <Text style={styles.text}>You have no saved news reports yet!</Text>
        </View>
      );
      // If there are bookmarked reports, display the list
    } else {
      return <List items={bookmarkedReports} />;
    }
  }
  
  export default BookmarksScreen;
  
  const styles = StyleSheet.create({
    rootContainer: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "black"
    },
    text: {
      fontSize: 35,
      textAlign: "center",
      fontFamily: "breakingNews",
      color: Colors.primary300,
      opacity: 0.6
    },
  });
  