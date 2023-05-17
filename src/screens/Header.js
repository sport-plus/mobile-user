import { View, Text, SafeAreaView, Image } from 'react-native'
import React from 'react'

const Header = ({leftIcon, title, rightIcon, logo}) => {
  return (
    <SafeAreaView>
        <View className='bg-black w-full h-32 rounded-b-3xl'>
            <View className='flex-row items-center space-x-1'>
                <Image source={leftIcon} className='h-10 w-10'/>
                <Text className='text-white text-[26px] font-bold' >{title}</Text>
            </View>
        </View>
    </SafeAreaView>
  )
}

export default Header