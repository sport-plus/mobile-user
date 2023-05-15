import React from "react";
import { Box, Flex } from "native-base";
import { Image, StatusBar, Text } from "react-native";
import { COLORS, images } from "../constants";
import TitleName from "../components/TitleName";

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
      <TitleName
        logo={images.logo_white}
        logoHeight={70}
        logoWidth={70}
        textColor="#fff"
        textSize={40}
      />
    </Box>
  );
};

export default SplashScreen;
