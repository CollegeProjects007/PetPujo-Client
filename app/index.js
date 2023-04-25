import { StyleSheet, View, Image } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Input, NativeBaseProvider, Text, ScrollView } from "native-base";
import Ionicons from "@expo/vector-icons/Ionicons";
import { SafeAreaView } from "react-native-safe-area-context";

const top_offer_items = [
  "../assets/top_offers/offer_tile_1.jpg",
  "../assets/top_offers/offer_tile_2.jpg",
  "../assets/top_offers/offer_tile_3.jpg",
];

export default function Page() {
  return (
    <NativeBaseProvider>
      <SafeAreaView>
        <View style={styles.container}>
          <StatusBar style="auto" />
          <Input
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
          />
          <Image
            source={require("../assets/banner.jpg")}
            style={{ width: "100%", height: 300, resizeMode: "contain" }}
          />
          <Text fontSize="2xl" bold>
            Top Offers
          </Text>
          <ScrollView style={styles.top_offers_view} horizontal={true} maxHeight={160}>
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
            {/* {
              top_offer_items.map((item, index) => {
                console.log(item)
              return (
                <View key={index}>
                  <Image source={require({item})} />
                </View>
              )})
            } */}

          {/* <Image source={{ uri: "https://picsum.photos/id/237/200/300", width: 200, height: 300}} /> */}

            <Image
              source={require("../assets/top_offers/offer_tile_1.jpg")}
              style={styles.top_offers_imgs}
            />
            <Image
              source={require("../assets/top_offers/offer_tile_2.jpg")}
              style={styles.top_offers_imgs}
            />
            <Image
              source={require("../assets/top_offers/offer_tile_3.jpg")}
              style={styles.top_offers_imgs}
            />
            <Image
              source={require("../assets/top_offers/offer_tile_1.jpg")}
              style={styles.top_offers_imgs}
            />
            <Image
              source={require("../assets/top_offers/offer_tile_2.jpg")}
              style={styles.top_offers_imgs}
            />
            <Image
              source={require("../assets/top_offers/offer_tile_3.jpg")}
              style={styles.top_offers_imgs}
            />
          </ScrollView>
          <Text fontSize="2xl" bold>
              Restaurants Near You
          </Text> 
        </View>
      </SafeAreaView>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 5,
    alignItems: "flex-start",
    paddingTop: 14,
    padding: 8,
    height: "100%",
    width: "100%",
    backgroundColor: "#fff",
  },
  top_offers_view: {
  },
  top_offers_imgs: {
    resizeMode: "contain",
    width: 120,
    height: 150,
    marginRight: 5,
  },
});
