import { Slot } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

export default function AuthLayout() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Biblioteca</Text>
      <Slot />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#dbeafe',
    padding: 24,
    justifyContent: 'center',
  },
  title: {
    fontSize: 34,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 28,
    color: '#1e3a8a',
  },
});
