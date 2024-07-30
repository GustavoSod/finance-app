import { StatusBar } from 'expo-status-bar';
import { Text } from 'react-native';
import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import DoubleButton from '@/components/doubleButton';

export default function HomeScreen() {
  return (
    <View style={{flex:1, backgroundColor: '#151718'}}>
      <StatusBar style='light'/>
      <SafeAreaView>
        <View className='ml-8 mt-20'>
          <Text className='text-gray-300 text-lg'>Hello, User!</Text>
          <Text className='text-gray-300 text-4xl font-semibold'>Last year's report 💵</Text>
        </View>
        <View className='w-full items-center mt-6'>
          <DoubleButton/>
        </View>
      </SafeAreaView>
    </View>
  );
}
