import { Stack, useLocalSearchParams } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

import { LIBROS } from '@/data/libros';

export default function LibroDetalleScreen() {
  const { id } = useLocalSearchParams<{ id: string | string[] }>();
  const bookId = Array.isArray(id) ? id[0] : id;
  const libro = LIBROS.find((item) => item.id === bookId);

  if (!libro) {
    return (
      <View style={styles.container}>
        <Stack.Screen options={{ title: 'Detalle' }} />
        <Text style={styles.title}>Libro no encontrado</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: libro.titulo }} />
      <Text style={styles.title}>{libro.titulo}</Text>
      <Text style={styles.label}>Autor</Text>
      <Text style={styles.value}>{libro.autor}</Text>
      <Text style={styles.label}>Año</Text>
      <Text style={styles.value}>{libro.anio}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: 'white',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 28,
  },
  label: {
    color: '#64748b',
    fontSize: 15,
    marginTop: 14,
  },
  value: {
    fontSize: 19,
    marginTop: 4,
  },
});
