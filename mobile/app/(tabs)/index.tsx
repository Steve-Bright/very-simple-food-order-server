import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Alert, ActivityIndicator } from 'react-native';

export default function App() {
  const [loading, setLoading] = useState(false);

  const generateAndRegister = async () => {
    setLoading(true);

    // 1. Generate random credentials (Username instead of Email)
    const randomId = Math.floor(1000 + Math.random() * 9000);
    const generatedUsername = `User_${randomId}`; // Example: User_5829
    const generatedPassword = Math.random().toString(36).slice(-10); // Random 10-char string

    try {
      // 2. Call your friend's API using the IP address
      const response = await fetch("http://192.168.0.245:12345/foodsystem/api/v1/account/create-account", {
        method: "POST",
        headers: { 
          "Content-Type": "application/json",
          "Accept": "application/json" 
        },
        body: JSON.stringify({
          username: generatedUsername, // Sends to the backend 'username' field
          password: generatedPassword
        }),
      });

      const result = await response.json();

      if (response.status === 201) {
        Alert.alert(
          "Success!",
          `Your account is ready.\n\nUsername: ${generatedUsername}\nPassword: ${generatedPassword}`,
          [{ text: "Copy & Close" }]
        );
      } else {
        // Displays error message from backend if registration fails
        Alert.alert("Error", result.msg || "Registration failed");
      }
    } catch (error) {
      Alert.alert("Connection Error", "Is the backend server running on port 12345?");
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Food Order System</Text>
      <Text style={styles.subtitle}>Click below to get your auto-generated username and password.</Text>

      {loading ? (
        <ActivityIndicator size="large" color="#007AFF" />
      ) : (
        <TouchableOpacity style={styles.button} onPress={generateAndRegister}>
          <Text style={styles.buttonText}>Generate My Account</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  subtitle: {
    textAlign: 'center',
    marginBottom: 30,
    color: '#666',
    paddingHorizontal: 20,
  },
  button: {
    backgroundColor: '#007AFF',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 10,
    elevation: 3, // Shadow for Android
    shadowColor: '#000', // Shadow for iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
});