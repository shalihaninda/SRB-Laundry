import React, { Component } from "react";
import { StyleSheet, View, Image, ImageBackground, TouchableOpacity, Text, TextInput } from "react-native";
import IoniconsIcon from "react-native-vector-icons/Ionicons";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";

function Chat(props) {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/images/0_Bg.png")}
        resizeMode="contain"
        style={styles.bg}
        imageStyle={styles.bg_imageStyle}
      >
        <View style={styles.btnbackRow}>
          <TouchableOpacity
            onPress={() => props.navigation.navigate("Home2")}
            style={styles.btnback}
          >
            <View style={styles.rect}>
              <IoniconsIcon
                name="md-arrow-back"
                style={styles.iconback}
              ></IoniconsIcon>
            </View>
          </TouchableOpacity>
          <Text style={styles.orderNo1}>Order No. 1</Text>
        </View>
        <View style={styles.namalaundry}>
          <View style={styles.rect30}>
            <View style={styles.logolaundry1Row}>
              <FontAwesomeIcon
                name="reddit"
                style={styles.logolaundry1}
              ></FontAwesomeIcon>
              <Text style={styles.namalaundry1}>Laundry Soleh</Text>
            </View>
          </View>
        </View>
        <View style={styles.pesan}>
          <View style={styles.txtpesanStack}>
            <TextInput
              placeholder="  Tulis Pesan.."
              style={styles.txtpesan}
            ></TextInput>
            <TouchableOpacity style={styles.btngambar}>
              <View style={styles.rect32}>
                <FontAwesomeIcon
                  name="picture-o"
                  style={styles.icongambar}
                ></FontAwesomeIcon>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnkirim}>
              <View style={styles.rect31}>
                <FontAwesomeIcon
                  name="send"
                  style={styles.iconkirim}
                ></FontAwesomeIcon>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center"
  },
  bg: {
    width: 812,
    height: 812,
    marginTop: 28,
    alignSelf: "center"
  },
  bg_imageStyle: {},
  btnback: {
    width: 49,
    height: 44
  },
  rect: {
    width: 49,
    height: 44
  },
  iconback: {
    color: "rgba(255,255,255,1)",
    fontSize: 40,
    height: 44,
    width: 27,
    marginLeft: 10
  },
  orderNo1: {
    fontFamily: "calibri-regular",
    color: "rgba(255,255,255,1)",
    fontSize: 20,
    width: 107,
    height: 24,
    marginTop: 10
  },
  btnbackRow: {
    height: 44,
    flexDirection: "row",
    marginTop: 32,
    marginLeft: 218,
    marginRight: 438
  },
  namalaundry: {
    width: 375,
    height: 76,
    marginLeft: 218
  },
  rect30: {
    width: 375,
    height: 76,
    backgroundColor: "rgba(171,224,255,1)",
    borderRadius: 10,
    borderBottomRightRadius: 0,
    borderBottomLeftRadius: 0,
    flexDirection: "row"
  },
  logolaundry1: {
    color: "rgba(215,20,20,1)",
    fontSize: 60,
    height: 60,
    width: 60
  },
  namalaundry1: {
    fontFamily: "calibri-bold",
    color: "#121212",
    fontSize: 20,
    width: 147,
    height: 28,
    textAlign: "center",
    marginLeft: 17,
    marginTop: 16
  },
  logolaundry1Row: {
    height: 60,
    flexDirection: "row",
    flex: 1,
    marginRight: 126,
    marginLeft: 25,
    marginTop: 8
  },
  pesan: {
    width: 365,
    height: 50,
    marginTop: 563,
    marginLeft: 223
  },
  txtpesan: {
    top: 0,
    left: 0,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 50,
    width: 365,
    borderWidth: 3,
    borderColor: "rgba(46,178,255,1)"
  },
  btngambar: {
    top: 10,
    left: 285,
    width: 30,
    height: 30,
    position: "absolute"
  },
  rect32: {
    width: 30,
    height: 30
  },
  icongambar: {
    color: "rgba(46,178,255,1)",
    fontSize: 25,
    height: 25,
    width: 26,
    marginTop: 3,
    marginLeft: 2
  },
  btnkirim: {
    top: 10,
    left: 325,
    width: 30,
    height: 30,
    position: "absolute"
  },
  rect31: {
    width: 30,
    height: 30
  },
  iconkirim: {
    color: "rgba(46,178,255,1)",
    fontSize: 25,
    height: 25,
    width: 25,
    marginTop: 3,
    marginLeft: 3
  },
  txtpesanStack: {
    width: 365,
    height: 50
  }
});

export default Chat;
