import { Text, View, XStack, YStack } from "tamagui"
import MovieCard from "../common/card.movie"
import { FlatList } from "react-native-gesture-handler"
import { useState } from "react"
import WishCard from "./wish.card"
interface IProps {
    dataList?: IMovieCard[]
}
const WishMovie = (props: IProps) => {
    const fakeMovieData: IMovieCard[] = [
        {
            id: '1',
            name: 'Spider-Man: No Way Home',
            date: '2021',
            image: 'https://m.media-amazon.com/images/M/MV5BMmFiZGZjMmEtMTA0Ni00MzA2LTljMTYtZGI2MGJmZWYzZTQ2XkEyXkFqcGc@._V1_.jpg',
            tag: Math.random() < 0.5 ? 'premium' : 'free'
        },
        {
            id: '2',
            name: 'Black Widow',
            date: '2021',
            image: 'https://static1.dienanh.net/upload/202205/fb6698d5-ec3e-438e-9571-f6cf644002b3.jpg',
            tag: Math.random() < 0.5 ? 'premium' : 'free'
        },
        {
            id: '3',
            name: 'Eternals',
            date: '2021',
            image: 'https://m.media-amazon.com/images/M/MV5BMjM2NTQ5Mzc2M15BMl5BanBnXkFtZTgwNTcxMDI2NTE@._V1_FMjpg_UX1000_.jpg',
            tag: Math.random() < 0.5 ? 'premium' : 'free'
        },
        {
            id: '4',
            name: 'Shang-Chi and the Legend of the Ten Rings',
            date: '2021',
            image: 'https://m.media-amazon.com/images/M/MV5BMmFiZGZjMmEtMTA0Ni00MzA2LTljMTYtZGI2MGJmZWYzZTQ2XkEyXkFqcGc@._V1_.jpg',
            tag: Math.random() < 0.5 ? 'premium' : 'free'
        },
        {
            id: '5',
            name: 'Avengers: Endgame',
            date: '2019',
            image: 'https://static1.dienanh.net/upload/202205/fb6698d5-ec3e-438e-9571-f6cf644002b3.jpg',
            tag: Math.random() < 0.5 ? 'premium' : 'free'
        },
        {
            id: '6',
            name: 'Spider-Man: Homecoming',
            date: '2017',
            image: 'https://m.media-amazon.com/images/M/MV5BMjM2NTQ5Mzc2M15BMl5BanBnXkFtZTgwNTcxMDI2NTE@._V1_FMjpg_UX1000_.jpg',
            tag: Math.random() < 0.5 ? 'premium' : 'free'
        },
        {
            id: '7',
            name: 'Doctor Strange',
            date: '2016',
            image: 'https://m.media-amazon.com/images/M/MV5BMmFiZGZjMmEtMTA0Ni00MzA2LTljMTYtZGI2MGJmZWYzZTQ2XkEyXkFqcGc@._V1_.jpg',
            tag: Math.random() < 0.5 ? 'premium' : 'free'
        },
        {
            id: '8',
            name: 'Thor: Ragnarok',
            date: '2017',
            image: 'https://static1.dienanh.net/upload/202205/fb6698d5-ec3e-438e-9571-f6cf644002b3.jpg',
            tag: Math.random() < 0.5 ? 'premium' : 'free'
        },
        {
            id: '9',
            name: 'Black Panther',
            date: '2018',
            image: 'https://m.media-amazon.com/images/M/MV5BMjM2NTQ5Mzc2M15BMl5BanBnXkFtZTgwNTcxMDI2NTE@._V1_FMjpg_UX1000_.jpg',
            tag: Math.random() < 0.5 ? 'premium' : 'free'
        },
        {
            id: '10',
            name: 'Captain Marvel',
            date: '2019',
            image: 'https://m.media-amazon.com/images/M/MV5BMmFiZGZjMmEtMTA0Ni00MzA2LTljMTYtZGI2MGJmZWYzZTQ2XkEyXkFqcGc@._V1_.jpg',
            tag: Math.random() < 0.5 ? 'premium' : 'free'
        },
        {
            id: '11',
            name: 'Ant-Man',
            date: '2015',
            image: 'https://static1.dienanh.net/upload/202205/fb6698d5-ec3e-438e-9571-f6cf644002b3.jpg',
            tag: Math.random() < 0.5 ? 'premium' : 'free'
        },
        {
            id: '12',
            name: 'Guardians of the Galaxy',
            date: '2014',
            image: 'https://m.media-amazon.com/images/M/MV5BMjM2NTQ5Mzc2M15BMl5BanBnXkFtZTgwNTcxMDI2NTE@._V1_FMjpg_UX1000_.jpg',
            tag: Math.random() < 0.5 ? 'premium' : 'free'
        },
        {
            id: '13',
            name: 'Iron Man',
            date: '2008',
            image: 'https://m.media-amazon.com/images/M/MV5BMmFiZGZjMmEtMTA0Ni00MzA2LTljMTYtZGI2MGJmZWYzZTQ2XkEyXkFqcGc@._V1_.jpg',
            tag: Math.random() < 0.5 ? 'premium' : 'free'
        },
        {
            id: '14',
            name: 'The Incredible Hulk',
            date: '2008',
            image: 'https://static1.dienanh.net/upload/202205/fb6698d5-ec3e-438e-9571-f6cf644002b3.jpg',
            tag: Math.random() < 0.5 ? 'premium' : 'free'
        },
        {
            id: '15',
            name: 'Thor',
            date: '2011',
            image: 'https://m.media-amazon.com/images/M/MV5BMjM2NTQ5Mzc2M15BMl5BanBnXkFtZTgwNTcxMDI2NTE@._V1_FMjpg_UX1000_.jpg',
            tag: Math.random() < 0.5 ? 'premium' : 'free'
        },
        {
            id: '16',
            name: 'Captain America: The First Avenger',
            date: '2011',
            image: 'https://m.media-amazon.com/images/M/MV5BMmFiZGZjMmEtMTA0Ni00MzA2LTljMTYtZGI2MGJmZWYzZTQ2XkEyXkFqcGc@._V1_.jpg',
            tag: Math.random() < 0.5 ? 'premium' : 'free'
        },
        {
            id: '17',
            name: 'Spider-Man: Far From Home',
            date: '2019',
            image: 'https://static1.dienanh.net/upload/202205/fb6698d5-ec3e-438e-9571-f6cf644002b3.jpg',
            tag: Math.random() < 0.5 ? 'premium' : 'free'
        },
        {
            id: '18',
            name: 'Avengers: Infinity War',
            date: '2018',
            image: 'https://m.media-amazon.com/images/M/MV5BMjM2NTQ5Mzc2M15BMl5BanBnXkFtZTgwNTcxMDI2NTE@._V1_FMjpg_UX1000_.jpg',
            tag: Math.random() < 0.5 ? 'premium' : 'free'
        },
        {
            id: '19',
            name: 'Thor: The Dark World',
            date: '2013',
            image: 'https://m.media-amazon.com/images/M/MV5BMmFiZGZjMmEtMTA0Ni00MzA2LTljMTYtZGI2MGJmZWYzZTQ2XkEyXkFqcGc@._V1_.jpg',
            tag: Math.random() < 0.5 ? 'premium' : 'free'
        },

    ];
    const { dataList = fakeMovieData } = props;
    return (
        <YStack
            marginHorizontal={5}
            gap={10}
        >
            <XStack
            >
                <FlatList
                    data={dataList}
                    renderItem={({ item }) => (
                        <WishCard
                            data={item}
                        />
                    )}
                    keyExtractor={(item) => item.id.toString()}
                    numColumns={3}
                    columnWrapperStyle={{ justifyContent: 'space-between', marginBottom: 10 }} // Chia đều các cột
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{ paddingBottom: 10 }} // Thêm khoảng cách bên dưới
                />
            </XStack>
        </YStack>
    )
}

export default WishMovie