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
  Button,
} from "native-base";
import { SafeAreaView } from "react-native-safe-area-context";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function OrderPlacedScreen({ navigation }) {
  return (
    <NativeBaseProvider>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          padding: 15,
          gap: 10,
          height: "100%",
          width: "100%",
          backgroundColor: "orange",
        }}
      >
        <Text fontSize={"6xl"}>🍲</Text>
        <Text fontSize={"3xl"} color={"black"}>
          Order Placed Successfully !!
        </Text>
        <Button
          padding={3}
          width={"100%"}
          bg={"orange.500"}
          rounded={"xl"}
          onPress={() => {
            console.log("Go to home");
            navigation.navigate("Explore");
          }}
        >
          <Text color={"white"} fontSize={"lg"}>
            Go to Home
          </Text>
        </Button>
      </View>
    </NativeBaseProvider>
  );
}
