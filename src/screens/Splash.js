import React, { Component } from "react";
import { StyleSheet, View, Image, ImageBackground, Text, TouchableOpacity } from "react-native";

function Splash(props) {
  return (
      <ImageBackground source={require("../assets/images/1_Splash.png")} style={styles.bg}>
        <Text style={styles.text}>SRB Laundry.</Text>
          <TouchableOpacity onPress={() => props.navigation.navigate("Landing1")} style={styles.button}></TouchableOpacity>
      </ImageBackground>
  );
}

const styles = StyleSheet.create({
  bg: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    position: "absolute",
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: "sniglet-regular",
    color: "rgba(255,255,255,1)",
    fontSize: 50,
    top: 375
  },
  button: {
    top: 0,
    left: 0,
    width: 375,
    height: 812,
    position: "absolute"
  }
});


export default Splash;
