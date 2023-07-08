import {View, Text, SafeAreaView, StatusBar, ScrollView, TouchableOpacity} from 'react-native'
import React from 'react'
import {ArrowLeftIcon, BellIcon} from 'react-native-heroicons/outline'
import FieldRow from '../components/FieldRow'
import {useNavigation} from '@react-navigation/native'
import {
  sanBong1,
  sanBong2,
  sanBong3,
  sanBong4,
  sanBong5,
  sanBong6,
  soccer_field,
} from '../constants/images'
import {useDispatch, useSelector} from 'react-redux'
import {useEffect} from 'react'
import {getAllSportFields} from '../services/sportField/sportFieldSlice'
import {useState} from 'react'
import {FlatList} from 'react-native'
import {Image} from 'react-native'

const FieldScreen = ({route}) => {
  const navigation = useNavigation()
  const dispatch = useDispatch()
  const {sportFieldsList: sportFields, isLoading} = useSelector((state) => state.sportField)
  const [sportFieldsList, setSportFieldsList] = useState(sportFields)
  const {id} = route.params

  useEffect(() => {
    dispatch(getAllSportFields())
  }, [dispatch])

  const sportFieldsListFiltered = sportFieldsList.filter((field) => field.sportCenter === id)

  const renderItem = ({item}) => {
    return (
      <TouchableOpacity onPress={() => navigation.navigate('SportFieldDetail')}>
        <View className="p-3 flex-row bg-white mx-4 mt-3 rounded-2xl space-x-4 relative">
          <Image source={sanBong1} className="w-24 h-24" />
          <View>
            <Text className="text-[18px] font-bold tracking-widest">{'Sport Field'}</Text>
            {/* <View className="flex-row space-x-1 items-center mt-3">
          <CheckCircleIcon size={24} color={'#00C187'} />
          <Text className="text-[16px] text-black">{available}</Text>
        </View> */}
            <View className="flex-row items-center justify-between">
              <View className="flex-row items-center space-x-1 mt-3">
                <Image source={soccer_field} className="w-7 h-7" />
                <Text>{item.fieldType}</Text>
              </View>

              <Text className="mt-3 ml-10">
                <Text className="font-bold">{'200'} VND</Text>/hour
              </Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    )
  }

  return (
    <SafeAreaView className="relative pb-14">
      <StatusBar backgroundColor="#000" />
      <View className="bg-black w-full h-44 rounded-b-3xl">
        <View className="mt-10 flex-row items-center justify-between px-8">
          <TouchableOpacity onPress={() => navigation.navigate('SportCenter')}>
            <ArrowLeftIcon size={24} color="#fff" />
          </TouchableOpacity>
          <Text className="text-white font-bold text-lg">{id}</Text>
          <BellIcon size={24} color="#fff" />
        </View>
      </View>

      <View className="bg-[#ECF3FF] w-full h-full -mt-20 rounded-tl-3xl rounded-tr-3xl">
        {/* Favorites List */}
        {isLoading ? (
          <Text>Loading</Text>
        ) : (
          <>
            {sportFieldsListFiltered.length > 0 ? (
              <FlatList
                data={sportFieldsListFiltered}
                renderItem={renderItem}
                keyExtractor={(item) => item._id}
              />
            ) : (
              <View className="flex ml-24 mt-10">
                <Text className="ml-12 text-2xl font-bold tracking-widest">No Results</Text>
                <Text className="-ml-6 text-base mt-2">You don't have any favorite item here!</Text>
              </View>
            )}
          </>
        )}
      </View>
    </SafeAreaView>
  )
}

export default FieldScreen
