import React, { useState, useEffect } from "react";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import { StyleSheet, View, SafeAreaView, StatusBar } from "react-native";
import * as Location from "expo-location";
import {
  NativeBaseProvider,
  Stack,
  ZStack,
  Text,
  Input,
  Button,
} from "native-base";

async function fetchAddress(latitude, longitude) {
  let response = await Location.reverseGeocodeAsync({
    latitude,
    longitude,
  });
  let addressFetched = null;

  for (let item of response) {
    addressFetched = `${item.name}, ${item.street}, ${item.postalCode}, ${item.city}`;

    console.log(addressFetched);
  }
  return addressFetched;
}

export default function MapScreen({ navigation }) {
  const [location, setLocation] = useState(null);
  const [address, setAddress] = useState("");
  const [errorMsg, setErrorMsg] = useState(null);
  const [markerCoord, setMarkerCoord] = useState({ latitude: 0, longitude: 0 });

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

  let text = "Waiting..";
  if (errorMsg) {
    text = errorMsg;
  } else if (location && address) {
    text = JSON.stringify(location);
  }

  return (
    <NativeBaseProvider>
      <SafeAreaView style={{ flex: 1, marginTop: StatusBar.currentHeight }}>
        <View style={styles.container}>
          <StatusBar style="auto" />
          <ZStack style={styles.zstack}>
            <MapView
              style={styles.map}
              provider={PROVIDER_GOOGLE}
              showsUserLocation
              //onpress object structure: {"action": "press", "coordinate": {"latitude": 22.56810640171351, "longitude": 88.3549066632986}, "position": {"x": 401, "y": 1062}}
              onPress={async (e) => {
                const { latitude, longitude } = e.nativeEvent.coordinate;
                console.log(latitude, longitude);
                const response = await fetchAddress(latitude, longitude);
                console.log("onpress: " + response);
                setAddress(response);
                setMarkerCoord({ latitude, longitude });
              }}
            >
              <Marker coordinate={markerCoord} />
            </MapView>
            <Stack width={"100%"} padding={"3"} bottom={"10px"} space={3}>
              <Input
                size="md"
                rounded={"xl"}
                placeholder="Select on map to fetch address..."
                backgroundColor={"white"}
                _focus={{ borderColor: "orange.500" }}
                onChangeText={(text) => setAddress(text)}
                value={address}
              />
              <Button
                rounded={"xl"}
                colorScheme={"orange"}
                onPress={() => {
                  navigation.navigate("Cart", { address: address });
                }}
              >
                <Text fontSize={"lg"} color={"white"}>
                  Confirm Delivery Address
                </Text>
              </Button>
            </Stack>
          </ZStack>
        </View>
      </SafeAreaView>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  zstack: {
    width: "100%",
    height: "100%",
  },
  map: {
    borderRadius: 10,
    overflow: "hidden",
    width: "100%",
    height: "100%",
  },
});
