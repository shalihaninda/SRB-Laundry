import React, { Component } from "react";
import { StyleSheet, View, Image, ImageBackground, TouchableOpacity, Text, TextInput } from "react-native";
import IoniconsIcon from "react-native-vector-icons/Ionicons";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import MaterialIconsIcon from "react-native-vector-icons/MaterialIcons";

function Order(props) {
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
            onPress={() => props.navigation.navigate("Home")}
            style={styles.btnback}
          >
            <View style={styles.rect}>
              <IoniconsIcon
                name="md-arrow-back"
                style={styles.iconback}
              ></IoniconsIcon>
            </View>
          </TouchableOpacity>
          <Text style={styles.orderbaru}>Order Baru</Text>
        </View>
        <View style={styles.rect11}>
          <View style={styles.btninputlokasiRow}>
            <TouchableOpacity style={styles.btninputlokasi}>
              <View style={styles.rect1}>
                <FontAwesomeIcon
                  name="map-marker"
                  style={styles.iconinputlokasi}
                ></FontAwesomeIcon>
              </View>
            </TouchableOpacity>
            <View style={styles.line1}>
              <View style={styles.rect5Row}>
                <View style={styles.rect5}></View>
                <View style={styles.rect6}></View>
              </View>
            </View>
            <TouchableOpacity style={styles.btnpilihlaundry}>
              <View style={styles.rect2}>
                <MaterialIconsIcon
                  name="local-laundry-service"
                  style={styles.iconpilihlaundry}
                ></MaterialIconsIcon>
              </View>
            </TouchableOpacity>
            <View style={styles.line2}>
              <View style={styles.rect7Row}>
                <View style={styles.rect7}></View>
                <View style={styles.rect8}></View>
              </View>
            </View>
            <TouchableOpacity style={styles.btninputitem}>
              <View style={styles.rect3}>
                <FontAwesomeIcon
                  name="tag"
                  style={styles.iconinputitem}
                ></FontAwesomeIcon>
              </View>
            </TouchableOpacity>
            <View style={styles.line3}>
              <View style={styles.rect9Row}>
                <View style={styles.rect9}></View>
                <View style={styles.rect10}></View>
              </View>
            </View>
            <TouchableOpacity style={styles.btnkonfir}>
              <View style={styles.rect4}>
                <FontAwesomeIcon
                  name="ticket"
                  style={styles.iconkonfir}
                ></FontAwesomeIcon>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.inputlokasiRow}>
            <Text style={styles.inputlokasi}>Input Lokasi</Text>
            <Text style={styles.pilihlaundry}>Pilih Laundry</Text>
            <Text style={styles.inputitem}>Input Item</Text>
            <Text style={styles.konfir}>Konfirmasi</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.maps}></TouchableOpacity>
        <View style={styles.rect12}>
          <View style={styles.inputlokasi1Row}>
            <Text style={styles.inputlokasi1}>Input Lokasi</Text>
            <TouchableOpacity style={styles.btncari}>
              <View style={styles.iconcariStack}>
                <FontAwesomeIcon
                  name="search"
                  style={styles.iconcari}
                ></FontAwesomeIcon>
                <View style={styles.rect13}></View>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.alamat}>
            <View style={styles.iconalamatRow}>
              <FontAwesomeIcon
                name="map-marker"
                style={styles.iconalamat}
              ></FontAwesomeIcon>
              <TextInput
                placeholder="  Alamat.."
                style={styles.txtalamat}
              ></TextInput>
            </View>
          </View>
          <View style={styles.catatanlok}>
            <View style={styles.iconcatatanlokRow}>
              <FontAwesomeIcon
                name="file-text-o"
                style={styles.iconcatatanlok}
              ></FontAwesomeIcon>
              <TextInput
                placeholder="  Catatan Lokasi.."
                style={styles.txtcatatanlok}
              ></TextInput>
            </View>
          </View>
          <TouchableOpacity 
            onPress={() => props.navigation.navigate("Order2")}
            style={styles.btnpilihlokasi}>
            <View style={styles.rect14}>
              <Text style={styles.pilihlokasi}>Pilih Lokasi</Text>
            </View>
          </TouchableOpacity>
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
    marginTop: 30,
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
  orderbaru: {
    fontFamily: "calibri-regular",
    color: "rgba(255,255,255,1)",
    fontSize: 20,
    marginTop: 7
  },
  btnbackRow: {
    height: 44,
    flexDirection: "row",
    marginTop: 32,
    marginLeft: 218,
    marginRight: 455
  },
  rect11: {
    width: 375,
    height: 60,
    backgroundColor: "rgba(255,255,255,1)",
    marginTop: 1,
    marginLeft: 218
  },
  btninputlokasi: {
    width: 30,
    height: 30
  },
  rect1: {
    width: 30,
    height: 30,
    backgroundColor: "rgba(46,178,255,1)",
    borderRadius: 10
  },
  iconinputlokasi: {
    color: "rgba(255,255,255,1)",
    fontSize: 20,
    height: 20,
    width: 11,
    marginTop: 5,
    marginLeft: 10
  },
  line1: {
    width: 42,
    height: 3,
    flexDirection: "row",
    marginLeft: 2,
    marginTop: 13
  },
  rect5: {
    width: 20,
    height: 3,
    backgroundColor: "rgba(196,196,196,1)"
  },
  rect6: {
    width: 20,
    height: 3,
    backgroundColor: "rgba(196,196,196,1)",
    marginLeft: 2
  },
  rect5Row: {
    height: 3,
    flexDirection: "row",
    flex: 1
  },
  btnpilihlaundry: {
    width: 30,
    height: 30,
    marginLeft: 2
  },
  rect2: {
    width: 30,
    height: 30,
    backgroundColor: "rgba(196,196,196,1)",
    borderRadius: 10
  },
  iconpilihlaundry: {
    color: "rgba(255,255,255,1)",
    fontSize: 20,
    height: 20,
    width: 20,
    marginTop: 5,
    marginLeft: 5
  },
  line2: {
    width: 42,
    height: 3,
    flexDirection: "row",
    marginLeft: 2,
    marginTop: 13
  },
  rect7: {
    width: 20,
    height: 3,
    backgroundColor: "rgba(196,196,196,1)"
  },
  rect8: {
    width: 20,
    height: 3,
    backgroundColor: "rgba(196,196,196,1)",
    marginLeft: 2
  },
  rect7Row: {
    height: 3,
    flexDirection: "row",
    flex: 1
  },
  btninputitem: {
    width: 30,
    height: 30,
    marginLeft: 2
  },
  rect3: {
    width: 30,
    height: 30,
    backgroundColor: "rgba(196,196,196,1)",
    borderRadius: 10
  },
  iconinputitem: {
    color: "rgba(255,255,255,1)",
    fontSize: 20,
    height: 20,
    width: 17,
    marginTop: 5,
    marginLeft: 7
  },
  line3: {
    width: 42,
    height: 3,
    flexDirection: "row",
    marginLeft: 2,
    marginTop: 13
  },
  rect9: {
    width: 20,
    height: 3,
    backgroundColor: "rgba(196,196,196,1)"
  },
  rect10: {
    width: 20,
    height: 3,
    backgroundColor: "rgba(196,196,196,1)",
    marginLeft: 2
  },
  rect9Row: {
    height: 3,
    flexDirection: "row",
    flex: 1
  },
  btnkonfir: {
    width: 30,
    height: 30,
    marginLeft: 2
  },
  rect4: {
    width: 30,
    height: 30,
    backgroundColor: "rgba(196,196,196,1)",
    borderRadius: 10
  },
  iconkonfir: {
    color: "rgba(255,255,255,1)",
    fontSize: 20,
    height: 20,
    width: 20,
    marginTop: 5,
    marginLeft: 5
  },
  btninputlokasiRow: {
    height: 30,
    flexDirection: "row",
    marginTop: 9,
    marginLeft: 60,
    marginRight: 57
  },
  inputlokasi: {
    fontFamily: "calibri-regular",
    color: "rgba(46,178,255,1)",
    fontSize: 11
  },
  pilihlaundry: {
    fontFamily: "calibri-regular",
    color: "rgba(196,196,196,1)",
    fontSize: 11,
    marginLeft: 13
  },
  inputitem: {
    fontFamily: "calibri-regular",
    color: "rgba(196,196,196,1)",
    fontSize: 11,
    marginLeft: 20
  },
  konfir: {
    fontFamily: "calibri-regular",
    color: "rgba(196,196,196,1)",
    fontSize: 11,
    marginLeft: 26
  },
  inputlokasiRow: {
    height: 13,
    flexDirection: "row",
    marginLeft: 48,
    marginRight: 48
  },
  maps: {
    width: 375,
    height: 462,
    backgroundColor: "#E6E6E6",
    marginLeft: 218
  },
  rect12: {
    width: 375,
    height: 190,
    backgroundColor: "rgba(171,224,255,1)",
    marginLeft: 218
  },
  inputlokasi1: {
    fontFamily: "calibri-regular",
    color: "rgba(255,255,255,1)",
    fontSize: 16,
    marginTop: 5,
    marginLeft: 8
  },
  btncari: {
    width: 33,
    height: 31,
    marginLeft: 225
  },
  iconcari: {
    top: 5,
    left: 7,
    position: "absolute",
    color: "rgba(255,255,255,1)",
    fontSize: 20
  },
  rect13: {
    top: 0,
    left: 0,
    width: 33,
    height: 31,
    position: "absolute"
  },
  iconcariStack: {
    width: 33,
    height: 31
  },
  inputlokasi1Row: {
    height: 31,
    flexDirection: "row",
    marginLeft: 9,
    marginRight: 6
  },
  alamat: {
    width: 340,
    height: 30,
    flexDirection: "row",
    marginTop: 4,
    marginLeft: 18
  },
  iconalamat: {
    color: "rgba(255,255,255,1)",
    fontSize: 25,
    marginTop: 3
  },
  txtalamat: {
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 30,
    width: 320,
    backgroundColor: "rgba(255,255,255,1)",
    borderRadius: 10,
    marginLeft: 6
  },
  iconalamatRow: {
    height: 30,
    flexDirection: "row",
    flex: 1
  },
  catatanlok: {
    width: 342,
    height: 30,
    flexDirection: "row",
    marginTop: 10,
    marginLeft: 16
  },
  iconcatatanlok: {
    color: "rgba(255,255,255,1)",
    fontSize: 22,
    marginTop: 4
  },
  txtcatatanlok: {
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 30,
    width: 320,
    backgroundColor: "rgba(255,255,255,1)",
    borderRadius: 10,
    textAlign: "left",
    marginLeft: 3
  },
  iconcatatanlokRow: {
    height: 30,
    flexDirection: "row",
    flex: 1
  },
  btnpilihlokasi: {
    width: 340,
    height: 35,
    marginTop: 14,
    marginLeft: 17
  },
  rect14: {
    width: 340,
    height: 35,
    backgroundColor: "rgba(46,178,255,1)",
    borderRadius: 10
  },
  pilihlokasi: {
    fontFamily: "calibri-bold",
    color: "rgba(255,255,255,1)",
    fontSize: 18,
    width: 145,
    height: 23,
    textAlign: "center",
    marginTop: 6,
    marginLeft: 99
  }
});

export default Order;
