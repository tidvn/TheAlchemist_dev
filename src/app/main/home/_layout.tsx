import React from 'react';
import { Stack, Tabs } from 'expo-router';

export default function HomeTabLayout() {
  return (
    <Stack>

    <Stack.Screen name="index"/>
    <Stack.Screen name="setting"/>
  </Stack>
  );
}
