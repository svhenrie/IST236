import { Pressable, Text, View } from "react-native";
import { StyleSheet } from "react-native";
import Colors from "../constants/colors";


function NavButton(props){
    return(
        <Pressable
        android_ripple={{color: "grey"}}
        onPress={props.onPress}>
            <View style={sytles.buttonContainer}>
                <View style={sytles.textContainer}>
                    <Text style={sytles.text}>{props.children}</Text>
                </View>
            </View>
        </Pressable>
    )
}

export default NavButton;

const sytles = StyleSheet.create({
    buttonContainer: {
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 3,
        borderColor: Colors.primary500,
        backgroundColor: Colors.accent800,
        width: 300,
        margin: 10,
    },
    textContainer: {
    },
    text: {
        padding: 8,
        fontSize: 25,
        textAlign: "center",
        color: "white",
        fontFamily: "gorditas"
    },
})