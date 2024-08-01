import React from 'react'
import { View, Image } from 'react-native'

export default function CryptoView() {
  return (
    <View className='mr-4'>
        <Image style={{width: 55, height: 55, borderRadius: 30}} source={require('../../assets/images/ethereum.png')}/>
    </View>
  )
}
