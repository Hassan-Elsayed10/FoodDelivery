import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import ResturantCard from './resturantCard'
import { themeColors } from '../theme'
export default function FeatureRow({ title, description, resturants }) {
  return (
    <View>
      <View className="flex-row justify-between items-center px-4">
        <View>
          <Text className="font-bold text-lg">{title}</Text>
          <Text className="text-gray-500 text-xs">
            {description}
          </Text>
        </View>

        <TouchableOpacity>
          <Text style={{ color: themeColors.text }} className="font-semibold">See All</Text>
        </TouchableOpacity>
      </View>



      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: 15,
        }}
        className="overflow-visible py-5"
      >
        {
          resturants.map((resturant, index) => {
            return (
              <ResturantCard
                key={index}
                item={resturant}

              />
            )
          })
        }
      </ScrollView>

    </View>
  )
}