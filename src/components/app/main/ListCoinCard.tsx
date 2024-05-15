import { FlashList } from "@shopify/flash-list";
import React from "react";
import CoinCard from "./CoinCard";
import { Dimensions, ScrollView, View } from "react-native";

const ListCoinCard = (props: any) => {
    const data = [
        {
            number: "1",
            name: "Bitcoin",
            volume: "$1000",
            price: "$1000"
        },
        {
            number: "2",
            name: "Ethereum",
            volume: "$1000",
            price: "$1000"
        },
        {
            number: "3",
            name: "Litecoin",
            volume: "$1000",
            price: "$1000"
        },
        {
            number: "4",
            name: "Litecoin",
            volume: "$1000",
            price: "$1000"
        },
        {
            number: "5",
            name: "Litecoin",
            volume: "$1000",
            price: "$1000"
        },
        {
            number: "6",
            name: "Litecoin",
            volume: "$1000",
            price: "$1000"
        },
        {
            number: "7",
            name: "Litecoin",
            volume: "$1000",
            price: "$1000"
        },
        {
            number: "8",
            name: "Litecoin",
            volume: "$1000",
            price: "$1000"
        },
        {
            number: "9",
            name: "Litecoin",
            volume: "$1000",
            price: "$1000"
        },
        {
            number: "10",
            name: "Litecoin",
            volume: "$1000",
            price: "$1000"
        }
    ]
    return (
        <ScrollView horizontal bounces={false} showsHorizontalScrollIndicator={false}>
            <View style={{ height: 600, width: Dimensions.get("screen").width  }}>
                <FlashList
                    data={data}
                    estimatedItemSize={45}
                    showsVerticalScrollIndicator={false}
                    
                    renderItem={({ item }) => {
                        return (<CoinCard item={item} />);
                    }}
                />
            </View>
        </ScrollView >
    );
};



export default ListCoinCard;
