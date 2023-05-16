import React from "react";
import { StatusBar, View } from "react-native";
import TitleName from "../components/TitleName";
import { COLORS, images } from "../constants";

const SplashScreen = ({ navigation }) => {
  setTimeout(() => {
    navigation.replace("OnboardingScreen");
  }, 3000);

  return (
    <View
      className="flex-1 items-center justify-center"
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
    </View>
  );
};

export default SplashScreen;
