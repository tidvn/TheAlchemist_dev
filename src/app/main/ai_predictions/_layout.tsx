import React from 'react';
import { Stack, Tabs } from 'expo-router';
import FeedHeader from '~/components/common/FeedHeader';

export default function AiPredictionsTabLayout() {
  return (
    <Stack>
    <Stack.Screen name="index"
    options={{
      header: props => <FeedHeader {...props} />,
    }}
    />
    <Stack.Screen name="setting"/>
  </Stack>
  );
}
