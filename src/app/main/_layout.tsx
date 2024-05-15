import React from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';
import FeedHeader from '~/components/common/FeedHeader';

export default function TabLayout() {
    return (
        <Tabs
            initialRouteName="home"
            screenOptions={{ tabBarActiveTintColor: 'blue' }}>
            <Tabs.Screen
                name="home"
                options={{
                    header: (props) => <FeedHeader {...props} />,
                    title: 'Home',
                    tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color} />,
                }}
            />
            <Tabs.Screen
                name="confluence_trade"
                options={{
                    headerShown: false,
                    title: 'Confluence Trade',
                    tabBarIcon: ({ color }) => <FontAwesome size={28} name="cog" color={color} />,
                }}
            />
            <Tabs.Screen
                name="chart_patterns"
                options={{
                    headerShown: false,
                    title: 'Chart Patterns',
                    tabBarIcon: ({ color }) => <FontAwesome size={28} name="bar-chart" color={color} />,
                }}
            />
            <Tabs.Screen
                name="ai_predictions"
                options={{
                    headerShown: false,
                    title: 'Ai Predictions',
                    tabBarIcon: ({ color }) => <FontAwesome size={28} name="viacoin" color={color} />,
                }}
            />
        </Tabs>
    );
}
