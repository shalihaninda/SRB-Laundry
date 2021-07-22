import React, { Component } from "react";
import { StyleSheet, View, Image, ImageBackground, TouchableOpacity, Text, TextInput } from "react-native";
import IoniconsIcon from "react-native-vector-icons/Ionicons";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import MaterialIconsIcon from "react-native-vector-icons/MaterialIcons";

function Order2(props) {
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
            onPress={() => props.navigation.navigate("Order")}
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
        <View style={styles.groupmenu}>
          <View style={styles.rect11}>
            <View style={styles.btninputlokasiRow}>
              <TouchableOpacity 
                onPress={() => props.navigation.navigate("Order")}
                style={styles.btninputlokasi}>
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
            <View style={styles.inputLokasiRow}>
              <Text style={styles.inputlokasi}>Input Lokasi</Text>
              <Text style={styles.pilihlaundry}>Pilih Laundry</Text>
              <Text style={styles.inputitem}>Input Item</Text>
              <Text style={styles.konfir}>Konfirmasi</Text>
            </View>
          </View>
        </View>
        <View style={styles.groupcari}>
          <View style={styles.bgcari}>
            <View style={styles.iconcariRow}>
              <FontAwesomeIcon
                name="search"
                style={styles.iconcari}
              ></FontAwesomeIcon>
              <TextInput
                placeholder="  Cari Laundry"
                style={styles.txtcari}
              ></TextInput>
            </View>
          </View>
        </View>
        <View style={styles.grouplaundry1}>
          <TouchableOpacity 
            onPress={() => props.navigation.navigate("Order3")}
            style={styles.btnlaundry1}>
            <View style={styles.logolaundry1Row}>
              <FontAwesomeIcon
                name="reddit"
                style={styles.logolaundry1}
              ></FontAwesomeIcon>
              <View style={styles.laundry1Column}>
                <Text style={styles.laundry1}>Laundry Soleh</Text>
                <Text style={styles.jarak1}>800 M dari lokasi Anda</Text>
                <View style={styles.btnbuka1Row}>
                  <TouchableOpacity style={styles.btnbuka1}>
                    <View style={styles.rect12}>
                      <Text style={styles.buka}>BUKA</Text>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.btndetail1}>
                    <View style={styles.rect13}>
                      <Text style={styles.detail}>DETAIL</Text>
                    </View>
                  </TouchableOpacity>
                  <FontAwesomeIcon
                    name="chevron-right"
                    style={styles.icongo1}
                  ></FontAwesomeIcon>
                </View>
                <Text style={styles.jamop1}>Jam Opersional:</Text>
              </View>
            </View>
            <View style={styles.iconbintanglaundry1Row}>
              <FontAwesomeIcon
                name="star"
                style={styles.iconbintanglaundry1}
              ></FontAwesomeIcon>
              <Text style={styles.bintanglaundry1}>4.9</Text>
              <Text style={styles.jam1}>08.00 - 17.00</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.grouplaundry2}>
          <TouchableOpacity style={styles.btnlaundry2}>
            <View style={styles.logolaundry2Row}>
              <FontAwesomeIcon
                name="reddit"
                style={styles.logolaundry2}
              ></FontAwesomeIcon>
              <View style={styles.laundry2Column}>
                <Text style={styles.laundry2}>Laundry Rokki</Text>
                <Text style={styles.jarak2}>2 KM dari lokasi Anda</Text>
                <View style={styles.btnbuka2Row}>
                  <TouchableOpacity style={styles.btnbuka2}>
                    <View style={styles.rect14}>
                      <Text style={styles.buka2}>BUKA</Text>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.btndetail2}>
                    <View style={styles.rect15}>
                      <Text style={styles.detail2}>DETAIL</Text>
                    </View>
                  </TouchableOpacity>
                  <FontAwesomeIcon
                    name="chevron-right"
                    style={styles.icongo2}
                  ></FontAwesomeIcon>
                </View>
                <Text style={styles.jamop2}>Jam Opersional:</Text>
              </View>
            </View>
            <View style={styles.iconbintanglaundry2Row}>
              <FontAwesomeIcon
                name="star"
                style={styles.iconbintanglaundry2}
              ></FontAwesomeIcon>
              <Text style={styles.bintanglaundry3}>5.0</Text>
              <Text style={styles.jam2}>08.00 - 15.00</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.grouplaundry3}>
          <TouchableOpacity style={styles.btnlaundry3}>
            <View style={styles.logolaundry3Row}>
              <FontAwesomeIcon
                name="reddit"
                style={styles.logolaundry3}
              ></FontAwesomeIcon>
              <View style={styles.laundry3Column}>
                <Text style={styles.laundry3}>Laundry Bryant</Text>
                <Text style={styles.jarak3}>3.5 KM dari lokasi Anda</Text>
                <View style={styles.btnbuka3Row}>
                  <TouchableOpacity style={styles.btnbuka3}>
                    <View style={styles.rect16}>
                      <Text style={styles.buka3}>TUTUP</Text>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.btndetail3}>
                    <View style={styles.rect17}>
                      <Text style={styles.detail3}>DETAIL</Text>
                    </View>
                  </TouchableOpacity>
                  <FontAwesomeIcon
                    name="chevron-right"
                    style={styles.icongo3}
                  ></FontAwesomeIcon>
                </View>
                <Text style={styles.jamop3}>Jam Opersional:</Text>
              </View>
            </View>
            <View style={styles.iconbintanglaundry3Row}>
              <FontAwesomeIcon
                name="star"
                style={styles.iconbintanglaundry3}
              ></FontAwesomeIcon>
              <Text style={styles.bintanglaundry4}>5.0</Text>
              <Text style={styles.jam3}>08.00 - 12.00</Text>
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
    marginTop: 10
  },
  btnbackRow: {
    height: 44,
    flexDirection: "row",
    marginTop: 32,
    marginLeft: 218,
    marginRight: 455
  },
  groupmenu: {
    width: 375,
    height: 60,
    marginTop: 1,
    marginLeft: 218
  },
  rect11: {
    width: 375,
    height: 60,
    backgroundColor: "rgba(255,255,255,1)"
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
    backgroundColor: "rgba(46,178,255,1)"
  },
  rect6: {
    width: 20,
    height: 3,
    backgroundColor: "rgba(46,178,255,1)",
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
    backgroundColor: "rgba(46,178,255,1)",
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
    color: "rgba(46,178,255,1)",
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
  inputLokasiRow: {
    height: 13,
    flexDirection: "row",
    marginLeft: 48,
    marginRight: 48
  },
  groupcari: {
    width: 375,
    height: 60,
    marginLeft: 218
  },
  bgcari: {
    width: 375,
    height: 60,
    backgroundColor: "rgba(171,224,255,1)",
    flexDirection: "row"
  },
  iconcari: {
    color: "rgba(255,255,255,1)",
    fontSize: 23,
    height: 23,
    width: 22,
    marginTop: 4
  },
  txtcari: {
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 30,
    width: 320,
    backgroundColor: "rgba(255,255,255,1)",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "rgba(196,196,196,1)",
    marginLeft: 3
  },
  iconcariRow: {
    height: 30,
    flexDirection: "row",
    flex: 1,
    marginRight: 14,
    marginLeft: 16,
    marginTop: 15
  },
  grouplaundry1: {
    width: 350,
    height: 140,
    marginTop: 5,
    marginLeft: 230
  },
  btnlaundry1: {
    width: 350,
    height: 140,
    backgroundColor: "rgba(171,224,255,1)",
    borderRadius: 10
  },
  logolaundry1: {
    color: "rgba(215,20,20,1)",
    fontSize: 95,
    height: 95,
    width: 95
  },
  laundry1: {
    fontFamily: "calibri-bold",
    color: "#121212",
    fontSize: 18,
    marginLeft: 2
  },
  jarak1: {
    fontFamily: "calibri-bold",
    color: "#121212",
    fontSize: 15,
    width: 200,
    height: 18,
    marginTop: 2,
    marginLeft: 2
  },
  btnbuka1: {
    width: 65,
    height: 25
  },
  rect12: {
    width: 65,
    height: 25,
    backgroundColor: "rgba(60,222,86,1)",
    borderRadius: 5
  },
  buka: {
    fontFamily: "calibri-regular",
    color: "rgba(255,255,255,1)",
    fontSize: 14,
    marginTop: 2,
    marginLeft: 15
  },
  btndetail1: {
    width: 65,
    height: 25,
    marginLeft: 8
  },
  rect13: {
    width: 65,
    height: 25,
    backgroundColor: "rgba(255,255,255,1)",
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "rgba(46,178,255,1)"
  },
  detail: {
    fontFamily: "calibri-regular",
    color: "rgba(46,178,255,1)",
    fontSize: 14,
    marginTop: 2,
    marginLeft: 10
  },
  icongo1: {
    color: "rgba(117,117,117,1)",
    fontSize: 20,
    height: 20,
    width: 14,
    marginLeft: 57,
    marginTop: 1
  },
  btnbuka1Row: {
    height: 25,
    flexDirection: "row",
    marginTop: 5,
    marginLeft: 2
  },
  jamop1: {
    fontFamily: "calibri-regular",
    color: "#121212",
    fontSize: 13,
    width: 177,
    height: 18,
    marginTop: 8
  },
  laundry1Column: {
    width: 211,
    marginLeft: 22
  },
  logolaundry1Row: {
    height: 98,
    flexDirection: "row",
    marginTop: 12,
    marginLeft: 9,
    marginRight: 13
  },
  iconbintanglaundry1: {
    color: "rgba(241,255,82,1)",
    fontSize: 18,
    height: 18,
    width: 17
  },
  bintanglaundry1: {
    fontFamily: "calibri-bold",
    color: "#121212",
    marginLeft: 1
  },
  jam1: {
    fontFamily: "calibri-bold",
    color: "#121212",
    fontSize: 13,
    width: 177,
    height: 18,
    marginLeft: 56
  },
  iconbintanglaundry1Row: {
    height: 18,
    flexDirection: "row",
    marginLeft: 34,
    marginRight: 47
  },
  grouplaundry2: {
    width: 350,
    height: 140,
    marginTop: 5,
    marginLeft: 230
  },
  btnlaundry2: {
    width: 350,
    height: 140,
    backgroundColor: "rgba(171,224,255,1)",
    borderRadius: 10
  },
  logolaundry2: {
    color: "rgba(241,255,82,1)",
    fontSize: 95,
    height: 95,
    width: 95
  },
  laundry2: {
    fontFamily: "calibri-bold",
    color: "#121212",
    fontSize: 18,
    marginLeft: 2
  },
  jarak2: {
    fontFamily: "calibri-bold",
    color: "#121212",
    fontSize: 15,
    width: 200,
    height: 18,
    marginTop: 2,
    marginLeft: 2
  },
  btnbuka2: {
    width: 65,
    height: 25
  },
  rect14: {
    width: 65,
    height: 25,
    backgroundColor: "rgba(60,222,86,1)",
    borderRadius: 5
  },
  buka2: {
    fontFamily: "calibri-regular",
    color: "rgba(255,255,255,1)",
    fontSize: 14,
    marginTop: 2,
    marginLeft: 15
  },
  btndetail2: {
    width: 65,
    height: 25,
    marginLeft: 8
  },
  rect15: {
    width: 65,
    height: 25,
    backgroundColor: "rgba(255,255,255,1)",
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "rgba(46,178,255,1)"
  },
  detail2: {
    fontFamily: "calibri-regular",
    color: "rgba(46,178,255,1)",
    fontSize: 14,
    marginTop: 2,
    marginLeft: 10
  },
  icongo2: {
    color: "rgba(117,117,117,1)",
    fontSize: 20,
    height: 20,
    width: 14,
    marginLeft: 57,
    marginTop: 1
  },
  btnbuka2Row: {
    height: 25,
    flexDirection: "row",
    marginTop: 5,
    marginLeft: 2
  },
  jamop2: {
    fontFamily: "calibri-regular",
    color: "#121212",
    fontSize: 13,
    width: 177,
    height: 18,
    marginTop: 8
  },
  laundry2Column: {
    width: 211,
    marginLeft: 22
  },
  logolaundry2Row: {
    height: 98,
    flexDirection: "row",
    marginTop: 12,
    marginLeft: 9,
    marginRight: 13
  },
  iconbintanglaundry2: {
    color: "rgba(241,255,82,1)",
    fontSize: 18,
    height: 18,
    width: 17
  },
  bintanglaundry3: {
    fontFamily: "calibri-bold",
    color: "#121212",
    marginLeft: 1
  },
  jam2: {
    fontFamily: "calibri-bold",
    color: "#121212",
    fontSize: 13,
    width: 177,
    height: 18,
    marginLeft: 56
  },
  iconbintanglaundry2Row: {
    height: 18,
    flexDirection: "row",
    marginLeft: 34,
    marginRight: 47
  },
  grouplaundry3: {
    width: 350,
    height: 140,
    marginTop: 5,
    marginLeft: 230
  },
  btnlaundry3: {
    width: 350,
    height: 140,
    backgroundColor: "rgba(171,224,255,1)",
    borderRadius: 10
  },
  logolaundry3: {
    color: "rgba(58,168,27,1)",
    fontSize: 95,
    height: 95,
    width: 95
  },
  laundry3: {
    fontFamily: "calibri-bold",
    color: "#121212",
    fontSize: 18,
    marginLeft: 2
  },
  jarak3: {
    fontFamily: "calibri-bold",
    color: "#121212",
    fontSize: 15,
    width: 200,
    height: 18,
    marginTop: 2,
    marginLeft: 2
  },
  btnbuka3: {
    width: 65,
    height: 25
  },
  rect16: {
    width: 65,
    height: 25,
    backgroundColor: "rgba(250,33,33,1)",
    borderRadius: 5
  },
  buka3: {
    fontFamily: "calibri-regular",
    color: "rgba(255,255,255,1)",
    fontSize: 14,
    marginTop: 2,
    marginLeft: 10
  },
  btndetail3: {
    width: 65,
    height: 25,
    marginLeft: 8
  },
  rect17: {
    width: 65,
    height: 25,
    backgroundColor: "rgba(255,255,255,1)",
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "rgba(46,178,255,1)"
  },
  detail3: {
    fontFamily: "calibri-regular",
    color: "rgba(46,178,255,1)",
    fontSize: 14,
    marginTop: 2,
    marginLeft: 10
  },
  icongo3: {
    color: "rgba(117,117,117,1)",
    fontSize: 20,
    height: 20,
    width: 14,
    marginLeft: 57,
    marginTop: 1
  },
  btnbuka3Row: {
    height: 25,
    flexDirection: "row",
    marginTop: 5,
    marginLeft: 2
  },
  jamop3: {
    fontFamily: "calibri-regular",
    color: "#121212",
    fontSize: 13,
    width: 177,
    height: 18,
    marginTop: 8
  },
  laundry3Column: {
    width: 211,
    marginLeft: 22
  },
  logolaundry3Row: {
    height: 98,
    flexDirection: "row",
    marginTop: 12,
    marginLeft: 9,
    marginRight: 13
  },
  iconbintanglaundry3: {
    color: "rgba(241,255,82,1)",
    fontSize: 18,
    height: 18,
    width: 17
  },
  bintanglaundry4: {
    fontFamily: "calibri-bold",
    color: "#121212",
    marginLeft: 1
  },
  jam3: {
    fontFamily: "calibri-bold",
    color: "#121212",
    fontSize: 13,
    width: 177,
    height: 18,
    marginLeft: 56
  },
  iconbintanglaundry3Row: {
    height: 18,
    flexDirection: "row",
    marginLeft: 34,
    marginRight: 47
  }
});

export default Order2;
