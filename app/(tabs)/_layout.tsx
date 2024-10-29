import { FontAwesome } from "@expo/vector-icons"
import { Tabs } from "expo-router"
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import AntDesign from '@expo/vector-icons/AntDesign';
const TabsLayout = () => {
    return (
        <Tabs
            screenOptions={{
                headerShown: false
            }}
        >
            <Tabs.Screen name="home"
                options={{
                    tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color} />,
                }}
            />
            <Tabs.Screen name="movie"
                options={{
                    tabBarIcon: ({ color }) => <MaterialIcons name="movie" size={28} color={color} />
                }}
            />
            <Tabs.Screen name="wishlist"
                options={{
                    tabBarIcon: ({ color }) => <FontAwesome6 name="heart-pulse" size={28} color={color} />
                }}
            />
            <Tabs.Screen name="setting"
                options={{
                    tabBarIcon: ({ color }) => <AntDesign name="setting" size={28} color={color} />
                }}
            />
        </Tabs>
    )
}

export default TabsLayout