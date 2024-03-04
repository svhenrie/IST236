import { Pressable, Text, View, StyleSheet } from "react-native";
import Colors from "../constants/colors";

function NavButton(props) {
  return (
    <Pressable
      // Providing Android ripple gives visual reponse to being clickec
      android_ripple={{ color: Colors.primary800 }}
      onPress={props.onPress}
      // By providing styling and checking for pressed you can set
      // temporary styles that will only be active while pressed. This will
      // take effect on iOS and Android
      style={({ pressed }) => pressed && sytles.pressedItem}
    >
      <View style={sytles.buttonContainer}>
        <View style={sytles.textContainer}>
          <Text style={sytles.text}>{props.children}</Text>
        </View>
      </View>
    </Pressable>
  );
}

export default NavButton;

const sytles = StyleSheet.create({
  buttonContainer: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.primary500,
    borderRadius: 300,
    width: 300,
    marginHorizontal: 10,
    marginVertical: 10,
  },
  pressedItem: {
    opacity: 0.3,
  },
  text: {
    padding: 8,
    fontSize: 25,
    textAlign: "center",
    color: "white",
  },
});
