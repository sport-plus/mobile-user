import {View, Text, Image, TouchableOpacity} from 'react-native'
import React from 'react'
import {ArrowRightIcon, StarIcon} from 'react-native-heroicons/outline'
import {field, soccer_field} from '../constants/images'
import {useNavigation} from '@react-navigation/native'

const SCRow = (item) => {
  const navigation = useNavigation()
  const {name, address, status, image, totalrating} = item

  return (
    status === true && (
      <TouchableOpacity onPress={() => navigation.navigate('FieldScreen', {value: name})}>
        <View className="p-3 flex-row bg-white mx-4 mt-3 rounded-2xl space-x-4 relative">
          <Image source={{uri: image}} className="w-24 h-24" />
          <View>
            <Text className="text-[18px] w-36 font-bold tracking-widest">{name}</Text>
            <Text className="font-bold text-[#9f9d9d] mt-1">{address}</Text>
            <View className="flex-row items-center mt-1 space-x-1">
              <StarIcon color={'green'} opacity={0.5} size={22} />
              <Text className="text-black text-xs">{totalrating}</Text>
            </View>
          </View>

          <View className="w-full h-[0.3] absolute bottom-7 mb-3 bg-black"></View>
        </View>

        {/* <View className="bg-[#00C187] w-14 h-7 items-center p-1 rounded-lg absolute right-7 top-7">
        <Text className="text-white">{distance} km</Text>
      </View> */}
      </TouchableOpacity>
    )
  )
}

export default SCRow
