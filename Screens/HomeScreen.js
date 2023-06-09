import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    Text,
    View,
    StatusBar,
    TextInput,
    ScrollView
} from 'react-native';
import * as Icon from "react-native-feather";
import Categories from '../components/categories'
import { themeColors } from '../theme';
import FeatureRow from '../components/featuredRow';
import { featured } from '../constants';
export default function HomeScreen() {
    return (
        <SafeAreaView className="bg-white">
            <StatusBar barStyle={"dark-content"} />
            {/*Search bar*/}
            <View className="flex-row items-center space-x-4 px-4 pb-2 mt-2 ">
                <View className="flex-row flex-1 items-center p-1 rounded-full border border-gray-300">
                    <Icon.Search height="25" width="25" stroke="gray" />
                    <TextInput placeholder='Resturants' className="ml-6 flex-1" keyboardType='default' />
                    <View className="flex-row items-center space-x-1 border-0 border-l-2 pl-2 border-l-gray-300">
                        <Icon.MapPin height="20" width="20" stroke="gray" />
                        <Text className="text-gray-600">New York, NYC</Text>
                    </View>
                </View>
                <View style={{ backgroundColor: themeColors.bgColor(1) }} className="p-3 rounded-full">
                    <Icon.Sliders height={20} width={20} strokeWidth="2.5" stroke="white" />
                </View>
            </View>

            {/* main */}
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{
                    paddingBottom: 50
                }}
            >

                {/* categories */}
                <Categories />

                {/* featured */}
                <View className="mt-5">
                    {

                        [featured, featured, featured].map((item, index) => {
                            return (
                                <FeatureRow
                                    key={index}
                                    title={item.title}
                                    resturants={item.restaurants}
                                    description={item.description}
                                />
                            )
                        })
                    }
                </View>


            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    sectionContainer: {
        marginTop: 32,
        paddingHorizontal: 24,
    }
});

