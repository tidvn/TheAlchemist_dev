import React from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Stack, Tabs } from 'expo-router';

export default function ConfluenceTradeTabLayout() {
  return (
    <Stack>

    <Stack.Screen name="index"/>
    <Stack.Screen name="setting"/>
  </Stack>
  );
}
