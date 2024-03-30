import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import LottieView from 'lottie-react-native';
const ParentLoginScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  const handleLogin = () => {
    // Your authentication logic goes here
    // For simplicity, I'm just checking for a hardcoded username and password
    const predefinedUsername = "Fathima";
    const predefinedPassword = "12345";

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
    <Text style={styles.loginText}>Parent Login</Text>

      <LottieView   style={[{ flex: 1}, styles.animation]} source={require("../assets/login.json")} autoPlay loop  />
      <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        placeholder="Username"
        onChangeText={(text) => setUsername(text)}
        value={username}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
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
    inputContainer: {
        width: '80%',
        marginBottom: 90, // Add marginBottom to provide space between inputs and button
      },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 50,
    backgroundColor: "#bacbda"
  },
  heading: {
    fontSize: 20,
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderColor: '#7c8791',
    borderRadius: 20,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  animation:{
    height:70,
    width:50,
    aspectRatio: 1
  },
  loginText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333', // You can adjust the color to your preference
  },
  loginButton: {
    backgroundColor: '#6c93b6',
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

export default ParentLoginScreen;
