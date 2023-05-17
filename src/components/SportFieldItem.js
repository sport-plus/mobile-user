import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Dimensions, Image, Pressable, Text, View } from "react-native";
import { COLORS, images } from "../constants";

const { width, height } = Dimensions.get("window");

const SportFieldItem = ({ sportField }) => {
  const navigation = useNavigation();

  return (
    <Pressable
      className="bg-white rounded-xl border-gray-100 border-2 p-3 mb-5 "
      onPress={() => navigation.navigate("SportFieldDetail")}
    >
      <View className="flex-row gap-2">
        <View className="w-24 h-24">
          <Image
            source={sportField.image}
            className="rounded-lg w-full h-full"
          />
        </View>
        <View className="space-y-2">
          <Text className="text-[18px] font-bold tracking-wide">
            {sportField.name}
          </Text>
          <View className="flex-row items-center space-x-1">
            {sportField.status ? (
              <Ionicons
                name="checkmark-circle"
                size={24}
                color={COLORS.primary}
              />
            ) : (
              <MaterialIcons name="cancel" size={24} color="red" />
            )}
            {sportField.status ? (
              <Text className="text-[16px] text-green-500 font-bold tracking-wide">
                Available
              </Text>
            ) : (
              <Text className="text-[16px] text-red-500 font-bold tracking-wide">
                Not Available
              </Text>
            )}
          </View>
          <View className="flex-row justify-between items-start">
            <View className="flex-row items-center space-x-1 mb-2">
              <Image source={images.iconSportField} className="w-6 h-6" />
              <Text className="text-[15px]">{sportField.category}</Text>
            </View>
            <Text
              className="text-[16px] text-right font-bold"
              style={{
                color: COLORS.primary,
              }}
            >
              {sportField.price} <Text className="text-gray-600">VND/hour</Text>
            </Text>
          </View>
        </View>
      </View>
    </Pressable>
  );
};

export default SportFieldItem;
