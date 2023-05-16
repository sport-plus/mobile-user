import { AntDesign, Entypo, Ionicons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NativeBaseProvider } from "native-base";
import React, { useEffect, useState } from "react";
import {
  CreateSportCenterScreen,
  HomeScreen,
  LoginScreen,
  OnboardingScreen,
  OwnerHomeScreen,
  OwnerSearchScreen,
  ProfileScreen,
  RegistrationScreen,
  SplashScreen,
} from "./src/screens";
import { COLORS } from "./src/constants";
import { FontAwesome } from "@expo/vector-icons";

export default function App() {
  const Tab = createBottomTabNavigator();
  const Stack = createNativeStackNavigator();

  const [isFirstLaunch, setIsFirstLaunch] = useState(null);

  // const [loaded] = useFonts({
  //   "Roboto-Black": require("./src/assets/fonts/Roboto-Black.ttf"),
  //   "Roboto-Bold": require("./src/assets/fonts/Roboto-Bold.ttf"),
  //   "Roboto-Regular": require("./src/assets/fonts/Roboto-Regular.ttf"),
  // });

  // if (!loaded) {
  //   return null;
  // }

  useEffect(() => {
    AsyncStorage.getItem("alreadyLaunched").then((value) => {
      if (value !== null) {
        setIsFirstLaunch(true);
        AsyncStorage.setItem("alreadyLaunched", "false");
      } else {
        setIsFirstLaunch(false);
      }
    });
  }, []);

  function OwnerBottomTabs() {
    return (
      <Tab.Navigator
        tabBarOptions={{
          showLabel: false,
        }}
      >
        <Tab.Screen
          name="OwnerHome"
          component={OwnerHomeScreen}
          options={{
            tabBarLabel: "Home",
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <Ionicons
                name="ios-home"
                size={25}
                color={focused ? COLORS.primary : COLORS.black}
              />
            ),
          }}
        />
        <Tab.Screen
          name="OwnerSearch"
          component={OwnerSearchScreen}
          options={{
            tabBarLabel: "Search",
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <Ionicons
                name="ios-search"
                size={25}
                color={focused ? COLORS.primary : COLORS.black}
              />
            ),
          }}
        />
        <Tab.Screen
          name="OwnerAddNew"
          component={CreateSportCenterScreen}
          options={{
            tabBarLabel: "Add New",
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <Ionicons
                name="ios-add-circle"
                size={28}
                color={focused ? COLORS.primary : COLORS.black}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            tabBarLabel: "Profile",
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <FontAwesome
                name="user-circle-o"
                size={24}
                color={focused ? COLORS.primary : COLORS.black}
              />
            ),
          }}
        />
      </Tab.Navigator>
    );
  }

  return (
    <NativeBaseProvider>
      {isFirstLaunch != null && (
        <NavigationContainer>
          <Stack.Navigator initialRouteName="SplashScreen">
            {/* Authenticate */}
            <Stack.Screen
              options={{ headerShown: false }}
              name="SplashScreen"
              component={SplashScreen}
            />
            {isFirstLaunch && (
              <Stack.Screen
                options={{ headerShown: false }}
                name="OnboardingScreen"
                component={OnboardingScreen}
              />
            )}
            <Stack.Screen
              options={{ headerShown: false }}
              name="LoginScreen"
              component={LoginScreen}
            />
            <Stack.Screen
              options={{ headerShown: false }}
              name="RegistrationScreen"
              component={RegistrationScreen}
            />

            {/* User */}
            <Stack.Screen
              options={{ headerShown: false }}
              name="HomeScreen"
              component={HomeScreen}
            />

            {/* Owner */}
            <Stack.Screen
              options={{ headerShown: false }}
              name="OwnerMain"
              component={OwnerBottomTabs}
            />
          </Stack.Navigator>
        </NavigationContainer>
      )}
    </NativeBaseProvider>
  );
}
