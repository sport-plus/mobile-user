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
import TitleName from "../components/TitleName";
import { ButtonCustom } from "../components";

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
        <TitleName logoHeight={50} logoWidth={50} textSize={38} />
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
            <View style={{ height: 50, marginBottom: 20 }}>
              <ButtonCustom
                title="GET STARTED"
                textSize={15}
                onPress={() => navigation.replace("LoginScreen")}
              />
            </View>
          ) : (
            <View className="items-center">
              <View className="flex-row">
                <ButtonCustom
                  title="NEXT"
                  textSize={15}
                  onPress={goToNextSlide}
                />
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
