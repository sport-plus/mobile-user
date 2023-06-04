import React, {useState} from 'react'
import {View, Text, SafeAreaView, TouchableOpacity} from 'react-native'
import {useNavigation} from '@react-navigation/native'
import {ArrowLeftIcon, MagnifyingGlassIcon} from 'react-native-heroicons/outline'
import Input from '../components/input'
import {FontAwesome, MaterialCommunityIcons} from '@expo/vector-icons'
import {COLORS} from '../constants'
import {ButtonCustom} from '../components'

const ForgotPasswordScreen = () => {
  const navigation = useNavigation()
  const [errors, setErrors] = useState({})
  const handleError = (error, input) => {
    setErrors((prevState) => ({...prevState, [input]: error}))
  }

  return (
    <SafeAreaView>
      <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')} className="mt-8 mx-6">
        <ArrowLeftIcon size={24} color="#000" />
      </TouchableOpacity>

      <View className="mx-6 mt-8">
        <Text className="text-[24px] font-bold">Forgot password</Text>
        <Text className="text-gray-500 mt-2">
          Enter your email and we'll send you the link to reset your password.
        </Text>
      </View>

      <View className="mx-6 mt-8">
        <Input
          //   onChangeText={(text) => handleOnchange(text, 'email')}
          onFocus={() => handleError(null, 'email')}
          icon={<MaterialCommunityIcons name="email" size={24} color={COLORS.lightPrimary} />}
          lable="Email"
          placeholder="Enter your email"
          borderColor="#00C189"
          error={errors.email}
        />
      </View>

      <View className="mx-14">
        <ButtonCustom title="Send request" borderRadius={10} marginVertical={20} onPress={() => navigation.navigate('ResetPasswordScreen')}/>
      </View>
    </SafeAreaView>
  )
}

export default ForgotPasswordScreen
