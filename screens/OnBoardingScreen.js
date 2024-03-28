import { View, Text, StyleSheet,Dimensions } from "react-native";
import Onboarding from "react-native-onboarding-swiper";
import LottieView from 'lottie-react-native';
import React from "react";

export default function OnBoardingScreen() {
  return (
    <View style={styles.container}> 
      <Onboarding
            containerStyles={{paddingHorizontal: 15}}
        pages={[
          {
            backgroundColor: "#fff",
            image: (
              <View style={styles.lottie}>
                   <LottieView style={{flex :1 }} source={require("./assets/onboard.json")} autoPlay loop />
              </View>
            ),
            title: "Welcome to BusTracker",
            subtitle: "Track your school bus in real-time.",
          },
          {
            backgroundColor: "#fff",
            image: (
              <View>
                <Text>Hello world</Text> 
              </View>
            ),
            title: "Get Notified",
            subtitle: "Receive alerts for bus arrivals and departures.",
          },
          {
            backgroundColor: "#fff",
            image: (
              <View>
                <Text>Hello world</Text> 
              </View>
            ),
            title: "SecureTrack: Attendance & Safety Assurance",
            subtitle: "Efficient Attendance Monitoring and Student Safety Measures",
          },
        ]}
      />
    </View>
  );
}

const styles = StyleSheet.create({ // Defined styles object
  container: {
    flex: 1,
    backgroundColor: "white"
  },
  lottie:{
    height:300,
    aspectRatio: 1
  }
});

