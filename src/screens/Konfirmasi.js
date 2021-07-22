import React, { Component } from "react";
import { StyleSheet, View, Image, ImageBackground, TouchableOpacity, Text, TextInput } from "react-native";
import IoniconsIcon from "react-native-vector-icons/Ionicons";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import MaterialIconsIcon from "react-native-vector-icons/MaterialIcons";

function Konfirmasi(props) {
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
            onPress={() => props.navigation.navigate("Order3")}
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
              <TouchableOpacity
                onPress={() => props.navigation.navigate("Order32")}
                style={styles.btninputitem}
              >
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
        <View style={styles.grouppromo}>
          <View style={styles.rect27}>
            <View style={styles.txtpromo}>
              <View style={styles.rect26Stack}>
                <View style={styles.rect26}>
                  <FontAwesomeIcon
                    name="percent"
                    style={styles.iconpromo}
                  ></FontAwesomeIcon>
                </View>
                <TextInput
                  placeholder="Gunakan Promo.."
                  textBreakStrategy="simple"
                  placeholderTextColor="rgba(46,178,255,1)"
                  style={styles.promo}
                ></TextInput>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.grouplaundry}>
          <View style={styles.rect28}>
            <View style={styles.logolaundry1Row}>
              <FontAwesomeIcon
                name="reddit"
                style={styles.logolaundry1}
              ></FontAwesomeIcon>
              <View style={styles.namalaundryColumn}>
                <Text style={styles.namalaundry}>Laundry Soleh</Text>
                <View style={styles.iconbintanglaundry1Row}>
                  <FontAwesomeIcon
                    name="star"
                    style={styles.iconbintanglaundry1}
                  ></FontAwesomeIcon>
                  <Text style={styles.bintanglaundry2}>4.9</Text>
                </View>
                <Text style={styles.jarak1}>800 M dari lokasi Anda</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.rect29Stack}>
          <View style={styles.rect29}>
            <View style={styles.grouplokasi}>
              <Text style={styles.lokasi}>Lokasi</Text>
              <View style={styles.lok}>
                <View style={styles.iconlokRow}>
                  <FontAwesomeIcon
                    name="map-marker"
                    style={styles.iconlok}
                  ></FontAwesomeIcon>
                  <Text style={styles.perumpalem}>Perum. Palem Raya</Text>
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
            </View>
            <View style={styles.rect30}></View>
            <View style={styles.groupkeranjang}>
              <Text style={styles.keranjanglaundry}>Keranjang Laundry</Text>
              <View style={styles.cuciPakaianRegularStackStack}>
                <View style={styles.cuciPakaianRegularStack}>
                  <Text style={styles.cuciPakaianRegular}>
                    Cuci Pakaian Regular
                  </Text>
                  <View style={styles.harga1StackStack}>
                    <View style={styles.harga1Stack}>
                      <Text style={styles.harga1}>Rp. 7.000,-</Text>
                      <View style={styles.minimalkg1Stack}>
                        <Text style={styles.minimalkg1}>*Minimal 3 Kg</Text>
                        <View style={styles.catatanlaundryStack}>
                          <Text style={styles.catatanlaundry}>
                            Catatan Untuk Laundry
                          </Text>
                          <View style={styles.catatanlok2}>
                            <View style={styles.iconcatatanlok2Row}>
                              <FontAwesomeIcon
                                name="file-text-o"
                                style={styles.iconcatatanlok2}
                              ></FontAwesomeIcon>
                              <TextInput
                                placeholder="  Catatan.."
                                style={styles.txtcatatanlok2}
                              ></TextInput>
                            </View>
                          </View>
                        </View>
                      </View>
                    </View>
                    <View style={styles.rect18}>
                      <View style={styles.btnkurang1Row}>
                        <TouchableOpacity
                          onPress={() => props.navigation.navigate("Order31")}
                          style={styles.btnkurang1}
                        >
                          <View style={styles.rect21}>
                            <FontAwesomeIcon
                              name="minus"
                              style={styles.kurang1}
                            ></FontAwesomeIcon>
                          </View>
                        </TouchableOpacity>
                        <Text style={styles.angka}>3</Text>
                        <TouchableOpacity style={styles.btntambah1}>
                          <View style={styles.rect20}>
                            <FontAwesomeIcon
                              name="plus"
                              style={styles.tambah1}
                            ></FontAwesomeIcon>
                          </View>
                        </TouchableOpacity>
                      </View>
                    </View>
                  </View>
                </View>
                <Text style={styles.estimasi1}>3 Hari (Estimasi)</Text>
              </View>
            </View>
            <View style={styles.rect31}></View>
            <Text style={styles.metodePembayaran}>Metode Pembayaran</Text>
            <View style={styles.btnsrbpayRow}>
              <TouchableOpacity style={styles.btnsrbpay}>
                <View style={styles.srbpayStack}>
                  <Text style={styles.srbpay}>SRB-Pay</Text>
                  <Text style={styles.sisapay}>
                    Sisa SRB-Pay Anda Rp. .....,-
                  </Text>
                  <View style={styles.rect35}></View>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={styles.btncash}>
                <View style={styles.rect36}>
                  <View style={styles.cashStack}>
                    <Text style={styles.cash}>Cash</Text>
                    <FontAwesomeIcon
                      name="dollar"
                      style={styles.iconcash}
                    ></FontAwesomeIcon>
                  </View>
                </View>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.grouppembayaran}>
            <View style={styles.pembayaranStackStack}>
              <View style={styles.pembayaranStack}>
                <Text style={styles.pembayaran}>Pembayaran</Text>
                <View style={styles.rect32}></View>
                <Text style={styles.jumlah1}>3</Text>
              </View>
              <Text style={styles.jumlah}>Jumlah</Text>
              <Text style={styles.total}>Total</Text>
              <View style={styles.cuciPakaianRegular1Stack}>
                <Text style={styles.cuciPakaianRegular1}>
                  Cuci Pakaian Regular
                </Text>
                <Text style={styles.rp7000Kg}>Rp. 7.000,- / Kg</Text>
              </View>
              <Text style={styles.total1}>Rp. 21.000,-</Text>
            </View>
            <View style={styles.asuransiStackStack}>
              <View style={styles.asuransiStack}>
                <Text style={styles.asuransi}>Asuransi</Text>
                <FontAwesomeIcon
                  name="check-circle-o"
                  style={styles.iconasuransi}
                ></FontAwesomeIcon>
                <View style={styles.rect33}></View>
                <Text style={styles.subtotales}>Subtotal (Estimasi)</Text>
              </View>
              <View style={styles.totalasuransiStack}>
                <Text style={styles.totalasuransi}>Rp. 1.500,-</Text>
                <Text style={styles.subtotal}>Rp. 22.500,-</Text>
              </View>
            </View>
          </View>
        </View>
        <TouchableOpacity
          onPress={() => props.navigation.navigate("Home2")}
          style={styles.btnorder}
        >
          <View style={styles.rect34}>
            <Text style={styles.buatorder}>BUAT ORDER</Text>
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
    backgroundColor: "rgba(46,178,255,1)"
  },
  rect10: {
    width: 20,
    height: 3,
    backgroundColor: "rgba(46,178,255,1)",
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
    backgroundColor: "rgba(46,178,255,1)",
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
    color: "rgba(46,178,255,1)",
    fontSize: 11,
    marginLeft: 26
  },
  inputLokasiRow: {
    height: 13,
    flexDirection: "row",
    marginLeft: 48,
    marginRight: 48
  },
  grouppromo: {
    width: 375,
    height: 44,
    marginLeft: 218
  },
  rect27: {
    width: 375,
    height: 44,
    backgroundColor: "rgba(171,224,255,0.5)"
  },
  txtpromo: {
    width: 350,
    height: 30,
    marginTop: 7,
    marginLeft: 13
  },
  rect26: {
    top: 0,
    left: 0,
    width: 350,
    height: 30,
    position: "absolute",
    backgroundColor: "rgba(255,255,255,1)",
    borderRadius: 10
  },
  iconpromo: {
    color: "rgba(46,178,255,1)",
    fontSize: 22,
    height: 22,
    width: 19,
    marginTop: 4,
    marginLeft: 7
  },
  promo: {
    top: 0,
    left: 31,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "rgba(46,178,255,1)",
    height: 30,
    width: 320,
    backgroundColor: "rgba(255,255,255,1)",
    borderRadius: 10
  },
  rect26Stack: {
    width: 351,
    height: 30
  },
  grouplaundry: {
    width: 350,
    height: 89,
    marginTop: 5,
    marginLeft: 231
  },
  rect28: {
    width: 350,
    height: 89,
    backgroundColor: "rgba(171,224,255,1)",
    borderRadius: 10,
    borderBottomRightRadius: 0,
    borderBottomLeftRadius: 0
  },
  logolaundry1: {
    color: "rgba(215,20,20,1)",
    fontSize: 80,
    height: 80,
    width: 80
  },
  namalaundry: {
    fontFamily: "calibri-bold",
    color: "#121212",
    fontSize: 18
  },
  iconbintanglaundry1: {
    color: "rgba(241,255,82,1)",
    fontSize: 18,
    height: 18,
    width: 17
  },
  bintanglaundry2: {
    fontFamily: "calibri-bold",
    color: "#121212",
    marginLeft: 1,
    marginTop: 1
  },
  iconbintanglaundry1Row: {
    height: 18,
    flexDirection: "row",
    marginTop: 3,
    marginRight: 164
  },
  jarak1: {
    fontFamily: "calibri-bold",
    color: "#121212",
    fontSize: 15,
    width: 200,
    height: 18,
    marginTop: 2
  },
  namalaundryColumn: {
    width: 200,
    marginLeft: 28,
    marginTop: 8,
    marginBottom: 9
  },
  logolaundry1Row: {
    height: 80,
    flexDirection: "row",
    marginTop: 4,
    marginLeft: 14,
    marginRight: 28
  },
  rect29: {
    top: 0,
    left: 0,
    width: 350,
    height: 390,
    position: "absolute",
    backgroundColor: "rgba(171,224,255,0.5)"
  },
  grouplokasi: {
    width: 342,
    height: 73,
    marginTop: 6,
    marginLeft: 4
  },
  lokasi: {
    fontFamily: "calibri-bold",
    color: "rgba(138,128,128,1)",
    width: 50,
    height: 17,
    fontSize: 16,
    marginLeft: 12
  },
  lok: {
    width: 132,
    height: 20,
    flexDirection: "row",
    marginTop: 3,
    marginLeft: 4
  },
  iconlok: {
    color: "rgba(138,128,128,1)",
    fontSize: 20
  },
  perumpalem: {
    fontFamily: "calibri-regular",
    color: "rgba(138,128,128,1)",
    marginLeft: 12,
    marginTop: 2
  },
  iconlokRow: {
    height: 20,
    flexDirection: "row",
    flex: 1
  },
  catatanlok: {
    width: 342,
    height: 30,
    flexDirection: "row",
    marginTop: 3
  },
  iconcatatanlok: {
    color: "rgba(138,128,128,1)",
    fontSize: 18,
    marginTop: 3
  },
  txtcatatanlok: {
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 25,
    width: 307,
    backgroundColor: "rgba(255,255,255,1)",
    borderRadius: 10,
    textAlign: "left",
    marginLeft: 7
  },
  iconcatatanlokRow: {
    height: 25,
    flexDirection: "row",
    flex: 1,
    marginRight: 11,
    marginLeft: 2
  },
  rect30: {
    width: 340,
    height: 1,
    backgroundColor: "rgba(138,128,128,0.5)",
    marginTop: 3,
    marginLeft: 5
  },
  groupkeranjang: {
    width: 342,
    height: 124,
    marginTop: 7,
    marginLeft: 5
  },
  keranjanglaundry: {
    fontFamily: "calibri-bold",
    color: "rgba(138,128,128,1)",
    width: 174,
    height: 22,
    fontSize: 16,
    marginLeft: 11
  },
  cuciPakaianRegular: {
    top: 0,
    left: 28,
    position: "absolute",
    fontFamily: "calibri-regular",
    color: "rgba(138,128,128,1)",
    fontSize: 15,
    width: 148,
    height: 18
  },
  harga1: {
    top: 0,
    left: 28,
    position: "absolute",
    fontFamily: "calibri-regular",
    color: "rgba(138,128,128,1)",
    fontSize: 13,
    width: 99,
    height: 15
  },
  minimalkg1: {
    top: 0,
    left: 236,
    position: "absolute",
    fontFamily: "calibri-regular",
    color: "rgba(138,128,128,1)",
    fontSize: 8,
    width: 78,
    height: 13,
    textAlign: "center"
  },
  catatanlaundry: {
    top: 0,
    left: 11,
    position: "absolute",
    fontFamily: "calibri-bold",
    color: "rgba(138,128,128,1)",
    width: 174,
    height: 21,
    fontSize: 16
  },
  catatanlok2: {
    top: 20,
    left: 0,
    width: 342,
    height: 30,
    position: "absolute",
    flexDirection: "row"
  },
  iconcatatanlok2: {
    color: "rgba(138,128,128,1)",
    fontSize: 18,
    marginTop: 3
  },
  txtcatatanlok2: {
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 25,
    width: 307,
    backgroundColor: "rgba(255,255,255,1)",
    borderRadius: 10,
    textAlign: "left",
    marginLeft: 7
  },
  iconcatatanlok2Row: {
    height: 25,
    flexDirection: "row",
    flex: 1,
    marginRight: 11,
    marginLeft: 2
  },
  catatanlaundryStack: {
    top: 10,
    left: 0,
    width: 342,
    height: 50,
    position: "absolute"
  },
  minimalkg1Stack: {
    top: 7,
    left: 0,
    width: 342,
    height: 60,
    position: "absolute"
  },
  harga1Stack: {
    top: 23,
    left: 0,
    width: 342,
    height: 67,
    position: "absolute"
  },
  rect18: {
    top: 0,
    left: 240,
    width: 70,
    height: 30,
    position: "absolute",
    borderWidth: 1,
    borderColor: "rgba(138,128,128,1)",
    borderRadius: 10,
    borderBottomRightRadius: 10,
    flexDirection: "row"
  },
  btnkurang1: {
    width: 21,
    height: 29
  },
  rect21: {
    width: 21,
    height: 29
  },
  kurang1: {
    color: "rgba(46,178,255,1)",
    fontSize: 13,
    height: 13,
    width: 10,
    marginTop: 6,
    marginLeft: 6
  },
  angka: {
    fontFamily: "calibri-regular",
    color: "rgba(138,128,128,1)",
    fontSize: 16,
    width: 21,
    height: 18,
    textAlign: "center",
    marginLeft: 2,
    marginTop: 2
  },
  btntambah1: {
    width: 21,
    height: 29,
    marginLeft: 4
  },
  rect20: {
    width: 21,
    height: 29
  },
  tambah1: {
    color: "rgba(46,178,255,1)",
    fontSize: 13,
    height: 13,
    width: 10,
    marginTop: 6,
    marginLeft: 3
  },
  btnkurang1Row: {
    height: 29,
    flexDirection: "row",
    flex: 1,
    marginLeft: 1,
    marginTop: 1
  },
  harga1StackStack: {
    top: 12,
    left: 0,
    width: 342,
    height: 90,
    position: "absolute"
  },
  cuciPakaianRegularStack: {
    top: 0,
    left: 0,
    width: 342,
    height: 102,
    position: "absolute"
  },
  estimasi1: {
    top: 18,
    left: 28,
    position: "absolute",
    fontFamily: "calibri-regular",
    color: "rgba(138,128,128,1)",
    fontSize: 14,
    width: 120,
    height: 17
  },
  cuciPakaianRegularStackStack: {
    width: 342,
    height: 102
  },
  rect31: {
    width: 340,
    height: 1,
    backgroundColor: "rgba(138,128,128,0.5)",
    marginTop: 5,
    marginLeft: 5
  },
  metodePembayaran: {
    fontFamily: "calibri-bold",
    color: "rgba(138,128,128,1)",
    width: 201,
    height: 21,
    fontSize: 13,
    textAlign: "left",
    marginTop: 93,
    marginLeft: 11
  },
  btnsrbpay: {
    width: 120,
    height: 40
  },
  srbpay: {
    top: 5,
    left: 16,
    position: "absolute",
    fontFamily: "calibri-bold",
    color: "rgba(138,128,128,1)",
    width: 88,
    height: 21,
    fontSize: 13,
    textAlign: "center"
  },
  sisapay: {
    top: 20,
    left: 3,
    position: "absolute",
    fontFamily: "calibri-regular",
    color: "rgba(138,128,128,1)",
    fontSize: 9,
    width: 115,
    height: 18,
    textAlign: "center"
  },
  rect35: {
    top: 0,
    left: 0,
    width: 120,
    height: 40,
    position: "absolute",
    backgroundColor: "rgba(148,150,151,0.3)",
    borderRadius: 10
  },
  srbpayStack: {
    width: 120,
    height: 40
  },
  btncash: {
    width: 120,
    height: 40,
    marginLeft: 53
  },
  rect36: {
    width: 120,
    height: 40,
    backgroundColor: "rgba(60,222,86,1)",
    borderRadius: 10
  },
  cash: {
    top: 0,
    left: 6,
    position: "absolute",
    fontFamily: "calibri-bold",
    color: "rgba(255,255,255,1)",
    width: 41,
    height: 21,
    fontSize: 15,
    textAlign: "center"
  },
  iconcash: {
    top: 2,
    left: 0,
    position: "absolute",
    color: "rgba(255,255,255,1)",
    fontSize: 15,
    height: 15,
    width: 9
  },
  cashStack: {
    width: 47,
    height: 21,
    marginTop: 10,
    marginLeft: 36
  },
  btnsrbpayRow: {
    height: 40,
    flexDirection: "row",
    marginLeft: 29,
    marginRight: 28
  },
  grouppembayaran: {
    top: 224,
    left: 4,
    width: 352,
    height: 91,
    position: "absolute"
  },
  pembayaran: {
    top: 0,
    left: 10,
    position: "absolute",
    fontFamily: "calibri-bold",
    color: "rgba(138,128,128,1)",
    width: 85,
    height: 21,
    fontSize: 14,
    textAlign: "center"
  },
  rect32: {
    top: 17,
    left: 0,
    width: 340,
    height: 1,
    position: "absolute",
    backgroundColor: "rgba(138,128,128,0.5)"
  },
  jumlah1: {
    top: 17,
    left: 155,
    position: "absolute",
    fontFamily: "calibri-regular",
    color: "rgba(138,128,128,1)",
    fontSize: 14,
    width: 21,
    height: 18,
    textAlign: "center"
  },
  pembayaranStack: {
    top: 0,
    left: 0,
    width: 340,
    height: 35,
    position: "absolute"
  },
  jumlah: {
    top: 0,
    left: 138,
    position: "absolute",
    fontFamily: "calibri-bold",
    color: "rgba(138,128,128,1)",
    width: 62,
    height: 21,
    fontSize: 14,
    textAlign: "center"
  },
  total: {
    top: 0,
    left: 279,
    position: "absolute",
    fontFamily: "calibri-bold",
    color: "rgba(138,128,128,1)",
    width: 44,
    height: 21,
    fontSize: 14,
    textAlign: "center"
  },
  cuciPakaianRegular1: {
    top: 0,
    left: 0,
    position: "absolute",
    fontFamily: "calibri-regular",
    color: "rgba(138,128,128,1)",
    fontSize: 13,
    width: 119,
    height: 18
  },
  rp7000Kg: {
    top: 15,
    left: 0,
    position: "absolute",
    fontFamily: "calibri-regular",
    color: "rgba(46,178,255,1)",
    fontSize: 11,
    width: 89,
    height: 15
  },
  cuciPakaianRegular1Stack: {
    top: 21,
    left: 6,
    width: 119,
    height: 30,
    position: "absolute"
  },
  total1: {
    top: 21,
    left: 245,
    position: "absolute",
    fontFamily: "calibri-regular",
    color: "rgba(138,128,128,1)",
    fontSize: 13,
    width: 102,
    height: 18,
    textAlign: "center"
  },
  pembayaranStackStack: {
    width: 347,
    height: 51,
    marginLeft: 1
  },
  asuransi: {
    top: 0,
    left: 7,
    position: "absolute",
    fontFamily: "calibri-regular",
    color: "rgba(138,128,128,1)",
    fontSize: 12,
    width: 71,
    height: 18
  },
  iconasuransi: {
    top: 2,
    left: 54,
    position: "absolute",
    color: "rgba(138,128,128,1)",
    fontSize: 10
  },
  rect33: {
    top: 15,
    left: 1,
    width: 340,
    height: 1,
    position: "absolute",
    backgroundColor: "rgba(138,128,128,0.5)"
  },
  subtotales: {
    top: 15,
    left: 0,
    position: "absolute",
    fontFamily: "calibri-bold",
    color: "rgba(138,128,128,1)",
    width: 115,
    height: 21,
    fontSize: 13,
    textAlign: "center"
  },
  asuransiStack: {
    top: 0,
    left: 0,
    width: 341,
    height: 36,
    position: "absolute"
  },
  totalasuransi: {
    top: 0,
    left: 6,
    position: "absolute",
    fontFamily: "calibri-regular",
    color: "rgba(138,128,128,1)",
    fontSize: 12,
    width: 102,
    height: 18,
    textAlign: "center"
  },
  subtotal: {
    top: 17,
    left: 0,
    position: "absolute",
    fontFamily: "calibri-bold",
    color: "rgba(46,178,255,1)",
    fontSize: 13,
    width: 102,
    height: 18,
    textAlign: "center"
  },
  totalasuransiStack: {
    top: 0,
    left: 245,
    width: 108,
    height: 35,
    position: "absolute"
  },
  asuransiStackStack: {
    width: 353,
    height: 36,
    marginTop: 4
  },
  rect29Stack: {
    width: 357,
    height: 390,
    marginLeft: 231
  },
  btnorder: {
    width: 340,
    height: 45,
    marginTop: 6,
    marginLeft: 236
  },
  rect34: {
    width: 340,
    height: 45,
    backgroundColor: "rgba(46,178,255,1)",
    borderWidth: 0,
    borderColor: "#000000",
    borderRadius: 10
  },
  buatorder: {
    fontFamily: "calibri-bold",
    color: "rgba(255,255,255,1)",
    fontSize: 18,
    width: 145,
    height: 26,
    textAlign: "center",
    marginTop: 9,
    marginLeft: 97
  }
});

export default Konfirmasi;
