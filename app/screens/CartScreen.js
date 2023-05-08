import React, { useState, useEffect } from "react";
import { View as Box } from "react-native";
import {
  ZStack,
  Button,
  Image,
  NativeBaseProvider,
  HStack,
  VStack,
  Text,
  ScrollView,
} from "native-base";
import { SafeAreaView } from "react-native-safe-area-context";
import { TouchableOpacity } from "react-native-gesture-handler";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function CartScreen({ route, navigation }) {
  const [address, setAddress] = useState("");
  const [total, setTotal] = useState(360);

  const items = [
    {
      name: "Hakka noodles",
      quantity: 1,
      price: 120,
      image:
        "https://github.com/CollegeProjects007/PetPujo/blob/master/assets/restaurants/restaurant1.png?raw=true",
    },
    {
      name: "Hyderabadi Biryani",
      quantity: 2,
      price: 120,
      image:
        "https://i.pinimg.com/564x/7a/e8/e7/7ae8e7b8b0952df598b1a56b875a2f86.jpg",
    },
  ];

  useEffect(() => {
    if (route.params !== undefined) {
      console.log("inside cart screen" + route.params.address);
      setAddress(route.params.address);
    }
  }, [route.params]);

  return (
    <NativeBaseProvider>
      <SafeAreaView>
        <ScrollView>
          <Box
            style={{
              flex: 1,
              justifyContent: "flex-start",
              alignItems: "flex-start",
              padding: 15,
              gap: 15,
            }}
          >
            {/*------------ Back button ------------ */}
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
                  // navigation.navigate("Map");
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
              height={"150px"}
              borderRadius={15}
              alignItems={"center"}
              padding={3}
            >
              {items.map((item, index) => {
                return (
                  <Box
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
                    <Box style={{ flexDirection: "row", alignItems: "center" }}>
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
                      <Box style={{ marginLeft: 10 }}>
                        <Text fontFamily={"Sen-Bold"} fontSize={"md"}>
                          {item.name}
                        </Text>
                        <Text fontFamily={"Sen"} fontSize="sm" color="gray.600">
                          {item.quantity} x {item.price}
                        </Text>
                      </Box>
                    </Box>
                    <Box style={{ flexDirection: "row", alignItems: "center" }}>
                      <TouchableOpacity
                        onPress={() => {
                          console.log("plus pressed");
                          setTotal(total - item.price);
                          item.quantity--;
                        }}
                      >
                        <Image
                          source={require("../../assets/icons/minus_icon.png")}
                          alt="minus icon"
                          style={{
                            resizeMode: "contain",
                            width: 24,
                            height: 24,
                          }}
                        />
                      </TouchableOpacity>
                      <Text
                        fontFamily={"Sen-Bold"}
                        fontSize={"md"}
                        style={{ marginHorizontal: 10 }}
                      >
                        1
                      </Text>
                      <TouchableOpacity
                        onPress={() => {
                          console.log("plus pressed");
                          setTotal(total + item.price);
                          item.quantity++;
                        }}
                      >
                        <Image
                          source={require("../../assets/icons/plus_icon.png")}
                          alt="plus icon"
                          style={{
                            resizeMode: "contain",
                            width: 24,
                            height: 24,
                          }}
                        />
                      </TouchableOpacity>
                    </Box>
                  </Box>
                );
              })}
            </VStack>
            {/* -----------Total---------- */}
            <VStack
              bg="gray.200"
              width={"100%"}
              height={"50px"}
              borderRadius={15}
              alignItems={"center"}
              padding={3}
            >
              <Box
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  width: "100%",
                  height: 30,
                }}
              >
                <Text fontFamily={"Sen-Bold"} fontSize={"md"}>
                  Total
                </Text>
                <Text fontFamily={"Sen-Bold"} fontSize={"lg"}>
                  ₹ {total}
                </Text>
              </Box>
            </VStack>
            {/* -----------Delivery Address---------- */}
            <HStack
              bg="gray.200"
              width={"100%"}
              height={"90px"}
              borderRadius={15}
              alignItems={"flex-start"}
              padding={3}
            >
              <Box
                style={{
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  alignItems: "flex-start",
                  width: "89%",
                }}
              >
                <Text fontFamily={"Sen-Bold"} fontSize={"md"}>
                  Delivery Address:
                </Text>
                <Text fontFamily={"Sen-Bold"} fontSize={"md"}>
                  {address}
                </Text>
              </Box>
              <Button
                padding={2}
                bg={"orange.500"}
                rounded={"xl"}
                onPress={() => {
                  navigation.push("Map");
                }}
              >
                <Ionicons name="location-outline" size={24} color="white" />
              </Button>
            </HStack>
            {/* -----------Payment Method---------- */}
            <HStack
              bg="gray.200"
              width={"100%"}
              height={"50px"}
              borderRadius={15}
              alignItems={"flex-start"}
              justifyContent={"space-between"}
              padding={3}
            >
              <Text fontFamily={"Sen-Bold"} fontSize={"md"}>
                Payment Method:
              </Text>

              <HStack space={2}>
                <Text fontFamily={"Sen-Bold"} fontSize={"md"}>
                  COD
                </Text>
                <Ionicons name="cash-outline" size={24} color="black" />
              </HStack>
            </HStack>
            {/* -----------Checkout---------- */}
            <Button
              padding={3}
              width={"100%"}
              bg={"orange.500"}
              rounded={"xl"}
              onPress={() => {
                console.log("Checkout");
                navigation.push("OrderPlaced");
              }}
            >
              <HStack
                flexDirection={"row"}
                space={2}
                justifyContent={"center"}
                alignItems={"center"}
              >
                <Ionicons name="fast-food-outline" size={28} color="white" />
                <Text color={"white"} fontSize={"xl"} fontFamily={"Sen"}>
                  Place Order
                </Text>
              </HStack>
            </Button>
          </Box>
        </ScrollView>
      </SafeAreaView>
    </NativeBaseProvider>
  );
}
