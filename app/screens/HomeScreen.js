import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

import { StyleSheet, View, Image } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Input, NativeBaseProvider, Text, ScrollView } from "native-base";
// import Ionicons from "@expo/vector-icons/Ionicons";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link, useRouter } from "expo-router";
import { TouchableOpacity } from "react-native-gesture-handler";
// import BlurredBottomNav from "../components/BlurredBottomNav";
import { NavigationContainer } from "@react-navigation/native";

const top_offer_items = [
  "https://github.com/CollegeProjects007/PetPujo/blob/master/assets/top_offers/offer_tile_1.jpg?raw=true",
  "https://github.com/CollegeProjects007/PetPujo/blob/master/assets/top_offers/offer_tile_2.jpg?raw=true",
  "https://github.com/CollegeProjects007/PetPujo/blob/master/assets/top_offers/offer_tile_3.jpg?raw=true",
  "https://github.com/CollegeProjects007/PetPujo/blob/master/assets/top_offers/offer_tile_1.jpg?raw=true",
  "https://github.com/CollegeProjects007/PetPujo/blob/master/assets/top_offers/offer_tile_2.jpg?raw=true",
  "https://github.com/CollegeProjects007/PetPujo/blob/master/assets/top_offers/offer_tile_3.jpg?raw=true",
];

const restaurants = [
  [
    "Shark Tank",
    "https://github.com/CollegeProjects007/PetPujo/blob/master/assets/restaurants/restaurant1.png?raw=true",
  ],
  [
    "Arshalan",
    "https://github.com/CollegeProjects007/PetPujo/blob/master/assets/restaurants/restaurant1.png?raw=true",
  ],
];

function HomeScreen({ navigation }) {
  return (
    <NativeBaseProvider>
      <SafeAreaView>
        <ScrollView>
          <View style={styles.container}>
            <StatusBar style="auto" />
            {/* <Input
              placeholder="Search"
              variant="filled"
              width="100%"
              height="50px"
              borderRadius="20"
              py="1"
              px="2"
              paddingLeft="5"
              paddingRight="5"
              InputRightElement={
                <Ionicons
                  name="ios-search"
                  size={24}
                  color="black"
                  style={{ paddingRight: 10 }}
                />
              }
            /> */}
            <Image
              source={require("../../assets/banner.jpg")}
              style={{ width: "100%", height: 300, resizeMode: "contain" }}
            />
            <View style={{ height: 5 }}></View>
            <Text fontSize="2xl" bold>
              Top Offers
            </Text>
            <View style={{ height: 5 }}></View>
            <ScrollView
              style={styles.top_offers_view}
              horizontal={true}
              maxHeight={160}
            >
              {/* {top_offer_items.map((item, index) => {
              return (
                <View key={index}>
                  <Image
                    source={require("item")}
                    style={styles.top_offers_imgs}
                  />
                </View>
              );
            })} */}
              {top_offer_items.map((item, index) => {
                // console.log(item)
                return (
                  <View key={index}>
                    {/* <Image source={require({item})} /> */}
                    <Image
                      source={{ uri: item, width: 200, height: 300 }}
                      style={styles.top_offers_imgs}
                    />
                  </View>
                );
              })}
            </ScrollView>
            <View style={{ height: 5 }}></View>
            <Text fontSize="2xl" bold>
              Restaurants Near You
            </Text>
            <View style={{ height: 5 }}></View>
            {restaurants.map((res_item, index) => {
              // console.log(item)
              return (
                <View key={index}>
                  <Image
                    source={{ uri: res_item[1], width: 200, height: 300 }}
                    style={styles.top_offers_imgs}
                  />
                  <View style={styles.restaurants_details}>
                    <Text style={styles.restaurants_title}>{res_item[0]}</Text>
                    <Text style={styles.restaurants_subtitle}>Continental</Text>
                    <Text>20-30 minutes delivery</Text>
                    <TouchableOpacity
                      style={styles.view_menu}
                      onPress={() => navigation.push("Restaurant")}
                    >
                      {/* <Link href="/screens/Restaurant"> */}
                      <Text>View Menu</Text>
                      {/* </Link> */}
                    </TouchableOpacity>
                  </View>
                </View>
              );
            })}
          </View>
          <View style={{ height: 120 }}></View>
        </ScrollView>
      </SafeAreaView>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 5,
    alignItems: "flex-start",
    paddingTop: 8,
    padding: 8,
    height: "100%",
    width: "100%",
    backgroundColor: "#fff",
  },
  top_offers_view: {},
  top_offers_imgs: {
    resizeMode: "contain",
    width: 120,
    height: 150,
    marginRight: 5,
  },
  restaurants_details: {
    position: "absolute",
    top: "10%",
    left: "35%",
    gap: 5,
  },
  restaurants_title: {
    flexWrap: "wrap",
    fontSize: 20,
    fontWeight: "bold",
  },
  restaurants_subtitle: {
    flexWrap: "wrap",
    fontSize: 16,
    fontWeight: "bold",
  },
  view_menu: {
    backgroundColor: "orange",
    padding: 10,
    borderRadius: 10,
    alignItems: "center",
  },
  bottom_nav: {
    position: "sticky",
    width: "100%",
    bottom: 0,
    left: 0,
    right: 0,
  },
});

export default HomeScreen;
