import { zodResolver } from "@hookform/resolvers/zod";
import { Stack, useRouter } from "expo-router";
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

import { Text } from "~/components/ui/text";

const formSchema = z.object({
    email: z.string().email({
        message: "Please enter a valid email address",
    }),
    password: z.string()
});

export default function UserAuthForm() {
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
        <View>
            <Form {...form}>
                <View className="gap-7">
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormInput
                                label="Name"
                                placeholder="Enter your email"
                                autoCapitalize="none"
                                {...field}
                            />
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="password"
                        render={({ field }) => (
                            <FormInput
                                label="Password"
                                placeholder="Enter your password"
                                secureTextEntry
                                {...field}
                            />
                        )}

                    />
                    <Button onPress={form.handleSubmit(onSubmit)}>
                        <Text>Submit</Text>
                    </Button>
                </View>
            </Form>
        </View>
    );
};

