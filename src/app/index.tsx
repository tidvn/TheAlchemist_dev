import { useScrollToTop } from "@react-navigation/native";
import { useRouter } from "expo-router";
import * as React from "react";
import { View } from "react-native";
import { ThemeToggle } from "~/components/common/ThemeToggle";
import { Button } from "~/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '~/components/ui/card';
import { Progress } from "~/components/ui/progress";
import { Text } from "~/components/ui/text";
import { useColorScheme } from "~/lib/useColorScheme";


export default function HomeScreen() {
  const ref = React.useRef(null);
  useScrollToTop(ref);
  const { isDarkColorScheme, setColorScheme } = useColorScheme();

  const router = useRouter();


  return (
    <View className='flex-1 justify-center items-center gap-5 p-6 bg-secondary/30'>
      <Card className='w-full max-w-sm p-6 rounded-2xl'>
        <CardHeader className='items-center'>

          <View className='p-3' />
          <CardTitle className='pb-2 text-center'>Rick Sanchez</CardTitle>
          <View className='flex-row'>
            <CardDescription className='text-base font-semibold'>Scientist</CardDescription>

          </View>
        </CardHeader>
        <CardContent>
          <View className='flex-row justify-around gap-3'>
            <View className='items-center'>
              <Text className='text-sm text-muted-foreground'>Dimension</Text>
              <Text className='text-xl font-semibold'>C-137</Text>
            </View>
            <View className='items-center'>
              <Text className='text-sm text-muted-foreground'>Age</Text>
              <Text className='text-xl font-semibold'>70</Text>
            </View>
            <View className='items-center'>
              <Text className='text-sm text-muted-foreground'>Species</Text>
              <Text className='text-xl font-semibold'>Human</Text>
            </View>
          </View>
        </CardContent>
        <CardFooter className='flex-col gap-3 pb-0'>

          <Progress value={10} className='h-2' indicatorClassName='bg-sky-600' />
          <View />
          <Button
            variant='outline'
            className='shadow shadow-foreground/5'
            onPress={() => router.push('/auth/signin')}
          >
            <Text>Login</Text>
          </Button>
          <Button
            variant='outline'
            className='shadow shadow-foreground/5'
            onPress={() => router.push('/main/home/')}
          >
            <Text>Main</Text>
          </Button>
          <Button
            variant='outline'
            className='shadow shadow-foreground/5'
            onPress={() => setColorScheme(isDarkColorScheme ? 'light' : 'dark')}
          >
            <Text>Theme</Text>
          </Button>
        </CardFooter>
      </Card>
    </View>
  );
}
