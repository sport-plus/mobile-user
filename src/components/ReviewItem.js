import { View, Text, Image } from "react-native";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import { COLORS } from "../constants";

const ReviewItem = ({ review }) => {
  return (
    <View
      className=" mb-3 p-3 space-y-1 bg-white rounded-lg"
      style={{ elevation: 1 }}
    >
      <View className="flex-row gap-1">
        <FontAwesome name="star" size={18} color={COLORS.yellow} />
        <FontAwesome name="star" size={18} color={COLORS.yellow} />
        <FontAwesome name="star" size={18} color={COLORS.yellow} />
        <FontAwesome name="star" size={18} color={COLORS.yellow} />
        <FontAwesome name="star" size={18} color={COLORS.yellow} />
      </View>
      <Text className="text-[16px] font-bold">{review.comment}</Text>
      <View className="flex-row justify-between items-end">
        <View className="flex-row items-center gap-2">
          <Image source={review.avatar} className="w-6 h-6" />
          <Text>{review.userName}</Text>
        </View>
        <Text>{review.dateTime}</Text>
      </View>
    </View>
  );
};

export default ReviewItem;
