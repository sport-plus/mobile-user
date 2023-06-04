import { FontAwesome5, Ionicons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect, useLayoutEffect, useState } from "react";
import {
  Image,
  SafeAreaView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Swiper from "react-native-swiper";
import { ListManager } from "../../assets/data/listManager";
import { Divide } from "../../components";
import { COLORS, images } from "../../constants";

const OwnerHomeScreen = ({ navigation }) => {
  const [userData, setUserData] = useState();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: "TheThaoPlus",
      headerTitleAlign: "center",
      headerTitleStyle: {
        fontSize: 25,
        fontWeight: "bold",
        color: "white",
      },
      headerStyle: {
        backgroundColor: COLORS.black,
        height: 60,
        borderBottomColor: "transparent",
        shadowColor: "transparent",
      },
      headerRight: () => (
        <Ionicons
          name="notifications-outline"
          size={24}
          color="white"
          style={{
            marginRight: 12,
          }}
        />
      ),
    });
  }, []);

  const loadUser = async () => {
    let userData = await AsyncStorage.getItem("userData");
    if (userData) {
      userData = JSON.parse(userData);
      setUserData(userData);
    }
  };

  useEffect(() => {
    loadUser();
  }, []);

  return (
    <SafeAreaView className="bg-white flex-1">
      <StatusBar backgroundColor={COLORS.black} />
      <Divide />

      {/* Slide */}
      <View className="absolute top-1 flex-col items-center px-9">
        <View className="z-50">
          <Swiper autoplay loop>
            <Image
              source={images.soccer}
              className="rounded-2xl w-80"
              style={{ height: 152 }}
            />
            <Image
              source={images.tennis}
              className="rounded-2xl w-80"
              style={{ height: 152 }}
            />
            <Image
              source={images.caulong}
              className="rounded-2xl w-80"
              style={{ height: 152 }}
            />
          </Swiper>
        </View>
        <View
          className="h-20 opacity-40 rounded-2xl absolute"
          style={{ backgroundColor: COLORS.primary, top: 85, width: 290 }}
        />
        <View
          className="w-64 h-20 opacity-30 rounded-2xl absolute"
          style={{ backgroundColor: COLORS.primary, top: 95, width: 270 }}
        />
      </View>

      {/* Date - Time */}
      <View className="mt-28 mb-7 px-9">
        <View
          className="bg-[#F5F8FE] p-5 rounded-2xl flex-row items-center space-x-4"
          style={{ elevation: 5 }}
        >
          <View className="bg-[#c4ede6] p-4 rounded-2xl">
            <FontAwesome5 name="user-circle" size={40} color={COLORS.primary} />
          </View>
          <View>
            <Text className="text-[18px] text-green-500 font-semibold">
              Supplier
            </Text>
            <Text className="text-[22px] font-semibold">
              {userData?.inputs.fullname}
            </Text>
          </View>
        </View>
      </View>

      <View className="px-8 flex-row flex-wrap gap-5">
        {ListManager.map((item) => (
          <View key={item.id}>
            <TouchableOpacity
              className="h-20 bg-[#F5F8FE] px-4 py-2 rounded-2xl flex-row items-center space-x-2 z-10"
              style={{ elevation: 3, width: 150 }}
              onPress={() => navigation.navigate(item.path)}
            >
              {item.icon}
              <Text className="text-[15px] font-semibold">{item.name}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              className="h-20 opacity-30 rounded-2xl absolute top-1 left-1"
              style={{ backgroundColor: COLORS.primary, width: 150 }}
            />
          </View>
        ))}
      </View>
    </SafeAreaView>
  );
};

export default OwnerHomeScreen;
