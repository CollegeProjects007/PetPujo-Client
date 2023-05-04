import { Link } from "expo-router";
import { View } from "react-native";
import {
  ZStack,
  Box,
  Image,
  NativeBaseProvider,
  HStack,
  Text,
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

  return (
    <NativeBaseProvider>
      <SafeAreaView>
        <View
          style={{
            flex: 1,
            justifyContent: "flex-start",
            alignItems: "flex-start",
            padding: 15,
          }}
        >
          <HStack height="40px" width={"100%"} justifyContent="space-between">
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
            height={150}
            borderTopRadius={45}
            borderBottomRadius={15}
          >
            {/* Name */}
            <Text
              fontSize="2xl"
              bold
            >
              {restaurantDetails.name}
            </Text>
            {/* Ratting */}
            <Box
              bg="lime.500"
              borderRadius={15}
              top={30}
              right={5}
              style={{
                justifyContent: "center",
                alignItems: "center",
                paddingVertical: 5,
                paddingHorizontal: 20,
              }}
            >
              <Text color={"white"} fontSize="md">
                {restaurantDetails.rating}
              </Text>
            </Box>
          </ZStack>
        </View>
      </SafeAreaView>
    </NativeBaseProvider>
  );
}
