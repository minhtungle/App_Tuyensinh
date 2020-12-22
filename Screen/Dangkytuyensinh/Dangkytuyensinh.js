import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import { Button } from "galio-framework";
import { useNavigation } from "@react-navigation/native";

export default function Dangkytuyensinh() {
  const navigation = useNavigation();
  const image = [
    require("./img/c0.jpg"),
    require("./img/c1.png"),
    require("./img/c2.jpg"),
    require("./img/c3.png"),
  ];
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("http://192.168.1.13:1998/api/TSAPIService/getkythi")
      .then((response) => response.json())
      .then((responseJson) => {
        const arrData = [];
        responseJson.results.map((item, index) => {
          const obj = {
            id: index + 1,
            TenKyThi: item.TenKyThi,
            TrangThai: item.TrangThai,
            DoiTuongTuyenSinh: item.DoiTuongTuyenSinh,
          };
          arrData.push(obj);
        });
        setData(arrData);
      })
      .catch((error) => {
        console.log(error);
        setData([]);
      });
  }, []);
  //TODO: Bổ sung View null
  return (
    <View style={styles.container}>
      <View style={styles.block}>
        {/* <List /> "#61b15a" */}
        {data.length == 0 ? (
          <View style={styles.box}>
            <Button
              round
              title="Đăng ký"
              style={styles.button}
              onPress={() => {
                navigation.navigate("Trangdangky");
              }}
            />
          </View>
        ) : (
          data.map((item, index) => (
            <View style={styles.box} key={index}>
              <View style={styles.image}>
                <Image
                  source={
                    item.DoiTuongTuyenSinh == 0
                      ? image[0]
                      : item.DoiTuongTuyenSinh == 1
                      ? image[1]
                      : item.DoiTuongTuyenSinh == 2
                      ? image[2]
                      : image[3]
                  }
                  style={styles.image}
                  resizeMode={"cover"} // <- needs to be "cover" for borderRadius to take effect on Android
                />
              </View>

              <Text style={styles.text}>{item.TenKyThi}</Text>

              <Button
                round
                title="Đăng ký"
                style={styles.button}
                color={item.TrangThai == 1 ? "#61b15a" : "#fc8621"}
                onPress={() => {
                  item.TrangThai == 1
                    ? navigation.navigate("Trangdangky", {
                        DoiTuongTuyenSinh: item.DoiTuongTuyenSinh,
                      })
                    : null;
                }}
              >
                <Text style={{ color: "white" }}>
                  {item.TrangThai == 1 ? "Đăng ký" : "Hết hạn"}
                </Text>
              </Button>
            </View>
          ))
        )}
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  block: {
    borderColor: "red",
    borderWidth: 1,
    width: "100%",
    // minHeight: 300,
    alignItems: "center",
    marginBottom: "10%",
  },
  box: {
    borderColor: "blue",
    borderWidth: 1,
    width: "95%",
    flexDirection: "row",
    alignItems: "center",
    margin: "2%",
  },
  image: {
    borderWidth: 1,
    borderColor: "#61b15a",
    borderRadius: 75,
    minWidth: 50,
    minHeight: 50,
    maxWidth: 50,
    maxHeight: 50,
  },
  text: {
    flexShrink: 1,
    borderColor: "green",
    borderWidth: 1,
    paddingLeft: 20,
    alignItems: "stretch",
    flexGrow: 1,
    fontSize: 20,
  },
  button: {
    marginRight: "0%",
    maxWidth: "30%",
    borderRadius: 25,
    textShadowColor: "#bbbbbb",

    shadowColor: "rgba(0, 0, 0, 0.1)",
    shadowOpacity: 0.8,
    elevation: 6,
    shadowRadius: 15,
    shadowOffset: { width: 1, height: 13 },
  },
});
