import {View, Text, SafeAreaView, TouchableOpacity} from 'react-native'
import React from 'react'
import {useNavigation} from '@react-navigation/native'
import {ArrowLeftIcon} from 'react-native-heroicons/outline'
import { Switch, VStack, Center, NativeBaseProvider } from "native-base";

const NotificationProfileScreen = () => {
  const navigation = useNavigation()

  return (
    <SafeAreaView>
      <TouchableOpacity onPress={() => navigation.navigate('ProfileScreen')} className="mt-14 mx-6">
        <ArrowLeftIcon size={24} color="#000" />
      </TouchableOpacity>

      <View className='mt-12 mx-6'>
        <Text className='text-[24px] font-bold tracking-widest'>Notifications</Text>
        <Text className='text-[16px] mt-2'>
          Please select the notification chanels that you would like to get reminders about the
          upcoming appointments.
        </Text>
      </View>

      <View className='flex-row items-center mx-10 mt-14'>
        <Text className='text-[20px]'>Email notification</Text>
        <VStack className='ml-6'>
          <Switch defaultIsChecked colorScheme="emerald" size='lg'/>
        </VStack>
      </View>

      <View className='flex-row items-center mx-10 mt-6'>
        <Text className='text-[20px]'>Push notification</Text>
        <VStack className='ml-10'>
          <Switch  colorScheme="emerald" size='lg'/>
        </VStack>
      </View>

      <View className='flex-row items-center mx-10 mt-6'>
        <Text className='text-[20px]'>Text notification</Text>
        <VStack className='ml-12'>
          <Switch  colorScheme="emerald" size='lg'/>
        </VStack>
      </View>
    </SafeAreaView>
  )
}

export default NotificationProfileScreen
