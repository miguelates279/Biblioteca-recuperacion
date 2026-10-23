import { StyleSheet, Text, View } from 'react-native';

export default function AjustesScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ajustes</Text>
      <Text>Configura aquí tus preferencias.</Text>
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
