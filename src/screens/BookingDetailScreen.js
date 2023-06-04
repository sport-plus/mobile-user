import {View, Text, SafeAreaView, Image} from 'react-native'
import React from 'react'
import {AntDesign, Entypo, FontAwesome5, Ionicons, Octicons} from '@expo/vector-icons'
import Swiper from 'react-native-swiper'
import {COLORS, images} from '../constants'
import {useNavigation} from '@react-navigation/native'
import {map, soccer_field, ticket_fill, vector} from '../constants/images'
import {Divide} from '../components'
import {PhoneIcon, StarIcon} from 'react-native-heroicons/outline'

const BookingDetailScreen = () => {
  const navigation = useNavigation()

  return (
    <SafeAreaView>
      <View>
        <View className="h-60">
          <Swiper loop autoplay activeDotColor={COLORS.black}>
            <Image source={images.soccer} className="w-full h-full" />
            <Image source={images.sanBong} className=" w-full h-full" />
          </Swiper>
        </View>

        <View className="flex-row items-center justify-between p-4 absolute w-full">
          <View className="bg-[#00C187] w-10 h-10 rounded-full flex items-center justify-center opacity-80">
            <AntDesign
              name="arrowleft"
              size={24}
              color="white"
              onPress={() => navigation.navigate('MyBookingScreen')}
            />
          </View>
          <View className="bg-[#00C187] w-10 h-10 rounded-full flex items-center justify-center opacity-80">
            <Ionicons name="notifications-outline" size={24} color="white" />
          </View>
        </View>

        <View className="p-6">
          <View className="flex-row items-center space-x-2">
            <Image source={ticket_fill} />
            <Text className="tracking-widest text-[22px] font-bold">
              Artificial football field 3
            </Text>
          </View>

          <Text className="mt-4 mb-1 text-sm text-gray-600">Date & time</Text>
          <View className="flex-row justify-between mb-6">
            <Text className="text-[18px]">Feb, 20, 2023 | 19: 00</Text>
            <View className="bg-[#e6e6ea] w-20 h-10 items-center -mt-3 justify-center rounded-lg">
              <Text>Pending</Text>
            </View>
          </View>

          <Divide height={1} />

          <View className="flex-row justify-between mt-6">
            <Text className="text-[18px] font-bold tracking-widest">Lotee Football Stadium</Text>
            <Text className="bg-[#00C187] text-white p-2 rounded-xl -mt-1">1.4 km</Text>
          </View>

          <View className="flex-row space-x-4 mt-2">
            <Image source={map} />
            <View className="space-y-1">
              <Text className="text-[16px] w-64 text-gray-500">
                177 Nguyen Xi, Binh Thanh, tp Ho Chi Minh
              </Text>
              <Text className="text-blue-800">Open on map</Text>
            </View>
          </View>

          <View className="flex-row space-x-2 ml-1 mt-4 items-center">
            <PhoneIcon size={24} color="#00C187" />
            <Text className="text-gray-600 text-base">0914360736</Text>
          </View>

          <View className="flex-row items-center justify-between">
            <View className="flex-row items-center space-x-2 mt-2 ml-1">
              <Image source={soccer_field} className="w-7 h-7" />
              <Text className='text-base'>7 x 7</Text>
            </View>
            <View className="flex-row space-x-1 items-center">
              <StarIcon size={24} color={'#00C187'} />
              <Text>4.5</Text>
            </View>
          </View>

          <View className="flex-row items-center mt-2">
            <Text className="text-orange-500 text-[18px] font-bold">Pay before: </Text>
            <Text className="text-[18px] to-gray-400">18:00 - Feb.20 2023</Text>
          </View>

          <View className="flex-row justify-end space-x-2 mt-6 pb-2 items-center">
            <Image source={vector} />
            <Text className="text-[20px] font-bold">200.000 VND</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default BookingDetailScreen
