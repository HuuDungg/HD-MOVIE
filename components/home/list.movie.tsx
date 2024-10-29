import { Text, View, XStack, YStack } from "tamagui"
import MovieCard from "../common/card.movie"
import { FlatList } from "react-native-gesture-handler"
import { useState } from "react"
interface IProps {
    title: string,
    dataList: IMovieCard[]
}
const ListMovie = (props: IProps) => {
    const { title, dataList } = props;
    return (
        <YStack
            marginHorizontal={5}
            gap={10}
        >
            <XStack>
                <Text style={{ fontSize: 20 }}>{title}</Text>
            </XStack>
            <XStack
            >
                <FlatList
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    data={dataList}
                    style={{
                        marginHorizontal: 1,
                    }}
                    renderItem={({ item }) => {
                        return (
                            <MovieCard
                                data={item}
                            />
                        )
                    }}
                    keyExtractor={item => item.id}
                />
            </XStack>
        </YStack>
    )
}

export default ListMovie