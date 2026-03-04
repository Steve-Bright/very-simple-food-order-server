import { useContext } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { AuthContext } from "../../context/AuthContext";

export default function AdminHome() {
  const { logout } = useContext(AuthContext);

  return (
    // The style here ensures the container takes up the whole screen and stays centered
    <View style={styles.container}>
      <Text style={styles.title}>Admin Dashboard</Text>
      
      <View style={styles.buttonContainer}>
        <Button title="Logout" color="#FF3B30" onPress={logout} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // Takes up the full height of the screen
    justifyContent: 'center', // Centers content vertically
    alignItems: 'center', // Centers content horizontally
    backgroundColor: '#fff',
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  buttonContainer: {
    width: '60%', // Makes the button a nice width instead of full screen
  }
});