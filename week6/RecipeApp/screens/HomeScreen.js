import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Image, View, StyleSheet } from "react-native";
import Title from "../components/Title";
import NavButton from "../components/NavButton";
import Colors from "../constants/colors";

function HomeScreen(props) {
  // Set Safe Area Screen Boundaries
  const insets = useSafeAreaInsets();

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
        {/* App Title */}
        <View style={styles.titleContainer}>
            <Title>Recipes</Title>
        </View>
        {/* Stock image representing recipes */}
        <View style={styles.imageContainer}>
            <Image
            source={require("../assets/images/recipe.jpg")}
            style={styles.image}
            />
        </View>
        {/* Button leading to the recipes page */}
        <View style={styles.navButtonContainer}>
            <NavButton onNext={props.onNext}>Go To Recipes</NavButton>
        </View>
      </View>
  );
}

export default HomeScreen;

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
    imageContainer: {
        flex: 2,
        justifyContent: "center",
        borderWidth: 4,
        borderRadius: 55,
        borderColor: Colors.accent500,
    },
    image: {
        height: "100%",
        width: "100%",
        borderRadius: 50,
        resizeMode: "stretch",
    },
    navButtonContainer: {
        flex: 2,
        justifyContent: "center",
        alignItems: "center"
    },
});
