import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import * as Icons from "react-native-heroicons/outline";
import FieldCard from './FieldCard';

const FeaturedRow = ({title, description}) => {
  return (
    <View>
      <View className="flex-row mt-6 items-center justify-between px-4">
        <Text className="font-bold text-lg">{title}</Text>
        <Icons.ArrowRightIcon color={"#00CCBB"} />
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
       
        <FieldCard name='Lotee Football Stadium' address={'District1, HCM'} rating='4.5' imgUrl={'https://yousport.vn/Media/Articles/080321051105526/nhung-mat-san-bong-da-pho-bien-nhat-hien-nay-banner.jpg'}/>
        <FieldCard name='Lotee Football Stadium' address={'District1, HCM'} rating='4.5' imgUrl={'https://bizweb.dktcdn.net/100/017/070/files/kich-thuoc-san-bong-da-1-jpeg.jpg?v=1671246300021'}/>
        <FieldCard name='Lotee Football Stadium' address={'District1, HCM'} rating='4.5' imgUrl={'https://bizweb.dktcdn.net/100/017/070/files/kich-thuoc-san-bong-da-1-jpeg.jpg?v=1671246300021'}/>
        
      </ScrollView>
    </View>
  )
}

export default FeaturedRow