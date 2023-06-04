import {View, Text, SafeAreaView, TouchableOpacity} from 'react-native'
import React from 'react'
import {useNavigation} from '@react-navigation/native'
import { ArrowLeftIcon, ArrowRightIcon, ChatBubbleBottomCenterIcon, DocumentTextIcon, ShieldCheckIcon } from 'react-native-heroicons/outline'

const GetHelpScreen = () => {
  const navigation = useNavigation()

  return (
    <SafeAreaView>
      <TouchableOpacity onPress={() => navigation.navigate('ProfileScreen')} className="mt-14 mx-6">
        <ArrowLeftIcon size={24} color="#000" />
      </TouchableOpacity>

      <View className='mt-12 mx-6'>
        <Text className='text-[24px] font-bold tracking-widest'>Get help</Text>
        <Text className='text-[16px] mt-2'>
          Learn more about frequently asked questions and legal documents.
        </Text>
      </View>

      <TouchableOpacity  className="flex-row justify-between mx-6 items-center mt-14">
        <View className="flex-row items-center space-x-2">
          <ChatBubbleBottomCenterIcon size={30} color="#000" />
          <Text className="text-[20px] font-bold tracking-widest">F.A.Q.</Text>
        </View>
        <ArrowRightIcon size={24} color="#000" />
      </TouchableOpacity>

      <TouchableOpacity  className="flex-row justify-between mx-6 items-center mt-14">
        <View className="flex-row items-center space-x-2">
          <DocumentTextIcon size={30} color="#000" />
          <Text className="text-[20px] font-bold tracking-widest">Term & conditions</Text>
        </View>
        <ArrowRightIcon size={24} color="#000" />
      </TouchableOpacity>

      <TouchableOpacity  className="flex-row justify-between mx-6 items-center mt-14">
        <View className="flex-row items-center space-x-2">
          <ShieldCheckIcon size={30} color="#000" />
          <Text className="text-[20px] font-bold tracking-widest">Privacy policy</Text>
        </View>
        <ArrowRightIcon size={24} color="#000" />
      </TouchableOpacity>
    </SafeAreaView>
  )
}

export default GetHelpScreen
