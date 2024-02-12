import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View, FlatList } from "react-native";
import { useState } from "react";

import MovieItem from "./components/MovieItem";

export default function App() {
  // Variable to store data for each movie
  const [movieItems, setMovieItems] = useState([
    {
      name: "The Super Mario Bros. Movie",
      image: require("./assets/images/mario.jpg"),
      rating: "6",
      id: 1,
    },
    {
      name: "Uncle Buck",
      image: require("./assets/images/uncleBuck.jpg"),
      rating: "6",
      id: 2,
    },
    {
      name: "Monsters University",
      image: require("./assets/images/monsters.jpg"),
      rating: "7",
      id: 3,
    },
    {
      name: "Star Wars: The Force Awakens",
      image: require("./assets/images/forceAwakens.jpg"),
      rating: "7",
      id: 4,
    },
    {
      name: "A View to a Kill",
      image: require("./assets/images/jamesBond.jpg"),
      rating: "7.5",
      id: 5,
    },
    {
      name: "The Bourne Identity",
      image: require("./assets/images/bourneIdentity.jpg"),
      rating: "8",
      id: 6,
    },
    {
      name: "Star Wars: Episode III - Revenge of the Sith",
      image: require("./assets/images/sith.jpg"),
      rating: "8.5",
      id: 7,
    },
    {
      name: "Knives Out",
      image: require("./assets/images/knivesOut.jpg"),
      rating: "9",
      id: 8,
    },
    {
      name: "White Chicks",
      image: require("./assets/images/whiteChicks.jpg"),
      rating: "9.5",
      id: 9,
    },
    {
      name: "Ratatouille",
      image: require("./assets/images/ratatouille.jpg"),
      rating: "10",
      id: 10,
    },
  ]);
  return (
    <>
      {/* Set the main screen */}
      <StatusBar style="dark" />
      <SafeAreaView style={styles.rootContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Top 10 Movies</Text>
        </View>

        {/* Display the data using a FlatList */}
        <View style={styles.listContainer}>
          <FlatList
            data={movieItems}
            keyExtractor={(item) => item.id}
            alwaysBounceVertical={false}
            showsVerticalScrollIndicator={false}
            renderItem={(itemData) => {
              return (
                <MovieItem
                  name={itemData.item.name}
                  image={itemData.item.image}
                  rating={itemData.item.rating}
                />
              );
            }}
          />
        </View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: "#2c2c31",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 40,
  },
  titleContainer: {
    flex: 1,
    justifyContent: "center",
    marginBottom: 20,
    paddingHorizontal: 5,
    borderWidth: 5,
    borderRadius: 10,
    backgroundColor: "#91979f",
    borderStyle: "dotted",
    borderColor: "yellow",
  },
  title: {
    fontSize: 35,
    fontWeight: "bold",
  },
  listContainer: {
    flex: 8,
    width: "90%",
  },
});
