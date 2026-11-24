import { View, Text, Image, StyleSheet, Pressable } from "react-native"
import { Link, router } from "expo-router"
import { useProduct } from "./useProducts"

export const ProductPage = () => {
  const { products, currentProduct, setCurrentProduct, saveProduct, deleteProduct  } = useProduct()  

  return (
    <View style={styles.container}>
      {products.map((product => 
        <View key={product.id} style={styles.card}>
          <Image
            source={{uri: product.image}}
            style={{ width: 120, height: 120 }}
            resizeMode="cover"
          />
          <Text>{product.name}</Text>
          <Text>{product.price}</Text>
          <Pressable
            onPress={() => router.push(`/product/${product.id}`)}
          >
            <Text>Ver el Producto</Text>
          </Pressable>
          <Pressable
            onPress={() => deleteProduct(product.id)}
          >
            <Text>Eliminar</Text>
          </Pressable>
        </View>
      ))}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 20
  },
  card: {
    width: 120
  }
})