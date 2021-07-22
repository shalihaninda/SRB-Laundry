import React, { useState } from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createDrawerNavigator } from "react-navigation-drawer";
import AppLoading from "expo-app-loading";

import * as Font from "expo-font";
import Splash from "./src/screens/Splash";
import Landing1 from "./src/screens/Landing1";
import Landing2 from "./src/screens/Landing2";
import Login from "./src/screens/Login";
import Daftar from "./src/screens/Daftar";
import Landing3 from "./src/screens/Landing3";
import Login2 from "./src/screens/Login2";
import Home from "./src/screens/Home";
import Menu from "./src/screens/Menu";
import Profil from "./src/screens/Profil";
import Notif from "./src/screens/Notif";
import Order from "./src/screens/Order";
import Order2 from "./src/screens/Order2";
import Order3 from "./src/screens/Order3";
import Order31 from "./src/screens/Order31";
import Order32 from "./src/screens/Order32";
import Konfirmasi from "./src/screens/Konfirmasi";
import Home2 from "./src/screens/Home2";
import Deskripsi from "./src/screens/Deskripsi";
import Chat from "./src/screens/Chat";
import Menu2 from "./src/screens/Menu2";


const DrawerNavigation = createDrawerNavigator({
  Splash: Splash,
  Landing1: Landing1,
  Landing2: Landing2,
  Login: Login,
  Daftar: Daftar,
  Landing3: Landing3,
  Login2: Login2,
  Home: Home,
  Menu: Menu,
  Profil: Profil,
  Notif: Notif,
  Order: Order,
  Order2: Order2,
  Order3: Order3,
  Order31: Order31,
  Order32: Order32,
  Konfirmasi: Konfirmasi,
  Home2: Home2,
  Deskripsi: Deskripsi,
  Chat: Chat,
  Menu2: Menu2
});

const StackNavigation = createStackNavigator(
  {
    DrawerNavigation: {
      screen: DrawerNavigation
    },
    Splash: Splash,
    Landing1: Landing1,
    Landing2: Landing2,
    Login: Login,
    Daftar: Daftar,
    Landing3: Landing3,
    Login2: Login2,
    Home: Home,
    Menu: Menu,
    Profil: Profil,
    Notif: Notif,
    Order: Order,
    Order2: Order2,
    Order3: Order3,
    Order31: Order31,
    Order32: Order32,
    Konfirmasi: Konfirmasi,
    Home2: Home2,
    Deskripsi: Deskripsi,
    Chat: Chat,
    Menu2: Menu2
  },
  {
    headerMode: "none"
  }
); 

const AppContainer = createAppContainer(StackNavigation);

function App() {
  const [isLoadingComplete, setLoadingComplete] = useState(false);
  if (!isLoadingComplete) {
    return (
      <AppLoading
        startAsync={loadResourcesAsync}
        onError={handleLoadingError}
        onFinish={() => handleFinishLoading(setLoadingComplete)}
      />
    );
  } else {
    return isLoadingComplete ? <AppContainer /> : <AppLoading />;
  }
}
async function loadResourcesAsync() {
  await Promise.all([
    Font.loadAsync({
      "roboto-regular": require("./src/assets/fonts/roboto-regular.ttf"),
      "sniglet-regular": require("./src/assets/fonts/sniglet-regular.ttf"),
      "calibri-bold": require("./src/assets/fonts/calibri-bold.ttf"),
      "calibri-regular": require("./src/assets/fonts/calibri-regular.ttf")
    })
  ]);
}
function handleLoadingError(error) {
  console.warn(error);
}

function handleFinishLoading(setLoadingComplete) {
  setLoadingComplete(true);
}

export default App;
