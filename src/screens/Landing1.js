import React, { Component } from "react";
import { StyleSheet, View, Image, ImageBackground, TouchableOpacity, Text } from "react-native";
import Icon from "react-native-vector-icons/EvilIcons";

function Landing1(props) {
  return (
    <View style={styles.container}>
        <ImageBackground source={require("../assets/images/2_Landing1.png")} style={styles.bg}>
          <TouchableOpacity onPress={() => props.navigation.navigate("Landing2")} style={styles.btnland}>
          
            <View style={styles.iconStackStack}>
              <View style={styles.iconStack}>
                <Icon name="like" style={styles.icon}></Icon>

                
              </View>

              <Text style={styles.text1}>
                Mitra SRB Laundry{"\n"}dengan Layanan Terbaik
              </Text>

              <Text style={styles.text2}>
                Mitra SRB Laundry adalah jasa laundry{"\n"}berpengalaman yang
                terstandarisasi{"\n"}oleh SRB Laundry
              </Text>
            </View>

          </TouchableOpacity>
        </ImageBackground>

        <TouchableOpacity
          onPress={() => props.navigation.navigate("Landing2")}
          style={styles.btnland2}>
        </TouchableOpacity>
    
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
  btnland: {
    width: 375,
    height: 700,
    marginTop: 51,
    marginLeft: 212
  },
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
    marginTop: 17,
    marginLeft: -210
  },
  text2: {
    fontFamily: "sniglet-regular",
    color: "rgba(255,255,255,1)",
    textAlign: "center",
    fontSize: 18,
    marginTop: 50,
    marginLeft: -210
  },
  btnland2: {
    top: 751,
    left: 212,
    width: 375,
    height: 112,
    position: "absolute",
    backgroundColor: "#52aadc"
  }
  
});

export default Landing1;
