import { Redirect, useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
export default function App() {
    const router = useRouter()
  return (
    <>
     <SafeAreaView className="flex-1 items-center justify-center bg-black gap-10">
      <Text className='text-white'>Welcome Page</Text>
      <Text onPress={() => {
        // @ts-ignore
        router.push("/(auth)/sign-in")
        
      }}
      className='text-white h-10 w-20 bg-slate-800 flex items-center justify-center rounded-lg' 
      >
        Sign-in
      </Text>
      <Text onPress={() => {
        // @ts-ignore
        router.push("/(auth)/sign-up")
        
      }}
      className='text-white h-10 w-20 bg-slate-800 flex items-center justify-center rounded-lg '
      >
        Sign-Up
      </Text>
      
      <StatusBar style="auto" />
    </SafeAreaView>
        </>
  );
}

