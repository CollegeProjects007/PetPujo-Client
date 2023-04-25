import { StatusBar, statusbar } from "expo-status-bar";
import { View, Image, StyleSheet } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Image source={require("../assets/banner.jpg")} style={{ width: "90%", resizeMode: "contain" }} />
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        height: "100%",
        width: "100%",
        backgroundColor: "#000",
    },
 });