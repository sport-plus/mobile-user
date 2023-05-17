import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { COLORS } from "../constants";
import Divide from "./Divide";

const SportCenterItem = ({ sportCenter }) => {
  const navigation = useNavigation();

  return (
    <Pressable
      className="bg-white rounded-xl border-gray-100 border-2 p-3 mb-5"
      onPress={() => navigation.navigate("ListSportField")}
    >
      <View className="w-full h-44 mb-2">
        <Image
          source={sportCenter.image}
          className="rounded-lg w-full h-full"
        />
      </View>
      <View className="space-y-1">
        <Text className="text-[18px] font-bold tracking-wide">
          {sportCenter.name}
        </Text>
        <Text className="text-[16px] text-gray-500 font-bold tracking-wide">
          Address: {sportCenter.address}
        </Text>
        <View className="flex-row items-center space-x-1 mb-2">
          <FontAwesome name="star" size={22} color={COLORS.yellow} />
          <Text className="text-[16px]">{sportCenter.star}</Text>
        </View>
        <Divide backgroundColor={COLORS.gray} radius={0} height={1} />
        <Text
          className="text-[16px] text-right font-bold"
          style={{
            color: COLORS.primary,
          }}
        >
          {sportCenter.slot} available
        </Text>
      </View>
    </Pressable>
  );
};

export default SportCenterItem;

const styles = StyleSheet.create({});
