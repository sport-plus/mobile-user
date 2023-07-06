import {View, Text, SafeAreaView, Image, TouchableOpacity} from 'react-native'
import React from 'react'
import {background_header, map, sanBong, sanBong1, soccer_field, vector} from '../constants/images'
import {ArrowBackIcon, Divider} from 'native-base'
import {useNavigation} from '@react-navigation/native'
import {StarIcon, PhoneIcon} from 'react-native-heroicons/outline'
import {ButtonCustom, Divide} from '../components'

const BookingReviewScreen = ({route}) => {
  const navigation = useNavigation()
  const {value, hour, day} = route.params

  return (
    <SafeAreaView>
      <Image source={background_header} className="w-full" />
      <View className=" flex-row items-center justify-between px-4 -mt-10">
        <TouchableOpacity onPress={() => navigation.navigate('BookingScreen', {value})}>
          <ArrowBackIcon size={22} color="#000" />
        </TouchableOpacity>
        <Text className="text-2xl font-bold">Booking Review</Text>
      </View>

      <Image source={value.imgUrl} className="w-full h-48 mt-2" />

      <View className="p-5">
        <View className="flex-row justify-between">
          <Text className="text-[20px] font-bold tracking-widest">Lotee Football Stadium</Text>
          <View className="flex-row space-x-1">
            <StarIcon size={20} color={'#00C187'} />
            <Text>4.5</Text>
          </View>
        </View>

        <View className="flex-row space-x-4 mt-2">
          <Image source={map} />
          <View className="space-y-1">
            <Text className="text-[16px] w-64 text-gray-500">
              124 Hoang Huu Nam, 9 District, Ho Chi Minh City
            </Text>
            <Text className="text-blue-800">Open on map</Text>
          </View>
        </View>

        <View className="flex-row space-x-2 mt-3">
          <PhoneIcon size={24} color="#00C187" />
          <Text className="text-base text-gray-600">0914360736</Text>
        </View>

        <View className="flex-row items-center justify-between mt-4 pb-4">
          <Text className="text-[18px] font-bold tracking-widest">{value.name}</Text>
          <View className="flex-row items-center space-x-2">
            <Image source={soccer_field} className="w-7 h-7" />
            <Text>{value.size}</Text>
          </View>
        </View>

        <Divide height={2} backgroundColor="#00C187" />

        <Text className="mt-4 text-sm text-gray-600">Date & time</Text>
        <View className="flex-row justify-between">
          <Text className="text-[18px]">
            {day} | 18: 00 | {parseInt(hour)}h
          </Text>
          <View className="bg-[#e6e6ea] w-20 h-10 items-center -mt-3 justify-center rounded-lg">
            <Text>Pending</Text>
          </View>
        </View>

        <View className="flex-row justify-end mt-10 items-center space-x-2">
          <Image source={vector} />
          <Text className="text-lg font-bold">{value.price * parseInt(hour)}.000 VND</Text>
        </View>

        <Text className="text-center mt-2 mb-3 text-gray-600">
          Check the information before booking
        </Text>
        <View className="mx-6">
          <ButtonCustom
            title="Accept"
            borderRadius={10}
            onPress={() => navigation.navigate('BookingSuccessScreen')}
          />
        </View>
      </View>
    </SafeAreaView>
  )
}

export default BookingReviewScreen