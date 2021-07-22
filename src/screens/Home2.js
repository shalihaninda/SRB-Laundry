import React, { Component } from "react";
import { StyleSheet, View, Image, ImageBackground, TouchableOpacity, Text } from "react-native";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";

function Home2(props) {
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
            onPress={() => props.navigation.navigate("Menu2")}
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
            style={styles.btnnotif}
          >
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
        <TouchableOpacity
          onPress={() => props.navigation.navigate("Deskripsi")}
          style={styles.btnorder1}
        >
          <View style={styles.rect12}>
            <Text style={styles.orderno}>Order No. 1</Text>
            <Text style={styles.sedangdiproses}>Sedang Diproses</Text>
          </View>
          <View style={styles.rect11}>
            <View style={styles.logolaundry1Row}>
              <FontAwesomeIcon
                name="reddit"
                style={styles.logolaundry1}
              ></FontAwesomeIcon>
              <View style={styles.tanggalorderColumn}>
                <Text style={styles.tanggalorder}>Tanggal Order</Text>
                <Text style={styles.tanggalorderr}>10.00 01/06/2021</Text>
                <Text style={styles.item}>Item:</Text>
              </View>
              <TouchableOpacity
                onPress={() => props.navigation.navigate("Chat")}
                style={styles.btnchat}
              >
                <View style={styles.rect9}>
                  <FontAwesomeIcon
                    name="commenting-o"
                    style={styles.iconchat}
                  ></FontAwesomeIcon>
                </View>
              </TouchableOpacity>
            </View>
            <View style={styles.namalaundryRow}>
              <Text style={styles.namalaundry}>Laundry Soleh</Text>
              <View style={styles.itemmStack}>
                <Text style={styles.itemm}>1 Item</Text>
                <View style={styles.rect10}></View>
              </View>
            </View>
            <View style={styles.iconbintanglaundry1Row}>
              <FontAwesomeIcon
                name="star"
                style={styles.iconbintanglaundry1}
              ></FontAwesomeIcon>
              <Text style={styles.bintanglaundry2}>4.9</Text>
              <Text style={styles.total}>Total:</Text>
              <Text style={styles.totall}>Rp. 22.500,-</Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => props.navigation.navigate("Order")}
          style={styles.btnorder}
        >
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
  btnorder1: {
    width: 350,
    height: 185,
    marginTop: 11,
    marginLeft: 230
  },
  rect12: {
    width: 350,
    height: 50,
    backgroundColor: "rgba(191,199,204,1)",
    borderRadius: 10,
    borderBottomRightRadius: 0,
    borderBottomLeftRadius: 0
  },
  orderno: {
    fontFamily: "calibri-bold",
    color: "rgba(255,255,255,1)",
    fontSize: 15,
    width: 200,
    height: 18,
    marginTop: 7,
    marginLeft: 15
  },
  sedangdiproses: {
    fontFamily: "calibri-bold",
    color: "rgba(255,255,255,1)",
    fontSize: 15,
    width: 200,
    height: 18,
    marginLeft: 23
  },
  rect11: {
    width: 350,
    height: 135,
    backgroundColor: "rgba(171,224,255,1)",
    borderRadius: 10,
    borderTopRightRadius: 0,
    borderTopLeftRadius: 0
  },
  logolaundry1: {
    color: "rgba(215,20,20,1)",
    fontSize: 80,
    height: 80,
    width: 80,
    marginTop: 1
  },
  tanggalorder: {
    fontFamily: "calibri-regular",
    color: "#121212",
    fontSize: 16,
    width: 156,
    height: 24,
    marginLeft: 2
  },
  tanggalorderr: {
    fontFamily: "calibri-bold",
    color: "#121212",
    fontSize: 14,
    width: 156,
    height: 18,
    marginLeft: 2
  },
  item: {
    fontFamily: "calibri-regular",
    color: "#121212",
    fontSize: 13,
    width: 97,
    height: 18,
    marginTop: 19
  },
  tanggalorderColumn: {
    width: 158,
    marginLeft: 27,
    marginTop: 5
  },
  btnchat: {
    width: 30,
    height: 30,
    marginLeft: 24
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
  logolaundry1Row: {
    height: 84,
    flexDirection: "row",
    marginTop: 4,
    marginLeft: 19,
    marginRight: 12
  },
  namalaundry: {
    fontFamily: "calibri-regular",
    color: "#121212",
    fontSize: 12,
    marginTop: 3
  },
  itemm: {
    top: 0,
    left: 1,
    position: "absolute",
    fontFamily: "calibri-bold",
    color: "#121212",
    fontSize: 13,
    width: 94,
    height: 18
  },
  rect10: {
    top: 16,
    left: 0,
    width: 200,
    height: 1,
    position: "absolute",
    backgroundColor: "rgba(138,128,128,0.5)"
  },
  itemmStack: {
    width: 200,
    height: 18,
    marginLeft: 32
  },
  namalaundryRow: {
    height: 18,
    flexDirection: "row",
    marginLeft: 24,
    marginRight: 25
  },
  iconbintanglaundry1: {
    color: "rgba(241,255,82,1)",
    fontSize: 18,
    height: 18,
    width: 17,
    marginTop: 4
  },
  bintanglaundry2: {
    fontFamily: "calibri-bold",
    color: "#121212",
    marginLeft: 1
  },
  total: {
    fontFamily: "calibri-regular",
    color: "#121212",
    fontSize: 13,
    width: 71,
    height: 18,
    marginLeft: 52,
    marginTop: 1
  },
  totall: {
    fontFamily: "calibri-bold",
    color: "#121212",
    fontSize: 13,
    width: 77,
    height: 18,
    textAlign: "center",
    marginLeft: 47,
    marginTop: 1
  },
  iconbintanglaundry1Row: {
    height: 22,
    flexDirection: "row",
    marginLeft: 41,
    marginRight: 26
  },
  btnorder: {
    width: 340,
    height: 45,
    marginTop: 250,
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

export default Home2;
