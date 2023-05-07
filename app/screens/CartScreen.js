import React from "react";
import { View } from "react-native";
import {
  ZStack,
  Box,
  Image,
  NativeBaseProvider,
  HStack,
  VStack,
  Text,
} from "native-base";
import { SafeAreaView } from "react-native-safe-area-context";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function CartScreen({ navigation }) {
  const items = [
    {
      name: "Chicken Burger",
      description: "Chicken Burger with extra cheese",
      quantity: 1,
      price: 120,
      image:
        "https://github.com/CollegeProjects007/PetPujo/blob/master/assets/restaurants/restaurant1.png?raw=true",
    },
    {
      name: "Chicken Burger",
      quantity: 2,
      price: 120,
      description: "Chicken Burger with extra cheese",
      image:
        "https://github.com/CollegeProjects007/PetPujo/blob/master/assets/restaurants/restaurant1.png?raw=true",
    },
  ];

  return (
    <NativeBaseProvider>
      <SafeAreaView>
        <View
          style={{
            flex: 1,
            justifyContent: "flex-start",
            alignItems: "flex-start",
            padding: 15,
            gap: 15,
          }}
        >
          <HStack height="30px" width={"100%"} justifyContent="space-between">
            <TouchableOpacity
              onPress={() => {
                navigation.goBack();
              }}
            >
              <Image
                source={require("../../assets/icons/back_icon.png")}
                alt="back button"
                style={{ resizeMode: "contain", width: 24, height: 24 }}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                navigation.push("Map");
              }}
            >
              <Image
                source={require("../../assets/icons/menu_icon.png")}
                alt="restaurant image"
                style={{ resizeMode: "contain", width: 24, height: 24 }}
              />
            </TouchableOpacity>
          </HStack>
          {/*------------ Card bar ------------ */}
          {/* <ZStack> */}
          <HStack
            bg="gray.200"
            width={"100%"}
            height={"65px"}
            borderTopRadius={45}
            borderBottomRadius={15}
            justifyContent={"space-between"}
            alignItems={"center"}
            paddingX={10}
          >
            <Text fontFamily={"Sen-Bold"} fontSize={"2xl"}>
              Cart
            </Text>
            <Image
              source={require("../../assets/icons/cart_icon.png")}
              alt="restaurant image"
              tintColor={"#000"}
              style={{ resizeMode: "contain", width: 28, height: 28 }}
            />
          </HStack>
          {/* -----------Items---------- */}
          <VStack
            bg="gray.200"
            width={"100%"}
            height={"200px"}
            borderRadius={15}
            alignItems={"center"}
            padding={3}
          >
            {items.map((item, index) => {
              return (
                <View
                  key={index}
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    paddingVertical: 10,
                    borderBottomWidth: 1,
                    borderBottomColor: "#eee",
                    width: "100%",
                    height: 60,
                  }}
                >
                  <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Image
                      source={{ uri: item.image }}
                      alt="item image"
                      style={{
                        resizeMode: "contain",
                        width: 50,
                        height: 50,
                        borderRadius: 10,
                      }}
                    />
                    <View style={{ marginLeft: 10 }}>
                      <Text fontFamily={"Sen-Bold"} fontSize={"md"}>
                        {item.name}
                      </Text>
                      <Text fontFamily={"Sen"} fontSize="sm" color="gray.600">
                        {item.quantity} x {item.price}
                      </Text>
                    </View>
                  </View>
                  <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <TouchableOpacity>
                      <Image
                        source={require("../../assets/icons/minus_icon.png")}
                        alt="minus icon"
                        style={{ resizeMode: "contain", width: 24, height: 24 }}
                      />
                    </TouchableOpacity>
                    <Text
                      fontFamily={"Sen-Bold"}
                      fontSize={"md"}
                      style={{ marginHorizontal: 10 }}
                    >
                      1
                    </Text>
                    <TouchableOpacity>
                      <Image
                        source={require("../../assets/icons/plus_icon.png")}
                        alt="plus icon"
                        style={{ resizeMode: "contain", width: 24, height: 24 }}
                      />
                    </TouchableOpacity>
                  </View>
                </View>
              );
            })}
          </VStack>
        </View>
      </SafeAreaView>
    </NativeBaseProvider>
  );
}
