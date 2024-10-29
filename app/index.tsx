import MovieCard from "@/components/common/card.movie";
import { Link } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button, Text, XStack, YStack, ZStack } from "tamagui";

export default function Index() {
  return (
    <YStack
      flex={1}
      padding={2}
      gap={10}
      justifyContent="center"
      alignItems="center"
    >
      <Text>this is home screen</Text>
      <Link href={"/(tabs)/home"}>go to home</Link>
    </YStack>
  );
}
