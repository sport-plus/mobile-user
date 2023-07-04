import {View, Text, TouchableOpacity, Image} from 'react-native'
import React from 'react'
import {field, soccer_field} from '../constants/images'
import {CheckCircleIcon} from 'react-native-heroicons/outline'
import {useNavigation} from '@react-navigation/native'

const FieldRow = ({name, available, size, price, imgUrl}) => {
  const navigation = useNavigation()

  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate('SportFieldDetail', {value: {name, available, size, price, imgUrl}})
      }
    >
      <View className="p-3 flex-row bg-white mx-4 mt-3 rounded-2xl space-x-4 relative">
        <Image source={imgUrl} className="w-24 h-24" />
        <View>
          <Text className="text-[18px] font-bold tracking-widest">{name}</Text>
          <View className="flex-row space-x-1 items-center mt-3">
            <CheckCircleIcon size={24} color={'#00C187'} />
            <Text className="text-[16px] text-black">{available}</Text>
          </View>
          <View className="flex-row items-center justify-between">
            <View className="flex-row items-center space-x-1 mt-3">
              <Image source={soccer_field} className="w-7 h-7" />
              <Text>{size}</Text>
            </View>

            <Text className="mt-3 ml-10">
              <Text className="font-bold">{price} VND</Text>/hour
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  )
}

export default FieldRow
