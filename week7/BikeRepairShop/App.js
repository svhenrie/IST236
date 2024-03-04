import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { useState, useMemo } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useFonts } from "expo-font";
import { useCallback } from "react";
import * as SplashScreen from "expo-splash-screen";

import Colors from "./constants/colors";
import HomeScreen from "./screens/HomeScreen";
import OrderReviewScreen from "./screens/OrderReviewScreen";

export default function App() {
  // Load custom font
  const [fontsLoaded, fontError] = useFonts({
    biker: require("./assets/fonts/BIKER.otf"),
  });

  // Splash screen visible to user until fonts load
  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  // State variables set screen and user choice prices
  const [currentScreen, setCurrentScreen] = useState("");
  const [currentPrice, setCurrentPrice] = useState(0);

  // State variable for repair times
  const [repairTimeId, setRepairTimeId] = useState(0);
  // Radio buttons for shop repair times
  const repairTimeRadioButtons = useMemo(
    () => [
      {
        id: "0",
        label: "Standard",
        value: "Standard",
        price: 0,
        borderColor: Colors.primary500,
        color: Colors.primary500,
      },
      {
        id: "1",
        label: "Expedited",
        value: "Expedited",
        price: 50,
        borderColor: Colors.primary500,
        color: Colors.primary500,
      },
      {
        id: "2",
        label: "Next Day",
        value: "Next Day",
        price: 100,
        borderColor: Colors.primary500,
        color: Colors.primary500,
      },
    ],
    []
  );

  // State variable for services
  const [services, setServices] = useState([
    // Check box options for services offered
    { id: 0, name: "Basic Tune-Up", value: false, price: 50 },
    { id: 1, name: "Comprehensive Tune-Up", value: false, price: 75 },
    { id: 2, name: "Flat Tire Repair", value: false, price: 20 },
    { id: 3, name: "Brake Servicing", value: false, price: 50 },
    { id: 4, name: "Gear Servicing", value: false, price: 40 },
    { id: 5, name: "Chain Servicing", value: false, price: 15 },
    { id: 6, name: "Frame Repair", value: false, price: 35 },
    { id: 7, name: "Safety Check", value: false, price: 25 },
    { id: 8, name: "Accessory Install", value: false, price: 10 },
  ]);

  // State variables for joining company newsletter and
  // memberships to be switches
  const [newsletter, setNewsletter] = useState(false);
  const [rentalMembership, setRentalMembership] = useState(false);

  // Set service level based on user input
  function setServicesHandler(id) {
    setServices((prevServices) =>
      prevServices.map((item) =>
        item.id === id ? { ...item, value: !item.value } : item
      )
    );
  }

  // Determine if switch actuated 
  function setNewsletterHandler() {
    setNewsletter((previous) => !previous);
  }

  // Determine if switch actuated 
  function setRentalMembershipHandler() {
    setRentalMembership((previous) => !previous);
  }

  // Reset app to the home screen
  function homeScreenHandler() {
    setCurrentPrice(0);
    setCurrentScreen("home");
  }

  // Determine price of services based on user input
  function orderReviewHandler() {
    let price = 0;
    // get price of services selected
    for (let i = 0; i < services.length; i++) {
      if (services[i].value) {
        price = price + services[i].price;
      }
    }

    // joining is free
    if (newsletter) {
      price = price + 0.0;
    }
    // membership fee
    if (rentalMembership) {
      price = price + 100.0;
    }
    // price of repair type
    price = price + repairTimeRadioButtons[repairTimeId].price;

    setCurrentPrice(price);
    setCurrentScreen("review");
  }

  // Pass information from one screen to another
  let screen = (
    <HomeScreen
      repairTimeId={repairTimeId}
      services={services}
      newsletter={newsletter}
      rentalMembership={rentalMembership}
      repairTimeRadioButtons={repairTimeRadioButtons}
      onSetRepairTimeId={setRepairTimeId}
      onSetServices={setServicesHandler}
      onSetNewsletter={setNewsletterHandler}
      onSetRentalMembership={setRentalMembershipHandler}
      onNext={orderReviewHandler}
    />
  );

  if (currentScreen == "review") {
    screen = (
      <OrderReviewScreen
        time={repairTimeRadioButtons[repairTimeId].value}
        services={services}
        newsletter={newsletter}
        rentalMembership={rentalMembership}
        price={currentPrice}
        onNext={homeScreenHandler}
      />
    );
  }

  // Wait for fonts to load before moving to home screen
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
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
