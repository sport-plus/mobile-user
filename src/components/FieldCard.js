import {View, Text, TouchableOpacity, Image} from 'react-native'
import React from 'react'
import {MapPinIcon, StarIcon} from 'react-native-heroicons/outline'
import {images} from '../constants'

const FieldCard = ({name, address, rating, distance, availableSlot, imgUrl}) => {
  return (
    <TouchableOpacity className="bg-white mr-3 shadow">
      <Image source={imgUrl} className="h-24 w-52 rounded-sm" />

      <View className="px-3 pb-3">
        <Text className="font-bold text-lg pt-2">{name}</Text>
        <View className="flex-row items-center space-x-1">
          <StarIcon color={'green'} opacity={0.5} size={22} />
          <Text className="text-xs text-gray-500">
            <Text className="text-green-500">{rating}</Text>
          </Text>
        </View>
        <View className="flex-row items-center space-x-1">
          <MapPinIcon color={'gray'} opacity={0.4} size={22} />
          <Text className="text-xs text-gray-500">{address}</Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}

export default FieldCard
