import { router } from 'expo-router';
import { Pressable, StyleSheet, Text, View } from 'react-native';

export default function LoginScreen() {
  return (
    <View style={styles.card}>
      <Text style={styles.subtitle}>Ingresa para consultar la biblioteca</Text>
      <Pressable style={styles.button} onPress={() => router.replace('/')}>
        <Text style={styles.buttonText}>Entrar</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    borderRadius: 16,
    padding: 24,
    gap: 20,
  },
  subtitle: {
    fontSize: 18,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#2563eb',
    borderRadius: 10,
    padding: 14,
  },
  buttonText: {
    color: 'white',
    fontSize: 17,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
