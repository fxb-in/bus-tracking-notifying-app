import StackNavigator from "./StackNavigator";
import React from "react";
import { NavigationContainer } from '@react-navigation/native';
export default function App(){
  return(
    <NavigationContainer>
    <StackNavigator />
  </NavigationContainer>
    
  )
}