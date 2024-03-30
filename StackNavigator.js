import { StyleSheet } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
//import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import OnBoardingScreen from './screens/OnBoardingScreen';
import AdminLoginScreen from './screens/AdminLoginScreen';
import ParentLoginScreen from './screens/ParentLoginScreen';
import CheckScreen from './screens/CheckScreen';
const Stack = createNativeStackNavigator();
const StackNavigator = () => {
    
  return (
    
      <Stack.Navigator initialRouteName='OnBoarding'>
    
        <Stack.Screen name="OnBoarding" component={OnBoardingScreen} options={{headerShown: false}}/>
        <Stack.Screen name="Home" component={HomeScreen} options={{headerShown: false}}/>
        <Stack.Screen name="Checkscreen" component={CheckScreen} options={{headerShown: false}}/>
        <Stack.Screen 
  name="Parent-Login"
  component={ParentLoginScreen}
  options={{
    headerStyle: {
      backgroundColor: '#6c93b6', // Change the background color of the header
      borderBottomWidth: 0, // Remove the bottom border
      elevation: 0, // Remove shadow on Android
    },
    headerTintColor: '#fff', // Change the text color of the header
    headerTitleStyle: {
      fontWeight: '600',
    },
  }}
/>

        <Stack.Screen name="AdminLogin" component={AdminLoginScreen}  options={{
    headerStyle: {
      backgroundColor: '#7b6ca1', // Change the background color of the header
      borderBottomWidth: 0, // Remove the bottom border
      elevation: 0, // Remove shadow on Android
    },
    headerTintColor: '#fff', // Change the text color of the header
    headerTitleStyle: {
      fontWeight: '600',
    },
  }} />
      
       
      </Stack.Navigator>
    
  )
}

export default StackNavigator

const styles = StyleSheet.create({})










