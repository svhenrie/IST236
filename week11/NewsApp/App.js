import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BookmarksScreen from "./screens/BookmarksScreen";
import UsNewsScreen from "./screens/UsNewsScreen";
import WorldNewsScreen from "./screens/WorldNewsScreen";
import SportsNewsScreen from "./screens/SportsNewsScreen";
import ReportDetailScreen from "./screens/ReportDetailScreen";
import Colors from "./constants/colors";
import {
  Entypo,
  MaterialIcons,
  MaterialCommunityIcons,
  Fontisto,
} from "@expo/vector-icons";
import { useCallback } from "react";
import BookmarksContextProvider from "./store/context/bookmarks-context";

// Declare constants for navigation
const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const Tabs = createBottomTabNavigator();

// Create drawer navigators for news report
// and saved report screens
function DrawerNavigator() {
  return (
    <Drawer.Navigator
      initialRouteName="Reports"
      screenOptions={{
        headerStyle: { backgroundColor: Colors.primary500 },
        headerTintColor: "white",
        headerTitleStyle: {
          fontFamily: "breakingNews",
          fontSize: 40,
          color: Colors.accent800,
        },
        sceneContainerStyle: { backgroundColor: Colors.primary300 },
        drawerContentStyle: { backgroundColor: Colors.primary500 },
        drawerInactiveTintColor: { backgroundColor: Colors.primary300 },
        drawerActiveTintColor: Colors.accent500,
        drawerActiveBackgroundColor: Colors.primary800,
      }}
    >
      <Drawer.Screen
        name="Reports"
        component={TabsNavigator}
        options={{
          title: "News Articles",
          drawerLabel: "News Reports",
          drawerIcon: ({ color, size }) => (
            <Entypo name="list" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="BookmarkedReports"
        component={BookmarksScreen}
        options={{
          title: "Saved Reports",
          drawerLabel: "Saved Reports",
          drawerIcon: ({ color, size }) => (
            <Entypo name="bookmark" size={size} color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}

// Create three tab screens for user to select
// US, World, or Sports news
function TabsNavigator() {
  return (
    <Tabs.Navigator
      screenOptions={{
        tabBarShowLabel: true,
        tabBarActiveBackgroundColor: Colors.primary800,
        tabBarActiveTintColor: Colors.accent500,
        tabBarInactiveBackgroundColor: Colors.primary500,
        tabBarInactiveTintColor: Colors.primary300,
        tabBarLabelStyle: {
          fontSize: 12,
          fontFamily: "breakingNews",
        },
        tabBarStyle: {
          backgroundColor: Colors.primary500,
        },
      }}
    >
      <Tabs.Screen
        name="UsNews"
        component={UsNewsScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="newspaper-variant-multiple-outline"
              size={size}
              color={color}
            />
          ),
          tabBarLabel: "US",
        }}
      />
      <Tabs.Screen
        name="WorldNews"
        component={WorldNewsScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Fontisto name="world-o" size={size} color={color} />
          ),
          tabBarLabel: "World",
        }}
      />
      <Tabs.Screen
        name="SportsNews"
        component={SportsNewsScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="sports-tennis" size={size} color={color} />
          ),
          tabBarLabel: "Sports",
        }}
      />
    </Tabs.Navigator>
  );
}

// App start
export default function App() {
  // Load custom fonts
  const [fontsLoaded, fontError] = useFonts({
    breakingNews: require("./assets/fonts/BreakingNews.ttf"),
  });

  // Display splash screen while fonts load
  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  });

  // Wait for fonts to load before loading content
  if (!fontsLoaded && !fontError) {
    return null;
  } else {
    return (
      <>
        <StatusBar style="light" />
        {/* Allow user to bookmark content */}
        <BookmarksContextProvider>
          <NavigationContainer>
            <Stack.Navigator
              initialRouteName="DrawerScreen"
              screenOptions={{
                headerTintColor: Colors.primary300,
                headerStyle: { backgroundColor: Colors.primary500 },
                contentStyle: { backgroundColor: "black" },
              }}
            >
              <Stack.Screen
                name="DrawerScreen"
                component={DrawerNavigator}
                options={{
                  headerShown: false,
                }}
              />
              <Stack.Screen
                name="ReportDetail"
                component={ReportDetailScreen}
                options={{
                  headerBackTitleVisible: false,
                }}
              />
            </Stack.Navigator>
          </NavigationContainer>
        </BookmarksContextProvider>
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
