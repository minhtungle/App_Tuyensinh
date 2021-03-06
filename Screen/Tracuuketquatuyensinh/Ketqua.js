import React, { Component } from "react";
import { Text, StyleSheet, View } from "react-native";

export default function Ketqua({ route }) {
  const { data } = route.params;
  return (
    <View style={styles.container}>
      <View style={styles.title1}>
        <Text
          numberOfLines={1}
          style={{ alignSelf: "center", fontSize: 18, color: "#045762" }}
        >
          THÔNG TIN TUYỂN SINH
        </Text>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <View style={{ flex: 1, height: 1, backgroundColor: "black" }} />
        </View>
        {/* Dữ liệu */}
        <View style={styles.thongtin}>
          <View style={styles.thongtinLeft}>
            {/*Mã hồ sơ*/}
            <View style={styles.thongtinBlock}>
              <Text style={styles.textField}>Mã hồ sơ:</Text>
              <Text style={styles.textData}>{data.MaHoSo}</Text>
            </View>
            {/*Họ tên*/}
            <View style={styles.thongtinBlock}>
              <Text style={styles.textField}>Họ tên:</Text>
              <Text style={styles.textData}>{data.HoTen}</Text>
            </View>
            {/*Ngày sinh*/}
            <View style={styles.thongtinBlock}>
              <Text style={styles.textField}>Ngày sinh:</Text>
              <Text style={styles.textData}>{data.NgaySinh}</Text>
            </View>
            {/*Giới tính*/}
            <View style={styles.thongtinBlock}>
              <Text style={styles.textField}>Giới tính:</Text>
              <Text style={styles.textData}>
                {data.GioiTinh ? "Nam" : "Nữ"}
              </Text>
            </View>
          </View>
          <View style={styles.thongtinRight}>
            {/*Quê quán*/}
            <View style={styles.thongtinBlock}>
              <Text style={styles.textField}>Quê quán:</Text>
              <Text style={styles.textData}>{data.DiaChi}</Text>
            </View>
            {/*Ngày nộp hồ sơ*/}
            <View style={styles.thongtinBlock}>
              <Text style={styles.textField}>Ngày nộp hồ sơ:</Text>
              <Text style={styles.textData}>{data.NgayTao}</Text>
            </View>
            {/*Trường đăng ký*/}
            <View style={styles.thongtinBlock}>
              <Text style={styles.textField}>Trường đăng ký:</Text>
              <Text style={styles.textData}>{data.TenTruong}</Text>
            </View>
            {/*Trạng thái hồ sơ*/}
            <View style={styles.thongtinBlock}>
              <Text style={styles.textField}>Trạng thái hồ sơ:</Text>
              <Text style={styles.textData}>
                {data.TrangThai == 1
                  ? "Hồ sơ đã đăng ký"
                  : data.TrangThai == 2
                  ? "Hồ sơ đã được duyệt"
                  : data.TrangThai == 3
                  ? "Hồ sơ trúng tuyển"
                  : "Hồ sơ trả lại"}
              </Text>
            </View>
          </View>
        </View>
        <Text></Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderColor: "red",
    borderWidth: 1,
  },
  title1: {
    borderColor: "blue",
    borderWidth: 1,
    alignItems: "center",
    margin: "5%",
  },
  thongtin: {
    borderColor: "purple",
    borderWidth: 1,
    marginBottom: "2%",
    flexDirection: "row",
    flexWrap: "wrap",
    width: "100%",
  },
  thongtinBlock: {
    marginTop: "5%",
    borderColor: "orange",
    borderWidth: 1,
    width: "100%",
  },
  thongtinLeft: {
    alignItems: "flex-start",
    borderColor: "green",
    borderWidth: 1,
    margin: "5%",
    flexGrow: 1,
  },
  thongtinRight: {
    alignItems: "flex-start",
    borderColor: "green",
    borderWidth: 1,
    margin: "5%",
    flexGrow: 1,
  },
  textField: {
    fontSize: 18,
  },
  textData: {
    fontSize: 18,
  },
});
