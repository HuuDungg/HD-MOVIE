import { Text, View, XStack } from "tamagui";
import AntDesign from '@expo/vector-icons/AntDesign';
import { useState } from "react";
interface IProps {
    headerName?: string
}

const Header = (props: IProps) => {
    const { headerName = 'default' } = props;
    return (
        <XStack
            alignItems="center"
            justifyContent="space-between" // Chia đều khoảng cách giữa các phần tử
            px="$4" // Padding cho hai bên
            style={{
                backgroundColor: '#03396c',
                height: 100,
            }}
        >
            {/* Menu Icon */}
            <View
                style={{
                    position: 'relative',
                    top: 22
                }}
                onPress={() => {
                }}
            >
                <AntDesign name="menufold" size={24} color="white" />
            </View>

            {/* Header Text */}
            <View
                style={{
                    position: 'relative',
                    top: 22,
                    flex: 1, // Chiếm hết không gian ở giữa để text nằm giữa
                    alignItems: 'center',
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

            {/* Search Icon */}
            <View
                style={{
                    position: 'relative',
                    top: 22
                }}
                onPress={() => {
                }}
            >
                <AntDesign name="search1" size={24} color="white" />
            </View>
        </XStack>
    );
}

export default Header;
