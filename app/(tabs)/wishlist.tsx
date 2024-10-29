import Header from "@/components/common/header"
import WishMovie from "@/components/wishlist/wish.movie"
import { ScrollView } from "react-native-gesture-handler"
import { SafeAreaView } from "react-native-safe-area-context"
import { Text, View, YStack } from "tamagui"

const Wishlist = () => {
    return (
        <View>
            <Header
                headerName="Wish list"
            />
            <View
                style={{
                    marginTop: 20,
                    marginBottom: 200
                }}
            >
                <WishMovie
                />
            </View>
        </View>
    )
}

export default Wishlist