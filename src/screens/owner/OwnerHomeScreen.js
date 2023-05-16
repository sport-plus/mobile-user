import { StatusBar, StyleSheet, Text, View } from "react-native";
import React, { useLayoutEffect } from "react";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { COLORS } from "../../constants";

const OwnerHomeScreen = ({}) => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: "Home",
      headerTitleAlign: "center",
      headerTitleStyle: {
        fontSize: 25,
        fontWeight: "bold",
        color: "white",
      },
      headerStyle: {
        backgroundColor: COLORS.black,
        height: 200,
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
    <View>
      <StatusBar backgroundColor={COLORS.black} />
      <Text>OwnerHomeScreen</Text>
    </View>
  );
};

export default OwnerHomeScreen;

const styles = StyleSheet.create({});
