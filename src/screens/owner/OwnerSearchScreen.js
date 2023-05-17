import { AntDesign, Ionicons } from "@expo/vector-icons";
import React, { useLayoutEffect, useState } from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";
import { Input } from "../../components";
import { COLORS } from "../../constants";
import { useNavigation } from "@react-navigation/native";

const OwnerSearchScreen = () => {
  const navigation = useNavigation();

  const [inputSearch, setInputSearch] = useState("");

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: "Search Sport Center",
      headerTitleAlign: "center",
      headerTitleStyle: {
        fontSize: 23,
        fontWeight: "500",
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

  return (
    <SafeAreaView className="flex-1 bg-[#20224A] relative">
      <View className="flex-1 bg-[#ECF3FF] rounded-t-3xl px-5">
        <Input
          onChangeText={(text) => setInputSearch(text)}
          placeholder="Enter sport center name"
          icon={<Ionicons name="ios-search" size={25} color={COLORS.primary} />}
          borderColor={COLORS.primary}
        />

        <View className="flex-1">
          {/* <FlatList
          data={listSportCenters}
          keyExtractor={(sportCenter) => sportCenter.id}
          renderItem={(sportCenter) => {
            return <SportCenterItem sportCenter={sportCenter.item} />;
          }}
        ></FlatList> */}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default OwnerSearchScreen;

const styles = StyleSheet.create({});
