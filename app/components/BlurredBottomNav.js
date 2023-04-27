import { View, Text, StyleSheet } from "react-native";
import { BlurView } from "expo-blur";

const BlurredBottomNav = () => {
  return (
    <View >
      <BlurView intensity={90} tint="dark">
        <Text>Explore</Text>
        <Text>Cart</Text>
        <Text>Profile</Text>
      </BlurView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    height: 100,
    width: "100%",
  },
  absolute: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    height: "100%",
    width: "100%",
  },
});

export default BlurredBottomNav;
