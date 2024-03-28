import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './screens/HomeScreen';
import OnBoardingScreen from './screens/OnBoardingScreen';
const Stack = createNativeStackNavigator();
const StackNavigator = () => {
    
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='OnBoarding'>
    
        <Stack.Screen name="OnBoarding" component={OnBoardingScreen} options={{headerShown: false}}/>
        <Stack.Screen name="Home" component={HomeScreen} options={{headerShown: false}}/>
       
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default StackNavigator

const styles = StyleSheet.create({})










