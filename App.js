import AsyncStorage from "@react-native-async-storage/async-storage";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useFonts } from "expo-font";
import React, { useEffect, useState } from "react";
import { HomeScreen, OnboardingScreen } from "./src/screens";

const Stack = createNativeStackNavigator();

export default function App() {
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
      console.log("2", value);
      if (value !== null) {
        setIsFirstLaunch(true);
        AsyncStorage.setItem("alreadyLaunched", "false");
      } else {
        setIsFirstLaunch(false);
      }
    });
  }, []);

  return (
    isFirstLaunch != null && (
      <NavigationContainer>
        <Stack.Navigator>
          {isFirstLaunch && (
            <Stack.Screen
              options={{ headerShown: false }}
              name="OnboardingScreen"
              component={OnboardingScreen}
            />
          )}
          <Stack.Screen
            options={{ headerShown: false }}
            name="HomeScreen"
            component={HomeScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    )
  );
}
