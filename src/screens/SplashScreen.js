import React from "react";
import { Box, Flex } from "native-base";
import { Image, StatusBar, Text } from "react-native";
import { COLORS, images } from "../constants";

const SplashScreen = ({ navigation }) => {
  setTimeout(() => {
    navigation.replace("OnboardingScreen");
  }, 3000);

  return (
    <Box
      flex={1}
      alignItems="center"
      justifyContent="center"
      style={{ backgroundColor: COLORS.primary }}
    >
      <StatusBar
        barStyle="light-content"
        hidden={false}
        backgroundColor={COLORS.black}
      />
      <Flex direction="row" alignItems="center" className="gap-2">
        <Image source={images.logo_white} className="w-16 h-16" />
        <Text style={{ fontSize: 40, fontWeight: "900", color: "#fff" }}>
          TheThaoPlus
        </Text>
      </Flex>
    </Box>
  );
};

export default SplashScreen;
