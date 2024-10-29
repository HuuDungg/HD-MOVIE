import Header from "@/components/common/header"
import TabMovies from "@/components/movie/movie.tab"
import { ScrollView } from "react-native-gesture-handler"
import { SafeAreaView } from "react-native-safe-area-context"
import { Text, View, YStack } from "tamagui"

const MovieTab = () => {
    return (
        <View>
            <Header
                headerName="Movie"
            />
            <View
                style={{
                    marginBottom: 2400
                }}
            >
                <TabMovies />
            </View>
        </View>
    )
}

export default MovieTab