
import { Stack } from "expo-router";

export default function Layout() {

  return (
    <Stack initialRouteName="trading">
      <Stack.Screen
        name='trading'
        options={{
          headerShown: true,
        }}
      />
      
    </Stack>
  );
}
