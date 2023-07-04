import {FontAwesome, FontAwesome5, MaterialCommunityIcons} from '@expo/vector-icons'
import AsyncStorage from '@react-native-async-storage/async-storage'
import {Box, CheckIcon, Flex, Radio, Select, Stack} from 'native-base'
import React, {useState} from 'react'
import {Alert, Keyboard, SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native'
import {ButtonCustom, Input, Loader, TitleName} from '../components'
import {COLORS} from '../constants'
import {createUserWithEmailAndPassword, onAuthStateChanged, updateProfile} from 'firebase/auth'
import {auth, db} from '../firebase/firebase-config'
import {addDoc, collection} from 'firebase/firestore'

const RegistrationScreen = ({navigation}) => {
  const [inputs, setInputs] = useState({
    lastName: '',
    firstName: '',
    email: '',
    phone: '',
    password: '',
    gender: '',
    YOB: '',
  })
  const [role, setRole] = useState('user')
  const [errors, setErrors] = useState({})
  const [loading, setLoading] = useState(false)
  const [userInfo, setUserInfo] = useState('')

  const validate = () => {
    Keyboard.dismiss()
    let isValid = true

    if (!inputs.email) {
      handleError('Please input email', 'email')
      isValid = false
    } else if (!inputs.email.match(/\S+@\S+\.\S+/)) {
      handleError('Please input a valid email', 'email')
      isValid = false
    }

    if (!inputs.firstName) {
      handleError('Please input first name', 'firstName')
      isValid = false
    }

    if (!inputs.lastName) {
      handleError('Please input fullname', 'lastName')
      isValid = false
    }

    if (!inputs.phone) {
      handleError('Please input phone number', 'phone')
      isValid = false
    }

    if (!inputs.password) {
      handleError('Please input password', 'password')
      isValid = false
    } else if (inputs.password.length < 5) {
      handleError('Min password length of 5', 'password')
      isValid = false
    }

    if (isValid) {
      handleSignUp()
    }
  }

  const register = () => {
    setLoading(true)
    setTimeout(() => {
      const newUser = {
        inputs: inputs,
        role: role,
      }
      try {
        setLoading(false)
        AsyncStorage.setItem('userData', JSON.stringify(newUser))
        navigation.navigate('LoginScreen')
      } catch (error) {
        Alert.alert('Error', 'Something went wrong')
      }
    }, 2000)
  }

  // Firebase
  onAuthStateChanged(auth, (currentUser) => {
    if (currentUser) {
      setUserInfo(currentUser)
    } else {
      setUserInfo('')
    }
  })

  const handleSignUp = async () => {
    setLoading(true)
    try {
      // credentials
      const cred = await createUserWithEmailAndPassword(auth, inputs.email, inputs.password)
      await updateProfile(auth.currentUser, {
        displayName: inputs.fullname,
      })
      const userRef = collection(db, 'users')
      await addDoc(userRef, {
        email: inputs.email,
        password: inputs.password,
        id: cred.user.uid,
        phone: inputs.phone,
        role,
        name: inputs.fullname,
      })
      setLoading(false)
      navigation.navigate('LoginScreen')
    } catch (error) {
      console.log(error)
      Alert.alert('Error', 'Something went wrong')
      setLoading(false)
    }
  }

  const handleOnchange = (text, input) => {
    setInputs((prevState) => ({...prevState, [input]: text}))
  }

  const handleError = (error, input) => {
    setErrors((prevState) => ({...prevState, [input]: error}))
  }

  return (
    <SafeAreaView className="flex-1 bg-white">
      <Loader visible={loading} />
      <ScrollView>
        <View className="mt-6 px-5">
          <View className="items-center">
            <TitleName textSize={40} logoHeight={55} logoWidth={55} />
            <Text
              className="text-[24px] text-center font-extrabold mt-3"
              style={{color: COLORS.black}}
            >
              Sign Up
            </Text>
          </View>
          <View className="mb-10">
            <View className="flex-row justify-between">
              <Input
                onChangeText={(text) => handleOnchange(text, 'firstName')}
                onFocus={() => handleError(null, 'firstName')}
                icon={<FontAwesome5 name="user-alt" size={20} color={COLORS.lightPrimary} />}
                lable="First Name"
                placeholder="First name"
                width={160}
                error={errors.firstName}
              />
              <Input
                onChangeText={(text) => handleOnchange(text, 'lastName')}
                onFocus={() => handleError(null, 'lastName')}
                icon={<FontAwesome5 name="user-alt" size={20} color={COLORS.lightPrimary} />}
                lable="Last Name"
                width={160}
                placeholder="Last name"
                error={errors.lastName}
              />
            </View>
            <Input
              onChangeText={(text) => handleOnchange(text, 'phone')}
              onFocus={() => handleError(null, 'phone')}
              icon={<MaterialCommunityIcons name="phone" size={24} color={COLORS.lightPrimary} />}
              lable="Phone"
              placeholder="Enter your phone"
              error={errors.phone}
            />

            <View className="flex-row items-center justify-between">
              <View>
                <Text className="-mt-4 text-[#b4b4b8]">Gender</Text>

                <Box w={200} maxW="160" marginTop={1}>
                  <Select
                    selectedValue={inputs.gender}
                    minWidth="100"
                    fontSize={16}
                    color={'#b4b4b8'}
                    backgroundColor={'#f3f4fb'}
                    borderColor={'#f3f3fb'}
                    borderRadius={8}
                    height={52}
                    onValueChange={(text) => handleOnchange(text, 'gender')}
                    placeholder="Enter Gender"
                    _selectedItem={{
                      bg: '#ccc',
                      endIcon: <CheckIcon size="5" />,
                    }}
                  >
                    <Select.Item label="Male" value="male" />
                    <Select.Item label="Female" value="female" />
                    <Select.Item label="Others" value="others" />
                  </Select>
                </Box>
              </View>

              <Input
                onChangeText={(text) => handleOnchange(text, 'YOB')}
                onFocus={() => handleError(null, 'YOB')}
                icon={<MaterialCommunityIcons name="cake" size={24} color={COLORS.lightPrimary} />}
                lable="YOB"
                width={164}
                placeholder="Enter your YOB"
                error={errors.phone}
              />
            </View>

            <Input
              onChangeText={(text) => handleOnchange(text, 'email')}
              onFocus={() => handleError(null, 'email')}
              icon={<MaterialCommunityIcons name="email" size={24} color={COLORS.lightPrimary} />}
              lable="Email"
              placeholder="Enter your email"
              error={errors.email}
            />
            <Input
              onChangeText={(text) => handleOnchange(text, 'password')}
              onFocus={() => handleError(null, 'password')}
              icon={<FontAwesome name="lock" size={24} color={COLORS.lightPrimary} />}
              lable="Password"
              placeholder="Enter your password"
              error={errors.password}
              password
            />
            <View className="flex-row items-center">
              <Text style={styles.label}>You are</Text>
              <Radio.Group
                name="roleUser"
                defaultValue="1"
                accessibilityLabel="pick a role"
                value={role}
                onChange={(nextValue) => {
                  setRole(nextValue)
                }}
              >
                <Stack
                  direction={{
                    base: 'row',
                    md: 'row',
                  }}
                  alignItems={{
                    base: 'flex-start',
                    md: 'center',
                  }}
                  space={4}
                  w="75%"
                  maxW="300px"
                >
                  <Radio value="user" colorScheme="green" size="sm">
                    User
                  </Radio>
                  <Radio value="Supplier" colorScheme="green" size="sm">
                    Supplier
                  </Radio>
                </Stack>
              </Radio.Group>
            </View>

            <ButtonCustom title="Sign up" borderRadius={5} marginVertical={20} onPress={validate} />
            <View className="mt-5">
              <Text
                className="text-[16px] text-center font-bold mb-10"
                onPress={() => navigation.navigate('LoginScreen')}
                style={{
                  color: COLORS.black,
                }}
              >
                Already have account?
                <Text style={{color: COLORS.primary}}> Sign in</Text>
              </Text>
              <Text
                className="text-[15px] text-center leading-5"
                style={{
                  color: COLORS.black,
                }}
              >
                By creating a new account, you agree with our{' '}
                <Text className="font-bold">Terms & Conditions</Text> and{' '}
                <Text className="font-bold">Privacy Policy</Text>
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default RegistrationScreen

const styles = StyleSheet.create({
  label: {
    marginVertical: 5,
    fontSize: 14,
    color: COLORS.grey,
    marginRight: 20,
  },
})
