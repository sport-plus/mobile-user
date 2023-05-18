import { AntDesign, Feather, FontAwesome, Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import {
  Dimensions,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Swiper from "react-native-swiper";
import { Divide, ReviewItem } from "../../components";
import { COLORS, images } from "../../constants";
import { ListServices } from "../../assets/data/listServices";
import { ListReview } from "../../assets/data/listReview";
import { FlatList } from "react-native";

const { width, height } = Dimensions.get("window");

const listTab = [
  {
    status: "Services",
    path: "services",
  },
  {
    status: "Open time",
    path: "openTime",
  },
  {
    status: "Reviews",
    path: "reviews",
  },
];

const SportFieldDetailScreen = () => {
  const navigation = useNavigation();

  const [status, setStatus] = useState("services");

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
        className="flex-1 bg-[#ECF3FF] absolute w-full h-full rounded-t-3xl p-5 space-y-2"
        style={{ top: 220 }}
      >
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

        <View>
          <View className="flex-row items-center justify-center border-b-2 border-gray-300 mb-3">
            {listTab.map((item, index) => (
              <TouchableOpacity
                key={index}
                className="flex-row justify-center px-5 py-3"
                style={[
                  styles.btnTab,
                  status === item.path && styles.btnTabActive,
                ]}
                onPress={() => setStatusFilter(item.path)}
              >
                {status === item.path ? (
                  <Text className="text-[16px] text-[#00C187] font-bold">
                    {item.status}
                  </Text>
                ) : (
                  <Text className="text-[16px] ">{item.status}</Text>
                )}
              </TouchableOpacity>
            ))}
          </View>

          {/* Content tab */}
          <View>
            {status === "services" && (
              <View className="flex-row flex-wrap items-center gap-2">
                {ListServices.map((service) => (
                  <View
                    key={service.is}
                    className="flex-row items-center gap-1 w-40"
                  >
                    {service.icon}
                    <Text className="text-[15px] text-gray-400">
                      {service.name}
                    </Text>
                  </View>
                ))}
              </View>
            )}
          </View>
          <View>
            {status === "openTime" && (
              <View className="space-y-2">
                <View className="flex-row gap-2 items-center">
                  <Feather name="clock" size={30} color={COLORS.primary} />
                  <View>
                    <Text className="text-[16px] text-gray-500">Mon - Fri</Text>
                    <Text className="text-[16px] font-semibold">
                      8:00 - 22:00
                    </Text>
                  </View>
                </View>

                <View className="flex-row gap-2 items-center">
                  <Feather name="clock" size={30} color={COLORS.primary} />
                  <View>
                    <Text className="text-[16px] text-gray-500">Sat - Sun</Text>
                    <Text className="text-[16px] font-semibold">
                      8:00 - 23:00
                    </Text>
                  </View>
                </View>
              </View>
            )}
          </View>
          <View>
            {status === "reviews" && (
              <FlatList
                data={ListReview}
                keyExtractor={(review) => review.id}
                renderItem={(review) => {
                  return <ReviewItem review={review.item} />;
                }}
                showsVerticalScrollIndicator={false}
              ></FlatList>
            )}
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SportFieldDetailScreen;

const styles = StyleSheet.create({
  btnTab: {
    width: width / 3.35,
  },
  btnTabActive: {
    color: COLORS.primary,
    borderColor: COLORS.primary,
    borderBottomWidth: 2,
  },
});
