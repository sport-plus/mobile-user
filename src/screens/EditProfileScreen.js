import React from 'react'
import { View, Text , SafeAreaView} from 'react-native'
import {useNavigation} from '@react-navigation/native'

const EditProfileScreen = () => {
  const navigation = useNavigation()

  return (
    <SafeAreaView>
      <Text>Edit Profile</Text>
    </SafeAreaView>
  )
}

export default EditProfileScreen