import { TextInput, View, SafeAreaView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function TabTwoScreen() {
  return (
    <View style={{ flex: 1, backgroundColor: '#151718' }}>
      <SafeAreaView className='flex-1 items-center'>
        <View className='flex-row items-center bg-zinc-800 w-[90%] rounded-lg p-2 mt-6'>
          <Ionicons name="search" size={24} color="#eee" className='ml-3' />
          <TextInput 
            placeholder='Find a cripto' 
            className='flex-1 text-xl text-white ml-4' 
            placeholderTextColor='#eee'
          />
        </View>
      </SafeAreaView>
    </View>
  );
}
