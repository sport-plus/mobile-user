import React from 'react'
import {Text, TouchableOpacity} from 'react-native'
import {COLORS} from '../constants'
import {useNavigation} from '@react-navigation/native'
import {typeOf} from 'react-is'

const ButtonCustom = ({
  title,
  onPress = () => {},
  height,
  width,
  backgroundColor,
  marginHorizontal,
  marginVertical,
  borderRadius,
  borderWidth,
  borderColor,
  textColor,
  textSize,
}) => {
  const navigation = useNavigation()
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.7}
      style={{
        height: height ? height : 50,
        width: width ? width : '100%',
        backgroundColor: backgroundColor ? backgroundColor : COLORS.primary,
        marginHorizontal: marginHorizontal ? marginHorizontal : 0,
        marginVertical: marginVertical ? marginVertical : 0,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: borderRadius ? borderRadius : 0,
        borderWidth: borderWidth ? borderWidth : 0,
        borderColor: borderColor ? borderColor : COLORS.primary,
      }}
    >
      <Text
        style={{
          color: textColor ? textColor : COLORS.white,
          fontWeight: 'bold',
          fontSize: textSize ? textSize : 18,
        }}
      >
        {title}
      </Text>
    </TouchableOpacity>
  )
}

export default ButtonCustom
