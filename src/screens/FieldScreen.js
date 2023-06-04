import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import { ArrowLeftIcon, BellIcon } from 'react-native-heroicons/outline';
import FieldRow from '../components/FieldRow';
import { useNavigation } from '@react-navigation/native';

const FieldScreen = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView className="relative pb-14">
      <StatusBar backgroundColor="#000" />
      <View className="bg-black w-full h-44 rounded-b-3xl">
        <View className="mt-10 flex-row items-center justify-between px-8">
          <TouchableOpacity
            onPress={() => navigation.navigate('SportCenter')}
          >
            <ArrowLeftIcon size={24} color="#fff" />
          </TouchableOpacity>
          <Text className="text-white font-bold text-lg">
            Lotee Football Stadium
          </Text>
          <BellIcon size={24} color="#fff" />
        </View>
      </View>

      <View className="bg-[#ECF3FF] w-full h-full -mt-20 rounded-tl-3xl rounded-tr-3xl">
        <ScrollView>
          <FieldRow
            name="Artificial football field 1"
            available="Available"
            size="7x7"
            price="300.000"
          />

          <FieldRow
            name="Artificial football field 1"
            available="Available"
            size="7x7"
            price="300.000"
          />

          <FieldRow
            name="Artificial football field 1"
            available="Available"
            size="7x7"
            price="300.000"
          />

          <FieldRow
            name="Artificial football field 1"
            available="Available"
            size="7x7"
            price="300.000"
          />

          <FieldRow
            name="Artificial football field 1"
            available="Available"
            size="7x7"
            price="300.000"
          />

          <FieldRow
            name="Artificial football field 1"
            available="Available"
            size="7x7"
            price="300.000"
          />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default FieldScreen;
