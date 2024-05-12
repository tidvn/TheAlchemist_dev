import { useScrollToTop } from "@react-navigation/native";
import { useRouter } from "expo-router";
import * as React from "react";
import { View } from "react-native";
import { Button } from "~/components/ui/button";

import { Text } from "~/components/ui/text";
import { Habit } from "~/lib/storage";

type HabitProps = {
  habit: Habit;
  onDelete?: () => void;
};


export default function HomeScreen() {
  const ref = React.useRef(null);
  useScrollToTop(ref);

  const router = useRouter();


  return (
    <View className="flex-1 gap-5 p-6 bg-secondary/30">
      <Text className="text-2xl font-semibold">Habits</Text>
      <Button onPress={() => router.replace("/auth/signin")}>
        <Text>Add</Text>
      </Button>
    </View>
  );
}
