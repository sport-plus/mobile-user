import React, { useRef, useState } from "react";
import {
  Dimensions,
  FlatList,
  Image,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SLIDES } from "../assets/data/slide";
import { COLORS, images } from "../constants";

const { width, height } = Dimensions.get("window");

const OnboardingScreen = ({ navigation }) => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const ref = useRef();

  const updateCurrentSlideIndex = (e) => {
    const contentOffsetX = e.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(contentOffsetX / width);
    setCurrentSlideIndex(currentIndex);
  };

  const goToNextSlide = () => {
    const nextSlideIndex = currentSlideIndex + 1;
    if (nextSlideIndex != SLIDES.length) {
      const offset = nextSlideIndex * width;
      ref?.current.scrollToOffset({ offset });
      setCurrentSlideIndex(currentSlideIndex + 1);
    }
  };

  const skip = () => {
    const lastSlideIndex = SLIDES.length - 1;
    const offset = lastSlideIndex * width;
    ref?.current.scrollToOffset({ offset });
    setCurrentSlideIndex(lastSlideIndex);
  };

  const Slide = ({ item }) => {
    return (
      <View className="items-center">
        {item?.title === "" ? (
          <Image
            source={item?.image}
            style={{
              height: "60%",
              width: width,
              resizeMode: "contain",
              marginTop: 50,
            }}
          />
        ) : (
          <Image
            source={item?.image}
            style={{
              height: "60%",
              width: width,
              resizeMode: "contain",
            }}
          />
        )}

        {item?.title && (
          <View>
            <Text style={styles.title}>{item?.title}</Text>
            <Text style={styles.subtitle}>{item?.subtitle}</Text>
          </View>
        )}
      </View>
    );
  };

  const Header = () => {
    return (
      <View className="items-center px-16 mt-5">
        <View className="flex-row items-center gap-1">
          <Image source={images.logo_green} className="w-12 h-12" />
          <Text
            style={{ fontSize: 40, fontWeight: "900", color: COLORS.primary }}
          >
            TheThaoPlus
          </Text>
        </View>
        <Text
          className="text-center mt-1"
          style={{ fontSize: 14, letterSpacing: 0.3 }}
        >
          Play sports together, have a good time and be healthy
        </Text>
      </View>
    );
  };

  const Footer = () => {
    return (
      <View className="justify-between px-5" style={{ height: height * 0.25 }}>
        {/* Indicator container */}
        <View className="flex-row justify-center mt-5">
          {/* Render indicator */}
          {SLIDES.map((_, index) => (
            <View
              key={index}
              style={[
                styles.indicator,
                currentSlideIndex == index && {
                  backgroundColor: COLORS.black,
                  width: 20,
                },
              ]}
            />
          ))}
        </View>

        {/* Render buttons */}
        <View className="mb-5">
          {currentSlideIndex == SLIDES.length - 1 ? (
            <View style={{ height: 50 }}>
              <TouchableOpacity
                style={styles.btn}
                onPress={() => navigation.replace("LoginScreen")}
              >
                <Text
                  style={{
                    fontWeight: "bold",
                    fontSize: 15,
                    color: COLORS.white,
                  }}
                >
                  GET STARTED
                </Text>
              </TouchableOpacity>
            </View>
          ) : (
            <View className="items-center gap-3">
              <View className="flex-row">
                <TouchableOpacity
                  activeOpacity={0.8}
                  onPress={goToNextSlide}
                  style={styles.btn}
                >
                  <Text
                    style={{
                      fontWeight: "bold",
                      fontSize: 15,
                      color: COLORS.white,
                    }}
                  >
                    NEXT
                  </Text>
                </TouchableOpacity>
              </View>
              <Text
                onPress={skip}
                style={{
                  fontWeight: "bold",
                  fontSize: 15,
                  color: COLORS.grayDark,
                }}
              >
                SKIP
              </Text>
            </View>
          )}
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <StatusBar backgroundColor={COLORS.black} />
      <Header />
      <FlatList
        ref={ref}
        onMomentumScrollEnd={updateCurrentSlideIndex}
        contentContainerStyle={{ height: height * 0.75 }}
        showsHorizontalScrollIndicator={false}
        horizontal
        data={SLIDES}
        pagingEnabled
        renderItem={({ item }) => <Slide item={item} />}
      />
      <Footer />
    </SafeAreaView>
  );
};

export default OnboardingScreen;

const styles = StyleSheet.create({
  subtitle: {
    color: COLORS.black,
    fontSize: 14,
    marginTop: 10,
    maxWidth: "70%",
    textAlign: "center",
    lineHeight: 23,
  },
  title: {
    color: COLORS.black,
    fontSize: 25,
    fontWeight: "800",
    textAlign: "center",
  },
  image: {
    height: "100%",
    width: "100%",
    resizeMode: "contain",
  },
  indicator: {
    height: 6,
    width: 6,
    backgroundColor: COLORS.lightGray,
    marginHorizontal: 3,
    borderRadius: 5,
  },
  btn: {
    flex: 1,
    height: 50,
    borderRadius: 5,

    backgroundColor: COLORS.primary,
    justifyContent: "center",
    alignItems: "center",
  },
});
