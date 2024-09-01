import React, { useState } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';

export default function DoubleButton() {
  const [selected, setSelected] = useState('1 day');

  return (
    <View className='bg-zinc-800 w-[90%] flex-row rounded-xl justify-around items-center p-2'>
      <TouchableOpacity
        onPress={() => setSelected('1 day')}
        className={`w-[30%] text-center rounded-xl p-3 items-center justify-center ${selected === '1 day' ? 'bg-cyan-600' : 'bg-transparent'}`}
        testID="1day-button"
      >
        <Text className='text-white text-base font-semibold'>1 day</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => setSelected('7 days')}
        className={`w-[30%] text-center rounded-xl p-3 items-center justify-center ${selected === '7 days' ? 'bg-cyan-600' : 'bg-transparent'}`}
        testID="7days-button"
      >
        <Text className='text-white text-base font-semibold'>7 days</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => setSelected('30 days')}
        className={`w-[30%] text-center rounded-xl p-3 items-center justify-center ${selected === '30 days' ? 'bg-cyan-600' : 'bg-transparent'}`}
        testID="30days-button"
      >
        <Text className='text-white text-base font-semibold'>30 days</Text>
      </TouchableOpacity>
    </View>
  );
}
