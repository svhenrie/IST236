import { StatusBar } from "expo-status-bar";
import { SafeAreaView, FlatList, StyleSheet, Text, View } from "react-native";
import { useState } from "react";

import MovieItem from "./components/MovieItem";

export default function App() {
  const [movieItems, setMovieItems] = useState([
    {
      name: "The Super Mario Bros. Movie",
      image: require("./assets/images/mario.jpg"),
      rating: "6",
    },
    {
      name: "Uncle Buck",
      image: require("./assets/images/uncleBuck.jpg"),
      rating: "6",
    },
    {
      name: "Monsters University",
      image: require("./assets/images/monsters.jpg"),
      rating: "7",
    },
    {
      name: "Star Wars: The Force Awakens",
      image: require("./assets/images/forceAwakens.jpg"),
      rating: "7",
    },
    {
      name: "A View to a Kill",
      image: require("./assets/images/jamesBond.jpg"),
      rating: "7.5",
    },
    {
      name: "The Bourne Identity",
      image: require("./assets/images/bourneIdentity.jpg"),
      rating: "8",
    },
    {
      name: "Star Wars: Episode III - Revenge of the Sith",
      image: require("./assets/images/sith.jpg"),
      rating: "8.5",
    },
    {
      name: "Knives Out",
      image: require("./assets/images/knivesOut.jpg"),
      rating: "9",
    },
    {
      name: "White Chicks",
      image: require("./assets/images/whiteChicks.jpg"),
      rating: "9.5",
    },
    {
      name: "Ratatouille",
      image: require("./assets/images/ratatouille.jpg"),
      rating: "10",
    },
  ]);
  return (
    <>
      <StatusBar style="dark" />
      <SafeAreaView style={styles.rootContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Top 10 Movies</Text>
        </View>

        <View style={styles.listContainer}>
          <FlatList>
            {movieItems.map((itemData) => (
              <MovieItem
                name={itemData.name}
                image={itemData.image}
                rating={itemData.rating}
              />
            ))}
          </FlatList>
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
