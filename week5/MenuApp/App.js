import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import HomeScreen from './screens/HomeScreen';
import MenuScreen from './screens/MenuScreen';
import Colors from './constants/colors';
import { useFonts } from 'expo-font';

export default function App() {

  // Set up our custom fonts
  const [fontsLoaded] = useFonts({
    "gorditas": require("./assets/fonts/Gorditas-Regular.ttf"),
    "gorditas-bold": require("./assets/fonts/Gorditas-Bold.ttf")
  })

// Set the state variable for the current screen
const [currentScreen, setCurrentScreen] = useState("home");

function menuScreenHandler(){
  setCurrentScreen("menu");
}

function homeScreenHandler(){
  setCurrentScreen("home");
}

// Determine which screen to be on
let screen = <HomeScreen onNext={menuScreenHandler}/>;

if (currentScreen === "menu"){
  screen = <MenuScreen onNext={homeScreenHandler}/>;
}

  return (
    <>
      <StatusBar style='light' />
      <SafeAreaProvider style={styles.container}>{screen}</SafeAreaProvider>
    </>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.accent500,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
