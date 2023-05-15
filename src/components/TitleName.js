import { Flex } from "native-base";
import React from "react";
import { Image, Text } from "react-native";
import { COLORS, images } from "../constants";

const TitleName = ({ logo, logoHeight, logoWidth, textColor, textSize }) => {
  return (
    <Flex direction="row" alignItems="center" className="gap-2">
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
    </Flex>
  );
};

export default TitleName;
