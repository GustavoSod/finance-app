import { StatusBar } from 'expo-status-bar';
import { Text, Image, View, TouchableOpacity, ScrollView} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import DoubleButton from '@/components/doubleButton';
import HomeChart from '@/components/homeChart';
import { MaterialIcons } from '@expo/vector-icons';

export default function HomeScreen() {
  return (
    <View style={{flex:1, backgroundColor: '#151718'}}>
      <StatusBar style='light'/>
      <SafeAreaView>
        <ScrollView>
          <View className='flex flex-row items-center justify-between ms-8 me-8 mt-7'>
            <View>
              <Image className='w-12 h-12 rounded-lg' source={require('../../assets/images/person.jpg')}/>
            </View>
            <TouchableOpacity className='bg-zinc-800 p-1 rounded-lg'>
              <MaterialIcons name="notifications-none" size={33} color="#BABABA"/>
            </TouchableOpacity>
          </View>
          <View className='ms-8 mt-8'>
            <Text className='text-gray-300 text-lg'>Hello, User!</Text>
            <Text className='text-gray-300 text-4xl font-semibold'>Famous cryptos 💵</Text>
          </View>
          <View className='w-full items-center mt-6'>
            <DoubleButton/>
          </View>
          <View className='mt-2'>
            <HomeChart/>
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}
