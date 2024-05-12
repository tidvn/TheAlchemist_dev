import { router } from "expo-router";
import { View } from "react-native";
import UserAuthForm from "~/components/app/auth/user-auth-form";
import FeedHeader from "~/components/common/FeedHeader";
import { Card, CardContent } from "~/components/ui/card";
import { Separator } from "~/components/ui/separator";
import { Text } from "~/components/ui/text";

export default function SignUpScreen() {


    return (
        <View className='flex-1  p-6'>
            <FeedHeader />
            <Text className='text-start text-4xl font-semibold py-6'>Sign Up</Text>
            <View className=''>
                <UserAuthForm className="w-full" />
                <View className="flex items-center mt-4">
                    <Text onPress={() => router.replace("/auth/signin")} className="text-gray-500">Already have an account?<Text className="text-blue-700 font-bold underline"> Sign In</Text>
                    </Text>
                </View>

                <View className="flex-row items-center my-8" >
                    <Separator style={{ flex: 1 }} className="flex-auto mx-4" />
                    <Text>Or</Text>
                    <Separator style={{ flex: 1 }} className="lex-auto mx-4" />
                </View>

                <View className="flex items-center mt-4">
                    <Text className="text-gray-500">
                        Continue with another account
                    </Text>
                    <View className="flex-row gap-4 mt-4">
                        <Card className="w-20 h-20 rounded-full ">
                            <CardContent>
                                <View className="flex items-center justify-center h-full">
                                    <Text className="text-2xl">G</Text>
                                </View>
                            </CardContent>
                        </Card>
                        <Card className="w-20 h-20 rounded-full">
                            <CardContent>
                                <View className="flex items-center justify-center h-full">
                                    <Text className="text-2xl">F</Text>
                                </View>
                            </CardContent>
                        </Card>
                        <Card className="w-20 h-20 rounded-full">
                            <CardContent>
                                <View className="flex items-center justify-center h-full">
                                    <Text className="text-2xl">T</Text>
                                </View>
                            </CardContent>
                        </Card>
                        </View>
                </View>
            </View>
        </View>
    );
};


