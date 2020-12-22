import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  Pressable,
  SafeAreaView,
  ImageBackground,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator, HeaderTitle } from "@react-navigation/stack";

import Wallet from "./Wallet/Trangchu";
import Quydinhtuyensinh from "./Screen/Quydinhtuyensinh/Quydinhtuyensinh";
import Thongtintuyensinh from "./Screen/Thongtintuyensinh/Thongtintuyensinh";
//* Đăng ký tuyển sinh
import Dangkytuyensinh from "./Screen/Dangkytuyensinh/Dangkytuyensinh";
import Trangdangky from "./Screen/Dangkytuyensinh/Trangdangky";

//* Tra cứu tuyển sinh
import Tracuuketquatuyensinh from "./Screen/Tracuuketquatuyensinh/Tracuuketquatuyensinh";
import Ketqua from "./Screen/Tracuuketquatuyensinh/Ketqua";

import Huongdandangkytructuyen from "./Screen/Huongdandangkytructuyen/Huongdandangkytructuyen";
import Gopy from "./Screen/Gopy/Gopy";

// Trang chủ
function Trangchu({ navigation }) {
  return (
    <View>
      <ImageBackground
        source={require("./assets/background.png")}
        style={{ width: "100%", height: "100%" }}
      >
        <Wallet />
      </ImageBackground>
    </View>
  );
}
// <Wallet/>
const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Trang chủ">
        <Stack.Screen
          name="Trang chủ"
          component={Trangchu}
          options={{
            title: "Trang chủ",
            headerStyle: {
              //  "#0a043c","#1f1d4a", "#eb2188", "#f855a8"
              backgroundColor: "#1f1d4a",
              borderBottomWidth: 0.25,
              borderBottomColor: "#e8e8e8",
            },
            headerTitleStyle: {
              alignSelf: "center",
              color: "#fff",
            },
          }}
        />
        <Stack.Screen
          name="Quy định tuyển sinh"
          component={Quydinhtuyensinh}
          options={{
            title: "Quy định tuyển sinh",
            headerTitleStyle: {
              alignSelf: "center",
              marginRight: "18%",
            },
          }}
        />
        <Stack.Screen
          name="Thông tin tuyển sinh"
          component={Thongtintuyensinh}
          options={{
            title: "Thông tin tuyển sinh",
            headerTitleStyle: {
              alignSelf: "center",
              marginRight: "18%",
            },
          }}
        />
        <Stack.Screen
          name="Đăng ký tuyển sinh"
          component={Dangkytuyensinh}
          options={{
            title: "Đăng ký tuyển sinh",
            headerTitleStyle: {
              alignSelf: "center",
              marginRight: "18%",
            },
          }}
        />
        <Stack.Screen
          name="Tra cứu kết quả tuyển sinh"
          component={Tracuuketquatuyensinh}
          options={{
            title: "Tra cứu kết quả tuyển sinh",
            headerTitleStyle: {
              alignSelf: "center",
              marginRight: "18%",
            },
            headerStyle: {
              //  "#0a043c","#1f1d4a", "#eb2188", "#f855a8"
            },
          }}
        />
        <Stack.Screen
          name="Hướng dẫn đăng ký trực tuyến"
          component={Huongdandangkytructuyen}
          options={{
            title: "Hướng dẫn đăng ký trực tuyến",
            headerTitleStyle: {
              alignSelf: "center",
              marginRight: "18%",
            },
          }}
        />
        <Stack.Screen
          name="Góp ý"
          component={Gopy}
          options={{
            title: "Góp ý",
            headerTitleStyle: {
              alignSelf: "center",
              marginRight: "18%",
            },
          }}
        />
        <Stack.Screen
          name="Trangdangky"
          component={Trangdangky}
          options={{
            title: "Đăng ký",
            headerTitleStyle: {
              alignSelf: "center",
              marginRight: "18%",
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
