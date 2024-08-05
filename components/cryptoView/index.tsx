import React from 'react';
import { View, Image } from 'react-native';

export default function CryptoView() {
  return (
    <View className='mr-4'>
      <Image 
        testID='crypto-image'
        style={{width: 45, height: 45, borderRadius: 30}} 
        source={require('../../assets/images/ethereum.png')}
      />
    </View>
  );
}
