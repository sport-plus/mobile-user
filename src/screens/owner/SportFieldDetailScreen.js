import {
  View,
  Text,
  Switch,
  SafeAreaView,
  Image,
  ScrollView,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import Swiper from "react-native-swiper";
import { COLORS, images } from "../../constants";
import {
  AntDesign,
  Entypo,
  FontAwesome5,
  Ionicons,
  Octicons,
} from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { Divide } from "../../components";
import { Touchable } from "react-native";
import { StyleSheet } from "react-native";

const { width, height } = Dimensions.get("window");

const listTab = [
  {
    status: "All",
  },
  {
    status: "Purple",
  },
  {
    status: "Green",
  },
];

const SportFieldDetailScreen = () => {
  const navigation = useNavigation();

  const [status, setStatus] = useState("All");

  const setStatusFilter = (status) => {
    setStatus(status);
  };

  return (
    <SafeAreaView className="bg-white flex-1">
      <View>
        <View className="h-60">
          <Swiper loop autoplay activeDotColor={COLORS.black}>
            <Image source={images.soccer} className="w-full h-full" />
            <Image source={images.tennis} className=" w-full h-full" />
            <Image source={images.caulong} className=" w-full h-full" />
          </Swiper>
        </View>

        <View className="flex-row items-center justify-between p-4 absolute w-full">
          <View className="bg-[#00C187] w-10 h-10 rounded-full flex items-center justify-center opacity-80">
            <AntDesign
              name="arrowleft"
              size={24}
              color="white"
              onPress={() => navigation.navigate("ListSportField")}
            />
          </View>
          <View className="bg-[#00C187] w-10 h-10 rounded-full flex items-center justify-center opacity-80">
            <Ionicons name="notifications-outline" size={24} color="white" />
          </View>
        </View>
      </View>

      <View
        className="flex-1 bg-[#ECF3FF] absolute w-full h-full rounded-t-3xl p-5"
        style={{ top: 220 }}
      >
        <ScrollView showsVerticalScrollIndicator={false} className="space-y-2">
          <Text className="text-[20px] font-bold tracking-wide">
            Artificial football field 1
          </Text>

          <View className="flex-row items-center justify-between">
            <View className="flex-row items-center space-x-1 mb-2">
              <Feather name="phone" size={22} color={COLORS.primary} />
              <Text className="text-[16px]">0914360736</Text>
            </View>
            <View className="flex-row items-center space-x-1 mb-2">
              <FontAwesome name="star" size={22} color={COLORS.yellow} />
              <Text className="text-[16px]">5</Text>
            </View>
          </View>

          <View className="flex-row items-center justify-between mb-2">
            <View className="flex-row items-center space-x-2">
              <Image source={images.iconSportField} className="w-8 h-8" />
              <Text className="text-[16px]">7 x 7</Text>
            </View>
            <Text
              className="text-[18px] text-right font-bold"
              style={{
                color: COLORS.primary,
              }}
            >
              300.000 <Text className="text-gray-600">VND/hour</Text>
            </Text>
          </View>

          <Divide backgroundColor="grey" height={2} />

          <View className="flex-row gap-2 mb-4">
            <View className="w-20 h-20">
              <Image
                source={images.sanBong}
                className="rounded-lg w-full h-full"
              />
            </View>

            <View className="space-y-1" style={{ width: width - 120 }}>
              <Text className="text-[16px] text-gray-500 font-bold tracking-wide">
                177 Nguyen Xi, Binh Thanh, tp Ho Chi Minh
              </Text>
              <Text className="text-[14px] text-blue-400 font-bold tracking-wide">
                Open on map
              </Text>
            </View>
          </View>

          <Divide backgroundColor="grey" height={2} />

          <View style={styles.container}>
            <View style={styles.listTab}>
              {listTab.map((item, index) => (
                <TouchableOpacity
                  key={index}
                  style={[
                    styles.btnTab,
                    status === item.status && styles.btnTabActive,
                  ]}
                  onPress={() => setStatusFilter(item.status)}
                >
                  <Text style={styles.textTab}>{item.status}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default SportFieldDetailScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    justifyContent: "center",
  },
  listTab: {
    flexDirection: "row",
    alignSelf: "center",
    marginBottom: 20,
  },
  btnTab: {
    width: width / 3.5,
    flexDirection: "row",
    borderColor: "#EBEBEB",
    borderWidth: 0.5,
    padding: 10,
    justifyContent: "center",
  },
  textTab: {
    fontSize: 16,
  },
  btnTabActive: {
    backgroundColor: COLORS.primary,
  },
});
