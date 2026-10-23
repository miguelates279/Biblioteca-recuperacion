import { router } from 'expo-router';
import { Pressable, StyleSheet, Text, View } from 'react-native';

export default function AcercaScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Biblioteca</Text>
      <Text style={styles.text}>
        Aplicación de práctica para aprender navegación con Expo Router.
      </Text>
      <Pressable style={styles.button} onPress={() => router.back()}>
        <Text style={styles.buttonText}>Cerrar</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    gap: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  text: {
    fontSize: 17,
    lineHeight: 24,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#2563eb',
    borderRadius: 10,
    padding: 14,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
