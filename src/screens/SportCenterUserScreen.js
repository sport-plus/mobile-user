import {View, Text, SafeAreaView, TextInput, ScrollView, TouchableOpacity} from 'react-native'
import React from 'react'
import {ArrowLeftIcon, BellIcon, MagnifyingGlassIcon} from 'react-native-heroicons/outline'
import SCRow from '../components/SCRow'
import {useNavigation} from '@react-navigation/native'
import {sanBong1, sanBong2, sanBong3, sanBong4, sanBong5, sanBong6} from '../constants/images'

const SportCenterUserScreen = () => {
  const navigation = useNavigation()

  return (
    <SafeAreaView className="relative pb-8">
      {/* Appbar */}
      <View className="bg-black w-full h-44 rounded-b-3xl">
        <View className="mt-10 flex-row items-center justify-between px-8">
          <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')}>
            <ArrowLeftIcon size={24} color="#fff" />
          </TouchableOpacity>
          <Text className="text-white font-bold text-lg">Sport Center</Text>
          <BellIcon size={24} color="#fff" />
        </View>
      </View>

      {/* Body */}
      <View className="bg-[#ECF3FF] w-full h-full -mt-20 rounded-tl-3xl rounded-tr-3xl">
        <View className="flex-row p-3 space-x-2 items-center border-2 border-[#00C187] mt-4 mx-4 rounded-lg">
          <MagnifyingGlassIcon size={24} color="#000" />
          <TextInput placeholder="Enter something" keyboardType="default" />
        </View>

        <Text className="px-5 mt-4 font-bold text-lg">Near hear</Text>
        <ScrollView>
          <SCRow
            name="Lotee Football Stadium"
            address="District 9, HCM"
            rating="4.5"
            available="10 Available Today"
            distance="1.4"
            imgUrl={sanBong1}
          />

          <SCRow
            name="KSPO Football Stadium"
            address="District 2, HCM"
            rating="4.5"
            available="12 Available Today"
            distance="8"
            imgUrl={sanBong2}
          />

          <Text className="px-5 mt-4 font-bold text-lg">Another</Text>

          <SCRow
            name="Jamsil Football Stadium"
            address="District 1, HCM"
            rating="4.5"
            available=" 9 Available Today"
            distance="12"
            imgUrl={sanBong3}
          />

          <SCRow
            name="Cao Hung Football Stadium"
            address="District 4, HCM"
            rating="4.5"
            available=" 8 Available Today"
            distance="14"
            imgUrl={sanBong4}
          />

          <SCRow
            name="Lam Son Football Stadium"
            address="District 3, HCM"
            rating="4.8"
            available=" 2 Available Today"
            distance="12"
            imgUrl={sanBong5}
          />

          <SCRow
            name="Celadon Football Stadium"
            address="District 10, HCM"
            rating="4.5"
            available=" 9 Available Today"
            distance="10"
            imgUrl={sanBong6}
          />

          <SCRow
            name="Lotee Football Stadium"
            address="District 1, HCM"
            rating="4.5"
            available="10 Available Today"
            distance="1.4"
          />
        </ScrollView>
      </View>
    </SafeAreaView>
  )
}

export default SportCenterUserScreen
