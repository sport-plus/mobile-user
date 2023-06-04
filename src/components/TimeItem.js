import {View, Text, TouchableOpacity} from 'react-native'
import React from 'react'
const TimeItem = ({value}) => {
  return (
    <TouchableOpacity className="bg-[#c5f3e5] w-20 h-10 mx-2 my-2 items-center justify-center rounded-xl">
      <Text className='text-[#00C187] font-bold text-lg'>{value}</Text>
    </TouchableOpacity>
  )
}

export default TimeItem
