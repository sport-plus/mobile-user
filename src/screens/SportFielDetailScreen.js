import {
  View,
  Text,
  SafeAreaView,
  Image,
  ScrollView,
  Dimensions,
  StatusBar,
  Animated,
  Pressable,
} from 'react-native'
import React, {useState} from 'react'
import Swiper from 'react-native-swiper'
import {COLORS, images} from '../constants'
import {AntDesign, Entypo, FontAwesome5, Ionicons, Octicons} from '@expo/vector-icons'
import {useNavigation} from '@react-navigation/native'
import {FontAwesome} from '@expo/vector-icons'
import {Feather} from '@expo/vector-icons'
import {ButtonCustom, Divide} from '../components'
const {width, height} = Dimensions.get('window')

import {TabView, SceneMap} from 'react-native-tab-view'
import {Box, Center, NativeBaseProvider, useColorModeValue} from 'native-base'
import {camera, car, house, shirt, shop} from '../constants/images'
import {ClockIcon, StarIcon, UserCircleIcon} from 'react-native-heroicons/outline'

const FirstRoute = () => (
  <View className="mt-2">
    <Text className="mt-1 mb-2 text-[18px] font-bold px-1">Facilities</Text>
    <View className="flex-row justify-between px-4">
      <View className="flex-row space-x-1 items-center">
        <Image source={car} size={24} />
        <Text className="text-base">Parking sport</Text>
      </View>

      <View className="flex-row space-x-1 items-center">
        <Image source={shop} size={24} />
        <Text className="text-base">Water shop </Text>
      </View>
    </View>

    <View className="flex-row justify-between mt-3 px-4">
      <View className="flex-row space-x-1 items-center">
        <Image source={shirt} size={24} />
        <Text className="text-base">Changing rooms</Text>
      </View>

      <View className="flex-row space-x-1 items-center">
        <Image source={house} size={24} />
        <Text className="text-base">Waiting area</Text>
      </View>
    </View>

    <View className="flex-row mt-3 px-4 space-x-1 items-center">
      <Image source={camera} size={24} />
      <Text className="text-base">Camera</Text>
    </View>

    <ButtonCustom height={36} borderRadius={12} title='Book' marginVertical={6}/>
  </View>
)

const SecondRoute = () => (
  <ScrollView className="px-3">
    <View className="mb-3 mt-3 px-1">
      <View className="flex-row mb-1">
        <StarIcon size={18} color={'#00C187'} />
        <StarIcon size={18} color={'#00C187'} />
        <StarIcon size={18} color={'#00C187'} />
        <StarIcon size={18} color={'#00C187'} />
        <StarIcon size={18} color={'#00C187'} />
      </View>
      <Text className="mb-1 text-xs">Nice field, nice service</Text>
      <View className="flex-row items-center">
        <UserCircleIcon size={20} color={'#000'} />
        <Text className="ml-1">Sean B.</Text>
        <Text className="text-xs ml-4">May 17, 2023</Text>
      </View>
    </View>
    <Divide backgroundColor="black" height={2} />

    <View className="mb-3 mt-3 px-1">
      <View className="flex-row mb-1">
        <StarIcon size={18} color={'#00C187'} />
        <StarIcon size={18} color={'#00C187'} />
        <StarIcon size={18} color={'#00C187'} />
        <StarIcon size={18} color={'#00C187'} />
        <StarIcon size={18} color={'#00C187'} />
      </View>
      <Text className="mb-1 text-xs">Nice field, nice service</Text>
      <View className="flex-row items-center">
        <UserCircleIcon size={20} color={'#000'} />
        <Text className="ml-1">Sean B.</Text>
        <Text className="text-xs ml-4">May 17, 2023</Text>
      </View>
    </View>
    <Divide backgroundColor="black" height={2} />
  </ScrollView>
)

const ThirdRoute = () => (
  <View>
    <View className="flex-row space-x-2 px-3 py-4">
      <ClockIcon size={48} color={'#00C187'} />
      <View className="space-y-1">
        <Text className="text-sm text-gray-500">Mon - Fri</Text>
        <Text className="text-base font-bold">09:00 - 22: 00</Text>
      </View>
    </View>

    <View className="flex-row space-x-2 px-3 py-2">
      <ClockIcon size={48} color={'#00C187'} />
      <View className="space-y-1">
        <Text className="text-sm text-gray-500">Sat - Sun</Text>
        <Text className="text-base font-bold">09:00 - 23: 00</Text>
      </View>
    </View>
  </View>
)

const initialLayout = {
  width: Dimensions.get('window').width,
}
const renderScene = SceneMap({
  first: FirstRoute,
  second: SecondRoute,
  third: ThirdRoute,
})

