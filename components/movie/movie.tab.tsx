import { H5, Separator, SizableText, Tabs } from "tamagui"
import type { TabsContentProps } from 'tamagui'
import WishMovie from "../wishlist/wish.movie"
const TabMovies = () => {
    return (
        <Tabs
            defaultValue="tab1"
            flexDirection="column"
            height={680}
            overflow="hidden"
            borderColor="$borderColor"
        >
            {/* list tab */}
            <Tabs.List
                disablePassBorderRadius="bottom"
                aria-label="Manage your account"
            >
                <Tabs.Tab flex={1} value="tab1">
                    <SizableText fontFamily="$body">Anime</SizableText>
                </Tabs.Tab>
                <Tabs.Tab flex={1} value="tab2">
                    <SizableText fontFamily="$body">Mavel</SizableText>
                </Tabs.Tab>
                <Tabs.Tab flex={1} value="tab3">
                    <SizableText fontFamily="$body">DC</SizableText>
                </Tabs.Tab>
            </Tabs.List>

            {/* spacing */}
            <Separator />

            {/* tabs content */}
            <TabsContent value="tab1">
                <WishMovie
                />
            </TabsContent>

            <TabsContent value="tab2">
                <WishMovie
                />
            </TabsContent>

            <TabsContent value="tab3">
                <WishMovie
                />
            </TabsContent>
        </Tabs>
    )
}

const TabsContent = (props: TabsContentProps) => {
    return (
        <Tabs.Content
            backgroundColor="$background"
            key="tab3"
            alignItems="center"
            justifyContent="center"
            flex={1}
            borderColor="$background"
            borderTopLeftRadius={0}
            borderTopRightRadius={0}
            {...props}
            height={'auto'}
        >
            {props.children}
        </Tabs.Content>
    )
}

export default TabMovies