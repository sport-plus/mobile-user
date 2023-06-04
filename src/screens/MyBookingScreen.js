import {View, Text, SafeAreaView, StyleSheet, Dimensions, TouchableOpacity} from 'react-native'
import React, {useState} from 'react'
import {COLORS, images} from '../constants'
import {ArrowBackIcon} from 'native-base'
import BookingItem from '../components/BookingItem'
import {useNavigation} from '@react-navigation/native'

const {width, height} = Dimensions.get('window')

const listTab = [
  {
    status: 'Upcoming',
    path: 'upcoming',
  },
  {
    status: 'History',
    path: 'history',
  },
]

const MyBookingScreen = () => {
  const [status, setStatus] = useState('upcoming')
  const navigation = useNavigation()

  const setStatusFilter = (status) => {
    setStatus(status)
  }

  return (
    <SafeAreaView>
      <View className="flex-row justify-between items-center mx-4 my-4">
        <TouchableOpacity onPress={() => navigation.navigate('BookingSuccessScreen')}>
          <ArrowBackIcon size={22} color="#000" />
        </TouchableOpacity>
        <Text className="text-[20px] font-bold">My Booking</Text>
      </View>

      <View>
        <View className="flex-row items-center justify-center border-b-2 border-gray-300 mb-3">
          {listTab.map((item, index) => (
            <TouchableOpacity
              key={index}
              className="flex-row justify-center px-5 py-3"
              style={[styles.btnTab, status === item.path && styles.btnTabActive]}
              onPress={() => setStatusFilter(item.path)}
            >
              {status === item.path ? (
                <Text className="text-[16px] text-[#00C187] font-bold">{item.status}</Text>
              ) : (
                <Text className="text-[16px] ">{item.status}</Text>
              )}
            </TouchableOpacity>
          ))}
        </View>

        {/* Content tab */}
        <View>
          {status === 'upcoming' && (
            <View className=" mx-4">
              <BookingItem />
            </View>
          )}
        </View>
        <View>
          {status === 'history' && (
            <View className=" mx-4">
              <BookingItem />
              <BookingItem />
              <BookingItem />
            </View>
          )}
        </View>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  btnTab: {
    width: width / 2,
  },
  btnTabActive: {
    color: COLORS.primary,
    borderColor: COLORS.primary,
    borderBottomWidth: 2,
  },
})

export default MyBookingScreen
