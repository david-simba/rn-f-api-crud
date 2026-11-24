import { Pressable, Text } from "react-native";
import { useLocalSearchParams, router } from "expo-router";

export default function ProductDetail() {
  const { id } = useLocalSearchParams<{id: string}>()
  return (
    <>
      <Text>Product {id}</Text>
      <Pressable
        onPress={() => router.push("/")}
      >
        <Text>Regresar</Text>
      </Pressable>
    </>
  )
}