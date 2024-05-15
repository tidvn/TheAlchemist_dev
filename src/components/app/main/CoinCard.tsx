import { FlashList } from "@shopify/flash-list";
import React from "react";
import { View, Image } from "react-native";
import { Text } from "~/components/ui/text";

const CoinCard = (props: any) => {
  const { item } = props
  return (

    <View className="flex-row items-center justify-between p-4 border-b border-gray-200 cursor-pointer">
      <Text className="text-lg font-bold">{item.number}</Text>
      <View className="flex-1 ml-4 flex-row items-center">
        <Image source={{ uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Bitcoin.svg/800px-Bitcoin.svg.png" }} className="w-10 h-10 mr-4" />
        <View>
          <Text className="text-base font-semibold">{item.name}</Text>
          <Text className="text-sm text-gray-500">{item.volume}</Text>
        </View>
      </View>
      <View className="items-end">
        <Text className="text-base font-semibold">{item.price}</Text>
        <Text className={`text-sm font-semibold text-green-500`}>
          10%
        </Text>
      </View>
    </View>
  );
};



export default CoinCard;
