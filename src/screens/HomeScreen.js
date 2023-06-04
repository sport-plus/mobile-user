import {View, Text, SafeAreaView, Image, StatusBar, TouchableOpacity} from 'react-native'
import React from 'react'
import ButtonWithIcon from '../components/ButtonWithIcon'
import FeaturedRow from '../components/FeaturedRow'
import images, {logo_white, soccer_field, term, union} from '../constants/images'
import {BellIcon} from 'react-native-heroicons/outline'
import {useNavigation} from '@react-navigation/native'
import Swiper from 'react-native-swiper'

const HomeScreen = () => {
  const navigation = useNavigation()

  const bookAfield = () => {
    return navigation.navigate('SportCenter')
  }

  return (
    <SafeAreaView>
      <StatusBar backgroundColor="#000" />
      {/* Header */}
      <View className="bg-black w-full h-44 rounded-b-3xl">
        <View className="flex-row items-center px-4 mt-6 justify-between">
          <View className="flex-row items-center space-x-1">
            <Image source={logo_white} className="h-8 w-8" />
            <Text className="text-white text-[26px] font-bold tracking-widest">TheThaoPlus</Text>
          </View>
          <TouchableOpacity onPress={() => navigation.navigate('NotificationScreen')}>
            <BellIcon size={30} color="#fff" />
          </TouchableOpacity>
        </View>

        <View className="z-50 w-[360px] h-[160] mx-8 mt-10 rounded-3xl">
          <Swiper autoplay loop>
            <Image source={images.soccer} className="rounded-2xl w-80" style={{height: 152}} />
            <Image source={images.tennis} className="rounded-2xl w-80" style={{height: 152}} />
            <Image source={images.caulong} className="rounded-2xl w-80" style={{height: 152}} />
          </Swiper>
        </View>
      </View>

      {/* Calendar */}
      <View className="w-[340px] h-[60px] mx-6 bg-[#e7e8ea] mt-28 rounded-3xl shadow-2xl relative">
        <View className="w-10 h-10 bg-[#b4e6d7] rounded-lg absolute left-3 bottom-2">
          <Image source={union} className="w-6 h-6 absolute left-2 bottom-3" />
        </View>
        <View className="absolute left-16 top-4">
          <Text className="font-bold text-[20px]">15 May 2023</Text>
          <Text className="left-44 bottom-7 font-bold text-black text-[20px]">Monday</Text>
          <View className="w-1 h-8 bg-[#00C187] left-36 bottom-14"></View>
        </View>
      </View>

      <View className="px-6 mt-6 flex-row justify-between">
        <ButtonWithIcon
          icon={term}
          title={'My bookings'}
          onPress={() => navigation.navigate('MyBookingScreen')}
        />
        <ButtonWithIcon icon={soccer_field} title={'Book a field'} onPress={bookAfield} />
      </View>

      {/* Featured Field Row */}
      <FeaturedRow title={'Featured Field'} />
    </SafeAreaView>
  )
}

export default HomeScreen
