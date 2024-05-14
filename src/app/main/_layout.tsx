
import { Stack } from "expo-router";

export default function Layout() {

  return (
    <Stack initialRouteName="tradingview">
      <Stack.Screen
        name='tradingview'
        options={{
          headerShown: true,
        }}
      />
      <Stack.Screen
        name='signup'
        options={{
          headerShown: false,
        }}
      />
    </Stack>
  );
}
