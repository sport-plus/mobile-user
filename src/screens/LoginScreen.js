import React, { useState } from "react";
import { FontAwesome, MaterialCommunityIcons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  Alert,
  Keyboard,
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  Image,
  ScrollView,
} from "react-native";
import { ButtonCustom, Input, Loader, TitleName } from "../components";
import { COLORS, images } from "../constants";
import { Box, Flex } from "native-base";

const LoginScreen = ({ navigation }) => {
  const [inputs, setInputs] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const validate = async () => {
    Keyboard.dismiss();
    let isValid = true;
    if (!inputs.email) {
      handleError("Please input email", "email");
      isValid = false;
    }
    if (!inputs.password) {
      handleError("Please input password", "password");
      isValid = false;
    }
    if (isValid) {
      login();
    }
  };

  const login = () => {
    setLoading(true);
    setTimeout(async () => {
      setLoading(false);
      let userData = await AsyncStorage.getItem("userData");
      if (userData) {
        userData = JSON.parse(userData);
        console.log(userData);
        if (
          inputs.email == userData.inputs.email &&
          inputs.password == userData.inputs.password
        ) {
          navigation.navigate("OwnerMain");
          AsyncStorage.setItem(
            "userData",
            JSON.stringify({ ...userData, loggedIn: true })
          );
        } else {
          Alert.alert("Error", "Invalid Details");
        }
      } else {
        Alert.alert("Error", "User does not exist");
      }
    }, 2000);
  };

  const handleOnchange = (text, input) => {
    setInputs((prevState) => ({ ...prevState, [input]: text }));
  };

  const handleError = (error, input) => {
    setErrors((prevState) => ({ ...prevState, [input]: error }));
  };

  return (
    <SafeAreaView style={{ backgroundColor: COLORS.white, flex: 1 }}>
      <Loader visible={loading} />
      <ScrollView>
        <Box paddingTop={5} paddingX={6}>
          <Box alignItems="center">
            <TitleName textSize={40} logoHeight={55} logoWidth={55} />
            <Box className="flex-col gap-1 mt-4">
              <Text style={styles.title}>Discover, book & enjoy</Text>
              <Text style={styles.subtitle}>Sports for the healthy life</Text>
            </Box>
          </Box>
          <Box marginY={10}>
            <Box
              flexDirection="row"
              justifyContent="space-between"
              marginBottom={5}
            >
              <View style={styles.social}>
                <Image
                  source={images.Google}
                  style={{ width: 30, height: 30 }}
                />
              </View>
              <View style={styles.social}>
                <Image
                  source={images.Facebook}
                  style={{ width: 30, height: 30 }}
                />
              </View>
            </Box>
            <Input
              onChangeText={(text) => handleOnchange(text, "email")}
              onFocus={() => handleError(null, "email")}
              icon={
                <MaterialCommunityIcons
                  name="email"
                  size={24}
                  color={COLORS.lightPrimary}
                />
              }
              lable="Email"
              placeholder="Enter your email"
              error={errors.email}
            />
            <Input
              onChangeText={(text) => handleOnchange(text, "password")}
              onFocus={() => handleError(null, "password")}
              icon={
                <FontAwesome
                  name="lock"
                  size={24}
                  color={COLORS.lightPrimary}
                />
              }
              lable="Password"
              placeholder="Enter your password"
              error={errors.password}
              password
            />
            <ButtonCustom title="Log In" onPress={validate} />
            <Text
              onPress={() => navigation.navigate("HomeScreen")}
              style={{
                color: COLORS.primary,
                fontWeight: "bold",
                textAlign: "right",
                fontSize: 15,
              }}
            >
              Forgot password?
            </Text>
            <Flex marginTop={8}>
              <Text
                onPress={() => navigation.navigate("RegistrationScreen")}
                style={{
                  color: COLORS.black,
                  fontWeight: "bold",
                  textAlign: "center",
                  fontSize: 16,
                  marginBottom: 40,
                }}
              >
                Don't have an account?
                <Text style={{ color: COLORS.primary }}> Sign up</Text>
              </Text>
              <Text
                style={{
                  color: COLORS.black,
                  textAlign: "center",
                  fontSize: 15,
                  lineHeight: 23,
                }}
              >
                By creating a new account, you agree with our{" "}
                <Text
                  style={{
                    fontWeight: "bold",
                  }}
                >
                  Terms & Conditions
                </Text>{" "}
                and{" "}
                <Text
                  style={{
                    fontWeight: "bold",
                  }}
                >
                  Privacy Policy
                </Text>
              </Text>
            </Flex>
          </Box>
        </Box>
      </ScrollView>
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  subtitle: {
    color: COLORS.black,
    fontSize: 16,
    marginTop: 10,
    textAlign: "center",
  },
  title: {
    color: COLORS.black,
    fontSize: 24,
    fontWeight: "800",
    textAlign: "center",
    marginTop: 10,
  },
  social: {
    backgroundColor: COLORS.light,
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: "center",
    width: 160,
  },
});
