import * as React from 'react';
import { Dimensions, Text, View } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import { Image } from 'tamagui';
const HomeCarousel = () => {
    const width = Dimensions.get('window').width;
    return (
        <View>
            <Carousel
                loop
                pagingEnabled={true}
                mode="parallax"
                modeConfig={{
                    parallaxScrollingScale: 0.9,
                    parallaxScrollingOffset: 50,
                }}
                snapEnabled={true}
                width={width}
                height={width / 2}
                autoPlay={true}
                data={[...new Array(6).keys()]}
                scrollAnimationDuration={1000}
                renderItem={({ index }) => (
                    <View
                        style={{
                            flex: 1,
                            justifyContent: 'center',
                            borderRadius: 5
                        }}
                    >

                        <Image
                            source={{
                                uri: 'https://free-3dtextureshd.com/wp-content/uploads/2024/05/199.jpg.webp',
                            }}
                            width={'100%'}
                            height={'100%'}
                            overflow='hidden'
                        />
                        <Text
                            style={{
                                color: 'white',
                                position: 'relative',
                                bottom: 31,
                                left: 10,
                                fontSize: 20
                            }}
                        >
                            Venom 3: Last Dance
                        </Text>
                    </View>
                )}
            />
        </View>
    );
}

export default HomeCarousel