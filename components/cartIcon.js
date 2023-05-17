import { useNavigation } from '@react-navigation/core';
import { themeColors } from '../theme';
import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux';
import { selectBasketItems, selectBasketTotal } from '../slices/cartSlice';
export default function CartIcon() {
  const cartItems = useSelector(selectBasketItems);
  const cartTotla = useSelector(selectBasketTotal)
  if (!cartItems.length) return null;
  const navigation = useNavigation();
  return (
    <View className="absolute bottom-5 w-full z-50">
      <TouchableOpacity
        style={{ backgroundColor: themeColors.bgColor(1) }}
        onPress={() => navigation.navigate('Cart')}
        className="flex-row justify-between items-center mx-5 rounded-full p-4 py-3 shadow-lg">
        <View className="p-2 px-4 rounded-full" style={{ backgroundColor: 'rgba(255,255,255,0.3)' }}>
          <Text className="font-extrabold text-white text-lg">{cartItems.length}</Text>
        </View>

        <Text className="flex-1 text-center font-extrabold text-white text-lg">View Cart</Text>
        <Text className="font-extrabold text-white text-lg">${cartTotla}</Text>

      </TouchableOpacity>

    </View>
  )
}