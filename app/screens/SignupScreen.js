import React from "react";
import { useState } from "react";
import { SafeAreaView, View, TouchableOpacity, Alert } from "react-native";

import {
  NativeBaseProvider,
  Stack,
  ZStack,
  Text,
  Input,
  Button,
  Image,
} from "native-base";
import Ionicons from "react-native-vector-icons/Ionicons";
import { signUp } from "../apis/auth/auth.js";

const banner = "../../assets/icons/logo_transparent.png";

const LoginScreen = ({ navigation }) => {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = React.useState(false);

  const handleClick = () => setShow(!show);

  return (
    <NativeBaseProvider>
      <SafeAreaView style={{ flex: 1, justifyContent: "center" }}>
        <View style={{ paddingHorizontal: 25, paddingTop: 30 }}>
          <View style={{ alignItems: "center" }}>
            <Image
              source={require(banner)}
              alt="Logo"
              height={200}
              width={"100%"}
              resizeMode="cover"
            />
          </View>
          <Text
            fontSize={"3xl"}
            fontFamily={"Sen-Bold"}
            style={{
              color: "#333",
              marginBottom: 25,
            }}
          >
            Signup
          </Text>
          <Stack space={10}>
            <Stack space={3}>
              <Input
                label={"Name"}
                size="md"
                rounded={"xl"}
                leftElement={
                  <Ionicons
                    name="ios-person-outline"
                    size={20}
                    color="#666"
                    style={{
                      marginLeft: 10,
                      marginRight: 5,
                    }}
                  />
                }
                placeholder="Enter your name.."
                keyboardType="default"
                inputType="default"
                backgroundColor={"white"}
                _focus={{ borderColor: "orange.500" }}
                onChangeText={(text) => setName(text)}
                value={name}
              />
              <Input
                label={"Location"}
                size="md"
                rounded={"xl"}
                leftElement={
                  <Ionicons
                    name="ios-location-outline"
                    size={20}
                    color="#666"
                    style={{
                      marginLeft: 10,
                      marginRight: 5,
                    }}
                  />
                }
                placeholder="Enter your location.."
                keyboardType="default"
                inputType="default"
                backgroundColor={"white"}
                _focus={{ borderColor: "orange.500" }}
                onChangeText={(text) => setLocation(text)}
                value={location}
              />
              <Input
                label={"Email ID"}
                size="md"
                rounded={"xl"}
                leftElement={
                  <Ionicons
                    name="ios-mail-outline"
                    size={20}
                    color="#666"
                    style={{
                      marginLeft: 10,
                      marginRight: 5,
                    }}
                  />
                }
                placeholder="Enter your email address.."
                keyboardType="email-address"
                inputType="email-address"
                backgroundColor={"white"}
                _focus={{ borderColor: "orange.500" }}
                onChangeText={(text) => setEmailAddress(text)}
                value={emailAddress}
              />
              <Input
                label={"Password"}
                size="md"
                rounded={"xl"}
                leftElement={
                  <Ionicons
                    name="ios-lock-closed-outline"
                    size={20}
                    color="#666"
                    style={{
                      marginLeft: 10,
                      marginRight: 5,
                    }}
                  />
                }
                type={show ? "text" : "password"}
                placeholder="Enter your password.."
                backgroundColor={"white"}
                _focus={{ borderColor: "orange.500" }}
                onChangeText={(text) => setPassword(text)}
                value={password}
                InputRightElement={
                  <TouchableOpacity onPress={handleClick}>
                    {show ? (
                      <Ionicons
                        name="ios-eye"
                        size={20}
                        color="#666"
                        style={{
                          marginLeft: 10,
                          marginRight: 10,
                        }}
                      />
                    ) : (
                      <Ionicons
                        name="ios-eye-off"
                        size={20}
                        color="#666"
                        style={{
                          marginLeft: 10,
                          marginRight: 10,
                        }}
                      />
                    )}
                  </TouchableOpacity>
                }
              />

              <Button
                rounded={"xl"}
                colorScheme={"orange"}
                onPress={() => {
                  //   navigation.navigate("MainScreen");
                  signUp(name, location, emailAddress, password)
                    .then((response) => {
                      if (response === "success") {
                        navigation.navigate("MainScreen");
                      } else {
                        console.log("Invalid credentials");
                        Alert.alert("Invalid credentials");
                      }
                    })
                    .catch((error) => {
                      console.log(error);
                    });
                }}
                leftIcon={
                  <Ionicons name="log-in-outline" size={28} color="white" />
                }
              >
                <Text fontFamily={"Sen"} fontSize={"xl"} color={"white"}>
                  Signup
                </Text>
              </Button>
            </Stack>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                marginBottom: 30,
              }}
            >
              <Text>Already have an account? </Text>
              <TouchableOpacity
                onPress={() => navigation.navigate("LoginScreen")}
              >
                <Text color={"orange.500"} fontWeight={"bold"}>
                  Login
                </Text>
              </TouchableOpacity>
            </View>
          </Stack>
        </View>
      </SafeAreaView>
    </NativeBaseProvider>
  );
};

export default LoginScreen;
