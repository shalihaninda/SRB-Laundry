import React, { Component } from "react";
import { StyleSheet, View, Image, ImageBackground, Text,  TextInput, TouchableOpacity } from "react-native";

function Login(props) {
  return (
    <View style={styles.container}>
      <ImageBackground source={require("../assets/images/4_Login.png")} style={styles.bg}>
      
        <Text style={styles.txtsrb}>SRB Laundry.</Text>

        <Text style={styles.email}>Email</Text>
        <TextInput placeholder=" Masukkan Email.." style={styles.txtemail} ></TextInput>

        <Text style={styles.pass}>Password</Text>
        <TextInput placeholder=" Masukkan Password.." style={styles.txtpass} ></TextInput>

        <Text style={styles.txtlupa}>Lupa Password?</Text>

        <TouchableOpacity 
          onPress={() => props.navigation.navigate("Home")}
          style={styles.btnmasuk}>
          <Text style={styles.masuk}>MASUK</Text>
        </TouchableOpacity>

        <Text style={styles.belumMemilikiAkun}>Belum Memiliki Akun?</Text>

        <TouchableOpacity
          onPress={() => props.navigation.navigate("Daftar")}
          style={styles.btndaftar} >
          <Text style={styles.daftar}>DAFTAR</Text>
        </TouchableOpacity>
        
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
  txtsrb: {
    fontFamily: "sniglet-regular",
    color: "rgba(46,178,255,1)",
    fontSize: 40,
    marginTop: 60,
    marginLeft: 10
  },
  email: {
    fontFamily: "calibri-regular",
    color: "#121212",
    fontSize: 15,
    marginTop: 8,
    marginLeft: -280
  },
  txtemail: {
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 30,
    width: 330,
    borderWidth: 1,
    borderColor: "#000000",
    borderRadius: 10,
    backgroundColor: "rgba(230, 230, 230,1)",
    marginTop: 2
  },
  pass: {
    fontFamily: "calibri-regular",
    color: "#121212",
    fontSize: 15,
    marginTop: 8,
    marginLeft: -250
  },
  txtpass: {
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 30,
    width: 330,
    borderWidth: 1,
    borderColor: "#000000",
    borderRadius: 10,
    backgroundColor: "rgba(230, 230, 230,1)",
    marginTop: 2
  },
  txtlupa: {
    fontFamily: "calibri-regular",
    color: "#121212",
    fontSize: 14,
    textDecorationLine: "underline",
    marginTop: 83,
    marginLeft: 200
  },
  btnmasuk: {
    width: 332,
    height: 40,
    backgroundColor: "rgba(46,178,255,1)",
    borderRadius: 10,
    marginTop: 1
  },
  masuk: {
    fontFamily: "calibri-bold",
    color: "rgba(255,255,255,1)",
    width: 55,
    height: 20,
    fontSize: 16,
    marginTop: 10,
    marginLeft: 140
  },
  belumMemilikiAkun: {
    fontFamily: "calibri-regular",
    color: "#121212",
    fontSize: 14,
    marginTop: 40,
    marginLeft: 30
  },
  btndaftar: {
    width: 332,
    height: 40,
    backgroundColor: "rgba(60,222,86,1)",
    borderRadius: 10
  },
  daftar: {
    fontFamily: "calibri-bold",
    color: "rgba(255,255,255,1)",
    width: 60,
    height: 20,
    fontSize: 16,
    marginTop: 9,
    marginLeft: 137
  }
});

export default Login;
