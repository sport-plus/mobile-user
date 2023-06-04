import React, {useState} from 'react'
import {View, Text, SafeAreaView, TouchableOpacity} from 'react-native'
import {useNavigation} from '@react-navigation/native'
import {ArrowLeftIcon, MagnifyingGlassIcon} from 'react-native-heroicons/outline'
import Input from '../components/input'
import {FontAwesome, MaterialCommunityIcons} from '@expo/vector-icons'
import {COLORS} from '../constants'
import {ButtonCustom} from '../components'

const ResetPasswordScreen = () => {
  const navigation = useNavigation()
  const [errors, setErrors] = useState({})
  const handleError = (error, input) => {
    setErrors((prevState) => ({...prevState, [input]: error}))
  }
  return (
    <SafeAreaView>
      <View className='flex-row justify-between items-center mx-6 mt-8'>
        <TouchableOpacity
          onPress={() => navigation.navigate('ForgotPasswordScreen')}
          className=""
        >
          <ArrowLeftIcon size={24} color="#000" />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')} className="">
          <Text className='text-[20px] font-bold tracking-widest'>Login</Text>
        </TouchableOpacity>
      </View>

      <View className="mx-6 mt-8">
        <Text className="text-[24px] font-bold">Reset password</Text>
        <Text className="text-gray-500 mt-2">
          Add your new password. The new password should contain min 8 characters.
        </Text>
      </View>

      <View className="mx-6 mt-8">
        <Input
          //   onChangeText={(text) => handleOnchange(text, 'password')}
          onFocus={() => handleError(null, 'password')}
          icon={<FontAwesome name="lock" size={24} color={COLORS.lightPrimary} />}
          lable="Password"
          placeholder="Enter your password"
          error={errors.password}
          password
        />

        <Input
          //   onChangeText={(text) => handleOnchange(text, 'password')}
          onFocus={() => handleError(null, 'password')}
          icon={<FontAwesome name="lock" size={24} color={COLORS.lightPrimary} />}
          lable="Confirm password"
          placeholder="Enter your confirmation password"
          error={errors.password}
          password
        />
      </View>

      <View className="mx-14">
        <ButtonCustom
          title="Set new password "
          borderRadius={10}
          marginVertical={20}
          onPress={() => navigation.navigate('ResetPasswordScreen')}
        />
      </View>
    </SafeAreaView>
  )
}

export default ResetPasswordScreen
