import React, { Component } from "react";
import { StyleSheet, View, Image, ImageBackground, TouchableOpacity, Text } from "react-native";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";

function Home(props) {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/images/8_Home.png")}
        resizeMode="contain"
        style={styles.bg}
        imageStyle={styles.bg_imageStyle}
      >

        <View style={styles.btnnavRow}>
          <TouchableOpacity 
          onPress={() => props.navigation.navigate("Menu")}
            style={styles.btnnav}
          >
            <View style={styles.rect}>
              <FontAwesomeIcon
                name="navicon"
                style={styles.iconnav}
              ></FontAwesomeIcon>
            </View>
          </TouchableOpacity>

          <TouchableOpacity 
            onPress={() => props.navigation.navigate("Notif")}
            style={styles.btnnotif}>
            <View style={styles.rect2}>
              <FontAwesomeIcon
                name="bell"
                style={styles.iconnotif}
              ></FontAwesomeIcon>
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.btnpayRow}>
          <TouchableOpacity style={styles.btnpay}>
            <View style={styles.rect3}>
              <Text style={styles.srbPay}>SRB Pay</Text>
              <Text style={styles.rp0}>Rp. 0 ,-</Text>
            </View>
          </TouchableOpacity>

          <View style={styles.btntopupColumn}>
            <TouchableOpacity style={styles.btntopup}>
              <View style={styles.rect4}>
                <FontAwesomeIcon
                  name="plus"
                  style={styles.iconplus}
                ></FontAwesomeIcon>
              </View>
            </TouchableOpacity>

            <Text style={styles.topUp}>Top Up</Text>
          </View>

          <View style={styles.btnriwayatColumn}>
            <TouchableOpacity style={styles.btnriwayat}>
              <View style={styles.rect5}>
                <FontAwesomeIcon
                  name="history"
                  style={styles.iconriwayat}
                ></FontAwesomeIcon>
              </View>
            </TouchableOpacity>

            <Text style={styles.riwayat}>Riwayat</Text>
          </View>

          <View style={styles.btnpromoColumn}>
            <TouchableOpacity style={styles.btnpromo}>
              <View style={styles.rect6}>
                <FontAwesomeIcon
                  name="percent"
                  style={styles.iconpromo}
                ></FontAwesomeIcon>
              </View>
            </TouchableOpacity>

            <Text style={styles.promo}>Promo</Text>
          </View>

        </View>

        <View style={styles.orderlangsungRow}>
          <Text style={styles.orderlangsung}>Orderan Berlangsung</Text>

          <TouchableOpacity style={styles.btnriwaorder}>
            <View style={styles.rect8}>
              <FontAwesomeIcon
                name="history"
                style={styles.iconriwayat2}
              ></FontAwesomeIcon>
            </View>
          </TouchableOpacity>
        </View>

        <FontAwesomeIcon
          name="cart-plus"
          style={styles.iconkeranjang}
        ></FontAwesomeIcon>

        <Text style={styles.orderyuk}>Order Yuk !</Text>

        <TouchableOpacity 
          onPress={() => props.navigation.navigate("Order")}
          style={styles.btnorder}>
          <View style={styles.rect7}>
            <Text style={styles.order}>O R D E R</Text>
          </View>
        </TouchableOpacity>
        
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
  btnnav: {
    width: 35,
    height: 35,
    marginTop: 2
  },
  rect: {
    width: 35,
    height: 35
  },
  iconnav: {
    color: "rgba(255,255,255,1)",
    fontSize: 30,
    height: 30,
    width: 26,
    marginTop: 2,
    marginLeft: 4
  },
  btnnotif: {
    width: 35,
    height: 35,
    marginLeft: 284
  },
  rect2: {
    height: 35,
    borderWidth: 0,
    borderColor: "rgba(0,0,0,1)",
    borderRadius: 100
  },
  iconnotif: {
    fontSize: 25,
    color: "rgba(255,255,255,1)",
    height: 25,
    width: 25,
    marginTop: 4,
    marginLeft: 6
  },
  btnnavRow: {
    height: 37,
    flexDirection: "row",
    marginTop: 40,
    marginLeft: 229,
    marginRight: 229
  },
  btnpay: {
    width: 120,
    height: 60
  },
  rect3: {
    width: 118,
    height: 60,
    backgroundColor: "rgba(255,255,255,1)",
    borderWidth: 0,
    borderColor: "#000000",
    borderRadius: 10
  },
  srbPay: {
    fontFamily: "sniglet-regular",
    color: "#121212",
    fontSize: 15,
    marginTop: 4,
    marginLeft: 5
  },
  rp0: {
    fontFamily: "calibri-bold",
    color: "#121212",
    fontSize: 20,
    marginTop: 2,
    marginLeft: 19
  },
  btntopup: {
    width: 30,
    height: 30,
    marginLeft: 11
  },
  rect4: {
    width: 30,
    height: 30,
    backgroundColor: "rgba(255,255,255,1)",
    borderWidth: 0,
    borderColor: "#000000",
    borderRadius: 10
  },
  iconplus: {
    color: "#2eb2ff",
    fontSize: 21,
    height: 21,
    width: 16,
    marginTop: 6,
    marginLeft: 7
  },
  topUp: {
    fontFamily: "calibri-bold",
    color: "#121212",
    fontSize: 13,
    width: 53,
    height: 23,
    textAlign: "center"
  },
  btntopupColumn: {
    width: 53,
    marginTop: 8
  },
  btnriwayat: {
    width: 30,
    height: 30,
    marginLeft: 15
  },
  rect5: {
    width: 30,
    height: 30,
    backgroundColor: "rgba(255,255,255,1)",
    borderWidth: 0,
    borderColor: "#000000",
    borderRadius: 10
  },
  iconriwayat: {
    color: "rgba(46,178,255,1)",
    fontSize: 22,
    height: 22,
    width: 18,
    marginTop: 4,
    marginLeft: 6
  },
  riwayat: {
    fontFamily: "calibri-bold",
    color: "#121212",
    fontSize: 13,
    width: 61,
    height: 23,
    textAlign: "center"
  },
  btnriwayatColumn: {
    width: 61,
    marginLeft: 8,
    marginTop: 8
  },
  btnpromo: {
    width: 30,
    height: 30,
    marginLeft: 10
  },
  rect6: {
    width: 30,
    height: 30,
    backgroundColor: "rgba(255,255,255,1)",
    borderWidth: 0,
    borderColor: "#000000",
    borderRadius: 10
  },
  iconpromo: {
    color: "rgba(46,178,255,1)",
    fontSize: 22,
    height: 22,
    width: 18,
    marginTop: 4,
    marginLeft: 6
  },
  promo: {
    fontFamily: "calibri-bold",
    color: "#121212",
    fontSize: 13,
    width: 52,
    height: 23,
    textAlign: "center"
  },
  btnpromoColumn: {
    width: 52,
    marginLeft: 8,
    marginTop: 8
  },
  btnpayRow: {
    height: 61,
    flexDirection: "row",
    marginTop: 23,
    marginLeft: 254,
    marginRight: 256
  },
  orderlangsung: {
    fontFamily: "calibri-bold",
    color: "rgba(255,255,255,1)",
    fontSize: 15,
    width: 145,
    height: 23,
    textAlign: "center",
    marginTop: 8
  },
  btnriwaorder: {
    width: 42,
    height: 36,
    marginLeft: 170
  },
  rect8: {
    width: 42,
    height: 36
  },
  iconriwayat2: {
    color: "rgba(255,255,255,1)",
    fontSize: 30,
    height: 30,
    width: 25,
    marginTop: 2,
    marginLeft: 9
  },
  orderlangsungRow: {
    height: 36,
    flexDirection: "row",
    marginTop: 22,
    marginLeft: 229,
    marginRight: 226
  },
  iconkeranjang: {
    color: "rgba(128,128,128,0.3)",
    fontSize: 200,
    height: 200,
    width: 186,
    marginTop: 111,
    marginLeft: 302
  },
  orderyuk: {
    fontFamily: "calibri-bold",
    color: "rgba(179,179,179,1)",
    fontSize: 18,
    width: 145,
    height: 23,
    textAlign: "center",
    marginTop: 8,
    marginLeft: 330
  },
  btnorder: {
    width: 340,
    height: 45,
    marginTop: 104,
    marginLeft: 236
  },
  rect7: {
    width: 340,
    height: 45,
    backgroundColor: "rgba(46,178,255,1)",
    borderWidth: 0,
    borderColor: "#000000",
    borderRadius: 10
  },
  order: {
    fontFamily: "calibri-bold",
    color: "rgba(255,255,255,1)",
    fontSize: 18,
    width: 145,
    height: 23,
    textAlign: "center",
    marginTop: 11,
    marginLeft: 97
  }
});

export default Home;
