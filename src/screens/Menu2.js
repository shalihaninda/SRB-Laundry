import React, { Component } from "react";
import { StyleSheet, View, Image, ImageBackground, Text, TouchableOpacity } from "react-native";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";

function Menu2(props) {
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
              <View style={styles.rect2}>
                <FontAwesomeIcon
                  name="bell"
                  style={styles.iconnotif}
                ></FontAwesomeIcon>
              </View>
            </View>
            <View style={styles.btnpromo}>
              <View style={styles.rect6}>
                <FontAwesomeIcon
                  name="percent"
                  style={styles.iconpromo}
                ></FontAwesomeIcon>
              </View>
            </View>
            <View style={styles.riwayatRow}>
              <Text style={styles.riwayat}>Riwayat</Text>
              <Text style={styles.promo}>Promo</Text>
            </View>
            <View style={styles.btnwaorder}>
              <View style={styles.rect8}>
                <FontAwesomeIcon
                  name="history"
                  style={styles.iconriwayat2}
                ></FontAwesomeIcon>
              </View>
            </View>
            <View style={styles.btnorder1}>
              <View style={styles.rect12}></View>
              <View style={styles.rect11}>
                <TouchableOpacity style={styles.btnchat}>
                  <View style={styles.rect9}>
                    <FontAwesomeIcon
                      name="commenting-o"
                      style={styles.iconchat}
                    ></FontAwesomeIcon>
                  </View>
                </TouchableOpacity>
                <View style={styles.rect10}></View>
                <Text style={styles.totall}>Rp. 22.500,-</Text>
              </View>
            </View>
            <View style={styles.btnorder}>
              <View style={styles.rect7}>
                <Text style={styles.order}>O R D E R</Text>
              </View>
            </View>
          </View>
          <View style={styles.bg3}>
            <View style={styles.menu1}>
              <View style={styles.bg4}>
                <View style={styles.iconuser1Row}>
                  <FontAwesomeIcon
                    name="user-circle-o"
                    style={styles.iconuser1}
                  ></FontAwesomeIcon>
                  <View style={styles.haloputri1Column}>
                    <Text style={styles.haloputri1}>Halo,{"\n"} Putri</Text>
                    <TouchableOpacity style={styles.btnlihatprofil1}>
                      <View style={styles.rect13}>
                        <Text style={styles.lihatProfil1}>Lihat Profil</Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.btnriwayatorder2Stack}>
              <TouchableOpacity style={styles.btnriwayatorder2}>
                <View style={styles.rect14}>
                  <View style={styles.iconriwayat3Row}>
                    <FontAwesomeIcon
                      name="history"
                      style={styles.iconriwayat3}
                    ></FontAwesomeIcon>
                    <Text style={styles.riwayatorder2}>Riwayat Order</Text>
                  </View>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={styles.btnsrbpay}>
                <View style={styles.rect15}>
                  <View style={styles.iconpay1Row}>
                    <FontAwesomeIcon
                      name="dollar"
                      style={styles.iconpay1}
                    ></FontAwesomeIcon>
                    <Text style={styles.srbpay2}>SRB-Pay</Text>
                  </View>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={styles.btnpromo2}>
                <View style={styles.rect16}>
                  <View style={styles.iconpromo1Row}>
                    <FontAwesomeIcon
                      name="percent"
                      style={styles.iconpromo1}
                    ></FontAwesomeIcon>
                    <Text style={styles.promo2}>Promo</Text>
                  </View>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={styles.btnbantuan}>
                <View style={styles.rect17}>
                  <View style={styles.iconbantuan1Row}>
                    <FontAwesomeIcon
                      name="question-circle-o"
                      style={styles.iconbantuan1}
                    ></FontAwesomeIcon>
                    <Text style={styles.bantuan2}>Bantuan</Text>
                  </View>
                </View>
              </TouchableOpacity>
              <TouchableOpacity 
                onPress={() => props.navigation.navigate("Login")}
                style={styles.btnkeluar}>
                <View style={styles.rect18}>
                  <View style={styles.iconkeluar1Row}>
                    <FontAwesomeIcon
                      name="sign-out"
                      style={styles.iconkeluar1}
                    ></FontAwesomeIcon>
                    <Text style={styles.keluar2}>Keluar</Text>
                  </View>
                </View>
              </TouchableOpacity>
            </View>
          </View>
          <TouchableOpacity
            onPress={() => props.navigation.navigate("Home2")}
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
    left: 12,
    width: 356,
    height: 671,
    position: "absolute"
  },
  btnnotif: {
    width: 35,
    height: 35,
    marginLeft: 318
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
  btnpromo: {
    width: 30,
    height: 30,
    marginTop: 33,
    marginLeft: 284
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
    marginLeft: 205,
    marginRight: 31
  },
  btnwaorder: {
    width: 42,
    height: 36,
    marginTop: 22,
    marginLeft: 314
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
  btnorder1: {
    width: 350,
    height: 185,
    marginTop: 11
  },
  rect12: {
    width: 350,
    height: 50,
    backgroundColor: "rgba(191,199,204,1)",
    borderRadius: 10,
    borderBottomRightRadius: 0,
    borderBottomLeftRadius: 0
  },
  rect11: {
    width: 350,
    height: 135,
    backgroundColor: "rgba(171,224,255,1)",
    borderRadius: 10,
    borderTopRightRadius: 0,
    borderTopLeftRadius: 0
  },
  btnchat: {
    width: 30,
    height: 30,
    marginTop: 4,
    marginLeft: 308
  },
  rect9: {
    width: 30,
    height: 30,
    backgroundColor: "rgba(46,178,255,1)",
    borderWidth: 0,
    borderColor: "#000000",
    borderRadius: 30
  },
  iconchat: {
    color: "rgba(255,255,255,1)",
    fontSize: 20,
    height: 20,
    width: 20,
    marginTop: 5,
    marginLeft: 5
  },
  rect10: {
    width: 200,
    height: 1,
    backgroundColor: "rgba(138,128,128,0.5)",
    marginTop: 70,
    marginLeft: 125
  },
  totall: {
    fontFamily: "calibri-bold",
    color: "#121212",
    fontSize: 13,
    width: 77,
    height: 18,
    textAlign: "center",
    marginTop: 2,
    marginLeft: 247
  },
  btnorder: {
    width: 340,
    height: 45,
    marginTop: 251,
    marginLeft: 5
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
  iconuser1: {
    color: "rgba(128,128,128,0.75)",
    fontSize: 75,
    height: 75,
    width: 75
  },
  haloputri1: {
    fontFamily: "calibri-bold",
    color: "rgba(255,255,255,1)",
    fontSize: 24,
    width: 89,
    height: 58
  },
  btnlihatprofil1: {
    width: 80,
    height: 30,
    marginTop: 11,
    marginLeft: 20
  },
  rect13: {
    width: 80,
    height: 30,
    borderWidth: 2,
    borderColor: "rgba(255,255,255,1)",
    borderRadius: 10
  },
  lihatProfil1: {
    fontFamily: "calibri-regular",
    color: "rgba(255,255,255,1)",
    fontSize: 13,
    width: 68,
    height: 18,
    textAlign: "center",
    marginTop: 7,
    marginLeft: 5
  },
  haloputri1Column: {
    width: 100,
    marginLeft: 37
  },
  iconuser1Row: {
    height: 99,
    flexDirection: "row",
    marginTop: 54,
    marginLeft: 18,
    marginRight: 30
  },
  btnriwayatorder2: {
    top: 0,
    left: 0,
    width: 260,
    height: 50,
    position: "absolute"
  },
  rect14: {
    width: 260,
    height: 50,
    backgroundColor: "rgba(224,238,246,1)",
    borderWidth: 2,
    borderColor: "rgba(255,255,255,1)",
    flexDirection: "row"
  },
  iconriwayat3: {
    color: "rgba(46,178,255,1)",
    fontSize: 30,
    height: 30,
    width: 25
  },
  riwayatorder2: {
    fontFamily: "calibri-regular",
    color: "#121212",
    fontSize: 18,
    width: 116,
    height: 22,
    textAlign: "left",
    marginLeft: 24,
    marginTop: 4
  },
  iconriwayat3Row: {
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
  rect15: {
    width: 260,
    height: 50,
    backgroundColor: "rgba(224,238,246,1)",
    borderWidth: 2,
    borderColor: "rgba(255,255,255,1)",
    flexDirection: "row"
  },
  iconpay1: {
    color: "rgba(46,178,255,1)",
    fontSize: 30,
    height: 30,
    width: 17
  },
  srbpay2: {
    fontFamily: "calibri-regular",
    color: "#121212",
    fontSize: 18,
    width: 116,
    height: 22,
    textAlign: "left",
    marginLeft: 28,
    marginTop: 4
  },
  iconpay1Row: {
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
  rect16: {
    width: 260,
    height: 50,
    backgroundColor: "rgba(224,238,246,1)",
    borderWidth: 2,
    borderColor: "rgba(255,255,255,1)",
    flexDirection: "row"
  },
  iconpromo1: {
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
    marginLeft: 25,
    marginTop: 3
  },
  iconpromo1Row: {
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
  rect17: {
    width: 260,
    height: 50,
    backgroundColor: "rgba(224,238,246,1)",
    borderWidth: 2,
    borderColor: "rgba(255,255,255,1)",
    flexDirection: "row"
  },
  iconbantuan1: {
    color: "rgba(46,178,255,1)",
    fontSize: 30,
    height: 30,
    width: 26
  },
  bantuan2: {
    fontFamily: "calibri-regular",
    color: "#121212",
    fontSize: 18,
    width: 116,
    height: 22,
    textAlign: "left",
    marginLeft: 24,
    marginTop: 4
  },
  iconbantuan1Row: {
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
  rect18: {
    width: 260,
    height: 50,
    backgroundColor: "rgba(224,238,246,1)",
    borderWidth: 2,
    borderColor: "rgba(255,255,255,1)",
    flexDirection: "row"
  },
  iconkeluar1: {
    color: "rgba(46,178,255,1)",
    fontSize: 28,
    height: 28,
    width: 26
  },
  keluar2: {
    fontFamily: "calibri-regular",
    color: "#121212",
    fontSize: 18,
    width: 116,
    height: 22,
    textAlign: "left",
    marginLeft: 24,
    marginTop: 3
  },
  iconkeluar1Row: {
    height: 28,
    flexDirection: "row",
    flex: 1,
    marginRight: 77,
    marginLeft: 17,
    marginTop: 11
  },
  btnriwayatorder2Stack: {
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

export default Menu2;
