import React, { Component } from "react";
import { StyleSheet, View, Image, ImageBackground, Text, TouchableOpacity } from "react-native";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";

function Menu(props) {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/images/8_Home.png")}
        resizeMode="contain"
        style={styles.bg}
        imageStyle={styles.bg_imageStyle}
      >

        <View style={styles.bg2Stack}>
          <View style={styles.bg2}>

            <View style={styles.btnnotif}>
              <View style={styles.rect}>
                <FontAwesomeIcon
                  name="bell"
                  style={styles.iconnotif}
                ></FontAwesomeIcon>
              </View>
            </View>

            <View style={styles.btnriwayatRow}>
              <View style={styles.btnriwayat}>
                <View style={styles.rect2}></View>
              </View>

              <View style={styles.btnpromo}>
                <View style={styles.rect3}>
                  <FontAwesomeIcon
                    name="percent"
                    style={styles.iconpromo}
                  ></FontAwesomeIcon>
                </View>
              </View>
            </View>

            <View style={styles.riwayatRow}>
              <Text style={styles.riwayat}>Riwayat</Text>
              <Text style={styles.promo}>Promo</Text>
            </View>

            <View style={styles.btnriwaorder}>
              <View style={styles.rect4}>
                <FontAwesomeIcon
                  name="history"
                  style={styles.iconriwayat2}
                ></FontAwesomeIcon>
              </View>
            </View>

            <FontAwesomeIcon
              name="cart-plus"
              style={styles.iconkeranjang}
            ></FontAwesomeIcon>

            <View style={styles.btnorder}>
              <View style={styles.rect5}>
                <Text style={styles.order}>O R D E R</Text>
              </View>
            </View>

          </View>

          <View style={styles.bg3}>
            <View style={styles.menu1}>
              <View style={styles.bg4}>
                <View style={styles.iconuserRow}>
                  <FontAwesomeIcon
                    name="user-circle-o"
                    style={styles.iconuser}
                  ></FontAwesomeIcon>

                  <View style={styles.haloputriColumn}>
                    <Text style={styles.haloputri}>Halo,{"\n"}   Putri</Text>

                    <TouchableOpacity 
                      onPress={() => props.navigation.navigate("Profil")}
                      style={styles.btnlihatprofil}>
                      <View style={styles.rect7}>
                        <Text style={styles.lihatprofil}>Lihat Profil</Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>

            <View style={styles.btnriwayatorderStack}>
              <TouchableOpacity style={styles.btnriwayatorder}>
                <View style={styles.rect6}>
                  <View style={styles.iconriwayatRow}>
                    <FontAwesomeIcon
                      name="history"
                      style={styles.iconriwayat}
                    ></FontAwesomeIcon>
                    <Text style={styles.riwayatorder}>Riwayat Order</Text>
                  </View>
                </View>
              </TouchableOpacity>

              <TouchableOpacity style={styles.btnsrbpay}>
                <View style={styles.rect8}>
                  <View style={styles.iconpayRow}>
                    <FontAwesomeIcon
                      name="dollar"
                      style={styles.iconpay}
                    ></FontAwesomeIcon>
                    <Text style={styles.srbpay}>SRB-Pay</Text>
                  </View>
                </View>
              </TouchableOpacity>

              <TouchableOpacity style={styles.btnpromo2}>
                <View style={styles.rect9}>
                  <View style={styles.iconpromo2Row}>
                    <FontAwesomeIcon
                      name="percent"
                      style={styles.iconpromo2}
                    ></FontAwesomeIcon>
                    <Text style={styles.promo2}>Promo</Text>
                  </View>
                </View>
              </TouchableOpacity>

              <TouchableOpacity style={styles.btnbantuan}>
                <View style={styles.rect10}>
                  <View style={styles.iconbantuanRow}>
                    <FontAwesomeIcon
                      name="question-circle-o"
                      style={styles.iconbantuan}
                    ></FontAwesomeIcon>
                    <Text style={styles.bantuan}>Bantuan</Text>
                  </View>
                </View>
              </TouchableOpacity>

              <TouchableOpacity 
                onPress={() => props.navigation.navigate("Login")}
                style={styles.btnkeluar}
              >
                <View style={styles.rect11}>
                  <View style={styles.iconkeluarRow}>
                    <FontAwesomeIcon
                      name="sign-out"
                      style={styles.iconkeluar}
                    ></FontAwesomeIcon>
                    <Text style={styles.keluar}>Keluar</Text>
                  </View>
                </View>
              </TouchableOpacity>             
            </View>

          </View>

          <TouchableOpacity
            onPress={() => props.navigation.navigate("Home")}
            style={styles.btnhome}
          ></TouchableOpacity>

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
  bg2: {
    top: 40,
    left: 18,
    width: 351,
    height: 671,
    position: "absolute"
  },
  btnnotif: {
    width: 35,
    height: 35,
    marginLeft: 313
  },
  rect: {
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
  btnriwayat: {
    width: 30,
    height: 30
  },
  rect2: {
    width: 30,
    height: 30,
    backgroundColor: "rgba(255,255,255,1)",
    borderWidth: 0,
    borderColor: "#000000",
    borderRadius: 10
  },
  btnpromo: {
    width: 30,
    height: 30,
    marginLeft: 34
  },
  rect3: {
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
  btnriwayatRow: {
    height: 30,
    flexDirection: "row",
    marginTop: 33,
    marginLeft: 215,
    marginRight: 42
  },
  riwayat: {
    fontFamily: "calibri-bold",
    color: "#121212",
    fontSize: 13,
    width: 61,
    height: 23,
    textAlign: "center"
  },
  promo: {
    fontFamily: "calibri-bold",
    color: "#121212",
    fontSize: 13,
    width: 52,
    height: 23,
    textAlign: "center",
    marginLeft: 7
  },
  riwayatRow: {
    height: 23,
    flexDirection: "row",
    marginLeft: 200,
    marginRight: 31
  },
  btnriwaorder: {
    width: 42,
    height: 36,
    marginTop: 22,
    marginLeft: 309
  },
  rect4: {
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
  iconkeranjang: {
    color: "rgba(128,128,128,0.3)",
    fontSize: 200,
    marginTop: 111,
    marginLeft: 67
  },
  btnorder: {
    width: 340,
    height: 45,
    marginTop: 136
  },
  rect5: {
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
  },
  bg3: {
    top: 0,
    left: 0,
    width: 260,
    height: 812,
    position: "absolute",
    backgroundColor: "rgba(224,238,246,1)"
  },
  menu1: {
    width: 260,
    height: 165
  },
  bg4: {
    width: 260,
    height: 165,
    backgroundColor: "rgba(46,178,255,1)"
  },
  iconuser: {
    color: "rgba(128,128,128,0.75)",
    fontSize: 75,
    height: 75,
    width: 75
  },
  haloputri: {
    fontFamily: "calibri-bold",
    color: "rgba(255,255,255,1)",
    fontSize: 24,
    width: 89,
    height: 58
  },
  btnlihatprofil: {
    width: 80,
    height: 30,
    marginTop: 11,
    marginLeft: 20
  },
  rect7: {
    width: 80,
    height: 30,
    borderWidth: 2,
    borderColor: "rgba(255,255,255,1)",
    borderRadius: 10
  },
  lihatprofil: {
    fontFamily: "calibri-regular",
    color: "rgba(255,255,255,1)",
    fontSize: 13,
    width: 68,
    height: 18,
    textAlign: "center",
    marginTop: 4,
    marginLeft: 4
  },
  haloputriColumn: {
    width: 100,
    marginLeft: 37
  },
  iconuserRow: {
    height: 99,
    flexDirection: "row",
    marginTop: 54,
    marginLeft: 18,
    marginRight: 30
  },
  btnriwayatorder: {
    top: 0,
    left: 0,
    width: 260,
    height: 50,
    position: "absolute"
  },
  rect6: {
    width: 260,
    height: 50,
    backgroundColor: "rgba(224,238,246,1)",
    borderWidth: 2,
    borderColor: "rgba(255,255,255,1)",
    flexDirection: "row"
  },
  iconriwayat: {
    color: "rgba(46,178,255,1)",
    fontSize: 30,
    height: 30,
    width: 25
  },
  riwayatorder: {
    fontFamily: "calibri-regular",
    color: "#121212",
    fontSize: 18,
    width: 116,
    height: 22,
    textAlign: "left",
    marginLeft: 22
  },
  iconriwayatRow: {
    height: 30,
    flexDirection: "row",
    flex: 1,
    marginRight: 77,
    marginLeft: 18,
    marginTop: 10
  },
  btnsrbpay: {
    top: 48,
    left: 0,
    width: 260,
    height: 50,
    position: "absolute"
  },
  rect8: {
    width: 260,
    height: 50,
    backgroundColor: "rgba(224,238,246,1)",
    borderWidth: 2,
    borderColor: "rgba(255,255,255,1)",
    flexDirection: "row"
  },
  iconpay: {
    color: "rgba(46,178,255,1)",
    fontSize: 30,
    height: 30,
    width: 17
  },
  srbpay: {
    fontFamily: "calibri-regular",
    color: "#121212",
    fontSize: 18,
    width: 116,
    height: 22,
    textAlign: "left",
    marginLeft: 26
  },
  iconpayRow: {
    height: 30,
    flexDirection: "row",
    flex: 1,
    marginRight: 77,
    marginLeft: 22,
    marginTop: 10
  },
  btnpromo2: {
    top: 96,
    left: 0,
    width: 260,
    height: 50,
    position: "absolute"
  },
  rect9: {
    width: 260,
    height: 50,
    backgroundColor: "rgba(224,238,246,1)",
    borderWidth: 2,
    borderColor: "rgba(255,255,255,1)",
    flexDirection: "row"
  },
  iconpromo2: {
    color: "rgba(46,178,255,1)",
    fontSize: 29,
    height: 29,
    width: 25
  },
  promo2: {
    fontFamily: "calibri-regular",
    color: "#121212",
    fontSize: 18,
    width: 116,
    height: 22,
    textAlign: "left",
    marginLeft: 24
  },
  iconpromo2Row: {
    height: 29,
    flexDirection: "row",
    flex: 1,
    marginRight: 77,
    marginLeft: 17,
    marginTop: 11
  },
  btnbantuan: {
    top: 144,
    left: 0,
    width: 260,
    height: 50,
    position: "absolute"
  },
  rect10: {
    width: 260,
    height: 50,
    backgroundColor: "rgba(224,238,246,1)",
    borderWidth: 2,
    borderColor: "rgba(255,255,255,1)",
    flexDirection: "row"
  },
  iconbantuan: {
    color: "rgba(46,178,255,1)",
    fontSize: 30,
    height: 30,
    width: 26
  },
  bantuan: {
    fontFamily: "calibri-regular",
    color: "#121212",
    fontSize: 18,
    width: 116,
    height: 22,
    textAlign: "left",
    marginLeft: 23
  },
  iconbantuanRow: {
    height: 30,
    flexDirection: "row",
    flex: 1,
    marginRight: 77,
    marginLeft: 17,
    marginTop: 10
  },
  btnkeluar: {
    top: 192,
    left: 0,
    width: 260,
    height: 50,
    position: "absolute"
  },
  rect11: {
    width: 260,
    height: 50,
    backgroundColor: "rgba(224,238,246,1)",
    borderWidth: 2,
    borderColor: "rgba(255,255,255,1)",
    flexDirection: "row"
  },
  iconkeluar: {
    color: "rgba(46,178,255,1)",
    fontSize: 28,
    height: 28,
    width: 26
  },
  keluar: {
    fontFamily: "calibri-regular",
    color: "#121212",
    fontSize: 18,
    width: 116,
    height: 22,
    textAlign: "left",
    marginLeft: 24
  },
  iconkeluarRow: {
    height: 28,
    flexDirection: "row",
    flex: 1,
    marginRight: 77,
    marginLeft: 17,
    marginTop: 11
  },
  btnriwayatorderStack: {
    width: 260,
    height: 242
  },
  btnhome: {
    top: 0,
    left: 260,
    width: 115,
    height: 812,
    position: "absolute",
    backgroundColor: "rgba(21,22,23,1)",
    opacity: 0.7
  },
  bg2Stack: {
    width: 375,
    height: 812,
    marginLeft: 218
  }
});

export default Menu;
