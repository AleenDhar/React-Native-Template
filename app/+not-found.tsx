import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
export default function App() {
  return (
    <>
     <SafeAreaView className="flex-1 items-center justify-center ">
      <Text className='text-white'>404 NOT FOUND</Text>
      <StatusBar style="auto" />
    </SafeAreaView>
    </>
  );
}

