import React from 'react'
import {View, Text, SafeAreaView, TouchableOpacity} from 'react-native'
import {useNavigation} from '@react-navigation/native'
import {ArrowLeftIcon} from 'react-native-heroicons/outline'
import NotificationItem from '../components/NotificationItem'

const NotificationScreen = ({navigation}) => {
  // const navigation = useNavigation()

  return (
    <SafeAreaView>
      {/* Appbar */}
      <View className="bg-white w-full h-16 shadow-2xl">
        <View className="mt-4 flex-row items-center justify-between px-8">
          <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')}>
            <ArrowLeftIcon size={24} color="#000" />
          </TouchableOpacity>
          <Text className="text-black self-center font-bold text-[20px]">Notification</Text>
          <Text></Text>
        </View>
      </View>

      {/* Body */}
      <View className="bg-[#ccf3e7] w-full h-full">
        <NotificationItem label="Accepted" />
        <NotificationItem label="Cancel" />
      </View>
    </SafeAreaView>
  )
}

export default NotificationScreen
