import { useState, useEffect } from "react";
import { FlatList } from "react-native-gesture-handler";
import { Image, Text, View, XStack, YStack } from "tamagui";

interface IChanel {
    id: string;
    name: string;
    image: string;
}

const TopChanel = () => {
    const [data, setData] = useState<IChanel[]>([]);

    // Tạo dữ liệu fake
    useEffect(() => {
        const fakeData: IChanel[] = [
            { id: '1', name: 'Chanel One', image: 'https://i.pcmag.com/imagery/reviews/05cItXL96l4LE9n02WfDR0h-5.fit_scale.size_760x427.v1582751026.png' },
            { id: '2', name: 'Chanel Two', image: 'https://i.pcmag.com/imagery/reviews/05cItXL96l4LE9n02WfDR0h-5.fit_scale.size_760x427.v1582751026.png' },
            { id: '3', name: 'Chanel Three', image: 'https://i.pcmag.com/imagery/reviews/05cItXL96l4LE9n02WfDR0h-5.fit_scale.size_760x427.v1582751026.png' },
            { id: '4', name: 'Chanel Four', image: 'https://i.pcmag.com/imagery/reviews/05cItXL96l4LE9n02WfDR0h-5.fit_scale.size_760x427.v1582751026.png' },
            { id: '5', name: 'Chanel Five', image: 'https://i.pcmag.com/imagery/reviews/05cItXL96l4LE9n02WfDR0h-5.fit_scale.size_760x427.v1582751026.png' },
        ];
        https://i.pcmag.com/imagery/reviews/05cItXL96l4LE9n02WfDR0h-5.fit_scale.size_760x427.v1582751026.png
        setData(fakeData);
    }, []);

    return (
        <YStack
            marginHorizontal={20}
            gap={10}
        >
            <View>
                <Text style={{ fontSize: 20 }}>Top of Chanel</Text>
            </View>
            <View>
                <FlatList
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    data={data}
                    renderItem={({ item }) => (
                        <XStack style={{
                            borderWidth: 1,
                            marginHorizontal: 5,
                            width: 150,
                            height: 75,
                            borderRadius: 5,
                        }}>
                            <Image
                                source={{
                                    uri: item.image
                                }}
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    borderRadius: 5,
                                    overflow: 'hidden'
                                }}
                            />
                        </XStack>
                    )}
                    keyExtractor={item => item.id}
                />
            </View>
        </YStack>
    );
};

export default TopChanel;
