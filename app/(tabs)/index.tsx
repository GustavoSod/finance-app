import { StatusBar } from 'expo-status-bar';
import { Text, Image, View, TouchableOpacity, ScrollView} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialIcons } from '@expo/vector-icons';
import DoubleButton from '@/components/doubleButton';
import HomeChart from '@/components/homeChart';
import Congrats from '@/components/congrats';

export default function HomeScreen() {
  return (
    <View style={{flex:1, backgroundColor: '#151718'}}>
      <StatusBar style='light'/>
      <SafeAreaView className='flex-1'>
        <ScrollView className='h-[100vh]'>
            <View className='flex-row items-center justify-between me-10 ms-10 mt-4'>
              <View>
                <Image style={{width: 50, height: 50, borderRadius: 30}} source={require('../../assets/images/person.jpg')}/>
              </View>
              <TouchableOpacity className='bg-zinc-800 p-1 rounded-lg'>
                <MaterialIcons name="notifications-none" size={33} color="#BABABA"/>
              </TouchableOpacity>
            </View>
          <View className='w-full items-center mt-10'>
            <View className='w-[85%]'>
              <Text className='text-gray-300 text-lg'>Hello, User!</Text>
              <Text className='text-gray-300 text-4xl font-semibold'>Famous cryptos 💵</Text>
            </View>
          </View>
          <View className='w-full items-center mt-6'>
            <DoubleButton/>
          </View>
          <View className='mt-2'>
            <HomeChart/>
          </View>
          <View className='w-full items-center mt-14'>
            <Congrats/>
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}
