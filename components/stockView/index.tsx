import React from 'react';
import { View, Text } from 'react-native';
import { SvgUri } from 'react-native-svg';
import { CryptoData } from '@/types';

type StockViewProps = {
  item: CryptoData;
};

const StockView: React.FC<StockViewProps> = ({ item }) => {
  const closeValue = parseFloat(item.close);
  const changeValue = parseFloat(item.change);

  return (
    <View className='h-[80px] mb-4 flex-row bg-zinc-800 rounded-lg items-center'>
      <View className='w-16 h-16 overflow-hidden rounded-xl ml-4'>
        <SvgUri
          width="100%"
          height="100%"
          uri={item.logo}
          style={{ alignSelf: 'stretch' }}
        />
      </View>
      <View className='flex-row justify-between w-[75%]'>
        <View className='flex-col text-left justify-between h-[70%] ml-4'>
          <Text className='text-white text-xl'>{item.name}</Text>
          <Text className='text-white text-base'>{item.stock}</Text>
        </View>
        <View className='flex-col text-left justify-between h-[70%]'>
          <Text className='text-white text-xl'>
            {isNaN(closeValue) ? 'N/A' : `R$ ${closeValue.toFixed(1)}`}
          </Text>
          <View 
          className={`rounded-lg w-[100%] justify-center items-center ${isNaN(changeValue) ? 'bg-transparent' : changeValue < 0 ? 'bg-red-500' : 'bg-green-500'}`}
          >
            <Text className={'rounded-lg text-white text-base font-bold'}>
              {isNaN(changeValue) ? 'N/A' : changeValue.toFixed(1) + ' %'}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default StockView;
