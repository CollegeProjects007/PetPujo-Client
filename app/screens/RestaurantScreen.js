import { View } from "react-native";
import {
  ZStack,
  Box,
  Image,
  NativeBaseProvider,
  HStack,
  VStack,
  Text,
  ScrollView,
} from "native-base";
import { SafeAreaView } from "react-native-safe-area-context";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function RestaurantScreen({ navigation }) {
  const restaurantDetails = {
    name: "Shark Tank",
    type: "Continental, Fast Food",
    rating: 4.3,
    reviews: 1200,
    address: "Kudghat, Kolkata",
    deliveryTime: "20 - 30 mins",
    distance: "2.5 km",
  };

  const items = [
    {
      name: "Haka Noodles",
      description: "Chicken Burger with extra cheese",
      price: 120,
      image:
        "https://github.com/CollegeProjects007/PetPujo/blob/master/assets/restaurants/restaurant1.png?raw=true",
    },
    {
      name: "Hyderabadi Biryani",
      price: 120,
      description: "Chicken Burger with extra cheese",
      image:
        "https://i.pinimg.com/564x/7a/e8/e7/7ae8e7b8b0952df598b1a56b875a2f86.jpg",
    },
    {
      name: "Kolkata Biryani",
      price: 120,
      description: "Chicken Burger with extra cheese",
      image:
        "https://i.pinimg.com/564x/e5/d7/5f/e5d75f16c484d44111bde714b21841b1.jpg",
    },
    {
      name: "Friedrice Chillichicken combo",
      price: 120,
      description: "Chicken Burger with extra cheese",
      image:
        "https://i.pinimg.com/564x/6a/8b/b3/6a8bb378607b544994582707e55b2589.jpg",
    },
    {
      name: "Handi Mutton",
      price: 120,
      description: "Chicken Burger with extra cheese",
      image:
        "https://res.cloudinary.com/swiggy/image/upload/f_auto,q_auto,fl_lossy/aydszskkuu1cewrwymsp",
    },
    {
      name: "Chicken Burger",
      price: 120,
      description: "Chicken Burger with extra cheese",
      image:
        "https://github.com/CollegeProjects007/PetPujo/blob/master/assets/restaurants/restaurant1.png?raw=true",
    },
  ];

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
              gap: 10,
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
              <TouchableOpacity>
                <Image
                  source={require("../../assets/icons/menu_icon.png")}
                  alt="restaurant image"
                  style={{ resizeMode: "contain", width: 24, height: 24 }}
                />
              </TouchableOpacity>
            </HStack>
            {/*------------ Restaurant Info ------------ */}
            {/* <ZStack> */}
            <ZStack
              bg="gray.200"
              width={"100%"}
              // Todo: height not intrinsic
              height={"150px"}
              borderTopRadius={45}
              borderBottomRadius={15}
            >
              <VStack top={25} left={5}>
                {/* Name */}
                <Text fontFamily={"Sen-Bold"} fontSize="3xl">
                  {restaurantDetails.name}
                </Text>
                {/* Type */}
                <Text fontFamily={"Sen-Bold"} fontSize="md" color="lime.600">
                  {restaurantDetails.type}
                </Text>
                {/* Address */}
                <Text fontFamily={"Sen"} fontSize="md" color="gray.600">
                  {restaurantDetails.address}
                </Text>
                {/* Delivery Time */}
                <HStack space={2} paddingTop={3}>
                  <Image
                    source={require("../../assets/icons/timer_icon.png")}
                    alt="timer"
                    size={5}
                    resizeMode="contain"
                  />
                  <Text
                    fontFamily={"Sen"}
                    color={"black"}
                    fontSize="md"
                    textAlign="center"
                  >
                    {restaurantDetails.deliveryTime} |{" "}
                    {restaurantDetails.distance} away
                  </Text>
                </HStack>
              </VStack>

              {/* Ratting */}
              <Box
                bg="lime.500"
                borderRadius={15}
                right={5}
                width={"75px"}
                style={{
                  top: 40,
                  justifyContent: "center",
                  alignItems: "center",
                  paddingVertical: 6,
                }}
              >
                <Text color={"white"} fontSize="md">
                  {restaurantDetails.rating}
                </Text>
              </Box>

              {/* Reviews */}
              <Box
                bg="white"
                borderRadius={15}
                right={5}
                style={{
                  top: 80,
                  justifyContent: "center",
                  alignItems: "center",
                  paddingVertical: 5,
                  paddingHorizontal: 15,
                }}
              >
                <Text color={"black"} fontSize="sm" textAlign="center">
                  {restaurantDetails.reviews}+{"\n"}Reviews
                </Text>
              </Box>
            </ZStack>
            {/* -----------Items---------- */}
            {items.map((item, index) => {
              return (
                <View
                  key={index}
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    borderBottomWidth: 1,
                    borderBottomColor: "#eee",
                    width: "100%",
                    height: 120,
                  }}
                >
                  <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Image
                      source={{ uri: item.image }}
                      alt="item image"
                      style={{
                        resizeMode: "contain",
                        width: 100,
                        height: 120,
                        borderRadius: 10,
                      }}
                    />
                    <View style={{ marginLeft: 10 }}>
                      <Text fontFamily={"Sen-Bold"} fontSize="lg">
                        {item.name}
                      </Text>
                      <Text
                        fontFamily={"Sen"}
                        fontSize="sm"
                        color="gray.600"
                        maxHeight={"30px"}
                      >
                        {item.description}
                      </Text>
                      <Text fontFamily={"Sen"} fontSize="lg" color="black">
                        ₹ {item.price}/-
                      </Text>
                      <TouchableOpacity
                        style={{
                          // backgroundColor: "orange",
                          // justifyContent: "center",
                          // alignItems: "center",
                          borderRadius: 5,
                          paddingVertical: 5,
                        }}
                      >
                        <Text color={"orange.500"} fontSize={"md"}>
                          Add to Cart
                        </Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              );
            })}
          </View>
        </ScrollView>
      </SafeAreaView>
    </NativeBaseProvider>
  );
}
