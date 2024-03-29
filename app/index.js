import React from "react";
import { useState, useEffect } from "react";
import { useCallback } from "react";
import { Image } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./screens/HomeScreen";
import CartScreen from "./screens/CartScreen";
import AccountScreen from "./screens/AccountScreen";
import RestaurantScreen from "./screens/RestaurantScreen";
import MapScreen from "./screens/MapScreen";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { SafeAreaView } from "react-native-safe-area-context";
import OrderPlacedScreen from "./screens/OrderplacedScreen";
import FlipperAsyncStorage from "rn-flipper-async-storage-advanced";
import LoginScreen from "./screens/LoginScreen";
import SignupScreen from "./screens/SignupScreen";
import { getUserId } from "./utils/storage.js";
import CurrentOrdersScreen from "./screens/CurrentOrdersScreen";
import PastOrdersScreen from "./screens/PastOrdersScreen";

SplashScreen.preventAutoHideAsync();

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function App() {
  const [isSignedIn, setIsSignedIn] = useState(false);

  useEffect(() => {
    getUserId().then((id) => {
      console.log(id);
      if (id !== undefined && id !== "" && id !== "null" && id !== null) {
        setIsSignedIn(true);
      }
    });
  }, []);

  const [fontsLoaded] = useFonts({
    Sen: require("../assets/fonts/sen-regular.otf"),
    "Sen-Bold": require("../assets/fonts/sen-bold.otf"),
    "Sen-ExtraBold": require("../assets/fonts/sen-extrabold.otf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Stack.Navigator
      initialRouteName={isSignedIn ? "MainScreen" : "LoginScreen"}
      screenOptions={{ headerShown: false }}
      onLayoutRootView={onLayoutRootView}
    >
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="SignupScreen" component={SignupScreen} />
      <Stack.Screen name="MainScreen" component={MainScreen} />
      <Stack.Screen name="Restaurant" component={RestaurantScreen} />
      <Stack.Screen name="Map" component={MapScreen} />
      <Stack.Screen name="OrderPlaced" component={OrderPlacedScreen} />
      <Stack.Screen name="CurrentOrders" component={CurrentOrdersScreen} />
      <Stack.Screen name="PastOrders" component={PastOrdersScreen} />
    </Stack.Navigator>
  );
}

function MainScreen() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "#000",
          opacity: 0.9,
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: 90,
          borderTopRightRadius: 25,
          borderTopLeftRadius: 25,
          paddingTop: 15,
          paddingBottom: 15,
        },
      }}
    >
      <Tab.Screen
        name="Explore"
        component={HomeScreen}
        options={{
          tabBarLabel: "Explore",
          tabBarActiveTintColor: "#fff",
          tabBarLabelStyle: {
            fontSize: 12,
            fontWeight: "bold",
          },
          tabBarIcon: ({ focused }) => (
            <Image
              source={require("../assets/icons/home_icon.png")}
              resizeMode="contain"
              style={{
                width: 25,
                height: 25,
                tintColor: focused ? "#fff" : "gray",
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        initialParams={{ address: "Not Set" }}
        component={CartScreen}
        options={{
          tabBarLabel: "  Cart",
          tabBarActiveTintColor: "#fff",
          tabBarLabelStyle: {
            fontSize: 12,
            fontWeight: "bold",
          },
          tabBarIcon: ({ focused }) => (
            <Image
              source={require("../assets/icons/cart_icon.png")}
              resizeMode="contain"
              style={{
                width: 30,
                height: 30,
                tintColor: focused ? "#fff" : "gray",
              }}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Account"
        component={AccountScreen}
        options={{
          tabBarLabel: "Account",
          tabBarActiveTintColor: "#fff",
          tabBarLabelStyle: {
            fontSize: 12,
            fontWeight: "bold",
          },
          tabBarIcon: ({ focused }) => (
            <Image
              source={require("../assets/icons/profile_icon.png")}
              resizeMode="contain"
              style={{
                width: 25,
                height: 25,
                tintColor: focused ? "#fff" : "gray",
              }}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default App;
