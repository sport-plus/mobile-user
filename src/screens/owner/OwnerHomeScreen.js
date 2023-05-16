import React, { useEffect, useLayoutEffect, useState } from "react";
import {
  Entypo,
  Feather,
  FontAwesome5,
  Foundation,
  Ionicons,
} from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import {
  Image,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Swiper from "react-native-swiper";
import { Divide } from "../../components";
import { COLORS, images } from "../../constants";

const listManager = [
  {
    id: "1",
    name: "Sport Center",
    icon: <Entypo name="sports-club" size={28} color={COLORS.primary} />,
    onFress: () => navigation.n,
  },
  {
    id: "2",
    name: "Booking Management",
    icon: (
      <Foundation name="clipboard-notes" size={28} color={COLORS.primary} />
    ),
  },
  {
    id: "3",
    name: "Booking Calendar",
    icon: <Feather name="calendar" size={28} color={COLORS.primary} />,
  },
  {
    id: "4",
    name: "Customer Information",
    icon: <Feather name="users" size={28} color={COLORS.primary} />,
  },
  {
    id: "5",
    name: "Statistics",
    icon: <Ionicons name="stats-chart" size={28} color={COLORS.primary} />,
  },
  {
    id: "6",
    name: "Services",
    icon: <Feather name="flag" size={28} color={COLORS.primary} />,
  },
];

const OwnerHomeScreen = ({ navigation }) => {
  const navigationHear = useNavigation();
  const currentDay = new Date();

  const [userData, setUserData] = useState();

  const listManager = [
    {
      id: "1",
      name: "Sport Center",
      icon: <Entypo name="sports-club" size={28} color={COLORS.primary} />,
      onFress: () => navigation.navigate("SportCenter"),
    },
    {
      id: "2",
      name: "Booking Management",
      icon: (
        <Foundation name="clipboard-notes" size={28} color={COLORS.primary} />
      ),
      onFress: () => navigation.navigate("SportCenter"),
    },
    {
      id: "3",
      name: "Booking Calendar",
      icon: <Feather name="calendar" size={28} color={COLORS.primary} />,
      onFress: () => navigation.navigate("SportCenter"),
    },
    {
      id: "4",
      name: "Customer Information",
      icon: <Feather name="users" size={28} color={COLORS.primary} />,
      onFress: () => navigation.navigate("SportCenter"),
    },
    {
      id: "5",
      name: "Statistics",
      icon: <Ionicons name="stats-chart" size={28} color={COLORS.primary} />,
      onFress: () => navigation.navigate("SportCenter"),
    },
    {
      id: "6",
      name: "Services",
      icon: <Feather name="flag" size={28} color={COLORS.primary} />,
      onFress: () => navigation.navigate("SportCenter"),
    },
  ];

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

  console.log(userData);

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
      <View className="mt-28 mb-8 px-9">
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
            <Text className="text-[22px] font-semibold">Tran Phu Son</Text>
          </View>
        </View>
      </View>

      <View className="px-9 flex-row flex-wrap gap-5">
        {listManager.map((item) => (
          <TouchableOpacity
            key={item.id}
            className="bg-[#F5F8FE] px-4 py-5 rounded-2xl flex-row items-center space-x-3 "
            style={{ elevation: 5, width: 150 }}
            onPress={() => navigation.navigate("SportCenter")}
          >
            {item.icon}
            <Text className="text-[15px] font-semibold">{item.name}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </SafeAreaView>
  );
};

export default OwnerHomeScreen;

const styles = StyleSheet.create({});
