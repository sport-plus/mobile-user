import {View, Text} from 'react-native'
import React from 'react'
import {ClockIcon} from 'react-native-heroicons/outline'

const NotificationItem = ({label}) => {
  return (
    <View className="bg-white mx-8 mt-6 rounded-2xl p-4">
      <Text className="text-[20px] font-bold">Artificial football field 1</Text>
      <Text className="text-base text-gray-400">Lotee Football Stadium</Text>

      <View className="flex-row items-center space-x-2 mt-2">
        <ClockIcon size={24} color={'#00C189'} />
        <Text className="text-[#00C189] font-bold text-base">2 minutes ago</Text>
      </View>

      {label === 'Accepted' ? (
        <View className="w-24 h-10 bg-[#e7faf5] items-center justify-center mt-3 rounded-lg">
          <Text className="text-[#00C187] font-bold text-base">{label}</Text>
        </View>
      ) : (
        <View className="w-24 h-10 bg-[#fee5ec] items-center justify-center mt-3 rounded-lg">
          <Text className="text-[#f5003d] font-bold text-base">{label}</Text>
        </View>
      )}
    </View>
  )
}

export default NotificationItem
