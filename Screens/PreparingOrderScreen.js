import { View, } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation } from '@react-navigation/core';
import FastImage from 'react-native-fast-image';

export default function PreparingOrderScreen() {
  const navigation = useNavigation();
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Delivery');
    }, 3000)
  }, [])
  return (
    <View className="flex-1 bg-white justify-center items-center">
      <FastImage source={require('../assets/images/delivery.gif')} className="h-80 w-80" />
    </View>
  )
}