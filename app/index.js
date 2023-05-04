import * as React from "react";
import { View, Text, Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./screens/HomeScreen";
import CartScreen from "./screens/CartScreen";
import AccountScreen from "./screens/AccountScreen";
import RestaurantScreen from "./screens/RestaurantScreen";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function App() {
  return (
      <Stack.Navigator
        initialRouteName="BottomTabNav"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="BottomTabNav" component={BottomTabNav} />
        <Stack.Screen name="Restaurant" component={RestaurantScreen} />
      </Stack.Navigator>
  );
}

function BottomTabNav() {
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
          height: 100,
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
                width: 30,
                height: 30,
                tintColor: focused ? "#fff" : "gray",
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
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
                width: 35,
                height: 35,
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
                width: 30,
                height: 30,
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
