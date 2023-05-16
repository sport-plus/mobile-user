import {
  FontAwesome,
  FontAwesome5,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Box, Flex, Radio, Stack } from "native-base";
import React, { useState } from "react";
import {
  Alert,
  Keyboard,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
} from "react-native";
import { ButtonCustom, Input, Loader, TitleName } from "../components";
import { COLORS } from "../constants";

const RegistrationScreen = ({ navigation }) => {
  const [inputs, setInputs] = useState({
    fullname: "",
    email: "",
    phone: "",
    password: "",
  });
  const [role, setRole] = useState("user");
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const validate = () => {
    Keyboard.dismiss();
    let isValid = true;

    if (!inputs.email) {
      handleError("Please input email", "email");
      isValid = false;
    } else if (!inputs.email.match(/\S+@\S+\.\S+/)) {
      handleError("Please input a valid email", "email");
      isValid = false;
    }

    if (!inputs.fullname) {
      handleError("Please input fullname", "fullname");
      isValid = false;
    }

    if (!inputs.phone) {
      handleError("Please input phone number", "phone");
      isValid = false;
    }

    if (!inputs.password) {
      handleError("Please input password", "password");
      isValid = false;
    } else if (inputs.password.length < 5) {
      handleError("Min password length of 5", "password");
      isValid = false;
    }

    if (isValid) {
      register();
    }
  };

  const register = () => {
    setLoading(true);
    setTimeout(() => {
      const newUser = {
        inputs: inputs,
        role: role,
      };
      try {
        setLoading(false);
        AsyncStorage.setItem("userData", JSON.stringify(newUser));
        navigation.navigate("LoginScreen");
      } catch (error) {
        Alert.alert("Error", "Something went wrong");
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
            <Text style={styles.title}>Sign Up</Text>
          </Box>
          <Box marginY={10}>
            <Input
              onChangeText={(text) => handleOnchange(text, "fullname")}
              onFocus={() => handleError(null, "fullname")}
              icon={
                <FontAwesome5
                  name="user-alt"
                  size={22}
                  color={COLORS.lightPrimary}
                />
              }
              lable="Fullname"
              placeholder="Enter your fullname"
              error={errors.fullname}
            />
            <Input
              onChangeText={(text) => handleOnchange(text, "phone")}
              onFocus={() => handleError(null, "phone")}
              icon={
                <MaterialCommunityIcons
                  name="phone"
                  size={24}
                  color={COLORS.lightPrimary}
                />
              }
              lable="phone"
              placeholder="Enter your phone"
              error={errors.phone}
            />
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
            <Flex flexDirection="row" alignItems="center">
              <Text style={styles.label}>You are</Text>
              <Radio.Group
                name="roleUser"
                defaultValue="1"
                accessibilityLabel="pick a role"
                value={role}
                onChange={(nextValue) => {
                  setRole(nextValue);
                }}
              >
                <Stack
                  direction={{
                    base: "row",
                    md: "row",
                  }}
                  alignItems={{
                    base: "flex-start",
                    md: "center",
                  }}
                  space={4}
                  w="75%"
                  maxW="300px"
                >
                  <Radio value="user" colorScheme="green" size="sm">
                    User
                  </Radio>
                  <Radio value="Supplier" colorScheme="green" size="sm">
                    Supplier
                  </Radio>
                </Stack>
              </Radio.Group>
            </Flex>

            <ButtonCustom title="Sign up" onPress={validate} />
            <Flex marginTop={8}>
              <Text
                onPress={() => navigation.navigate("LoginScreen")}
                style={{
                  color: COLORS.black,
                  fontWeight: "bold",
                  textAlign: "center",
                  fontSize: 16,
                  marginBottom: 40,
                }}
              >
                Already have account?
                <Text style={{ color: COLORS.primary }}> Sign in</Text>
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

export default RegistrationScreen;

const styles = StyleSheet.create({
  title: {
    color: COLORS.black,
    fontSize: 24,
    fontWeight: "800",
    textAlign: "center",
    marginTop: 10,
  },
  label: {
    marginVertical: 5,
    fontSize: 14,
    color: COLORS.grey,
    marginRight: 20,
  },
});
