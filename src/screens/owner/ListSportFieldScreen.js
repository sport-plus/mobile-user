import { AntDesign, Entypo, Ionicons, Octicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Divider } from "native-base";
import React, { useLayoutEffect, useState } from "react";
import { FlatList, Pressable, SafeAreaView, Text, View } from "react-native";
import {
  BottomModal,
  ModalContent,
  ModalFooter,
  ModalTitle,
  SlideAnimation,
} from "react-native-modals";
import { listSportField } from "../../assets/data/listSportField";
import { ButtonCustom, SportFieldItem } from "../../components";
import { COLORS } from "../../constants";

const filters = [
  {
    id: "0",
    filter: "cost: Low to High",
  },
  {
    id: "1",
    filter: "cost: High to Low",
  },
];

const ListSportFieldScreen = () => {
  const navigation = useNavigation();

  const [modalVisibile, setModalVisibile] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState([]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: "Sport Center",
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
      headerLeft: () => (
        <AntDesign
          name="arrowleft"
          size={24}
          color="white"
          onPress={() => navigation.navigate("SportCenter")}
        />
      ),
    });
  }, []);

  return (
    <SafeAreaView className="flex-1 bg-[#20224A] relative">
      <View className="flex-1 bg-[#ECF3FF] rounded-t-3xl px-5 pt-5">
        <View>
          <Pressable className="bg-white flex-row items-center justify-around p-5 py-3 rounded-lg z-10">
            <Pressable
              className="flex-row items-center space-x-2"
              onPress={() => setModalVisibile(!modalVisibile)}
            >
              <Octicons name="arrow-switch" size={22} color={COLORS.primary} />
              <Text className="text-[15px] font-semibold">Sort</Text>
            </Pressable>
            <Divider backgroundColor={COLORS.primary} width={0.5} height={6} />
            <Pressable className="flex-row items-center space-x-2">
              <Ionicons name="filter" size={22} color={COLORS.primary} />
              <Text className="text-[15px] font-semibold">Filter</Text>
            </Pressable>
          </Pressable>
          <View
            className="w-full h-12 opacity-30 rounded-lg absolute"
            style={{ backgroundColor: COLORS.primary, top: 5, left: 4 }}
          />
        </View>

        <View className="flex-1 mt-5">
          <FlatList
            data={listSportField}
            keyExtractor={(sportField) => sportField.id}
            renderItem={(sportField) => {
              return <SportFieldItem sportField={sportField.item} />;
            }}
            showsVerticalScrollIndicator={false}
          ></FlatList>
        </View>
      </View>

      {/* Modal sort and filter */}
      <BottomModal
        swipeThreshold={200}
        swipeDirection={["up", "down"]}
        onBackdropPress={() => setModalVisibile(!modalVisibile)}
        footer={
          <ModalFooter>
            <ButtonCustom
              title="Apply"
              borderRadius={0}
              onPress={() => applyFilter(selectedFilter)}
            />
          </ModalFooter>
        }
        modalTitle={<ModalTitle title="Sort and Filter" />}
        modalAnimation={
          new SlideAnimation({
            slideFrom: "bottom",
          })
        }
        onHardwareBackPress={() => setModalVisibile(!modalVisibile)}
        onTouchOutside={() => setModalVisibile(!modalVisibile)}
        visible={modalVisibile}
      >
        <ModalContent style={{ width: "100%", height: 200 }}>
          <View className="flex-row">
            <View
              className="pt-4 pr-4"
              style={{
                borderRightWidth: 1,
                borderColor: "#E0E0E0",
              }}
            >
              <Text className="text-center text-[16px]">Sort</Text>
            </View>
            <View style={{ flex: 3, margin: 10 }}>
              {filters.map((item) => (
                <Pressable
                  key={item.id}
                  className="flex-row items-center my-1"
                  onPress={() => setSelectedFilter(item.filter)}
                >
                  {/* {selectedFilter.includes(item.filter) ? (
                  <FontAwesome name="circle" size={18} color="green" />
                ) : ( */}
                  <Entypo name="circle" size={17} color="black" />
                  {/* )} */}

                  <Text className="text-[16px] font-semibold ml-2">
                    {item.filter}
                  </Text>
                </Pressable>
              ))}
            </View>
          </View>
        </ModalContent>
      </BottomModal>
    </SafeAreaView>
  );
};

export default ListSportFieldScreen;
