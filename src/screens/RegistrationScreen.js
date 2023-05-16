import {
  FontAwesome,
  FontAwesome5,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Flex, Radio, Stack } from "native-base";
import React, { useState } from "react";
import {
  Alert,
  Keyboard,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
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
    <SafeAreaView className="flex-1 bg-white">
      <Loader visible={loading} />
      <ScrollView>
        <View className="mt-6 px-5">
          <View className="items-center">
            <TitleName textSize={40} logoHeight={55} logoWidth={55} />
            <Text
              className="text-[24px] text-center font-extrabold mt-3"
              style={{ color: COLORS.black }}
            >
              Sign Up
            </Text>
          </View>
          <View className="my-10">
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
            <View className="flex-row items-center">
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
            </View>

            <ButtonCustom title="Sign up" onPress={validate} />
            <View className="mt-5">
              <Text
                className="text-[16px] text-center font-bold mb-10"
                onPress={() => navigation.navigate("LoginScreen")}
                style={{
                  color: COLORS.black,
                }}
              >
                Already have account?
                <Text style={{ color: COLORS.primary }}> Sign in</Text>
              </Text>
              <Text
                className="text-[15px] text-center leading-5"
                style={{
                  color: COLORS.black,
                }}
              >
                By creating a new account, you agree with our{" "}
                <Text className="font-bold">Terms & Conditions</Text> and{" "}
                <Text className="font-bold">Privacy Policy</Text>
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default RegistrationScreen;

const styles = StyleSheet.create({
  label: {
    marginVertical: 5,
    fontSize: 14,
    color: COLORS.grey,
    marginRight: 20,
  },
});
