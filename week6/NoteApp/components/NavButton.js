import { Pressable, Text, View } from "react-native";
import { StyleSheet } from "react-native";
import Colors from "../constants/colors";


function NavButton(props) {
  return (
    <Pressable
      onPress={props.onNext}
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
    height: 75,
    width: 150,
    margin: 8,
    borderRadius: 6,
    backgroundColor: Colors.accent500
  },
  pressedItem: {
    opacity: 0.8
  },
  text: {
    padding: 8,
    fontSize: 25,
    textAlign: "center",
    color: Colors.primary300,
    fontFamily: "paperNoteBold",
  },
});
