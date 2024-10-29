import { Stack } from "expo-router";
import { TamaguiProvider, createTamagui } from '@tamagui/core'
import { config } from '@tamagui/config/v3'
import { GestureHandlerRootView, NativeViewGestureHandler } from "react-native-gesture-handler";

// you usually export this from a tamagui.config.ts file
const tamaguiConfig = createTamagui(config)

// TypeScript types across all Tamagui APIs
type Conf = typeof tamaguiConfig
declare module '@tamagui/core' {
  interface TamaguiCustomConfig extends Conf { }
}
export default function RootLayout() {
  return (
    <GestureHandlerRootView>
      <TamaguiProvider config={tamaguiConfig}>
        <Stack>
          <Stack.Screen
            name="(tabs)"
            options={{
              headerShown: false
            }}
          />
          <Stack.Screen
            name="detail/[id]"
            options={{
              headerShown: false
            }}
          />
        </Stack>

      </TamaguiProvider>
    </GestureHandlerRootView>
  );
}
