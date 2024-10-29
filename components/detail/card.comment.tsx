import React from 'react';
import { Image, Text } from 'tamagui';
import { YStack, XStack } from 'tamagui';

interface IProp {
    avatarUrl?: string,
    username?: string,
    content?: string
}

const Comment = (props: IProp) => {
    const {
        avatarUrl = 'https://www.rollingstone.com/wp-content/uploads/2018/10/venom-history-of.jpg?w=1581&h=1054&crop=1',
        username = 'User',
        content = 'lew lew lew'
    } = props;

    return (
        <YStack
            padding={10}
            marginVertical={5}
            backgroundColor="#f0f0f0"
            borderRadius={8}
            borderColor="#ddd"
            borderWidth={1}
            marginRight={20}
        >
            <XStack>
                <Image
                    source={{ uri: avatarUrl }}
                    style={{
                        width: 40,
                        height: 40,
                        borderRadius: 20,
                        marginRight: 10,
                        overflow: 'hidden'  // Ẩn overflow
                    }}
                />
                <YStack>
                    <Text
                        fontWeight="bold"
                        color="#333"
                    >
                        {username}
                    </Text>
                    <Text
                        style={{
                            width: 300
                        }}
                        color="#555">
                        {content}
                    </Text>
                </YStack>
            </XStack>
        </YStack>
    );
};

export default Comment;
