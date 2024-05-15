import React from 'react';
import { View, Text } from 'react-native';
import TableExample from '~/components/app/main/TableCoin';

export default function RedTab() {
  return (
    <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
      <TableExample/>
    </View>
  );
}