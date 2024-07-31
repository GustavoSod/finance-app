import React, { useState } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';

export default function DoubleButton() {
  const [selected, setSelected] = useState('income');

  return (
    <View className='bg-zinc-800 w-[90%] flex-row rounded-xl justify-around items-center p-2'>
      <TouchableOpacity
        onPress={() => setSelected('income')}
        className={`w-[45%] text-center rounded-xl p-3 items-center justify-center ${selected === 'income' ? 'bg-cyan-600' : 'bg-transparent'}`}
      >
        <Text className='text-white text-base font-semibold'>Bitcoin</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => setSelected('expenses')}
        className={`w-[45%] text-center rounded-xl p-3 items-center justify-center ${selected === 'expenses' ? 'bg-cyan-600' : 'bg-transparent'}`}
      >
        <Text className='text-white text-base font-semibold'>Ethereum</Text>
      </TouchableOpacity>
    </View>
  );
}
