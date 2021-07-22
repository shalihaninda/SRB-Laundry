import React, { Component } from "react";
import { StyleSheet, View, Image, ImageBackground, TouchableOpacity, Text } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

function Landing2(props) {
  return (
    <View style={styles.container}>
        <ImageBackground source={require("../assets/images/3_Landing2.png")} style={styles.bg} >
          <View style={styles.buttonStack}>

              <View style={styles.loremIpsumStackStack}>
                <Icon name="truck-delivery" style={styles.icon}></Icon>
                
                <View style={styles.loremIpsumStack}>
                  <Text style={styles.text1}> Gratis Antar {"\n"}Jemput Cucian </Text>
                
                  <Text style={styles.text2}> Cucian kamu akan dijemput dan
                    dikembalikan ke lokasi Kamu. Mau cuci jadi gak perlu anter sendiri.
                  </Text>
                </View>
              </View>

          </View>
        </ImageBackground>

        <TouchableOpacity onPress={() => props.navigation.navigate("Login")} style={styles.button3}></TouchableOpacity>
        <TouchableOpacity onPress={() => props.navigation.navigate("Landing1")}style={styles.button4}></TouchableOpacity>
      </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  bg: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  image_imageStyle: {},
  icon: {
    color: "rgba(255,255,255,1)",
    fontSize: 150,
    height: 163,
    width: 150,
    marginTop: 200,
    marginLeft: 15,
    alignItems: 'center',
    justifyContent: 'center'
  },
  text1: {
    fontFamily: "sniglet-regular",
    color: "rgba(255,255,255,1)",
    textAlign: "center",
    fontSize: 30,
    top: 380,
    left: -60
  },
  text2: {
    fontFamily: "sniglet-regular",
    color: "rgba(255,255,255,1)",
    textAlign: "center",
    fontSize: 18,
    top: 430,
    left: -65
  },
  button4: {
    top: 0,
    width: 164,
    height: 687,
    position: "absolute",
    left: 0
  },
  loremIpsumStack: {
    top: 0,
    left: 0,
    width: 287,
    height: 687,
    position: "absolute"
  },
  
  
  loremIpsumStackStack: {
    width: 357,
    height: 687
  },
  button3: {
    top: 0,
    width: 212,
    height: 687,
    position: "absolute",
    left: 164
  },
  buttonStack: {
    width: 376,
    height: 700,
    marginTop: 51,
    marginLeft: 212
  },
  button2: {
    top: 751,
    left: 376,
    width: 212,
    height: 112,
    position: "absolute",
    backgroundColor: "#52aadc"
  },
  button5: {
    top: 751,
    left: 212,
    width: 164,
    height: 112,
    position: "absolute",
    backgroundColor: "#52aadc"
  },
  imageStack: {
    width: 752,
    height: 863,
    marginTop: -51,
    marginLeft: -212
  }
});

export default Landing2;
