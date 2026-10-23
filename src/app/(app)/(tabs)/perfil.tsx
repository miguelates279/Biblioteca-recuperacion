import { router } from 'expo-router';
import { Pressable, StyleSheet, Text, View } from 'react-native';

export default function PerfilScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Perfil</Text>
      <Pressable style={styles.button} onPress={() => router.push('/acerca')}>
        <Text style={styles.buttonText}>Acerca de</Text>
      </Pressable>
      <Pressable style={styles.logout} onPress={() => router.replace('/login')}>
        <Text style={styles.buttonText}>Cerrar sesión</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    gap: 14,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#2563eb',
    borderRadius: 10,
    padding: 14,
  },
  logout: {
    backgroundColor: '#b91c1c',
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
