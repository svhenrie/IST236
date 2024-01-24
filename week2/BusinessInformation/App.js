import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Image, Linking } from 'react-native';

export default function App() {
  return (
    <>
    <StatusBar style='dark' />
      <SafeAreaView style={styles.container}>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={require("./assets/images/cheesecakefactory.jpg")}/>
        </View>
        <View style={styles.informationContainer}>
          <Text style={styles.text}>The Cheesecake Factory</Text>
          <Text style={styles.text} onPress={() => Linking.openURL("https://locations.thecheesecakefactory.com/nc/charlotte-60.html")}>www.cheesecakefactory.com</Text>
          <Text style={styles.text} onPress={() => Linking.openURL("tel:+7047700076")}>(704) 770-0076</Text>
          <Text style={styles.text} onPress={() => Linking.openURL("https://maps.app.goo.gl/LZCn926zSreBa54h6")}>Open in Google Maps</Text>
        </View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#413675',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageContainer: {
    paddingTop: 40,
    flex: 3,
    width: "100%"
  },
  image: {
    height: 300,
    width: "100%",
    resizeMode: "cover",
    borderWidth: 3,
    borderColor: "#fff303"
  },
  informationContainer: {
    flex: 4,
    justifyContent: "center",
    alignItems: "center"
  },
  text: {
    fontSize: 30,
    fontStyle: "italic",
    marginBottom: 10,
    color: "#e5e9e4"
  },
});
