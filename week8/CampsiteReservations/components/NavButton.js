import { Pressable, Text, View, useWindowDimensions } from "react-native";
import { StyleSheet } from "react-native";
import Colors from "../constants/colors";


function NavButton(props) {
    const {width, height} = useWindowDimensions();

  return (
    <Pressable
      onPress={props.onPress}
      // By providing styling and checking for pressed you can set
      // temporary styles that will only be active while pressed.
      // This will take effect in iOS and Android.
      style={({ pressed }) => pressed && sytles.pressedItem}
    >
      <View style={sytles.buttonContainer}>
        <View style={sytles.textContainer}>
          <Text style={[sytles.text, { fontSize: width * 0.07 }]}>{props.children}</Text>
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
    width: 1000,
    maxWidth: "70%",
    marginHorizontal: 10,
    marginVertical: 10,
  },
  pressedItem: {
    opacity: 0.5
  },
  text: {
    padding: 8,
    fontFamily: "mountain",
    textAlign: "center",
    color: Colors.primary300,
  },
});
