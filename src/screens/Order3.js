import React, { Component } from "react";
import { StyleSheet, View, Image, ImageBackground, TouchableOpacity, Text } from "react-native";
import IoniconsIcon from "react-native-vector-icons/Ionicons";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import MaterialIconsIcon from "react-native-vector-icons/MaterialIcons";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";

function Order3(props) {
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
            onPress={() => props.navigation.navigate("Order2")}
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
                style={styles.btninputlokasi}
              >
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
              <TouchableOpacity
                onPress={() => props.navigation.navigate("Order2")}
                style={styles.btnpilihlaundry}
              >
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
              <Text style={styles.inputLokasi}>Input Lokasi</Text>
              <Text style={styles.pilihLaundry}>Pilih Laundry</Text>
              <Text style={styles.inputitem}>Input Item</Text>
              <Text style={styles.konfir}>Konfirmasi</Text>
            </View>
          </View>
        </View>
        <View style={styles.bg2}>
          <TouchableOpacity 
            onPress={() => props.navigation.navigate("Order31")}
            style={styles.btnitem1}>
            <View style={styles.rect12}>
              <View style={styles.iconitem1Row}>
                <MaterialIconsIcon
                  name="local-laundry-service"
                  style={styles.iconitem1}
                ></MaterialIconsIcon>
                <Text style={styles.cucikiloan}>Cuci Kiloan</Text>
                <FontAwesomeIcon
                  name="angle-down"
                  style={styles.item1}
                ></FontAwesomeIcon>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnitem2}>
            <View style={styles.rect13}>
              <View style={styles.iconitem2Row}>
                <MaterialCommunityIconsIcon
                  name="tshirt-crew"
                  style={styles.iconitem2}
                ></MaterialCommunityIconsIcon>
                <Text style={styles.pakaianSatuan}>Pakaian Satuan</Text>
                <FontAwesomeIcon
                  name="angle-down"
                  style={styles.item2}
                ></FontAwesomeIcon>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnitem3}>
            <View style={styles.rect14}>
              <View style={styles.iconitem3Row}>
                <FontAwesomeIcon
                  name="hotel"
                  style={styles.iconitem3}
                ></FontAwesomeIcon>
                <Text style={styles.bedcoverbantal}>
                  Bed Cover &amp; Bantal
                </Text>
                <FontAwesomeIcon
                  name="angle-down"
                  style={styles.item3}
                ></FontAwesomeIcon>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnitem4}>
            <View style={styles.rect15}>
              <View style={styles.iconitem4Row}>
                <FontAwesomeIcon
                  name="reddit-alien"
                  style={styles.iconitem4}
                ></FontAwesomeIcon>
                <Text style={styles.boneka}>Boneka</Text>
                <FontAwesomeIcon
                  name="angle-down"
                  style={styles.item4}
                ></FontAwesomeIcon>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnitem5}>
            <View style={styles.rect16}>
              <View style={styles.iconitem5Row}>
                <MaterialCommunityIconsIcon
                  name="cup-water"
                  style={styles.iconitem5}
                ></MaterialCommunityIconsIcon>
                <Text style={styles.lainlain}>Lain-lain</Text>
                <FontAwesomeIcon
                  name="angle-down"
                  style={styles.item5}
                ></FontAwesomeIcon>
              </View>
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
    backgroundColor: "rgba(46,178,255,1)"
  },
  rect8: {
    width: 20,
    height: 3,
    backgroundColor: "rgba(46,178,255,1)",
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
    backgroundColor: "rgba(46,178,255,1)",
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
  inputLokasi: {
    fontFamily: "calibri-regular",
    color: "rgba(46,178,255,1)",
    fontSize: 11
  },
  pilihLaundry: {
    fontFamily: "calibri-regular",
    color: "rgba(46,178,255,1)",
    fontSize: 11,
    marginLeft: 13
  },
  inputitem: {
    fontFamily: "calibri-regular",
    color: "rgba(46,178,255,1)",
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
  bg2: {
    width: 375,
    height: 675,
    backgroundColor: "rgba(171,224,255,0.5)",
    marginLeft: 218
  },
  btnitem1: {
    width: 350,
    height: 50,
    marginTop: 10,
    marginLeft: 12
  },
  rect12: {
    width: 350,
    height: 50,
    backgroundColor: "rgba(255,255,255,1)",
    borderRadius: 10,
    flexDirection: "row"
  },
  iconitem1: {
    color: "rgba(138,128,128,1)",
    fontSize: 23,
    height: 23,
    width: 23,
    marginTop: 9
  },
  cucikiloan: {
    fontFamily: "calibri-regular",
    color: "rgba(138,128,128,1)",
    fontSize: 17,
    marginLeft: 10,
    marginTop: 10
  },
  item1: {
    color: "rgba(128,128,128,1)",
    fontSize: 40,
    height: 40,
    width: 26,
    marginLeft: 192
  },
  iconitem1Row: {
    height: 40,
    flexDirection: "row",
    flex: 1,
    marginRight: 15,
    marginLeft: 9,
    marginTop: 5
  },
  btnitem2: {
    width: 350,
    height: 50,
    marginTop: 10,
    marginLeft: 12
  },
  rect13: {
    width: 350,
    height: 50,
    backgroundColor: "rgba(255,255,255,1)",
    borderRadius: 10,
    flexDirection: "row"
  },
  iconitem2: {
    color: "rgba(128,128,128,1)",
    fontSize: 23,
    height: 25,
    width: 23,
    marginTop: 8
  },
  pakaianSatuan: {
    fontFamily: "calibri-regular",
    color: "rgba(138,128,128,1)",
    fontSize: 17,
    marginLeft: 10,
    marginTop: 10
  },
  item2: {
    color: "rgba(128,128,128,1)",
    fontSize: 40,
    height: 40,
    width: 26,
    marginLeft: 163
  },
  iconitem2Row: {
    height: 40,
    flexDirection: "row",
    flex: 1,
    marginRight: 15,
    marginLeft: 9,
    marginTop: 5
  },
  btnitem3: {
    width: 350,
    height: 50,
    marginTop: 9,
    marginLeft: 12
  },
  rect14: {
    width: 350,
    height: 50,
    backgroundColor: "rgba(255,255,255,1)",
    borderRadius: 10,
    flexDirection: "row"
  },
  iconitem3: {
    color: "rgba(138,128,128,1)",
    fontSize: 22,
    height: 22,
    width: 25,
    marginTop: 9
  },
  bedcoverbantal: {
    fontFamily: "calibri-regular",
    color: "rgba(138,128,128,1)",
    fontSize: 17,
    marginLeft: 9,
    marginTop: 10
  },
  item3: {
    color: "rgba(128,128,128,1)",
    fontSize: 40,
    height: 40,
    width: 26,
    marginLeft: 134
  },
  iconitem3Row: {
    height: 40,
    flexDirection: "row",
    flex: 1,
    marginRight: 15,
    marginLeft: 8,
    marginTop: 5
  },
  btnitem4: {
    width: 350,
    height: 50,
    marginTop: 10,
    marginLeft: 12
  },
  rect15: {
    width: 350,
    height: 50,
    backgroundColor: "rgba(255,255,255,1)",
    borderRadius: 10,
    flexDirection: "row"
  },
  iconitem4: {
    color: "rgba(128,128,128,1)",
    fontSize: 22,
    height: 22,
    width: 22,
    marginTop: 9
  },
  boneka: {
    fontFamily: "calibri-regular",
    color: "rgba(138,128,128,1)",
    fontSize: 17,
    marginLeft: 11,
    marginTop: 10
  },
  item4: {
    color: "rgba(128,128,128,1)",
    fontSize: 40,
    height: 40,
    width: 26,
    marginLeft: 216
  },
  iconitem4Row: {
    height: 40,
    flexDirection: "row",
    flex: 1,
    marginRight: 15,
    marginLeft: 9,
    marginTop: 5
  },
  btnitem5: {
    width: 350,
    height: 50,
    marginTop: 10,
    marginLeft: 12
  },
  rect16: {
    width: 350,
    height: 50,
    backgroundColor: "rgba(255,255,255,1)",
    borderRadius: 10,
    flexDirection: "row"
  },
  iconitem5: {
    color: "rgba(128,128,128,1)",
    fontSize: 22,
    height: 24,
    width: 22,
    marginTop: 8
  },
  lainlain: {
    fontFamily: "calibri-regular",
    color: "rgba(138,128,128,1)",
    fontSize: 17,
    marginLeft: 11,
    marginTop: 10
  },
  item5: {
    color: "rgba(128,128,128,1)",
    fontSize: 40,
    height: 40,
    width: 26,
    marginLeft: 209
  },
  iconitem5Row: {
    height: 40,
    flexDirection: "row",
    flex: 1,
    marginRight: 15,
    marginLeft: 9,
    marginTop: 5
  }
});

export default Order3;
