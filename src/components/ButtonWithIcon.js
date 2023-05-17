import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'

const ButtonWithIcon = ({icon, title}) => {
  return (
    <TouchableOpacity className='w-40 h-16 flex-row items-center px-2 space-x-2 bg-[#e7e8ea] rounded-2xl shadow-2xl'>
        <Image source={icon} />
        <Text className='text-[16px] font-bold'>{title}</Text>
    </TouchableOpacity>
  )
}

export default ButtonWithIcon