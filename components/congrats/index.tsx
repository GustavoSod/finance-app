import React from 'react'
import { View, Text } from 'react-native'

export default function Congrats() {
  return (
    <View className='w-[80%] bg-cyan-600 p-3 rounded-full flex-row items-center justify-around'>
        <View className='bg-zinc-800 p-3 rounded-full'>
            <Text className='text-3xl'>👏</Text>
        </View>
        <View>
            <Text className='text-white font-semibold text-lg'>Well done, User!!</Text>
            <Text className='text-gray-300 text-base'>Your cryptocurrencies are growing</Text>
        </View>
    </View>
  )
}
