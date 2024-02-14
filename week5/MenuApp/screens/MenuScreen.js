import { View, Text, FlatList, } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { StyleSheet } from "react-native";
import { useState } from "react";

import NavButton from "../components/NavButton";
import Title from "../components/Title";
import MenuItem from "../components/MenuItem";

function MenuScreen(props) {
  // Set Safe Area Screen Boundaries
  const insets = useSafeAreaInsets();

  const [menuItems, setMenuItems] = useState([
    {
      name: "The Original Pipo's Pork",
      image: require("../assets/images/pork.jpg"),
      price: "$13.95",
      id: 1,
    },
    {
      name: "The Original Cuban",
      image: require("../assets/images/cuban.jpg"),
      price: "$12.95",
      id: 2,
    },
    {
      name: "Beef Empanada",
      image: require("../assets/images/empanada.jpg"),
      price: "$4.95",
      id: 3,
    },
    {
      name: "Plantains",
      image: require("../assets/images/plantains.jpg"),
      price: "$3.75",
      id: 4,
    },
    {
      name: "Guava & Cheese Pastry",
      image: require("../assets/images/guava.jpg"),
      price: "$4.25",
      id: 5,
    },
  ]);

  return (
    <View
      style={[
        styles.rootContainer,
        {
          paddingTop: insets.top,
          paddingBottom: insets.bottom,
          paddingLeft: insets.left,
          paddingRight: insets.right,
        },
      ]}
    >
      <View style={styles.titleContainer}>
        <Title>Menu</Title>
      </View>

      <View style={styles.listContainer}>
        <FlatList
        data = {menuItems}
        
        keyExtractor={(item) => item.id}
        
        alwaysBounceVertical={false}
        showsVerticalScrollIndicator={false}
        renderItem={(itemData) => {
            return (
                <MenuItem
                name={itemData.item.name}
                image={itemData.item.image}
                price={itemData.item.price}
                />
            );
        }}
        
        />

      </View>
      <View style={styles.buttonContainer}>
        <NavButton onPress={props.onNext}>Home Page</NavButton>
      </View>
    </View>
  );
}

export default MenuScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    width: 400,
    alignItems: "center"
  },
  titleContainer: {
    flex: 1,
    justifyContent: "center"
  },
  listContainer: {
    flex: 7,
    width: "95%"
  },
  buttonContainer: {
    flex: 1,
    marginTop: 20
  }
});
