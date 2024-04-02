import { View, Text, Image, StyleSheet } from "react-native";
import { useState, useLayoutEffect } from "react";
import { REPORTS } from "../data/dummy_data";
import BookmarkButton from "../components/BookmarkButton";
import Colors from "../constants/colors";
import { BookmarksContext } from "../store/context/bookmarks-context";
import { useContext } from "react";

// Function to render the report detail screen component
function ReportDetailScreen(props) {
  const bookmarkedReportsCtx = useContext(BookmarksContext);

  const reportId = props.route.params.reportId;
  const selectedReport = REPORTS.find((report) => report.id === reportId);

  const reportIsBookmarked = bookmarkedReportsCtx.ids.includes(reportId);

   // Handler function to toggle bookmark status
  function changeBookmarkStatusHandler() {
    if (reportIsBookmarked) {
      bookmarkedReportsCtx.removeFavorite(reportId);
    } else {
      bookmarkedReportsCtx.addFavorite(reportId);
    }
  }

  // Effect to update navigation options
  useLayoutEffect(() => {
    props.navigation.setOptions({
      title: "",
      headerRight: () => {
        return (
          <BookmarkButton
            pressed={reportIsBookmarked}
            onPress={changeBookmarkStatusHandler}
          />
        );
      },
    });
  }, [props.navigation, changeBookmarkStatusHandler]);

  // Returning the JSX for the report detail screen
  return (
    <View style={styles.rootContainer}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={{ uri: selectedReport.imageUrl }} />
      </View>

      <View style={styles.infoContainer}>
        <Text style={styles.header}>{selectedReport.headline}</Text>
        <Text style={styles.details}>
          {selectedReport.date}
          {"\n"}
          {selectedReport.author} |{"\n"}
          {selectedReport.agency}
        </Text>

        <Text style={styles.desc}>{selectedReport.description}</Text>
      </View>
    </View>
  );
}

export default ReportDetailScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
  imageContainer: {
    marginVertical: 10,
    height: 300,
  },
  image: {
    height: "100%",
    resizeMode: "cover",
    borderRadius: 7,
  },
  infoContainer: {
    borderRadius: 7,
    backgroundColor: Colors.primary500o8,
    flex: 1,
    alignItems: "center",
  },
  header: {
    color: Colors.primary300,
    fontSize: 35,
    fontFamily: "breakingNews",
    padding: 15,
    textAlign: "center",
  },
  details: {
    color: Colors.primary300,
    fontSize: 25,
    paddingBottom: 5,
    paddingTop: 10,
  },
  desc: {
    color: Colors.primary300,
    textAlign: "center",
    width: "100%",
    fontSize: 15,
    padding: 10,
  },
  description: {
    color: Colors.primary300,
    width: "90%",
    textAlign: "justify",
    fontSize: 15,
    fontFamily: "breakingNews",
  },
});
