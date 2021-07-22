import React, { Component } from "react";
import { StyleSheet, View, Image, ImageBackground, TouchableOpacity, Text } from "react-native";
import Icon from "react-native-vector-icons/EvilIcons";

function Landing3(props) {
  return (
    <View style={styles.container}>
        <ImageBackground source={require("../assets/images/6_Landing3.png")} style={styles.bg}>
          
          
            <View style={styles.iconStackStack}>
              
                <Text style={styles.text}>
                    Halo, Selamat Bergabung.{"\n"}Silahkan Masuk Kembali.
                </Text>

                <TouchableOpacity
                    onPress={() => props.navigation.navigate("Login2")}
                    style={styles.btnmasuk} >
                    <Text style={styles.masuk}>MASUK</Text>
                </TouchableOpacity>

            </View>

          
        </ImageBackground>

        
    
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
  text: {
    fontFamily: "sniglet-regular",
    color: "rgba(255,255,255,1)",
    textAlign: "center",
    fontSize: 30,
    marginTop: 200
  },
  btnmasuk: {
    width: 332,
    height: 40,
    backgroundColor: "rgba(60,222,86,1)",
    borderRadius: 10,
    marginTop: 200
  },
  masuk: {
    fontFamily: "calibri-bold",
    color: "rgba(255,255,255,1)",
    width: 60,
    height: 20,
    fontSize: 16,
    marginTop: 9,
    marginLeft: 137
  }
  
});

export default Landing3;
