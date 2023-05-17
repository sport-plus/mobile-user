import { View, Text, SafeAreaView, TextInput, ScrollView } from 'react-native';
import React from 'react';
import {
  ArrowLeftIcon,
  BellIcon,
  MagnifyingGlassIcon,
} from 'react-native-heroicons/outline';
import SCRow from '../components/SCRow';

const SportCenterUserScreen = () => {
  return (
    <SafeAreaView className="relative pb-8">
      {/* Appbar */}
      <View className="bg-black w-full h-44 rounded-b-3xl">
        <View className="mt-10 flex-row items-center justify-between px-8">
          <ArrowLeftIcon size={24} color="#fff" />
          <Text className="text-white font-bold text-lg">Sport Center</Text>
          <BellIcon size={24} color="#fff" />
        </View>
      </View>

      {/* Body */}
      <View className="bg-[#ECF3FF] w-full h-full -mt-20 rounded-tl-3xl rounded-tr-3xl">
        <View className="flex-row p-3 space-x-2 items-center border-2 border-[#00C187] mt-4 mx-4 rounded-lg">
          <MagnifyingGlassIcon size={24} color="#000" />
          <TextInput placeholder="Enter something" keyboardType="default" />
        </View>

        <Text className="px-5 mt-4 font-bold text-lg">Near hear</Text>
        <ScrollView>
          <SCRow
            title="Near here"
            name="Lotee Football Stadium"
            address="District 1, HCM"
            rating="4.5"
            available="10 Available Today"
            distance="1.4"
          />

          <SCRow
            title="Near here"
            name="Lotee Football Stadium"
            address="District 1, HCM"
            rating="4.5"
            available="10 Available Today"
            distance="1.4"
          />

          <Text className="px-5 mt-4 font-bold text-lg">Another</Text>

          <SCRow
            title="Near here"
            name="Lotee Football Stadium"
            address="District 1, HCM"
            rating="4.5"
            available="10 Available Today"
            distance="1.4"
          />

          <SCRow
            title="Near here"
            name="Lotee Football Stadium"
            address="District 1, HCM"
            rating="4.5"
            available="10 Available Today"
            distance="1.4"
          />

          <SCRow
            title="Near here"
            name="Lotee Football Stadium"
            address="District 1, HCM"
            rating="4.5"
            available="10 Available Today"
            distance="1.4"
          />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default SportCenterUserScreen;
