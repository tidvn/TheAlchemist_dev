import { zodResolver } from "@hookform/resolvers/zod";
import { Stack, router, useRouter } from "expo-router";
import { Password } from "phosphor-react-native";
import * as React from "react";
import { useForm } from "react-hook-form";
import { Alert, ScrollView, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import * as z from "zod";
import { Button } from "~/components/ui/button";
import {
    Form,
    FormCheckbox,
    FormCombobox,
    FormField,
    FormInput,
    FormRadioGroup,
    FormSelect,
    FormSwitch,
    FormTextarea,
} from "~/components/ui/form";
import { Separator } from "~/components/ui/separator";

import { Text } from "~/components/ui/text";

const formSchema = z.object({
    email: z.string().email({
        message: "Please enter a valid email address",
    }),
    password: z.string()
});

export default function UserAuthForm(props: { className?: string }) {
    const insets = useSafeAreaInsets();
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    });

    const contentInsets = {
        top: insets.top,
        bottom: insets.bottom,
        left: 12,
        right: 12,
    };


    async function onSubmit(values: z.infer<typeof formSchema>) {
    }

    return (
        <View {...props}>
            <Form {...form}>
                <View className="grid gap-5">
                    <View className="grid gap-5">
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormInput
                                    className="w-full bg-gray-100 border-none rounded-lg px-4 py-2"
                                    label="Email"
                                    placeholder="Enter your email"
                                    autoCapitalize="none"
                                    {...field}
                                />
                            )}
                        />
                    </View>
                    <View className="grid gap-5">

                        <FormField

                            control={form.control}
                            name="password"
                            render={({ field }) => (
                                <FormInput
                                    className="w-full bg-gray-100 border-none rounded-lg px-4 py-2"
                                    label="Password"
                                    placeholder="Enter your password"
                                    secureTextEntry
                                    {...field}
                                />
                            )}

                        />
                        <View className="flex items-center">
                            <Text className="ml-auto inline-block text-sm underline text-gray-500">
                                Forgot password?
                            </Text>
                        </View>
                    </View>

                    <Button className="bg-blue-700 rounded-lg my-8" onPress={form.handleSubmit(onSubmit)}>
                        <Text>Sign In</Text>
                    </Button>

                    

                </View>
            </Form>
        </View>
    );
};

