import AsyncStorage from "@react-native-async-storage/async-storage";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { useEffect, useState } from "react";
import { NativeBaseProvider } from "native-base";
import {
  HomeScreen,
  LoginScreen,
  OnboardingScreen,
  RegistrationScreen,
  SplashScreen,
} from "./src/screens";

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
    <NativeBaseProvider>
      {isFirstLaunch != null && (
        <NavigationContainer>
          <Stack.Navigator>
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
            <Stack.Screen
              options={{ headerShown: false }}
              name="HomeScreen"
              component={HomeScreen}
            />
          </Stack.Navigator>
        </NavigationContainer>
      )}
    </NativeBaseProvider>
  );
}
