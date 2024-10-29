import { H5, Separator, SizableText, Tabs } from "tamagui"
import type { TabsContentProps } from 'tamagui'
const TabMovies = () => {
    return (
        <Tabs
            defaultValue="tab1"
            orientation="horizontal"
            flexDirection="column"
            width={400}
            height={150}
            borderRadius="$4"
            borderWidth="$0.25"
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
                <H5>Profile</H5>
            </TabsContent>

            <TabsContent value="tab2">
                <H5>Connections</H5>
            </TabsContent>

            <TabsContent value="tab3">
                <H5>Notifications</H5>
            </TabsContent>
        </Tabs>
    )
}

const TabsContent = (props: TabsContentProps) => {
    return (
        <Tabs.Content
            backgroundColor="$background"
            key="tab3"
            padding="$2"
            alignItems="center"
            justifyContent="center"
            flex={1}
            borderColor="$background"
            borderRadius="$2"
            borderTopLeftRadius={0}
            borderTopRightRadius={0}
            borderWidth="$2"
            {...props}
        >
            {props.children}
        </Tabs.Content>
    )
}

export default TabMovies