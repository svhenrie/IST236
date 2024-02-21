import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { useState } from "react";
import HomeScreen from "./screens/HomeScreen";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Colors from "./constants/colors";
import { useFonts } from "expo-font";
import AddRecipeScreen from "./screens/AddRecipeScreen";
import RecipesScreen from "./screens/RecipesScreen";

export default function App() {
  // Load custom font
  const [fontsLoaded] = useFonts({
    recipeFont: require("./assets/fonts/BiscuitRecipeDemo.ttf"),
  });

  // Manage screen and recipes state
  const [currentScreen, setCurrentScreen] = useState("home");
  const [currentID, setCurrentID] = useState(3);
  const [currentRecipes, setCurrentRecipes] = useState([
    {
      id: 1,
      title: "Ratatouille",
      text: "1. Onion\n2. Garlic\n3. Carrot\n4. Eggplant",
    },
    {
      id: 2,
      title: "Poutine Quebecoise",
      text: "1. French Fires\n2. Brown Gravy\n3. Cheese Curds",
    },
  ]);

  // Functions to set screen.
  function homeScreenHandler() {
    setCurrentScreen("home");
  }

  function recipeScreenHandler() {
    setCurrentScreen("recipes");
  }

  function addRecipeScreenHandler() {
    setCurrentScreen("add");
  }

  // Function to add recipes
  function addRecipeHandler(enteredRecipeTitle, enteredRecipeText) {
    setCurrentRecipes((currentRecipes) => {
      return [
        ...currentRecipes,
        { id: currentID, title: enteredRecipeTitle, text: enteredRecipeText },
      ];
    });
    setCurrentID(currentID + 1);
    recipeScreenHandler();
  }
  // Function to delete recipe
  function deleteRecipeHandler(id) {
    setCurrentRecipes((currentRecipes) => {
      return currentRecipes.filter((item) => item.id !== id);
    })
  }

  // Declare variable for home screen
  let screen = <HomeScreen onNext={recipeScreenHandler} />;

  // Determine screen based on user input
  if (currentScreen === "add") {
    screen = (
      <AddRecipeScreen onAdd={addRecipeHandler} onCancel={recipeScreenHandler} />
    );
  }

  if (currentScreen === "recipes") {
    screen = (
      <RecipesScreen
        onHome={homeScreenHandler}
        onAdd={addRecipeScreenHandler}
        onDelete={deleteRecipeHandler}
        currentRecipes={currentRecipes}
      />
    );
  }

  return (
    <>
      <StatusBar style="auto" />
      <SafeAreaProvider style={styles.container}>{screen}</SafeAreaProvider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary800,
    alignItems: "center",
    justifyContent: "center",
  },
});

