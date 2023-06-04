import {View, Text, SafeAreaView, TouchableOpacity} from 'react-native'
import React from 'react'
import {useNavigation} from '@react-navigation/native'
import {ArrowLeftIcon} from 'react-native-heroicons/outline'
import { Radio } from 'native-base'

const ChangeLanguageScreen = () => {
  const navigation = useNavigation()
  const [value, setValue] = React.useState('Vietnamese')

  return (
    <SafeAreaView>
      <TouchableOpacity onPress={() => navigation.navigate('ProfileScreen')} className="mt-14 mx-6">
        <ArrowLeftIcon size={24} color="#000" />
      </TouchableOpacity>

      <View className="mt-12 mx-6">
        <Text className="text-[24px] font-bold tracking-widest">Change language</Text>
      </View>

      <View className='mt-16 mx-10'>
        <Radio.Group
          name="myRadioGroup"
          accessibilityLabel="favorite number"
          value={value}
          onChange={(nextValue) => {
            setValue(nextValue)
          }}
        >
          <Radio value="Vietnamese" colorScheme='green' size={'lg'} my={1}>
            Vietnamese
          </Radio>
          <Radio value="English" colorScheme='green' size={'lg'} my={1}>
            English
          </Radio>
        </Radio.Group>
        
      </View>
    </SafeAreaView>
  )
}

export default ChangeLanguageScreen
