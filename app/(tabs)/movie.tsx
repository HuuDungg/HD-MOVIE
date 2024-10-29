import Header from "@/components/common/header"
import { ScrollView } from "react-native-gesture-handler"
import { SafeAreaView } from "react-native-safe-area-context"
import { Text, View, YStack } from "tamagui"

const MovieTab = () => {
    return (
        <View>
            <Header
                headerName="Movie"
            />
            <ScrollView
                showsVerticalScrollIndicator={false}
            >

            </ScrollView >
        </View>
    )
}

export default MovieTab