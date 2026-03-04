import { Stack } from 'expo-router';
import { AuthProvider } from '../context/AuthContext'; // Path to your AuthContext file

export default function RootLayout() {
  return (
    <AuthProvider>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="index" />
        <Stack.Screen name="login" />
      </Stack>
    </AuthProvider>
  );
}