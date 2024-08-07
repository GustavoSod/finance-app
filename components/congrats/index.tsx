import React from 'react'
import { View, Text } from 'react-native'

export default function Congrats() {
  return (
    <View className='w-[75%] bg-cyan-600 p-3 rounded-xl flex-row items-center'>
        <View className='bg-zinc-800 p-3 rounded-full'>
            <Text className='text-3xl'>👏</Text>
        </View>
        <View>
            <Text className='text-white font-bold text-lg ml-4'>Well done, User!!</Text>
            <Text className='text-gray-300 text-sm ml-4'>Your cryptos are growing</Text>
        </View>
    </View>
  )
}
