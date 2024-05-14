import { View, Text } from 'react-native';
import CoinCard from '~/components/main/CoinCard';

export default function HomeTab() {
  return (
    <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
       <CoinCard/>
    </View>
  );
}