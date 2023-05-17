import { View, Text, SafeAreaView, Image, StatusBar } from 'react-native';
import React from 'react';
import Header from './Header';
import ButtonWithIcon from '../components/ButtonWithIcon'
import FeaturedRow from '../components/FeaturedRow';
import { COLORS } from '../constants';
import { bell, home_image, logo_white, soccer_field, term, union } from '../constants/images';

const HomeScreen = () => {
  return (
    <SafeAreaView>
      <StatusBar backgroundColor={COLORS.black} />
      {/* Header */}
      <View className="bg-black w-full h-44 rounded-b-3xl">
        <View className="flex-row items-center px-4 mt-10 justify-between">
          <View className="flex-row items-center space-x-1">
            <Image source={logo_white} className="h-10 w-10" />
            <Text className="text-white text-[26px] font-bold tracking-widest">
              TheThaoPlus
            </Text>
          </View>
          <Image source={bell} className="h-10 w-10" />
        </View>

        <Image
          source={home_image}
          className="w-[340px] h-[160] mx-6 mt-8 rounded-3xl"
        />
      </View>

      {/* Calendar */}
      <View className="w-[340px] h-[60px] mx-6 bg-[#e7e8ea] mt-32 rounded-3xl shadow-2xl relative">
        <View className="w-10 h-10 bg-[#b4e6d7] rounded-lg absolute left-3 bottom-2">
          <Image
            source={union}
            className="w-6 h-6 absolute left-2 bottom-2"
          />
        </View>
        <View className="absolute left-16 top-4">
          <Text className="font-bold text-[20px]">15 May 2023</Text>
          <Text className="left-44 bottom-7 font-bold text-black text-[20px]">
            Monday
          </Text>
          <View className="w-1 h-8 bg-[#00C187] left-36 bottom-14"></View>
        </View>
      </View>

      <View className="px-6 mt-6 flex-row justify-between">
        <ButtonWithIcon icon={term} title={'My bookings'} />
        <ButtonWithIcon icon={soccer_field} title={'Book a field'} />
      </View>

      {/* Featured Field Row */}
        <FeaturedRow title={'Sân nổi bật'} />
    </SafeAreaView>
  );
};

export default HomeScreen;