const SportFieldDetailScreen = () => {
  const navigation = useNavigation()

  const [index, setIndex] = React.useState(0)
  const [routes] = React.useState([
    {
      key: 'first',
      title: 'About Pitches',
    },
    {
      key: 'second',
      title: 'Reviews',
    },
    {
      key: 'third',
      title: 'Activities',
    },
  ])

  const renderTabBar = (props) => {
    const inputRange = props.navigationState.routes.map((x, i) => i)
    return (
      <Box flexDirection="row">
        {props.navigationState.routes.map((route, i) => {
          const opacity = props.position.interpolate({
            inputRange,
            outputRange: inputRange.map((inputIndex) => (inputIndex === i ? 1 : 0.5)),
          })
          const color =
            index === i
              ? // ? useColorModeValue('#000', '#e5e5e5')
                useColorModeValue('#00C187', '#00C187')
              : useColorModeValue('#1f2937', '#a1a1aa')
          const borderColor =
            index === i ? '#00C187' : useColorModeValue('coolGray.200', 'gray.400')
          return (
            <Box
              borderBottomWidth="3"
              borderColor={borderColor}
              flex={1}
              alignItems="center"
              p="3"
              cursor="pointer"
            >
              <Pressable
                onPress={() => {
                  console.log(i)
                  setIndex(i)
                }}
              >
                <Animated.Text
                  style={{
                    color,
                  }}
                >
                  {route.title}
                </Animated.Text>
              </Pressable>
            </Box>
          )
        })}
      </Box>
    )
  }

  return (
    <SafeAreaView className="bg-white flex-1">
      <View>
        <View className="h-60">
          <Swiper loop autoplay activeDotColor={COLORS.black}>
            <Image source={images.soccer} className="w-full h-full" />
            <Image source={images.tennis} className=" w-full h-full" />
            <Image source={images.caulong} className=" w-full h-full" />
          </Swiper>
        </View>

        <View className="flex-row items-center justify-between p-4 absolute w-full">
          <View className="bg-[#00C187] w-10 h-10 rounded-full flex items-center justify-center opacity-80">
            <AntDesign
              name="arrowleft"
              size={24}
              color="white"
              onPress={() => navigation.navigate('ListSportField')}
            />
          </View>
          <View className="bg-[#00C187] w-10 h-10 rounded-full flex items-center justify-center opacity-80">
            <Ionicons name="notifications-outline" size={24} color="white" />
          </View>
        </View>
      </View>

      <View
        className="flex-1 bg-[#ECF3FF] absolute w-full h-full rounded-t-3xl p-5"
        style={{top: 220}}
      >
        {/* <ScrollView showsVerticalScrollIndicator={false} className="space-y-2"> */}
        <Text className="text-[20px] font-bold tracking-wide">Artificial football field 1</Text>
        <View className="flex-row items-center justify-between">
          <View className="flex-row items-center space-x-1 mb-2 mt-2 space-x-2">
            <Feather name="phone" size={22} color={COLORS.primary} />
            <Text className="text-[16px]">0914360736</Text>
          </View>
          <View className="flex-row items-center space-x-1 mb-2">
            <FontAwesome name="star" size={22} color={COLORS.yellow} />
            <Text className="text-[16px]">5</Text>
          </View>
        </View>
        <View className="flex-row items-center justify-between mb-2">
          <View className="flex-row items-center space-x-2">
            <Image source={images.iconSportField} className="w-8 h-8" />
            <Text className="text-[16px]">7 x 7</Text>
          </View>
          <Text
            className="text-[18px] text-right font-bold"
            style={{
              color: '#000',
            }}
          >
            300.000 VND<Text className="text-gray-400">/hour</Text>
          </Text>
        </View>
        <Divide backgroundColor="grey" height={2} />
        <View className="flex-row gap-2 mb-4 mt-2 space-x-4">
          <View className="w-20 h-20">
            <Image source={images.sanBong} className="rounded-lg w-full h-full" />
          </View>

          <View className="space-y-3" style={{width: width - 120}}>
            <Text className="text-[16px] text-gray-500 font-bold tracking-wide">
              177 Nguyen Xi, Binh Thanh, tp Ho Chi Minh
            </Text>
            <Text className="text-[14px] text-blue-400 font-bold tracking-wide">Open on map</Text>
          </View>
        </View>
        <Divide backgroundColor="grey" height={2} />
        {/* </ScrollView> */}
        <NativeBaseProvider>
          <TabView
            navigationState={{
              index,
              routes,
            }}
            renderScene={renderScene}
            renderTabBar={renderTabBar}
            onIndexChange={setIndex}
            initialLayout={initialLayout}
            style={{
              marginTop: 12,
            }}
          />
        </NativeBaseProvider>
      </View>
    </SafeAreaView>
  )
}

export default SportFieldDetailScreen
