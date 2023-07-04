import {View, Text, ScrollView} from 'react-native'
import React from 'react'
import * as Icons from 'react-native-heroicons/outline'
import FieldCard from './FieldCard'
import {sanBong1, sanBong2, sanBong3} from '../constants/images'

const FeaturedRow = ({title, description}) => {
  return (
    <View>
      <View className="flex-row mt-6 items-center justify-between px-4">
        <Text className="font-bold text-lg">{title}</Text>
        <Icons.ArrowRightIcon color={'#00CCBB'} />
      </View>

      <Text className="text-xs text-gray-500 px-4">{description}</Text>

      <ScrollView
        horizontal
        contentContainerStyle={{
          paddingHorizontal: 15,
        }}
        showsHorizontalScrollIndicator={false}
        className="pt-1"
      >
        {/* FieldCard... */}

        <FieldCard
          name="Lotee Football Stadium"
          address={'District 1, HCM'}
          rating="4.5"
          imgUrl={sanBong1}
        />
        <FieldCard
          name="KSPO Football Stadium"
          address={'District 2, HCM'}
          rating="4.5"
          imgUrl={sanBong2}
        />
        <FieldCard
          name="Jamsil Football Stadium"
          address={'District 3, HCM'}
          rating="4.5"
          imgUrl={sanBong3}
        />
      </ScrollView>
    </View>
  )
}

export default FeaturedRow
