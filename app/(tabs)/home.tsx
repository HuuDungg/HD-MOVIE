import Header from "@/components/common/header"
import HomeCarousel from "@/components/home/carousel"
import ListMovie from "@/components/home/list.movie"
import TopChanel from "@/components/home/top.chanel"
import { useEffect } from "react"
import { SafeAreaView } from "react-native-safe-area-context"
import { ScrollView, Text, View, XStack, YStack } from "tamagui"

const HomeTab = () => {
    useEffect(() => {
    }, [])

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
        {
            id: '20',
            name: 'Ant-Man and The Wasp',
            date: '2018',
            image: 'https://static1.dienanh.net/upload/202205/fb6698d5-ec3e-438e-9571-f6cf644002b3.jpg',
            tag: Math.random() < 0.5 ? 'premium' : 'free'
        },
    ];

    return (
        <View>
            <Header
                headerName="Home"
            />
            <ScrollView
                showsVerticalScrollIndicator={false}
            >
                <YStack>
                    <View
                        gap={10}
                    >
                        <View style={{
                            height: 200,
                            justifyContent: "center",
                            alignItems: 'center'
                        }}>
                            <HomeCarousel />
                        </View>
                        <View>
                            <TopChanel />
                        </View>
                        <View
                            gap={10}
                            style={{
                                paddingBottom: 130
                            }}
                        >
                            <ListMovie
                                dataList={fakeMovieData}
                                title="New Movie"
                            />
                            <ListMovie
                                dataList={fakeMovieData}
                                title="Hot Movie"
                            />
                            <ListMovie
                                dataList={fakeMovieData}
                                title="Top Movie"
                            />
                        </View>
                    </View>
                </YStack>
            </ScrollView >
        </View>
    )
}

export default HomeTab