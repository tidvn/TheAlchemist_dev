import { View, Text } from 'react-native';
import CoinCard from '~/components/app/main/CoinCard';

export default function HomeTab() {
  return (
    <View>
       <CoinCard/>
       <CoinCard/>
       <CoinCard/>
       <CoinCard/>
       <CoinCard/>
    </View>
  );
}