import { useRef, useState } from 'react';
import { View, StyleSheet, Button, TextInput, Text,ScrollView } from 'react-native';
import { Audio } from 'expo-av';
import { SafeAreaView } from 'react-native-safe-area-context';

import {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
  } from "@google/generative-ai"

import * as Speech from 'expo-speech';

export default function App() {

    const [text, setText] = useState('');
    const [response, setResponse] = useState('');

    const inputref=useRef()
    const speak = (response:string) => {
        Speech.speak(response);
    };
    const apiKey ="AIzaSyA_bH3ZJwhGcjCQ-QtxlTEKcMnv6Fw_TIE";
    const genAI = new GoogleGenerativeAI(apiKey);

    const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
    });

    const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 64,
    maxOutputTokens: 8192,
    responseMimeType: "text/plain",
    };

    async function run(text:string) {
    const chatSession = model.startChat({
        generationConfig,
    // safetySettings: Adjust safety settings
    // See https://ai.google.dev/gemini-api/docs/safety-settings
        history: [
        ],
    });
    const result = await chatSession.sendMessage(text);
    const finalresponse = result.response.text().replaceAll("*"," ")
    console.log(finalresponse);
    setResponse(finalresponse);
    // speak(finalresponse)
    }


  return (
    <SafeAreaView className='flex justify-center items-center bg-black h-full w-full pt-10'>
        <ScrollView className='h-full px-5 '>
        <Text className='text-white '>{response}</Text>
        <View className='w-20 mb-16 self-end'>
            {response?(<Button title="Hear the Audio" onPress={()=>speak(response)} />):(<></>)}
        
        </View>
        </ScrollView>
        <View className='fixed min-h-20 flex flex-row bottom-10 mx-5'>
        <TextInput
        // @ts-ignore
        ref={inputref}
            className='text-white w-5/6 bg-slate-800 flex items-center justify-center rounded-lg p-3'
            value={text}
            onChangeText={text => setText(text)}
            />
            <Button 
            title={"send"}
            onPress={async() => {
            // inputref.current.value = ""
            await run(text)
            }}
            />
        </View>
    </SafeAreaView>
  );
}

