import React, { Component } from "react";
import { StyleSheet, View, Image, ImageBackground, TouchableOpacity, Text, TextInput } from "react-native";
import IoniconsIcon from "react-native-vector-icons/Ionicons";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";

function Profil(props) {
  return (
    <View style={styles.container}>
      <ImageBackground source={require("../assets/images/4_Daftar.png")} style={styles.image}
        resizeMode="contain" imageStyle={styles.image_imageStyle} >

        <View style={styles.iconStackRow}>
          <View style={styles.iconStack}>
            <IoniconsIcon name="md-arrow-back" style={styles.icon}></IoniconsIcon>
            <TouchableOpacity
              onPress={() => props.navigation.navigate("Menu")}
              style={styles.back}
            ></TouchableOpacity>
          </View>
          <Text style={styles.ubahprofil}>Ubah Profil</Text>
        </View>

        <FontAwesomeIcon
          name="user-circle"
          style={styles.icon2}
        ></FontAwesomeIcon>


        <Text style={styles.id}>User ID</Text>
        <TextInput
          placeholder="  290301"
          style={styles.txtid}
        ></TextInput>

        <Text style={styles.nama}>Nama</Text>
        <TextInput
          placeholder="  Putri"
          style={styles.txtnama}
        ></TextInput>

        <Text style={styles.email}>Email</Text>
        <TextInput 
            placeholder="  putri@gmail.com" 
            style={styles.txtemail}
        ></TextInput>

        <Text style={styles.nohp}>No Handphone</Text>
        <TextInput
          placeholder="  081234567890"
          style={styles.txtnohp}
        ></TextInput>

        <Text style={styles.tgllahir}>Tanggal Lahir</Text>
        <TextInput
          placeholder="  01 Januari 2001"
          style={styles.txttgllahir}
        ></TextInput>

        <Text style={styles.jk}>Jenis Kelamin</Text>
        <TextInput
          placeholder="  Perempuan"
          style={styles.txtjk}
        ></TextInput>


      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  image: {
    width: 869,
    height: 869,
    marginLeft: -227
  },
  image_imageStyle: {},
  icon: {
    top: 0,
    left: 15,
    position: "absolute",
    color: "rgba(255,255,255,1)",
    fontSize: 40,
    height: 44,
    width: 27
  },
  back: {
    top: 0,
    left: 0,
    width: 60,
    height: 51,
    position: "absolute"
  },
  iconStack: {
    width: 60,
    height: 51
  },
  ubahprofil: {
    fontFamily: "calibri-regular",
    color: "rgba(255,255,255,1)",
    fontSize: 18,
    marginTop: 9
  },
  iconStackRow: {
    height: 51,
    flexDirection: "row",
    marginTop: 33,
    marginLeft: 227,
    marginRight: 514
  },
  icon2: {
    color: "rgba(128,128,128,1)",
    fontSize: 100,
    height: 100,
    width: 100,
    marginTop: 15,
    marginLeft: 355
  },
  id: {
    fontFamily: "calibri-regular",
    color: "#121212",
    fontSize: 16,
    marginTop: 10,
    marginLeft: 243
  },
  txtid: {
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 30,
    width: 330,
    borderWidth: 1,
    borderColor: "#000000",
    borderRadius: 10,
    backgroundColor: "rgba(255,255,255,1)",
    marginTop: 1,
    marginLeft: 240
  },
  nama: {
    fontFamily: "calibri-regular",
    color: "#121212",
    fontSize: 16,
    marginTop: 10,
    marginLeft: 243
  },
  txtnama: {
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 30,
    width: 330,
    borderWidth: 1,
    borderColor: "#000000",
    borderRadius: 10,
    backgroundColor: "rgba(255,255,255,1)",
    marginTop: 1,
    marginLeft: 240
  },
  email: {
    fontFamily: "calibri-regular",
    color: "#121212",
    fontSize: 15,
    marginTop: 9,
    marginLeft: 243
  },
  txtemail: {
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 30,
    width: 330,
    borderWidth: 1,
    borderColor: "#000000",
    borderRadius: 10,
    backgroundColor: "rgba(255,255,255,1)",
    marginTop: 2,
    marginLeft: 240
  },
  nohp: {
    fontFamily: "calibri-regular",
    color: "#121212",
    fontSize: 15,
    marginTop: 9,
    marginLeft: 243
  },
  txtnohp: {
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 30,
    width: 330,
    borderWidth: 1,
    borderColor: "#000000",
    borderRadius: 10,
    backgroundColor: "rgba(255,255,255,1)",
    marginTop: 2,
    marginLeft: 240
  },
  tgllahir: {
    fontFamily: "calibri-regular",
    color: "#121212",
    fontSize: 15,
    marginTop: 9,
    marginLeft: 243
  },
  txttgllahir: {
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 30,
    width: 330,
    borderWidth: 1,
    borderColor: "#000000",
    borderRadius: 10,
    backgroundColor: "rgba(255,255,255,1)",
    marginTop: 2,
    marginLeft: 240
  },
  jk: {
    fontFamily: "calibri-regular",
    color: "#121212",
    fontSize: 15,
    marginTop: 9,
    marginLeft: 243
  },
  txtjk: {
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 30,
    width: 330,
    borderWidth: 1,
    borderColor: "#000000",
    borderRadius: 10,
    backgroundColor: "rgba(255,255,255,1)",
    marginTop: 2,
    marginLeft: 240
  }
  
});

export default Profil;
