import React, { useState, useEffect } from "react";
import {
  ZStack,
  View,
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
import { addToCart } from "../apis/cart/add-to-cart";
import { removeFromCart } from "../apis/cart/remove-from-cart";
import { viewCart } from "../apis/cart/view-cart";
import { placeOrder } from "../apis/orders/place-order";

export default function CartScreen({ route, navigation }) {
  const [address, setAddress] = useState("");
  const [total, setTotal] = useState(0);
  const [cartItems, setCartItems] = useState([]);

  // const items = [
  //   {
  //     name: "Hakka noodles",
  //     quantity: 1,
  //     price: 120,
  //     imagelink:
  //       "https://github.com/CollegeProjects007/PetPujo/blob/master/assets/restaurants/restaurant1.png?raw=true",
  //   },
  //   {
  //     name: "Hyderabadi Biryani",
  //     quantity: 2,
  //     price: 120,
  //     imagelink:
  //       "https://i.pinimg.com/564x/7a/e8/e7/7ae8e7b8b0952df598b1a56b875a2f86.jpg",
  //   },
  //   {
  //     name: "Hyderabadi Biryani",
  //     quantity: 2,
  //     price: 120,
  //     imagelink:
  //       "https://i.pinimg.com/564x/7a/e8/e7/7ae8e7b8b0952df598b1a56b875a2f86.jpg",
  //   },
  // ];

  useEffect(() => {
    if (route.params !== undefined) {
      console.log("inside cart screen" + route.params.address);
      setAddress(route.params.address);
    }

    // fetch items from backend
    viewCart()
      .then((data) => {
        console.log(data.data.data);
        setCartItems(data.data.data);
      })
      .catch((err) => {
        console.log(err);
      });

    // calculate total
    let total = 0;
    cartItems.forEach((item) => {
      total += item.quantity * item.price;
    });
    setTotal(total);
  }, [route.params]);

  return (
    <NativeBaseProvider>
      <SafeAreaView>
        <ScrollView>
          <View
            style={{
              flex: 1,
              justifyContent: "flex-start",
              alignItems: "flex-start",
              padding: 15,
              gap: 15,
              paddingBottom: 130,
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
            <View
              bg="gray.200"
              width={"100%"}
              borderRadius={15}
              alignItems={"center"}
              padding={5}
            >
              {cartItems.length === 0 ? (
                <Text fontFamily={"Sen"} fontSize={"md"} color={"gray.600"}>
                  Your cart is empty
                </Text>
              ) : (
                cartItems.map((item, index) => {
                  return (
                    <View
                      key={index}
                      style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "center",
                        paddingVertical: 10,
                        width: "100%",
                      }}
                    >
                      <View
                        style={{ flexDirection: "row", alignItems: "center" }}
                      >
                        <Image
                          source={{ uri: item.imagelink }}
                          alt="item image"
                          style={{
                            resizeMode: "cover",
                            width: 50,
                            height: 50,
                            borderRadius: 10,
                          }}
                        />
                        <View style={{ marginLeft: 10 }}>
                          <Text fontFamily={"Sen-Bold"} fontSize={"md"}>
                            {item.name}
                          </Text>
                          <Text
                            fontFamily={"Sen"}
                            fontSize="sm"
                            color="gray.600"
                          >
                            {item.quantity} x {item.price}
                          </Text>
                        </View>
                      </View>
                      <View
                        style={{ flexDirection: "row", alignItems: "center" }}
                      >
                        <TouchableOpacity
                          onPress={() => {
                            console.log("minus pressed");
                            removeFromCart(item._id)
                              .then((data) => {
                                console.log(data.data.data);
                                this.setState({ message_body: "add to cart" });
                              })
                              .catch((err) => {
                                console.log(err);
                              });
                            setTotal(total - item.price);
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
                          {item.quantity}
                        </Text>
                        <TouchableOpacity
                          onPress={() => {
                            console.log("plus pressed");
                            addToCart(item._id)
                              .then((data) => {
                                console.log(data.data.data);
                                this.setState({ message_body: "add to cart" }); // will cause to re-render
                              })
                              .catch((err) => {
                                console.log(err);
                              });
                            setTotal(total + item.price);
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
                      </View>
                    </View>
                  );
                })
              )}
            </View>
            {/* -----------Total---------- */}
            <View
              bg="gray.200"
              width={"100%"}
              height={"50px"}
              borderRadius={15}
              alignItems={"center"}
              padding={3}
            >
              <View
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
              </View>
            </View>
            {/* -----------Delivery Address---------- */}
            <HStack
              bg="gray.200"
              width={"100%"}
              height={"90px"}
              borderRadius={15}
              alignItems={"flex-start"}
              padding={3}
            >
              <View
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
              </View>
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
                placeOrder()
                  .then((data) => {
                    console.log(data.data.data);
                    navigation.navigate("OrderPlaced");
                  })
                  .catch((err) => {
                    console.log(err);
                  });
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
          </View>
        </ScrollView>
      </SafeAreaView>
    </NativeBaseProvider>
  );
}
