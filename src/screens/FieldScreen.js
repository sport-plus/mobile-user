import {View, Text, SafeAreaView, StatusBar, ScrollView, TouchableOpacity} from 'react-native'
import React from 'react'
import {ArrowLeftIcon, BellIcon} from 'react-native-heroicons/outline'
import FieldRow from '../components/FieldRow'
import {useNavigation} from '@react-navigation/native'
import {sanBong1, sanBong2, sanBong3, sanBong4, sanBong5, sanBong6} from '../constants/images'

const FieldScreen = ({route}) => {
  const navigation = useNavigation()
  let value
  if (route.params.value) {
    value = route.params.value
  }

  return (
    <SafeAreaView className="relative pb-14">
      <StatusBar backgroundColor="#000" />
      <View className="bg-black w-full h-44 rounded-b-3xl">
        <View className="mt-10 flex-row items-center justify-between px-8">
          <TouchableOpacity onPress={() => navigation.navigate('SportCenter')}>
            <ArrowLeftIcon size={24} color="#fff" />
          </TouchableOpacity>
          <Text className="text-white font-bold text-lg">{value}</Text>
          <BellIcon size={24} color="#fff" />
        </View>
      </View>

      <View className="bg-[#ECF3FF] w-full h-full -mt-20 rounded-tl-3xl rounded-tr-3xl">
        <ScrollView>
          <FieldRow
            name="Santiago Bernabeu"
            available="Available"
            size="7x7"
            price="350.000"
            imgUrl={sanBong1}
          />

          <FieldRow
            name="Old Trafford"
            available="Available"
            size="5x5"
            price="250.000"
            imgUrl={sanBong2}
          />

          <FieldRow
            name="Camp Nou"
            available="Available"
            size="11x11"
            price="500.000"
            imgUrl={sanBong3}
          />

          <FieldRow
            name="Allianz Arena"
            available="Available"
            size="7x7"
            price="320.000"
            imgUrl={sanBong4}
          />

          <FieldRow
            name="San Siro"
            available="Available"
            size="7x7"
            price="350.000"
            imgUrl={sanBong5}
          />

          <FieldRow
            name="Wembley"
            available="Available"
            size="7x7"
            price="300.000"
            imgUrl={sanBong6}
          />

          <FieldRow
            name="Wembley"
            available="Available"
            size="7x7"
            price="300.000"
            imgUrl={sanBong6}
          />
        </ScrollView>
      </View>
    </SafeAreaView>
  )
}

export default FieldScreen
