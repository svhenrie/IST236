import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Button,
  Pressable,
  TextInput,
  Modal,
  Image,
} from "react-native";

export default function App() {
  // Possible responses
  const responses = [
    "It is certain",
    "It is decidedly so",
    "Without a doubt",
    "Yes definitely",
    "You may rely on it",
    "As I see it, yes",
    "Most likely",
    "Outlook good",
    "Yes",
    "Signs point to yes",
    "Reply hazy, try again",
    "Ask again later",
    "Better not tell you now",
    "Cannot predict now",
    "Concentrate and ask again",
    "Don't count on it",
    "My reply is no",
    "My sources say no",
    "Outlook not so good",
    "Very doubtful",
  ];

  // Create state management variables
  const [userQuestion, setUserQuestion] = useState("");
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [gameResponse, setGameResponse] = useState("");

  // Function called when submit button pressed
  function startQuestionHandler() {
    // Check if user entered a question
    if (userQuestion == "") {
      // Alert box if user fails to enter text
      alert("Please enter text.");
    } else {
      setModalIsVisible(true);
      setUserQuestion(userQuestion);
      setGameResponse("");

      // Generate a random number corresonding to the 20 responses
      const rndResponse = Math.floor(Math.random() * responses.length);

      // Variable to hold the response randomly chosen
      let result = responses[rndResponse];
      // Update the response
      setGameResponse(result);
    };
  }

  // Function called when close button selected and modal screen 
  // state updates
  function endQuestionHandler() {
    // Reset the user text field on main screen
    setUserQuestion("");
    setModalIsVisible(false);
  }

  return (
    <>
      <StatusBar style="auto" />
      <SafeAreaView style={styles.container}>
        <View style={styles.titleContainer}>
          <View>
            <Text style={styles.title}>Magic Eight Ball</Text>
          </View>
        </View>

        <Text style={styles.inputLabel}>Ask a question:</Text>
        <TextInput
          style={styles.textInput}
          // Enter question
          placeholder="Enter Your Question Here"
          // Set keyboard type
          keyboardType="default"
          // When the text is changed, update the userQuestion
          onChangeText={setUserQuestion}
          // Tie the entered value to the userQustion so when
          // it is reset to blank the input field will also reset
          value={userQuestion}
        />

        <View style={styles.submitButtonContainer}>
          <Pressable
            // Add the android ripple
            android_ripple={{ color: "#3572a3" }}
            // Style the button when pressed
            style={({ pressed }) => pressed && styles.pressedButton}
            // When pressed open modal screen
            onPress={startQuestionHandler}
          >
            <View style={styles.submitButton}>
              {/* Submit button */}
              <Text style={styles.submitButtonText}>Submit</Text>
            </View>
          </Pressable>
        </View>

        {/* Modal screen */}
        <Modal visible={modalIsVisible} animationType="fade">
          <SafeAreaView style={styles.modalContainer}>
            {/* Displays the question the user asked on the main screen */}
            <Text style={styles.userText}>{userQuestion}</Text>
            <View style={styles.imageContainer}>
              <Image
                style={styles.image}
                // Magic 8 Ball image
                source={require("./assets/images/magic8ball.jpg")}
              />
            </View>
            <View>
              {/* Displays the randomly selected response */}
              <Text style={styles.responseText}>...{gameResponse}</Text>
            </View>

            {/* Close Button */}
            <View style={styles.modalButtonContainer}>
              <View style={styles.modalButton}>
                <Button
                  title="Close"
                  color="black"
                  onPress={endQuestionHandler}
                />
              </View>
            </View>
          </SafeAreaView>
        </Modal>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#172650",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 80,
  },
  titleContainer: {
    felx: 1,
    justifyContent: "center",
  },
  title: {
    fontSize: 60,
    fontWeight: "bold",
    textAlign: "center",
    color: "white",
  },
  submitButtonContainer: {
    flex: 1,
    justifyContent: "center",
  },
  pressedButton: {
    opacity: 0.8,
  },
  submitButton: {
    backgroundColor: "white",
    padding: 10,
    paddingHorizontal: 20,
    borderWidth: 3,
    borderRadius: 7,
  },
  submitButtonText: {
    fontSize: 25,
  },
  userText: {
    fontSize: 30,
    color: "white",
    padding: 20,
    textAlign: "center",
  },
  responseText: {
    fontSize: 30,
    color: "white",
    fontStyle: "italic",
    margin: 20,
    padding: 30,
    textAlign: "center",
  },
  modalContainer: {
    flex: 1,
    backgroundColor: "#172650",
    justifyContent: "center",
  },
  inputLabel: {
    fontSize: 30,
    color: "white",
    marginTop: 150,
    justifyContent: "center",
  },
  textInput: {
    backgroundColor: "#3a52d8",
    padding: 10,
    borderWidth: 1,
    borderRadius: 6,
    color: "white",
    marginBottom: 30,
    fontSize: 25,
  },
  modalButtonContainer: {
    flexDirection: "row",
    marginTop: 70,
  },
  modalButton: {
    width: "30%",
    marginHorizontal: 140,
  },
  imageContainer: {
    paddingTop: 40,
    width: "100%",
    alignItems: "center",
  },
  image: {
    height: 300,
    width: "80%",
    resizeMode: "cover",
    borderRadius: 150,
    borderWidth: 8,
    borderColor: "#25252e"
  },
});
