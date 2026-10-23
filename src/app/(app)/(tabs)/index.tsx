import { router } from 'expo-router';
import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native';

import { LIBROS } from '@/data/libros';

export default function InicioScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Libros disponibles</Text>
      <FlatList
        data={LIBROS}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
        renderItem={({ item }) => (
          <Pressable
            style={styles.row}
            onPress={() =>
              router.push({
                pathname: '/libro/[id]',
                params: { id: item.id },
              })
            }
          >
            <Text style={styles.bookTitle}>{item.titulo}</Text>
            <Text style={styles.author}>{item.autor}</Text>
          </Pressable>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8fafc',
    padding: 18,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 14,
  },
  list: {
    gap: 12,
  },
  row: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 16,
    borderWidth: 1,
    borderColor: '#cbd5e1',
  },
  bookTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  author: {
    color: '#475569',
    marginTop: 4,
  },
});
