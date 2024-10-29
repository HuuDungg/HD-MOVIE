import { XStack } from "tamagui"
import Ionicons from '@expo/vector-icons/Ionicons';
import AntDesign from '@expo/vector-icons/AntDesign';
import Feather from '@expo/vector-icons/Feather';
import { router } from "expo-router";
import { useNavigation } from '@react-navigation/native';
const HeaderDetail = () => {
    const navigation = useNavigation();
    return (
        <XStack
            justifyContent="space-between"
            style={{
                flex: 1,
                width: '100%',
                height: 80,
                backgroundColor: '#03396c',
                zIndex: 100,
                paddingTop: 35
            }}
        >
            <XStack
                alignItems="center"
                marginLeft={20}
            >
                <Ionicons onPress={() => {
                    navigation.goBack();
                }} name="chevron-back-outline" size={24} color="white" />
            </XStack>
            <XStack
                alignItems="center"
                gap={20}
                marginRight={20}
            >
                <AntDesign name="warning" size={24} color="white" />
                <Feather name="heart" size={24} color="white" />
                <AntDesign name="sharealt" size={24} color="white" />
            </XStack>
        </XStack>
    )
}
export default HeaderDetail