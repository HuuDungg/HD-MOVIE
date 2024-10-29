import { router } from "expo-router";
import { useEffect } from "react";
import { Pressable } from "react-native";
import { Image, Text, View, XStack, YStack } from "tamagui"
interface IProps {
    data: IMovieCard
}
const WishCard = (props: IProps) => {
    const { data } = props;
    useEffect(() => {
    }, [])
    return (
        <Pressable
            onPress={() => {
                router.push(`/detail/${data.id}`)
            }}
        >
            <YStack
                style={{
                    height: 250,
                    width: 120,
                    borderColor: 'gray',
                    borderWidth: 1,
                    borderRadius: 5,
                    marginHorizontal: 2
                }}
            >
                <View>
                    <Image
                        source={{
                            uri: data?.image
                        }}
                        style={{
                            width: '100%',
                            height: 200,
                            MozBorderRadiusTopleft: 5,
                            MozBorderRadiusTopright: 5,
                            overflow: 'hidden'
                        }}
                    />
                </View>
                <View style={{ padding: 5 }}>
                    <Text numberOfLines={1} ellipsizeMode="tail">
                        {data?.name}
                    </Text>
                </View>
                <XStack
                    justifyContent="space-between"
                    marginHorizontal={3}
                >
                    <Text>{data?.tag}</Text>
                    <Text>{data?.date}</Text>
                </XStack>
            </YStack >
        </Pressable>
    )
}

export default WishCard