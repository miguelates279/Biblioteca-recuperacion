import { StyleSheet, Text, View } from 'react-native';

export default function FavoritosScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Favoritos</Text>
      <Text>Aquí aparecerán tus libros favoritos.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    gap: 12,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
  },
});
