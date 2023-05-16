import React from "react";
import { Image, Text, View } from "react-native";
import { COLORS, images } from "../constants";

const TitleName = ({ logo, logoHeight, logoWidth, textColor, textSize }) => {
  return (
    <View className="flex-row items-center gap-2">
      <Image
        source={logo ? logo : images.logo_green}
        style={{
          width: logoWidth ? logoWidth : 50,
          height: logoHeight ? logoHeight : 50,
        }}
      />
      <Text
        style={{
          fontSize: textSize ? textSize : 38,
          fontWeight: "900",
          color: textColor ? textColor : COLORS.primary,
        }}
      >
        TheThaoPlus
      </Text>
    </View>
  );
};

export default TitleName;
