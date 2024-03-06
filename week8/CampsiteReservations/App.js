import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Colors from './constants/colors';
import { useFonts } from 'expo-font';
import { useCallback } from 'react';
import HomeScreen from './screens/HomeScreen';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function App() {
  // Load fonts
  const [fontsLoaded, fontError] = useFonts({
    mountain: require("./assets/fonts/Mountain.ttf"),
  });

  // Custom splash screen displays until fonts loaded
  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  });

  // Wait for fonts to load before moving to the
  // home screen
  let screen = <HomeScreen />;
  if (!fontsLoaded && !fontError) {
    return null;
  } else {
    return (
      <>
        <StatusBar style="light" />
        <SafeAreaProvider style={styles.container}>{screen}</SafeAreaProvider>
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.accent300,
  },
});
