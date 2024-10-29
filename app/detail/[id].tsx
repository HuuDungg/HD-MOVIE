import Comment from "@/components/detail/card.comment";
import HeaderDetail from "@/components/detail/detail.header";
import InputComment from "@/components/detail/input.comment";
import ListMovie from "@/components/home/list.movie";
import { useLocalSearchParams } from "expo-router";
import { ImageBackground, View, StyleSheet } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { Button, H2, H3, H4, H5, H6, Image, Input, ScrollView, Text, XStack, YStack } from "tamagui";

const DetailMovie = () => {
    const { id } = useLocalSearchParams();
    const backgroundImage = { uri: 'https://deadline.com/wp-content/uploads/2021/11/spidermannowayhomeposter.jpg' };
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

    const fakeComments = [
        {
            id: '1',
            avatarUrl: 'https://www.rollingstone.com/wp-content/uploads/2018/10/venom-history-of.jpg?w=1581&h=1054&crop=1',
            username: 'User1',
            content: 'Comment content 1',
        },
        {
            id: '2',
            avatarUrl: 'https://www.rollingstone.com/wp-content/uploads/2018/10/venom-history-of.jpg?w=1581&h=1054&crop=1',
            username: 'User2',
            content: 'Comment content 2',
        },
        {
            id: '3',
            avatarUrl: 'https://www.rollingstone.com/wp-content/uploads/2018/10/venom-history-of.jpg?w=1581&h=1054&crop=1',
            username: 'User3',
            content: 'Comment content 3',
        },
        {
            id: '4',
            avatarUrl: 'https://www.rollingstone.com/wp-content/uploads/2018/10/venom-history-of.jpg?w=1581&h=1054&crop=1',
            username: 'User4',
            content: 'Comment content 4',
        },
        {
            id: '5',
            avatarUrl: 'https://www.rollingstone.com/wp-content/uploads/2018/10/venom-history-of.jpg?w=1581&h=1054&crop=1',
            username: 'User5',
            content: 'Comment content 5',
        },
        {
            id: '6',
            avatarUrl: 'https://www.rollingstone.com/wp-content/uploads/2018/10/venom-history-of.jpg?w=1581&h=1054&crop=1',
            username: 'User6',
            content: 'Comment content 6',
        },
    ];
    return (

        <ScrollView
            showsVerticalScrollIndicator={false}
            stickyHeaderIndices={[0]}
            style={{
                position: 'relative'
            }}
        >
            <YStack
                style={{
                    position: 'absolute',
                    top: 0
                }}
            >
                <HeaderDetail />
            </YStack>
            <YStack
                gap={20}
            >
                {/* baner movie */}
                <XStack width={'100%'} height={330} alignItems="center">
                    <ImageBackground
                        source={backgroundImage}
                        style={{
                            flex: 1,
                            width: '100%',
                            height: '100%',
                            overflow: 'hidden',
                        }}
                    >
                        <View style={styles.overlay} />

                        <XStack zIndex={3} marginHorizontal={10} justifyContent="center" alignItems="center">
                            <YStack style={{ marginTop: 100 }}>
                                <Image
                                    source={{
                                        uri: 'https://play-lh.googleusercontent.com/Odv1QnJMznTD_SRuatFVgE6b2Lgt_BGb8TUBMjsNl-gJi3bnxLXgnusGXWHkFGihsJdTde9ucIhNwMPHbkAF'
                                    }}
                                    style={{
                                        height: 200,
                                        width: 140,
                                        borderRadius: 5,
                                        overflow: 'hidden',
                                    }}
                                />
                            </YStack>
                            <YStack
                                marginHorizontal={10}
                                width={'60%'}
                                style={{
                                    flexDirection: 'column',
                                    alignSelf: 'flex-end'
                                }}
                            >
                                <H3 style={{ color: 'white' }}>
                                    Spider man: No way home
                                </H3>
                                <H4 style={{ color: 'white' }}>
                                    run and run
                                </H4>
                                <Button style={{ backgroundColor: '#03396c', color: 'white' }}>
                                    Watch now
                                </Button>
                            </YStack>
                        </XStack>
                    </ImageBackground>
                </XStack>

                {/* description movie */}
                <YStack
                    width={'100%'}
                    style={{
                        height: 'auto'
                    }}
                    gap={10}
                    margin={10}
                >
                    {/* text of Description */}
                    <Text
                        fontSize={15}
                        style={{
                            fontWeight: 'bold'
                        }}
                    >
                        Description:
                    </Text>
                    <H6>
                        Spider-Man: No Way Home is a 2021 American superhero film based on the Marvel Comics character Spider-Man, co-produced by Columbia Pictures and Marvel Studios, and distributed by Sony Pictures Releasing
                    </H6>

                    {/* text of Release */}
                    <Text
                        fontSize={15}
                        style={{
                            fontWeight: 'bold'
                        }}
                    >
                        Release:
                    </Text>
                    <H6>
                        2021
                    </H6>

                    {/* text of genra */}
                    <Text
                        fontSize={15}
                        style={{
                            fontWeight: 'bold'
                        }}
                    >
                        Genre:
                    </Text>
                    <H6>
                        Sicent
                    </H6>

                    {/* text of Cast */}
                    <Text
                        fontSize={15}
                        style={{
                            fontWeight: 'bold'
                        }}
                    >
                        Cast:
                    </Text>
                    <H6>
                        Tom Haland, Marry jane
                    </H6>
                </YStack>

                {/* related movie */}
                <YStack width={'100%'} height={300}>
                    <ListMovie
                        dataList={fakeMovieData}
                        title="Related Movie"
                    />
                </YStack>


                {/* comment */}
                <YStack
                    width={'100%'}
                    marginHorizontal={10}
                    gap={10}
                    marginBottom={40}
                    style={{
                        height: 'auto'
                    }}
                >
                    <H4>Comment</H4>
                    <InputComment size="$3" />
                    {/* <FlatList
                        data={fakeComments}
                        renderItem={({ item }) => (
                            <Comment
                                avatarUrl={item.avatarUrl}
                                username={item.username}
                                content={item.content}
                            />
                        )}
                        keyExtractor={item => item.id}
                    /> */}
                    <Comment />
                    <Comment />
                    <Comment />
                </YStack>
            </YStack>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    overlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
        zIndex: 1,
    },
});

export default DetailMovie;
