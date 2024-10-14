import React from 'react'
import { View, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function favorites() {
  return (
    <View style={{ flex: 1, backgroundColor: '#151718' }}>
      <SafeAreaView className='flex-1 items-center'>
        <Text className='text-white text-4xl font-semibold mt-8 ml-8'>Your{"\n"}Favorite Stocks</Text>
      </SafeAreaView>
    </View>
  )
}

