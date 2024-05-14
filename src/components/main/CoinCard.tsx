import React from "react";
import { View} from "react-native";
import { Text } from "~/components/ui/text";

const CoinCard = () => {
  return (
    <View className="w-[375px] h-12 relative">
  <View className="left-[16px] top-[5px] absolute justify-start items-center gap-2 inline-flex">
    <Text className="w-6 text-center text-zinc-500 text-sm font-medium font-['Poppins'] leading-tight">5</Text>
    <View className="justify-start items-center gap-2 flex">
      <View className="w-5 h-5 justify-center items-center flex">
        <View className="w-5 h-5 relative">
        </View>
      </View>
      <View className="flex-col justify-center items-start inline-flex">
        <Text className="text-slate-900 text-sm font-semibold font-['Poppins'] leading-tight">Bitcoin</Text>
        <Text className="text-zinc-500 text-xs font-medium font-['Poppins'] leading-[18px]">537,79 B</Text>
      </View>
    </View>
  </View>
  <Text className="w-[89px] left-[174px] top-[14px] absolute text-right text-slate-900 text-sm font-semibold font-['Poppins'] leading-tight">27.610,42</Text>
  <View className="px-2 py-1 left-[285px] top-[10px] absolute bg-red-200 rounded justify-center items-center gap-1 inline-flex">
    <View className="w-4 h-4 justify-center items-center flex">
      <View className="w-4 h-4 relative">
      </View>
    </View>
    <Text className="text-right text-red-700 text-sm font-medium font-['Poppins'] leading-tight">1,69%</Text>
  </View>
</View>
  );
};



export default CoinCard;
