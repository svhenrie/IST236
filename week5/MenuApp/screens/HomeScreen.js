import { View, Text, Linking, Image } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { StyleSheet } from "react-native";
import NavButton from "../components/NavButton";
import Colors from "../constants/colors";

import Title from "../components/Title";

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
      <View style={styles.titleContainer}>
        <Title>Pipo's Cafe</Title>
      </View>

      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require("../assets/images/pipos.jpg")}
        />
      </View>

      <View style={styles.infoContainer}>
        <Text
          style={styles.infoText}
          onPress={() => Linking.openURL("tel:7272870090")}
        >
          (727) 287-0090
        </Text>
        <Text
          style={styles.infoText}
          onPress={() => Linking.openURL("https://maps.app.goo.gl/dUmWQper68YT1AWk9")}
        >
          9531 Bay Pines Blvd{"\n"}St. Petersburg{"\n"}FL 33708
        </Text>
        <Text
          style={styles.infoText}
          onPress={() => Linking.openURL("https://pipos1979.com/")}
        >
          www.pipos1979.com
        </Text>
      </View>

      <View style={styles.buttonContainer}>
        <NavButton onPress={props.onNext}>View Menu</NavButton>
      </View>
    </View>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    alignItems: "center"
  },
  titleContainer: {
    flex: 1,
    justifyContent: "center",
  },
  imageContainer: {
    flex: 4
  },
  image: {
    resizeMode: "cover",
    height: "100%",
    width: 380,
    borderRadius: 10
  },
  infoContainer: {
    flex: 3,
    justifyContent: "center"
  },
  infoText: {
    fontSize: 30,
    textAlign: "center",
    padding: 7,
    color: Colors.primary500,
    fontFamily: "gorditas"
  },
  buttonContainer: {
    flex: 1
  }
});
