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
import Dangkytuyensinh from "./Screen/Dangkytuyensinh/Dangkytuyensinh";
import Tracuuketquatuyensinh from "./Screen/Tracuuketquatuyensinh/Tracuuketquatuyensinh";
import Huongdandangkytructuyen from "./Screen/Huongdandangkytructuyen/Huongdandangkytructuyen";
import Gopy from "./Screen/Gopy/Gopy";
import Header from "./Transformations/components/Header";
import { color } from "react-native-reanimated";

const styles = StyleSheet.create({
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
});
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
          }}
        />
        <Stack.Screen
          name="Thông tin tuyển sinh"
          component={Thongtintuyensinh}
          options={{
            title: "Thông tin tuyển sinh",
          }}
        />
        <Stack.Screen
          name="Đăng ký trực tuyến"
          component={Dangkytuyensinh}
          options={{
            title: "Đăng ký trực tuyến",
          }}
        />
        <Stack.Screen
          name="Tra cứu kết quả tuyển sinh"
          component={Tracuuketquatuyensinh}
          options={{
            title: "Tra cứu kết quả tuyển sinh",
          }}
        />
        <Stack.Screen
          name="Hướng dẫn đăng ký trực tuyến"
          component={Huongdandangkytructuyen}
          options={{
            title: "Hướng dẫn đăng ký trực tuyến",
          }}
        />
        <Stack.Screen
          name="Góp ý"
          component={Gopy}
          options={{
            title: "Góp ý",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
