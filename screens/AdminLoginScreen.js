import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import LottieView from 'lottie-react-native';

const AdminLoginScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  const handleLogin = () => {
    // Your authentication logic goes here
    // For simplicity, I'm just checking for a hardcoded username and password
    const predefinedUsername = "Merlin";
    const predefinedPassword = "54321";

    // Check if the entered username and password match the predefined credentials
    if (username === predefinedUsername && password === predefinedPassword) {
      // If the credentials match, navigate to the home screen
      navigation.navigate("Home");
    }
    else {
      // If authentication fails, you can show an error message or handle it as per your requirement
      alert('Invalid username or password');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.loginText}>Admin Login</Text>
      <LottieView style={styles.animation} source={require("../assets/space.json")} autoPlay loop />
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Username"
          placeholderTextColor="white"
          onChangeText={(text) => setUsername(text)}
          value={username}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="white"
          onChangeText={(text) => setPassword(text)}
          value={password}
          secureTextEntry={true}
        />
        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 50,
    backgroundColor: "#c7b9ed"
  },
  inputContainer: {
    width: '80%',
    marginBottom: 90, // Add marginBottom to provide space between inputs and button
  },
  loginText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#584d73', // You can adjust the color to your preference
  },
  input: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderColor: 'white',
    color: 'white',
    borderRadius: 20,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  animation: {
    height: 200,
    width: 50,
    aspectRatio: 1
  },
  loginButton: {
    backgroundColor: '#7b6ca1',
    paddingVertical: 6, // Further reduce padding to make the button smaller
    paddingHorizontal: 12, // Further reduce padding to make the button smaller
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18, // Further reduce font size to make the button text smaller
  },
});

export default AdminLoginScreen;
