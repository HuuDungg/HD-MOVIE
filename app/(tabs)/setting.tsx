import React from "react";
import { ScrollView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import { Text, View, YStack, XStack, Input, Button, Image } from "tamagui";
import Header from "@/components/common/header";

const Settingtab = () => {
    return (
        <YStack
            gap={20}
        >
            <Header headerName="Setting" />
            {/* Avatar Section */}
            <YStack alignItems="center" mt="$4">
                <View
                    width={100}
                    height={100}
                    borderRadius={50}
                    overflow="hidden"
                    borderColor="#03396c"
                    borderWidth={2}
                    mb="$4"
                >
                    <Image
                        source={{ uri: "https://via.placeholder.com/100" }} // Ảnh mặc định
                        width="100%"
                        height="100%"
                        resizeMode="cover"
                    />
                </View>
                <View>
                    {/* Upgrade Button */}
                    <Button
                        backgroundColor="#03396c"
                        color="white"
                        borderRadius="$4"
                        px="$4"
                    >
                        Upgrade
                    </Button>
                </View>
            </YStack>

            {/* Input Fields */}
            <YStack px="$4" space="$4">
                {/* Name Input */}
                <Input
                    placeholder="Name"
                    borderColor="#03396c"
                    borderWidth={1}
                    borderRadius="$4"
                    px="$4"
                    editable={false}
                />
                {/* Email Input */}
                <Input
                    placeholder="Email"
                    keyboardType="email-address"
                    borderColor="#03396c"
                    borderWidth={1}
                    borderRadius="$4"
                    px="$4"
                    editable={false}
                />
                {/* Subscription (Disabled) */}
                <Input
                    placeholder="Subscription Plan"
                    value="Basic Plan" // Gói đăng ký mặc định
                    editable={false}
                    borderColor="#03396c"
                    borderWidth={1}
                    borderRadius="$4"
                    px="$4"
                    color="gray"
                />
            </YStack>

            {/* Buttons */}
            <YStack px="$4" space="$4" mt="$6">
                {/* Save Button */}
                <Button
                    backgroundColor="#03396c"
                    color="white"
                    borderRadius="$4"
                    px="$4"
                >
                    Save
                </Button>

                {/* Forget Password Button */}
                <Button
                    backgroundColor="#03396c"
                    color="white"
                    borderRadius="$4"
                    px="$4"
                >
                    Forget Password
                </Button>


            </YStack>
        </YStack>
    );
};

export default Settingtab;
