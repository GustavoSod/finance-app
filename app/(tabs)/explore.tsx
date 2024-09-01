import { useEffect, useState } from 'react';
import { TextInput, View, SafeAreaView, FlatList, ActivityIndicator } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { CryptoData } from '@/types';
import StockView from '@/components/stockView';

export default function TabTwoScreen() {

  const [cryptoData, setCryptoData] = useState<CryptoData[]>([]);
  const [displayedData, setDisplayedData] = useState<CryptoData[]>([]);
  const [page, setPage] = useState(1);
  const [searchText, setSearchText] = useState('');
  const [loading, setLoading] = useState(false);
  const itemsPerPage = 10;

  useEffect(() => {
    async function stocks() {
      try {
        const response = await fetch(`https://brapi.dev/api/quote/list`);
        if (response.ok) {
          const data = await response.json();
          setCryptoData(data.stocks);
          setDisplayedData(data.stocks.slice(0, itemsPerPage));
        } else {
          console.error('Error fetching data:', response.status);
        }
      } catch (error) {
        console.error('Fetch error:', error);
      }
    }

    stocks();
  }, []);

  useEffect(() => {
    const filteredData = cryptoData.filter(item =>
      item.stock.toLowerCase().includes(searchText.toLowerCase())
    );
    setDisplayedData(filteredData.slice(0, itemsPerPage));
    setPage(1);
  }, [searchText, cryptoData]);

  const loadMoreItems = () => {
    if (loading) return;

    setLoading(true);
    const newPage = page + 1;
    const startIndex = page * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    
    setTimeout(() => {
      setDisplayedData(prevData => [
        ...prevData,
        ...cryptoData.slice(startIndex, endIndex),
      ]);
      setPage(newPage);
      setLoading(false);
    }, 700);
  };

  if(cryptoData){
    return (
      <View style={{ flex: 1, backgroundColor: '#151718' }}>
        <SafeAreaView className='flex-1 items-center'>
          <View className='flex-row items-center bg-zinc-800 w-[90%] rounded-lg p-2 mt-6'>
            <Ionicons name="search" size={24} color="#eee" className='ml-3' />
            <TextInput 
              value={searchText}
              onChangeText={(text) => setSearchText(text)}
              placeholder='Find Stocks' 
              className='flex-1 text-xl text-white ml-4' 
              placeholderTextColor='#eee'
            />
          </View>
          <View className='w-full h-[100%]'>
            <FlatList
              data={displayedData}
              className=' mt-10'
              keyExtractor={(item) => item.stock}
              renderItem={({ item }) => (
                <StockView item={item} /> 
              )}
              onEndReached={loadMoreItems}
              onEndReachedThreshold={0.1} 
              ListFooterComponent={loading ? <ActivityIndicator size="large" color="#fff" className='color-cyan-600' /> : null} // Loading indicator
            />
          </View>
        </SafeAreaView>
      </View>
    );
  } else {
    <ActivityIndicator size="large" color="#fff" />
  }
}
