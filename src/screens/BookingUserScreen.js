import {View, Text, SafeAreaView, TouchableOpacity, ScrollView} from 'react-native'
import React from 'react'
import {ArrowLeftIcon, BellIcon} from 'react-native-heroicons/outline'
import {useNavigation} from '@react-navigation/native'
import {Calendar} from 'react-native-calendars'
import {ClockIcon} from 'react-native-heroicons/outline'
import TimeItem from '../components/TimeItem'
import {Box, CheckIcon, Select} from 'native-base'
import {ButtonCustom, Divide} from '../components'

const times = [
  '9:00',
  '9:30',
  '10:00',
  '10:30',
  '11:00',
  '13:00',
  '14:00',
  '15:00',
  '16:00',
  '17:00',
  '18:00',
  '19:00',
  '20:00',
  '20:30',
]

const hours = ['1:00', '1:30', '2:00', '2:30', '3:00', '3:30', '4:00', '4:30']

const BookingUserScreen = () => {
  const navigation = useNavigation()
  const [hour, setHour] = React.useState('')

  return (
    <SafeAreaView>
      {/* Appbar */}
      <View className="bg-black w-full h-44 rounded-b-3xl">
        <View className="mt-10 flex-row items-center justify-between px-8">
          <TouchableOpacity onPress={() => navigation.navigate('SportFieldDetail')}>
            <ArrowLeftIcon size={24} color="#fff" />
          </TouchableOpacity>
          <Text className="text-white font-bold text-lg">Sport Center</Text>
          <BellIcon size={24} color="#fff" />
        </View>
      </View>

      {/* Calendar */}
      <ScrollView className="bg-[#ECF3FF] w-full h-full -mt-20 rounded-tl-3xl rounded-tr-3xl">
        <Calendar
          markingType="custom"
          style={{borderTopLeftRadius: 30, borderTopRightRadius: 30}}
        />

        <View className="bg-white flex-row space-x-2 px-4 pt-2 items-center">
          <ClockIcon size={24} color={'#000'} />
          <Text className="font-bold text-lg">Times</Text>
        </View>

        <ScrollView className="w-full h-44 pt-2 bg-white">
          <View className="flex-row flex-wrap mx-1">
            {times.map((time, index) => (
              <TimeItem value={time} key={index} />
            ))}
          </View>
        </ScrollView>

        <View className="bg-white flex-row space-x-2 px-4 pt-3 items-center">
          <ClockIcon size={24} color={'#000'} />
          <Text className="font-bold text-lg">Hours</Text>
        </View>

        <View className="bg-white px-4 pt-1">
          <Box maxW="100">
            <Select
              selectedValue={hour}
              minWidth="200"
              borderColor="#00C187"
              accessibilityLabel="Choose Hours"
              placeholder="Choose Hours"
              fontSize="18px"
              _selectedItem={{
                bg: '#00C187',
                color: '#000',
                endIcon: <CheckIcon size="5" color="#fff" />,
              }}
              mt={1}
              onValueChange={(itemValue) => setHour(itemValue)}
            >
              {hours.map((hour) => (
                <Select.Item label={hour} value={hour} />
              ))}
            </Select>
          </Box>
        </View>

        <View className='px-10 bg-white py-4'>
          <ButtonCustom title="Book" borderRadius={14} onPress={() => navigation.navigate('BookingReviewScreen')}/>
        </View>

        <Divide/>
      </ScrollView>
    </SafeAreaView>
  )
}

export default BookingUserScreen
