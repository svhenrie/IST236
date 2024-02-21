import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Image, StyleSheet, FlatList } from "react-native";
import Title from "../components/Title";
import NavButton from "../components/NavButton";
import Colors from "../constants/colors";
import { useState } from "react";
import { View } from "react-native";
import RecipeView from "../modals/RecipeView";
import RecipesItem from "../components/RecipesItem";

function RecipesScreen(props) {
  // Set Safe Area Screen Boundaries
  const insets = useSafeAreaInsets();

  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [modalRecipeTitle, setModalRecipeTitle] = useState("");
  const [modalRecipeText, setModalRecipeText] = useState("");

  function recipeViewHandler(title, text){
    setModalRecipeTitle(title);
    setModalRecipeText(text);
    setModalIsVisible(true);
  }

  function closeRecipeViewHandler(){
    setModalIsVisible(false);
  }
  
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
        <Title>Recipe Collection</Title>
      </View>

      {/* Present a collection of recipe items */}
      <View style={styles.itemContainer}>
        <FlatList
          data={props.currentRecipes}
          keyExtractor={(item, index) => {
            return item.id;
          }}
          alwaysBounceVertical={false}
          renderItem={(itemData) => {
            return (
              <RecipesItem
                id={itemData.item.id}
                title={itemData.item.title}
                onView={recipeViewHandler.bind(this, itemData.item.title, itemData.item.text)}
                onDelete={props.onDelete.bind(this, itemData.item.id)}
              />
            );
          }}
        />
      </View>

      <RecipeView
        visible={modalIsVisible}
        title={modalRecipeTitle}
        text={modalRecipeText}
        onClose={closeRecipeViewHandler}
      />
        {/* Buttons to add a new recipe or return home */}
      <View style={styles.navButtonContainer}>
        <View style={styles.navButton}>
          <NavButton onNext={props.onAdd}>Add Recipe</NavButton>
        </View>
        <View>
          <View style={styles.navButton}>
            <NavButton onNext={props.onHome}>Home</NavButton>
          </View>
        </View>
      </View>
    </View>
  );
}

export default RecipesScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    width: "90%",
  },
  titleContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 20,
  },
  navButtonContainer: {
    flex: 2,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  itemContainer: {
    flex: 6,
  },
  navButton: {
    marginHorizontal: 10,
  },
});
