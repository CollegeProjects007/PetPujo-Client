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
import { currentOrders } from "../apis/orders/current-orders";
import { set } from "react-native-reanimated";
import { pastOrders } from "../apis/orders/past-orders";

export default function PastOrdersScreen({ route, navigation }) {
  const [address, setAddress] = useState("");
  const [total, setTotal] = useState(360);
  const [currentItems, setCurrentItems] = useState([]);
  const [orderedItems, setOrderedItems] = useState([]);

  useEffect(() => {
    pastOrders()
      .then((response) => {
        console.log(response.data.pastOrders);
        setCurrentItems(response.data.pastOrders);
        setOrderedItems(response.data.pastOrders.items);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

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
            {/*------------ CurrentOrders bar ------------ */}
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
                Past Orders
              </Text>
              <Image
                source={require("../../assets/icons/cart_icon.png")}
                alt="restaurant image"
                tintColor={"#000"}
                style={{ resizeMode: "contain", width: 28, height: 28 }}
              />
            </HStack>
            {/* -----------Items---------- */}

            {currentItems.map((item, index) => {
              return (
                <VStack
                  key={index}
                  bg="gray.200"
                  width={"100%"}
                  height={"150px"}
                  borderRadius={15}
                  alignItems={"flex-start"}
                  padding={3}
                >
                  <Box
                    flexDirection={"row"}
                    alignItems={"center"}
                    justifyContent={"center"}
                  >
                    <Text fontFamily={"Sen-Bold"} fontSize={"xl"}>
                      OrderId:{" "}
                    </Text>
                    <Text fontFamily={"Sen"} fontSize={"md"}>
                      {item._id}
                    </Text>
                  </Box>
                  <Box
                    style={{
                      flexDirection: "row",
                      justifyContent: "flex-start",
                      alignItems: "center",
                      width: "100%",
                      height: 30,
                    }}
                  >
                    <Text fontFamily={"Sen-Bold"} fontSize={"xl"}>
                      Total:{" "}
                    </Text>
                    <Text fontFamily={"Sen-Bold"} fontSize={"lg"}>
                      ₹ {item.totalCost}
                    </Text>
                  </Box>
                  <Box
                    style={{
                      flexDirection: "row",
                      justifyContent: "flex-start",
                      alignItems: "center",
                      width: "100%",
                      height: 30,
                    }}
                  >
                    <Text fontFamily={"Sen-Bold"} fontSize={"xl"}>
                      Order Status:{" "}
                    </Text>
                    <Text fontFamily={"Sen-Bold"} fontSize={"lg"}>
                      {item.status}
                    </Text>
                  </Box>
                </VStack>
              );
            })}
            {[].map((item, index) => {
              return (
                <Box
                  key={index}
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    paddingVertical: 10,
                    width: "100%",
                    height: 60,
                  }}
                >
                  <Box style={{ flexDirection: "row", alignItems: "center" }}>
                    <Image
                      source={{ uri: item.image }}
                      alt="item image"
                      style={{
                        resizeMode: "cover",
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
                </Box>
              );
            })}
            {/* -----------Total---------- */}
          </Box>
        </ScrollView>
      </SafeAreaView>
    </NativeBaseProvider>
  );
}
