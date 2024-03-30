// ParentAdminButtons.js

import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import LottieView from 'lottie-react-native';
const ParentAdminButtons = () => {
  const navigation = useNavigation();

  const handleParentPress = () => {
    // Navigate to the Parent Login screen when Parent button is pressed
    navigation.navigate('Parent-Login');
  };

  const handleAdminPress = () => {
    // Navigate to the Admin Login screen when Admin button is pressed
    navigation.navigate('AdminLogin');
  };

  return (
    <View style={styles.container}>
        <LottieView style={styles.animation} source={require("../assets/chechpage.json")} autoPlay loop />
      <TouchableOpacity style={[styles.button, styles.parentButton]} onPress={handleParentPress}>
        <Text style={styles.buttonText}>Parent Login</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.button, styles.adminButton]} onPress={handleAdminPress}>
        <Text style={styles.buttonText}>Admin Login</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#8fb1d0', // Add your desired background color here
      },
  button: {
    width: 200,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginVertical: 10,
  },
  parentButton: {
    backgroundColor: '#6f89a2',
  },
  adminButton: {
    backgroundColor: '#6f89a2',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
  animation: {
    height: 200,
    width: 50,
    aspectRatio: 1
  },
});

export default ParentAdminButtons;
