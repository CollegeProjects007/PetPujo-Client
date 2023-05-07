import { Link } from "expo-router";
import { View, Text } from "react-native";
import { Button, NativeBaseProvider } from "native-base";

export default function RestaurantPage() {
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
        <Text fontSize={"6xl"}></Text>
        <Text fontSize={"3xl"} color={"black"}>
          Account in Progress !!
        </Text>
      </View>
    </NativeBaseProvider>
  );
}
