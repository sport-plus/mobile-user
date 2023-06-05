import {SafeAreaView, StyleSheet, Text, View, TouchableOpacity} from 'react-native'
import React from 'react'
import {useNavigation} from '@react-navigation/native'
import {
  ArrowRightIcon,
  ArrowRightOnRectangleIcon,
  BellIcon,
  GlobeAltIcon,
  LockClosedIcon,
  PhoneIcon,
  QuestionMarkCircleIcon,
  UserCircleIcon,
} from 'react-native-heroicons/outline'
import {auth} from '../firebase/firebase-config'
import {signOut} from '@firebase/auth'

const ProfileScreen = () => {
  const navigation = useNavigation()

  const handleSignOut = () => {
    signOut(auth)
    navigation.navigate('LoginScreen')
  }

  return (
    <SafeAreaView>
      <View className="w-14 h-14 rounded-full bg-[#00C187] self-center mt-16 items-center justify-center">
        <UserCircleIcon size={40} color="#fff" />
      </View>

      <View className="self-center mt-2 justify-center items-center">
        <Text className="text-base font-bold">{auth?.currentUser?.displayName}</Text>
        <TouchableOpacity onPress={() => navigation.navigate('EditProfileScreen')}>
          <Text className="text-[#00C187] font-bold mt-1">Edit profilee</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        onPress={() => navigation.navigate('NotificationProfileScreen')}
        className="flex-row justify-between mx-6 items-center mt-14"
      >
        <View className="flex-row items-center space-x-2">
          <BellIcon size={30} color="#000" />
          <Text className="text-[20px] font-bold tracking-widest">Notification</Text>
        </View>
        <ArrowRightIcon size={24} color="#000" />
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate('ChangePasswordScreen')}
        className="flex-row justify-between mx-6 items-center mt-10"
      >
        <View className="flex-row items-center space-x-2">
          <LockClosedIcon size={30} color="#000" />
          <Text className="text-[20px] font-bold tracking-widest">Change password</Text>
        </View>
        <ArrowRightIcon size={24} color="#000" />
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate('ChangeLanguageScreen')}
        className="flex-row justify-between mx-6 items-center mt-10"
      >
        <View className="flex-row items-center space-x-2">
          <GlobeAltIcon size={30} color="#000" />
          <Text className="text-[20px] font-bold tracking-widest">Select language</Text>
        </View>
        <ArrowRightIcon size={24} color="#000" />
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate('GetHelpScreen')}
        className="flex-row justify-between mx-6 items-center mt-10"
      >
        <View className="flex-row items-center space-x-2">
          <QuestionMarkCircleIcon size={30} color="#000" />
          <Text className="text-[20px] font-bold tracking-widest">Get help</Text>
        </View>
        <ArrowRightIcon size={24} color="#000" />
      </TouchableOpacity>

      <TouchableOpacity
        onPress={handleSignOut}
        className="flex-row justify-between mx-6 items-center mt-10"
      >
        <View className="flex-row items-center space-x-2">
          <ArrowRightOnRectangleIcon size={30} color="#000" />
          <Text className="text-[20px] font-bold tracking-widest">Log out</Text>
        </View>
        <ArrowRightIcon size={24} color="#000" />
      </TouchableOpacity>
    </SafeAreaView>
  )
}

export default ProfileScreen

const styles = StyleSheet.create({})
