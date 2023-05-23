import { Link } from "expo-router";
import { View } from "react-native";
import { HStack, VStack, Text, Button, NativeBaseProvider } from "native-base";
import Ionicons from "@expo/vector-icons/Ionicons";
import { SafeAreaView } from "react-native-safe-area-context";
import { signOut } from "../apis/auth/auth.js";

export default function AccountScreen({ navigation }) {
  return (
    <NativeBaseProvider>
      <SafeAreaView>
        <View
          style={{
            justifyContent: "space-between",
            alignItems: "center",
            padding: 15,
            gap: 10,
            height: "90%",
            width: "100%",
          }}
        >
          {/*------------ Card bar ------------ */}
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
              Account Settings
            </Text>
            <Ionicons name="settings-outline" size={24} color="black" />
          </HStack>
          {/*------------ Options ------------ */}
          <VStack
            marginTop={5}
            marginBottom={5}
            bg="gray.200"
            width={"100%"}
            height={"280px"}
            borderRadius={15}
            justifyContent={"flex-start"}
            alignItems={"flex-start"}
            padding={3}
            space={1}
          >
            <Button
              variant={"ghost"}
              width={"100%"}
              colorScheme={"gray"}
              justifyContent={"space-between"}
              leftIcon={
                <Ionicons name="person-outline" size={24} color="black" />
              }
            >
              <Text fontFamily={"Sen"} fontSize={"xl"}>
                User Details
              </Text>
            </Button>
            <Button
              variant={"ghost"}
              width={"100%"}
              colorScheme={"gray"}
              justifyContent={"flex-start"}
              leftIcon={
                <Ionicons name="list-outline" size={24} color="black" />
              }
            >
              <Text fontFamily={"Sen"} fontSize={"xl"}>
                Past Orders
              </Text>
            </Button>
            <Button
              variant={"ghost"}
              width={"100%"}
              colorScheme={"gray"}
              justifyContent={"flex-start"}
              leftIcon={
                <Ionicons name="navigate-outline" size={24} color="black" />
              }
            >
              <Text fontFamily={"Sen"} fontSize={"xl"}>
                Saved Addresses
              </Text>
            </Button>
            <Button
              variant={"ghost"}
              width={"100%"}
              colorScheme={"gray"}
              justifyContent={"flex-start"}
              leftIcon={
                <Ionicons name="heart-outline" size={24} color="black" />
              }
            >
              <Text fontFamily={"Sen"} fontSize={"xl"}>
                Favorite Restaurants
              </Text>
            </Button>
            <Button
              variant={"ghost"}
              width={"100%"}
              colorScheme={"gray"}
              justifyContent={"flex-start"}
              leftIcon={
                <Ionicons name="book-outline" size={24} color="black" />
              }
            >
              <Text fontFamily={"Sen"} fontSize={"xl"}>
                Privacy Policy
              </Text>
            </Button>
          </VStack>
          <Button
            variant={"subtle"}
            width={"100%"}
            colorScheme={"gray"}
            leftIcon={
              <Ionicons name="log-out-outline" size={24} color="black" />
            }
            onPress={() => {
              signOut().then(() => navigation.navigate("LoginScreen"));
            }}
          >
            <Text fontFamily={"Sen"} fontSize={"xl"}>
              Logout
            </Text>
          </Button>
          <Text>Made with ❤️ in India</Text>
        </View>
      </SafeAreaView>
    </NativeBaseProvider>
  );
}
