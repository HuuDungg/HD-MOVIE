import { Text, View, XStack } from "tamagui";
import AntDesign from '@expo/vector-icons/AntDesign';
import { useState } from "react";
interface IProps {
    headerName?: string
}

const Header = (props: IProps,) => {
    const { headerName = 'default' } = props;
    return (
        <XStack
            alignItems="center"
            style={{
                backgroundColor: '#03396c',
                height: 100,
                justifyContent: 'center',
            }}
        >
            <View
                style={{
                    position: 'relative',
                    top: 22,
                    right: 120
                }}
                onPress={() => {
                }}
            >
                <AntDesign name="menufold" size={24} color="white" />
            </View>
            <View
                style={{
                    position: 'relative',
                    top: 22
                }}
            >
                <Text
                    style={{
                        fontSize: 25,
                        color: 'white',
                    }}
                >
                    {headerName}
                </Text>
            </View>
            <View
                style={{
                    position: 'relative',
                    top: 22,
                    left: 120
                }}
            >
                <AntDesign name="search1" size={24} color="white" />
            </View>
        </XStack>
    )
}

export default Header