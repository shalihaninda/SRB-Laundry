import React, { Component } from "react";
import { StyleSheet, View, Image, ImageBackground, TouchableOpacity, Text } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

function Notif(props) {
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
              <Icon name="md-arrow-back" style={styles.iconback}></Icon>
            </View>
          </TouchableOpacity>
          <Text style={styles.notifikasi}>Notifikasi</Text>
        </View>
        <Text style={styles.belumada}>
          Belum ada pemberitahuan apapun.{"\n"}Order sekarang dan rasakan
          mudahnya mencuci di SRB Laundry.
        </Text>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  bg: {
    width: 812,
    height: 812,
    marginLeft: -218
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
  notifikasi: {
    fontFamily: "calibri-regular",
    color: "rgba(255,255,255,1)",
    fontSize: 20,
    marginTop: 6
  },
  btnbackRow: {
    height: 44,
    flexDirection: "row",
    marginTop: 32,
    marginLeft: 218,
    marginRight: 469
  },
  belumada: {
    fontFamily: "calibri-regular",
    color: "rgba(179,179,179,1)",
    fontSize: 18,
    width: 350,
    height: 72,
    textAlign: "center",
    marginTop: 310,
    marginLeft: 222
  }
});

export default Notif;
