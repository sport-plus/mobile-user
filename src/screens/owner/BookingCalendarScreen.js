import { AntDesign, Feather, Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React, { useLayoutEffect, useState } from "react";
import { Alert, Pressable, StyleSheet, Text, View } from "react-native";
import { Agenda } from "react-native-calendars";
import bookings from "../../assets/data/bookings.json";
import { COLORS } from "../../constants";

 const BookingCalendarScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: "Booking Calendar",
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
          onPress={() => navigation.navigate("OwnerMain")}
        />
      ),
    });
  }, []);

  const [items, setItems] = useState({});

  const loadItems = (day) => {
    setItems(bookings);
  };

  const renderEmptyDate = () => {
    return (
      <View className="flex-1 pt-20 h-14">
        <Text>This is empty date!</Text>
      </View>
    );
  };

  const renderItem = (reservation, isFirst) => {
    const fontSize = isFirst ? 16 : 14;
    const color = isFirst ? "black" : "#43515c";

    return (
      <Pressable
        className="bg-white flex-1 rounded-xl border-2 border-[#00c1879f] p-3 z-10 mr-5 mt-2 mb-2 space-y-1"
        style={[{ elevation: 2 }]}
        onPress={() => Alert.alert(reservation.name)}
      >
        <Text className="text-[18px] font-bold tracking-wide" style={{ color }}>
          {reservation.name}
        </Text>
        <View className="flex-row items-center space-x-1 mb-2">
          <Ionicons
            name="ios-location-outline"
            size={22}
            color={COLORS.primary}
          />
          <Text className="text-[16px]">{reservation.address}</Text>
        </View>
        <View className="flex-row items-center space-x-1 mb-2">
          <Feather name="clock" size={22} color={COLORS.primary} />
          <Text className="text-[16px]">{reservation.startTime}</Text>
        </View>
        <View className="flex-row items-center space-x-1 mb-2">
          <Ionicons name="timer" size={22} color={COLORS.primary} />
          <Text className="text-[16px]">{reservation.hours}</Text>
        </View>
        <View className="flex-row items-center space-x-1 mb-2">
          <Feather name="user" size={22} color={COLORS.primary} />
          <Text className="text-[16px]">{reservation.userName}</Text>
        </View>
      </Pressable>
    );
  };

  return (
    <View className="flex-1">
      <Agenda
        items={bookings}
        selected="2023-05-24"
        renderItem={renderItem}
        renderEmptyDate={renderEmptyDate}
        // showOnlySelectedDayItems
        theme={{
          selectedDayBackgroundColor: COLORS.primary,
          dotColor: COLORS.primary,
          agendaDayNumColor: COLORS.primary,
          agendaKnobColor: COLORS.primary,
        }}
      />
    </View>
  );
};

 export default BookingCalendarScreen;

const styles = StyleSheet.create({});
