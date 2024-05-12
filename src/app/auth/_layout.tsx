
import { Stack } from "expo-router";
import FeedHeader from "~/components/common/FeedHeader";

export default function Layout() {

  return (
    <Stack initialRouteName="signin">
      <Stack.Screen
        name='signin'
        options={{
          headerShown: false,
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
