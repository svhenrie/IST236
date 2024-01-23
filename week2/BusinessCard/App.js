import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Linking, Image } from 'react-native';

export default function App() {
  return (
    <>
    {/* Set status bar styling */}
    <StatusBar style='dark' />
      {/* Set SafeAreaView screen container */}
      <SafeAreaView style={styles.container}>
        {/* Set Image Container */}
        <View style={styles.imageContainer}>
          {/* Link professional image */}
          <Image style={styles.image} source={require("./assets/images/scott.jpg")}/>
        </View>
        {/* Set Information Container */}
        <View style={styles.informationContainer}>
          <Text style={styles.text}>Scott Henrie</Text>
          {/* Link to email */}
          <Text style={styles.text} onPress={() => Linking.openURL("mailto:svhenrie@gmail.com")}>svhenrie@gmail.com</Text>
          {/* Link to phone */}
          <Text style={styles.text} onPress={() => Linking.openURL("tel:+9788469579")}>(978) 846-9579</Text>
          {/* Link to GitHub account */}
          <Text style={styles.text} onPress={() => Linking.openURL("https://github.com/svhenrie/IST236")}>Open GitHub</Text>
        </View>
      </SafeAreaView>
    </>
  );
}

// Formatting
const styles = StyleSheet.create({
  // App screen
  container: {
    flex: 1,
    backgroundColor: '#0a25a0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  // Styles for image container
  imageContainer: {
    paddingTop: 40,
    flex: 3,
    width: "100%",
    alignItems: "center"
  },
  // Format picture
  image: {
    height: 400,
    width: "60%",
    resizeMode: "cover",
    borderWidth: 10,
    borderColor: "#777779",
  },
  // Styles for name and contact information
  informationContainer: {
    flex: 4,
    justifyContent: "center",
    alignItems: "center"
  },
  // Format app text
  text: {
    fontSize: 30,
    fontStyle: "italic",
    marginBottom: 10,
    color: "#e5e9e4"
  },
});

