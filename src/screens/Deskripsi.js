import React, { Component } from "react";
import { StyleSheet, View, Image, ImageBackground, TouchableOpacity, Text } from "react-native";
import IoniconsIcon from "react-native-vector-icons/Ionicons";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";

function Deskripsi(props) {
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
          <TouchableOpacity
            onPress={() => props.navigation.navigate("Chat")}
            style={styles.btnchat1}
          >
            <View style={styles.rect38}>
              <FontAwesomeIcon
                name="commenting-o"
                style={styles.iconchat1}
              ></FontAwesomeIcon>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.grouprespon}>
          <View style={styles.rect27}>
            <View style={styles.iconresponRow}>
              <FontAwesomeIcon
                name="hourglass-2"
                style={styles.iconrespon}
              ></FontAwesomeIcon>
              <View style={styles.menungguresponColumn}>
                <Text style={styles.menunggurespon}>
                  Menunggu Respon Laundry
                </Text>
                <Text style={styles.orderdibatalkan}>
                  Order akan dibatalkan secara otomatis apabila Mitra SRB
                  Laundry tidak merespon dalam waktu 1 jam
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.rect29}>
          <View style={styles.groupinfoorder}>
            <Text style={styles.informasiOrderan}>Informasi Orderan</Text>
            <View style={styles.noorderRow}>
              <Text style={styles.noorder}>No. Order</Text>
              <Text style={styles.noorder1}>1</Text>
            </View>
            <View style={styles.tanggaloderRow}>
              <Text style={styles.tanggaloder}>Tanggal Order</Text>
              <Text style={styles.tanggalorder1}>10.00 01/06/2021</Text>
            </View>
            <View style={styles.namalaundryRow}>
              <Text style={styles.namalaundry}>Nama Laundry</Text>
              <Text style={styles.namalaundry1}>Laundry Soleh</Text>
            </View>
            <View style={styles.lokasiRow}>
              <Text style={styles.lokasi}>Lokasi</Text>
              <Text style={styles.lokasi1}>
                Tanjung Sengkuang, {"\n"}Batu Ampar
              </Text>
            </View>
            <Text style={styles.catatanlokasi}>Catatan Lokasi</Text>
            <Text style={styles.catatanlaundry}>Catatan Untuk Laundry</Text>
            <View style={styles.asuransikehilanganRow}>
              <Text style={styles.asuransikehilangan}>Asuransi Kehilangan</Text>
              <Text style={styles.asuransikehilangan1}>Ya</Text>
            </View>
            <View style={styles.estimasipengembalianRow}>
              <Text style={styles.estimasipengembalian}>
                Estimasi Pengembalian
              </Text>
              <Text style={styles.estimasipengembalian1}>04/06/2021</Text>
            </View>
          </View>
          <View style={styles.rect35}></View>
          <View style={styles.groupinfobayar}>
            <View style={styles.pembayaranStackStack}>
              <View style={styles.pembayaranStack}>
                <Text style={styles.pembayaran}>Pembayaran</Text>
                <View style={styles.rect37}></View>
              </View>
              <Text style={styles.jumlah}>Jumlah</Text>
              <Text style={styles.total}>Total</Text>
            </View>
            <View style={styles.pembayaran1StackRow}>
              <View style={styles.pembayaran1Stack}>
                <Text style={styles.pembayaran1}>Cuci Pakaian Regular</Text>
                <Text style={styles.hargabayar}>Rp. 7.000,- / Kg</Text>
              </View>
              <Text style={styles.jumlah1}>3</Text>
              <Text style={styles.total1}>Rp. 21.000,-</Text>
            </View>
            <View style={styles.asuransiStackStack}>
              <View style={styles.asuransiStack}>
                <Text style={styles.asuransi}>Asuransi</Text>
                <FontAwesomeIcon
                  name="check-circle-o"
                  style={styles.iconasuransi}
                ></FontAwesomeIcon>
                <View style={styles.rect36}></View>
                <Text style={styles.subtotales}>Subtotal (Estimasi)</Text>
              </View>
              <View style={styles.asuransi1Stack}>
                <Text style={styles.asuransi1}>Rp. 1.500,-</Text>
                <Text style={styles.subtotales1}>Rp. 22.500,-</Text>
              </View>
            </View>
          </View>
          <View style={styles.grouppembayaran}>
            <View style={styles.metodepembayaranStackRow}>
              <View style={styles.metodepembayaranStack}>
                <Text style={styles.metodepembayaran}>Metode Pembayaran</Text>
                <Text style={styles.statuspembayaran}>Status Pembayaran</Text>
              </View>
              <View style={styles.cashStack}>
                <Text style={styles.cash}>Cash</Text>
                <Text style={styles.belumdibayar}>Belum Dibayar</Text>
              </View>
            </View>
          </View>
        </View>
        <TouchableOpacity
          onPress={() => props.navigation.navigate("Home")}
          style={styles.btnbatal}
        >
          <View style={styles.rect34}>
            <Text style={styles.batalkanOrder}>BATALKAN ORDER</Text>
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
  btnchat1: {
    width: 30,
    height: 30,
    marginLeft: 177,
    marginTop: 10
  },
  rect38: {
    width: 30,
    height: 30,
    backgroundColor: "rgba(46,178,255,1)",
    borderWidth: 0,
    borderColor: "#000000",
    borderRadius: 30
  },
  iconchat1: {
    color: "rgba(255,255,255,1)",
    fontSize: 20,
    height: 20,
    width: 20,
    marginTop: 5,
    marginLeft: 5
  },
  btnbackRow: {
    height: 44,
    flexDirection: "row",
    marginTop: 32,
    marginLeft: 218,
    marginRight: 231
  },
  grouprespon: {
    width: 350,
    height: 85,
    marginTop: 7,
    marginLeft: 231
  },
  rect27: {
    width: 350,
    height: 84,
    backgroundColor: "rgba(171,224,255,0.5)",
    borderRadius: 10
  },
  iconrespon: {
    color: "rgba(46,178,255,1)",
    fontSize: 30,
    height: 30,
    width: 25,
    marginTop: 11
  },
  menunggurespon: {
    fontFamily: "calibri-bold",
    color: "#121212",
    fontSize: 14,
    width: 227,
    height: 22
  },
  orderdibatalkan: {
    fontFamily: "calibri-regular",
    color: "rgba(250,33,33,1)",
    fontSize: 12,
    width: 262,
    height: 55
  },
  menungguresponColumn: {
    width: 262,
    marginLeft: 25
  },
  iconresponRow: {
    height: 77,
    flexDirection: "row",
    marginTop: 7,
    marginLeft: 18,
    marginRight: 20
  },
  rect29: {
    width: 350,
    height: 363,
    backgroundColor: "rgba(171,224,255,0.5)",
    borderRadius: 10,
    marginTop: 8,
    marginLeft: 230
  },
  groupinfoorder: {
    width: 278,
    height: 208,
    marginTop: 6,
    marginLeft: 16
  },
  informasiOrderan: {
    fontFamily: "calibri-bold",
    color: "rgba(138,128,128,1)",
    width: 150,
    height: 17,
    fontSize: 16
  },
  noorder: {
    fontFamily: "calibri-regular",
    color: "rgba(138,128,128,1)",
    fontSize: 13,
    width: 119,
    height: 18
  },
  noorder1: {
    fontFamily: "calibri-regular",
    color: "rgba(138,128,128,1)",
    fontSize: 13,
    width: 119,
    height: 18,
    marginLeft: 40
  },
  noorderRow: {
    height: 18,
    flexDirection: "row",
    marginTop: 9
  },
  tanggaloder: {
    fontFamily: "calibri-regular",
    color: "rgba(138,128,128,1)",
    fontSize: 13,
    width: 119,
    height: 18
  },
  tanggalorder1: {
    fontFamily: "calibri-regular",
    color: "rgba(138,128,128,1)",
    fontSize: 13,
    width: 119,
    height: 18,
    marginLeft: 40
  },
  tanggaloderRow: {
    height: 18,
    flexDirection: "row",
    marginTop: 3
  },
  namalaundry: {
    fontFamily: "calibri-regular",
    color: "rgba(138,128,128,1)",
    fontSize: 13,
    width: 119,
    height: 18
  },
  namalaundry1: {
    fontFamily: "calibri-regular",
    color: "rgba(138,128,128,1)",
    fontSize: 13,
    width: 119,
    height: 18,
    marginLeft: 40
  },
  namalaundryRow: {
    height: 18,
    flexDirection: "row",
    marginTop: 3
  },
  lokasi: {
    fontFamily: "calibri-regular",
    color: "rgba(138,128,128,1)",
    fontSize: 13,
    width: 119,
    height: 18
  },
  lokasi1: {
    fontFamily: "calibri-regular",
    color: "rgba(138,128,128,1)",
    fontSize: 13,
    width: 119,
    height: 38,
    marginLeft: 40
  },
  lokasiRow: {
    height: 38,
    flexDirection: "row",
    marginTop: 3
  },
  catatanlokasi: {
    fontFamily: "calibri-regular",
    color: "rgba(138,128,128,1)",
    fontSize: 13,
    width: 119,
    height: 18
  },
  catatanlaundry: {
    fontFamily: "calibri-regular",
    color: "rgba(138,128,128,1)",
    fontSize: 13,
    width: 145,
    height: 18,
    marginTop: 3
  },
  asuransikehilangan: {
    fontFamily: "calibri-regular",
    color: "rgba(138,128,128,1)",
    fontSize: 13,
    width: 145,
    height: 18
  },
  asuransikehilangan1: {
    fontFamily: "calibri-regular",
    color: "rgba(138,128,128,1)",
    fontSize: 13,
    width: 119,
    height: 18,
    marginLeft: 14
  },
  asuransikehilanganRow: {
    height: 18,
    flexDirection: "row",
    marginTop: 3
  },
  estimasipengembalian: {
    fontFamily: "calibri-regular",
    color: "rgba(138,128,128,1)",
    fontSize: 13,
    width: 145,
    height: 18
  },
  estimasipengembalian1: {
    fontFamily: "calibri-regular",
    color: "rgba(138,128,128,1)",
    fontSize: 13,
    width: 119,
    height: 18,
    marginLeft: 14
  },
  estimasipengembalianRow: {
    height: 18,
    flexDirection: "row",
    marginTop: 3
  },
  rect35: {
    width: 340,
    height: 1,
    backgroundColor: "rgba(138,128,128,0.5)",
    marginTop: 3,
    marginLeft: 5
  },
  groupinfobayar: {
    width: 342,
    height: 93,
    marginTop: 4,
    marginLeft: 3
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
  rect37: {
    top: 17,
    left: 0,
    width: 340,
    height: 1,
    position: "absolute",
    backgroundColor: "rgba(138,128,128,0.5)"
  },
  pembayaranStack: {
    top: 0,
    left: 0,
    width: 340,
    height: 21,
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
  pembayaranStackStack: {
    width: 340,
    height: 21,
    marginLeft: 2
  },
  pembayaran1: {
    top: 0,
    left: 0,
    position: "absolute",
    fontFamily: "calibri-regular",
    color: "rgba(138,128,128,1)",
    fontSize: 13,
    width: 119,
    height: 18
  },
  hargabayar: {
    top: 15,
    left: 0,
    position: "absolute",
    fontFamily: "calibri-regular",
    color: "rgba(46,178,255,1)",
    fontSize: 11,
    width: 89,
    height: 15
  },
  pembayaran1Stack: {
    width: 119,
    height: 30
  },
  jumlah1: {
    fontFamily: "calibri-regular",
    color: "rgba(138,128,128,1)",
    fontSize: 14,
    width: 21,
    height: 18,
    textAlign: "center",
    marginLeft: 30
  },
  total1: {
    fontFamily: "calibri-regular",
    color: "rgba(138,128,128,1)",
    fontSize: 13,
    width: 96,
    height: 18,
    textAlign: "center",
    marginLeft: 69
  },
  pembayaran1StackRow: {
    height: 30,
    flexDirection: "row",
    marginLeft: 8,
    marginRight: -1
  },
  asuransi: {
    top: 0,
    left: 8,
    position: "absolute",
    fontFamily: "calibri-regular",
    color: "rgba(138,128,128,1)",
    fontSize: 12,
    width: 71,
    height: 18
  },
  iconasuransi: {
    top: 3,
    left: 60,
    position: "absolute",
    color: "rgba(138,128,128,1)",
    fontSize: 10
  },
  rect36: {
    top: 16,
    left: 2,
    width: 340,
    height: 1,
    position: "absolute",
    backgroundColor: "rgba(138,128,128,0.5)"
  },
  subtotales: {
    top: 17,
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
    width: 342,
    height: 38,
    position: "absolute"
  },
  asuransi1: {
    top: 0,
    left: 3,
    position: "absolute",
    fontFamily: "calibri-regular",
    color: "rgba(138,128,128,1)",
    fontSize: 12,
    width: 94,
    height: 18,
    textAlign: "center"
  },
  subtotales1: {
    top: 17,
    left: 0,
    position: "absolute",
    fontFamily: "calibri-bold",
    color: "rgba(46,178,255,1)",
    fontSize: 13,
    width: 98,
    height: 18,
    textAlign: "center"
  },
  asuransi1Stack: {
    top: 1,
    left: 245,
    width: 98,
    height: 35,
    position: "absolute"
  },
  asuransiStackStack: {
    width: 343,
    height: 38,
    marginTop: 4
  },
  grouppembayaran: {
    width: 335,
    height: 41,
    flexDirection: "row",
    marginLeft: 10
  },
  metodepembayaran: {
    top: 0,
    left: 0,
    position: "absolute",
    fontFamily: "calibri-regular",
    color: "rgba(138,128,128,1)",
    width: 201,
    height: 21,
    fontSize: 13,
    textAlign: "left"
  },
  statuspembayaran: {
    top: 20,
    left: 0,
    position: "absolute",
    fontFamily: "calibri-regular",
    color: "rgba(138,128,128,1)",
    width: 201,
    height: 21,
    fontSize: 13,
    textAlign: "left"
  },
  metodepembayaranStack: {
    width: 201,
    height: 41
  },
  cash: {
    top: 0,
    left: 0,
    position: "absolute",
    fontFamily: "calibri-regular",
    color: "rgba(138,128,128,1)",
    width: 114,
    height: 21,
    fontSize: 13,
    textAlign: "right"
  },
  belumdibayar: {
    top: 20,
    left: 0,
    position: "absolute",
    fontFamily: "calibri-regular",
    color: "rgba(138,128,128,1)",
    width: 114,
    height: 21,
    fontSize: 13,
    textAlign: "right"
  },
  cashStack: {
    width: 114,
    height: 41,
    marginLeft: 21
  },
  metodepembayaranStackRow: {
    height: 41,
    flexDirection: "row",
    flex: 1,
    marginRight: -1
  },
  btnbatal: {
    width: 340,
    height: 45,
    marginTop: 10,
    marginLeft: 237
  },
  rect34: {
    width: 340,
    height: 45,
    backgroundColor: "rgba(250,33,33,1)",
    borderWidth: 0,
    borderColor: "#000000",
    borderRadius: 10
  },
  batalkanOrder: {
    fontFamily: "calibri-regular",
    color: "rgba(255,255,255,1)",
    fontSize: 18,
    width: 145,
    height: 26,
    textAlign: "center",
    marginTop: 9,
    marginLeft: 97
  }
});

export default Deskripsi;


