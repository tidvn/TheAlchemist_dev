import React from 'react';
import { View, } from 'react-native';
import { Button } from '~/src/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '~/src/components/ui/card';
import { Progress } from '~/src/components/ui/progress';
import { Text } from '~/src/components/ui/text';
import { Tooltip, TooltipContent, TooltipTrigger } from '~/components/ui/tooltip';
import { Habit } from './storage';


interface HabitProps {
  habit: Habit;
  onDelete?: () => void;
}

export const HabitCard: React.FC<HabitProps> = ({ habit, onDelete }) => {

  const getCompletedDayCount = () => {
    return habit.completedDays.length;
  };

  return (
    <View className={"bg-white p-4 rounded-md shadow-md"}>
      <Text className={"text-xl font-bold mb-2"}>{habit.name}</Text>
      <Text className={"text-gray-500"}>Completed: {getCompletedDayCount()} days</Text>
      {onDelete && (
        <Button
          onPress={onDelete}
          className={"mt-2"}
        >Delete</Button>
      )}
    </View>
    
  );
};