import {View, Text, SafeAreaView, TouchableOpacity, ScrollView} from 'react-native'
import React, {useEffect, useState} from 'react'
import {ArrowLeftIcon, BellIcon} from 'react-native-heroicons/outline'
import {useNavigation} from '@react-navigation/native'
import {Calendar} from 'react-native-calendars'
import {ClockIcon} from 'react-native-heroicons/outline'
import TimeItem from '../components/TimeItem'
import {Box, CheckIcon, Select} from 'native-base'
import {ButtonCustom, Divide} from '../components'
import {useDispatch, useSelector} from 'react-redux'
import {getSportFieldType} from '../services/sportField/sportFieldSlice'
import {checkBookingsAvailable, validateDayBooking} from '../services/booking/bookingSlice'
import {iconSportField, images} from '../constants'
import {Image} from 'react-native'

const sportFieldType = ['5x5', '7x7']

const BookingUserScreen = ({route}) => {
  const navigation = useNavigation()
  const [hour, setHour] = React.useState('')
  const [day, setDay] = React.useState('')
  const [time, setTime] = React.useState('')
  const [month, setMonth] = React.useState('')
  const [slot, setSlot] = useState({})
  const {id} = route.params || ''
  const dispatch = useDispatch()
  // const {sportFieldType} = useSelector((state) => state.sportField)
  const {availability} = useSelector((state) => state.booking)
  const [fieldType, setFieldType] = useState('')

  useEffect(() => {
    dispatch(getSportFieldType(id))
  }, [id])
  const checkAvailable = () => {
    if (fieldType !== '' && day !== '') dispatch(checkBookingsAvailable({day, id, fieldType}))
  }

  const createBooking = () => {
    if (day !== '' && slot !== {}) {
      const start = slot.startTime
      const end = slot.endTime
      dispatch(validateDayBooking({day, start, end, id}))
    }
  }

  return (
    <SafeAreaView className="flex-1">
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
          onDayPress={(day) => {
            checkAvailable()
            setDay(day.dateString)
          }}
          style={{borderTopLeftRadius: 30, borderTopRightRadius: 30}}
        />

        {/* Field Type */}
        <View className="bg-white flex-row space-x-2 px-4 pt-3 items-center">
          <Image source={images.iconSportField} className="w-8 h-8" />

          <Text className="font-bold text-lg">Field Type</Text>
        </View>
        {sportFieldType.length > 0 && (
          <View className="bg-white px-4 pt-1">
            <Box maxW="100">
              <Select
                selectedValue={fieldType}
                minWidth="200"
                borderColor="#00C187"
                accessibilityLabel="Choose Slots"
                placeholder="Choose Hours"
                fontSize="18px"
                _selectedItem={{
                  bg: '#00C187',
                  color: '#000',
                  endIcon: <CheckIcon size="5" color="#fff" />,
                }}
                mt={1}
                onValueChange={(itemValue) => {
                  checkAvailable()
                  setFieldType(itemValue)
                }}
              >
                {sportFieldType.map((type) => (
                  <Select.Item label={type} value={type} />
                ))}
              </Select>
            </Box>
          </View>
        )}

        {/* Slots */}
        {availability.length > 0 && (
          <View className="bg-white px-4 pt-1 flex-row">
            <View className="bg-white flex-row space-x-2 px-4 pt-3 items-center">
              <ClockIcon size={24} color={'#000'} />
              <Text className="font-bold text-lg">Slot</Text>
            </View>
            <Box maxW="100">
              <Select
                selectedValue={slot}
                minWidth="200"
                borderColor="#00C187"
                accessibilityLabel="Choose Slots"
                placeholder="Choose Slots"
                fontSize="18px"
                _selectedItem={{
                  bg: '#00C187',
                  color: '#000',
                  endIcon: <CheckIcon size="5" color="#fff" />,
                }}
                mt={1}
                onValueChange={(itemValue) => setSlot(itemValue)}
              >
                {availability.map((slot) => (
                  <Select.Item label={`${slot?.startTime} - ${slot.endTime}`} value={slot} />
                ))}
              </Select>
            </Box>
          </View>
        )}

        <View className="px-10 bg-white py-4">
          <ButtonCustom
            title="Book"
            borderRadius={14}
            onPress={() => {
              createBooking()
              navigation.navigate('BookingReviewScreen')
            }}
          />
        </View>

        <Divide />
      </ScrollView>
    </SafeAreaView>
  )
}

export default BookingUserScreen
