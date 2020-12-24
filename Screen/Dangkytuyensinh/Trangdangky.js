import React, { useState } from "react";
import {
  KeyboardAvoidingView,
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  Image,
  TouchableOpacity,
} from "react-native";
import RadioButtonRN from "radio-buttons-react-native";
import { Picker } from "@react-native-picker/picker";
import { IconButton, Colors } from "react-native-paper";
import CheckBox from "@react-native-community/checkbox";
import * as ImagePicker from "expo-image-picker";

export default function Trangdangky({ route }) {
  // const { DoiTuongTuyenSinh } = route.params;
  const [data, setData] = useState({
    MaHocSinh: "",
    MatKhau: "",
    HoTen: "",
    NgaySinh: "",
    DanToc: "",
    GioiTinh: false,

    IDTinhNS: "",
    IDHuyenNS: "",
    IDXaNS: "",
    DiaChiNS: "",

    IDTinhTT: "",
    IDQuanTT: "",
    IDXaNS: "",
    DiaChiTT: "",

    IDTinh: "",
    IDQuan: "",
    IDPhuong: "",
    DiaChi: "",
    NguyenVong: [
      {
        Id: 1,
        MaTruong: "aaa",
      },
      {
        Id: 2,
        MaTruong: "bbb",
      },
    ], //Id, MaTruong
    DoiTuongUuTien: [],
    CoGiaiThuongQuocGia: false,
    DanhSachFileDinhKem: [],
    TTMe: {
      HoTenMe: "",
      NgaySinhMe: "",
      CMNDMe: "",
    },
    TTCha: {
      HoTenCha: "",
      NgaySinhCha: "",
      CMNDCha: "",
    },
    TTNguoiGiamHo: {
      HoTenNguoiGiamHo: "",
      NgaySinhNguoiGiamHo: "",
      CMNDNguoiGiamHo: "",
    },
    DienThoaiLienHe: "",
    MailLienHe: "",
  });
  // console.log(data.NguyenVong);
  //#region Picker: Dữ liệu - Thay đổi value khi chọn
  //* Dữ liệu trong dropDown
  const [picker, setPicker] = useState({
    DanToc: [
      {
        id: "1",
        name: "Kinh",
      },
      {
        id: "2",
        name: "Miền núi",
      },
    ],

    IDTinhNS: [
      {
        id: "1",
        name: "HN",
      },
      {
        id: "2",
        name: "HCM",
      },
    ],
    IDHuyenNS: [],
    IDXaNS: [],

    IDTinhTT: [],
    IDHuyenTT: [],
    IDXaTT: [],

    IDTinh: [],
    IDHuyen: [],
    IDXa: [],
  });
  //* Chọn giá trị cho Picker
  const changeValuePicker = (arg) => {
    setData((prevState) => ({
      ...prevState,
      ...arg,
    }));
  };
  //#endregion

  //#region Ảnh: Thêm - Xóa
  //* Dữ liệu ảnh
  const [pickerResult, setPickerResult] = useState(null);
  //* Nén ảnh thành base64
  const _pickImg = async () => {
    let pickerResult = await ImagePicker.launchImageLibraryAsync({
      base64: true,
      allowsEditing: false,
      aspect: [4, 3],
    });

    setPickerResult({
      pickerResult,
    });
  };
  let imageUri = pickerResult
    ? `data:image/png;base64,${pickerResult.base64}`
    : null;
  imageUri && console.log({ uri: imageUri.slice(0, 100) });
  //#endregion

  //#region Nguyện Vọng: Thêm - Xóa - Sửa Value - List
  //* Thêm nguyện vọng
  const ThemNV = () => {
    setData((prevState) => ({
      ...prevState,
      NguyenVong: prevState.NguyenVong.concat([
        {
          Id: Math.random(),
          MaTruong: "",
        },
      ]),
    }));
  };
  //* Xóa nguyện vọng
  const XoaNV = (id) => {
    setData((prevState) => ({
      ...prevState,
      NguyenVong: prevState.NguyenVong.filter((item) => {
        return item.Id !== id;
      }),
    }));
  };
  //* Thay đổi mã trường
  const ChangeMaTruong = (i, nguyenvong, text) => {
    let obj = {
      ...nguyenvong,
      MaTruong: text,
    };
    setData((prevState) => ({
      ...prevState,
      NguyenVong: prevState.NguyenVong.map((item, index) =>
        i === index ? obj : item
      ),
    }));
  };
  //* List nguyện vọng
  const ListNV = () =>
    data.NguyenVong.map((item, index) => {
      return index === 0 ? (
        //* Nguyện vọng mặc định
        <View
          style={{
            backgroundColor: "#d4e2d4",
            padding: 5,
            marginBottom: 15,
            flexDirection: "row",
          }}
          key={index.toString()}
        >
          {/*------------- Left ----------------*/}
          <View
            style={{
              flexDirection: "column",
              flexGrow: 1,
              borderWidth: 1,
            }}
          >
            {/*--------- Top ---------*/}
            <View
              style={{
                flexDirection: "row",
                // height: 40,
              }}
            >
              {/*Top-Left*/}
              <TouchableOpacity onPress={() => {}}>
                <Text
                  style={{
                    padding: 8,
                    borderWidth: 1,
                    textAlignVertical: "center",
                    textAlign: "center",
                  }}
                  numberOfLines={1}
                >
                  Nguyện vọng 1
                </Text>
              </TouchableOpacity>
              {/*Top-Right*/}
              <TextInput
                style={{
                  flexGrow: 1,
                  borderLeftWidth: 1,
                  paddingLeft: 10,
                }}
                placeholder="Mã trường"
                onChangeText={(value) => ChangeMaTruong(index, item, value)}
              >
                {data.NguyenVong[index].MaTruong}
              </TextInput>
            </View>
            {/*--------- Bottom -------*/}
            <View style={{ borderTopWidth: 1 }}>
              <Text
                style={{
                  padding: 8,
                  textAlignVertical: "center",
                  textAlign: "center",
                  color: "#9B9B9B",
                }}
                numberOfLines={1}
              >
                Tên trường
              </Text>
            </View>
          </View>
          {/*------------- Right ----------------*/}
          <View
            style={{
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <IconButton
              icon="plus"
              color={Colors.red500}
              size={25}
              onPress={() => ThemNV()}
            />
          </View>
        </View>
      ) : (
        //*Nguyện vọng thêm
        <View
          style={{
            backgroundColor: "#fcf8e8",
            padding: 5,
            marginBottom: "2%",
            flexDirection: "row",
          }}
          key={index.toString()}
        >
          {/*------------- Left ----------------*/}
          <View
            style={{
              flexDirection: "column",
              flexGrow: 1,
              borderWidth: 1,
            }}
          >
            {/*--------- Top ---------*/}
            <View
              style={{
                flexDirection: "row",
                // height: 40,
              }}
            >
              {/*Top-Left*/}
              <TouchableOpacity onPress={() => {}}>
                <Text
                  style={{
                    padding: 8,
                    borderWidth: 1,
                    textAlignVertical: "center",
                    textAlign: "center",
                  }}
                  numberOfLines={1}
                >
                  Nguyện vọng {index + 1}
                </Text>
              </TouchableOpacity>
              {/*Top-Right*/}
              <TextInput
                style={{
                  flexGrow: 1,
                  borderLeftWidth: 1,
                  paddingLeft: 10,
                }}
                placeholder="Mã trường"
                onChangeText={(value) => ChangeMaTruong(index, item, value)}
              >
                {data.NguyenVong[index].MaTruong}
              </TextInput>
            </View>
            {/*--------- Bottom -------*/}
            <View style={{ borderTopWidth: 1 }}>
              <Text
                style={{
                  padding: 8,
                  textAlignVertical: "center",
                  textAlign: "center",
                  color: "#9B9B9B",
                }}
                numberOfLines={1}
              >
                Tên trường
              </Text>
            </View>
          </View>
          {/*------------- Right ----------------*/}
          <View
            style={{
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <IconButton
              icon="minus"
              color={Colors.red500}
              size={25}
              onPress={() => XoaNV(item.Id)}
            />
          </View>
        </View>
      );
    });
  //#endregion

  //* Ẩn hiện pass
  const [secureTextEntry, setSecureTextEntry] = useState(true);

  return (
    <ScrollView>
      <KeyboardAvoidingView behavior="padding">
        <View style={styles.container}>
          {/* -------------Thông tin học sinh------------- */}
          <View style={styles.block}>
            <View style={styles.title}>
              <Text
                style={{ fontSize: 20, fontWeight: "bold", color: "#145374" }}
              >
                Thông tin học sinh
              </Text>
            </View>
            <View
              style={{
                backgroundColor: "white",
                paddingTop: "10%",
                borderColor: "white",
                borderRadius: 15,
                borderWidth: 0,
                margin: 20,
                padding: "5%",
              }}
            >
              <View style={styles.box}>
                {/* Mã học sinh */}
                <View style={styles.field}>
                  <Text>
                    Mã học sinh <Text style={{ color: "red" }}>*</Text>
                  </Text>
                  <TextInput
                    style={styles.textInput}
                    onChangeText={(value) =>
                      changeValuePicker({ MaHocSinh: value })
                    }
                  >
                    {data.MaHocSinh}
                  </TextInput>
                </View>
                {/* Mật khẩu */}
                <View style={[styles.field, { marginBottom: "5%" }]}>
                  <Text>
                    Mật khẩu <Text style={{ color: "red" }}>*</Text>
                  </Text>
                  <View
                    style={{
                      flexDirection: "row",
                      borderLeftWidth: 0.5,
                      borderBottomWidth: 0.5,
                    }}
                  >
                    <TextInput
                      style={{
                        flexGrow: 1,
                        alignSelf: "center",

                        fontSize: 18,

                        paddingLeft: 5,
                      }}
                      secureTextEntry={secureTextEntry}
                      onChangeText={(value) =>
                        changeValuePicker({ MatKhau: value })
                      }
                    >
                      {data.MatKhau}
                    </TextInput>
                    <IconButton
                      icon="eye"
                      color={Colors.red500}
                      size={18}
                      onPress={() => setSecureTextEntry(!secureTextEntry)}
                    />
                  </View>
                </View>
                {/* Họ và tên */}
                <View style={styles.field}>
                  <Text>
                    Họ và tên <Text style={{ color: "red" }}>*</Text>
                  </Text>
                  <TextInput
                    style={styles.textInput}
                    onChangeText={(value) =>
                      changeValuePicker({ HoTen: value })
                    }
                  >
                    {data.HoTen}
                  </TextInput>
                </View>
                {/* Ngày sinh */}
                <View style={styles.field}>
                  <Text>
                    Ngày sinh <Text style={{ color: "red" }}>*</Text>
                  </Text>
                  <TextInput style={styles.textInput}>
                    {data.NgaySinh}
                  </TextInput>
                </View>
                {/* Dân tộc */}
                <View style={styles.field}>
                  <Text>
                    Dân tộc <Text style={{ color: "red" }}>*</Text>
                  </Text>
                  <Picker
                    selectedValue={data.DanToc}
                    style={{ height: 50, width: "100%" }}
                    onValueChange={(itemValue, itemIndex) =>
                      changeValuePicker({ DanToc: itemValue })
                    }
                  >
                    {picker.DanToc.map((item, index) => {
                      return (
                        <Picker.Item
                          key={index.toString()}
                          label={item.name}
                          value={item.id}
                        />
                      );
                    })}
                  </Picker>
                </View>
                {/* Giới tính */}
                <View style={styles.field}>
                  <Text>Giới tính</Text>
                  <RadioButtonRN
                    data={[
                      {
                        label: "Nữ",
                        status: false,
                      },
                      {
                        label: "Nam",
                        status: true,
                      },
                    ]}
                    circleSize={10}
                    activeColor="#61b15a"
                    style={styles.radioButton}
                    selectedBtn={(e) =>
                      changeValuePicker({ GioiTinh: e.status })
                    }
                  />
                </View>
                {/*//! NƠI SINH ---------------------------------*/}
                <Text
                  style={{ fontSize: 18, fontWeight: "bold", margin: "2%" }}
                >
                  NƠI SINH :
                </Text>
                {/*//! Tỉnh thành phố */}
                <View style={[styles.field, { zIndex: 11003 }]}>
                  <Text>
                    Chọn tỉnh/thành phố <Text style={{ color: "red" }}>*</Text>
                  </Text>
                  <Picker
                    selectedValue={data.IDTinhNS}
                    style={{ height: 50, width: "100%" }}
                    onValueChange={(itemValue, itemIndex) =>
                      changeValuePicker({ IDTinhNS: itemValue })
                    }
                  >
                    {picker.IDTinhNS.map((item, index) => {
                      return (
                        <Picker.Item
                          key={index.toString()}
                          label={item.name}
                          value={item.id}
                        />
                      );
                    })}
                  </Picker>
                </View>
                {/*//! Quận huyện */}
                <View style={[styles.field, { zIndex: 11002 }]}>
                  <Text>
                    Chọn quận/huyện <Text style={{ color: "red" }}>*</Text>
                  </Text>
                  <Picker
                    selectedValue={data.IDHuyenNS}
                    style={{ height: 50, width: "100%" }}
                    onValueChange={(itemValue, itemIndex) =>
                      changeValuePicker({ IDHuyenNS: itemValue })
                    }
                  >
                    {picker.IDHuyenNS.map((item, index) => {
                      return (
                        <Picker.Item
                          key={index.toString()}
                          label={item.name}
                          value={item.id}
                        />
                      );
                    })}
                  </Picker>
                </View>
                {/*//! Phường xã */}
                <View style={[styles.field, { zIndex: 11001 }]}>
                  <Text>
                    Chọn phường/xã <Text style={{ color: "red" }}>*</Text>
                  </Text>
                  <Picker
                    selectedValue={data.IDXaNS}
                    style={{ height: 50, width: "100%" }}
                    onValueChange={(itemValue, itemIndex) =>
                      changeValuePicker({ IDXaNS: itemValue })
                    }
                  >
                    {picker.IDXaNS.map((item, index) => {
                      return (
                        <Picker.Item
                          key={index.toString()}
                          label={item.value}
                          value={item.id}
                        />
                      );
                    })}
                  </Picker>
                </View>
                {/*//! Số nhà đường */}
                <View style={styles.field}>
                  <Text>Số nhà, đường</Text>
                  <TextInput
                    style={styles.textInput}
                    onChangeText={(value) =>
                      changeValuePicker({ DiaChiNS: value })
                    }
                  ></TextInput>
                </View>

                {/*//! HỘ KHẨU THƯỜNG TRÚ ---------------------------------*/}
                <Text
                  style={{ fontSize: 18, fontWeight: "bold", margin: "2%" }}
                >
                  HỘ KHẨU THƯỜNG TRÚ :
                </Text>
                {/*//! Tỉnh thành phố */}
                <View style={[styles.field, { zIndex: 10003 }]}>
                  <Text>
                    Chọn tỉnh/thành phố <Text style={{ color: "red" }}>*</Text>
                  </Text>
                  <Picker
                    selectedValue={data.IDTinhTT}
                    style={{ height: 50, width: "100%" }}
                    onValueChange={(itemValue, itemIndex) =>
                      changeValuePicker({ IDTinhTT: itemValue })
                    }
                  >
                    {picker.IDTinhTT.map((item, index) => {
                      return (
                        <Picker.Item
                          key={index.toString()}
                          label={item.value}
                          value={item.id}
                        />
                      );
                    })}
                  </Picker>
                </View>
                {/*//! Quận huyện */}
                <View style={[styles.field, { zIndex: 10002 }]}>
                  <Text>
                    Chọn quận/huyện <Text style={{ color: "red" }}>*</Text>
                  </Text>
                  <Picker
                    selectedValue={data.IDHuyenTT}
                    style={{ height: 50, width: "100%" }}
                    onValueChange={(itemValue, itemIndex) =>
                      changeValuePicker({ IDHuyenTT: itemValue })
                    }
                  >
                    {picker.IDHuyenTT.map((item, index) => {
                      return (
                        <Picker.Item
                          key={index.toString()}
                          label={item.value}
                          value={item.id}
                        />
                      );
                    })}
                  </Picker>
                </View>
                {/*//! Phường xã */}
                <View style={[styles.field, { zIndex: 10001 }]}>
                  <Text>
                    Chọn phường/xã <Text style={{ color: "red" }}>*</Text>
                  </Text>
                  <Picker
                    selectedValue={data.IDXaTT}
                    style={{ height: 50, width: "100%" }}
                    onValueChange={(itemValue, itemIndex) =>
                      changeValuePicker({ IDXaTT: itemValue })
                    }
                  >
                    {picker.IDXaTT.map((item, index) => {
                      return (
                        <Picker.Item
                          key={index.toString()}
                          label={item.value}
                          value={item.id}
                        />
                      );
                    })}
                  </Picker>
                </View>
                {/*//! Số nhà đường */}
                <View style={styles.field}>
                  <Text>Số nhà, đường</Text>
                  <TextInput
                    style={styles.textInput}
                    onChangeText={(value) =>
                      changeValuePicker({ DiaChiTT: value })
                    }
                  ></TextInput>
                </View>

                {/*//! NƠI Ở HIỆN TẠI ---------------------------------*/}
                <Text
                  style={{ fontSize: 18, fontWeight: "bold", margin: "2%" }}
                >
                  NƠI Ở HIỆN TẠI :
                </Text>
                {/*//! Tỉnh thành phố */}
                <View style={[styles.field, { zIndex: 10003 }]}>
                  <Text>
                    Chọn tỉnh/thành phố <Text style={{ color: "red" }}>*</Text>
                  </Text>
                  <Picker
                    selectedValue={data.IDTinh}
                    style={{ height: 50, width: "100%" }}
                    onValueChange={(itemValue, itemIndex) =>
                      changeValuePicker({ IDTinh: itemValue })
                    }
                  >
                    {picker.IDTinh.map((item, index) => {
                      return (
                        <Picker.Item
                          key={index.toString()}
                          label={item.value}
                          value={item.id}
                        />
                      );
                    })}
                  </Picker>
                </View>
                {/*//! Quận huyện */}
                <View style={[styles.field, { zIndex: 10002 }]}>
                  <Text>
                    Chọn quận/huyện <Text style={{ color: "red" }}>*</Text>
                  </Text>
                  <Picker
                    selectedValue={data.IDHuyen}
                    style={{ height: 50, width: "100%" }}
                    onValueChange={(itemValue, itemIndex) =>
                      changeValuePicker({ IDHuyen: itemValue })
                    }
                  >
                    {picker.IDHuyen.map((item, index) => {
                      return (
                        <Picker.Item
                          key={index.toString()}
                          label={item.value}
                          value={item.id}
                        />
                      );
                    })}
                  </Picker>
                </View>
                {/*//! Phường xã */}
                <View style={[styles.field, { zIndex: 10001 }]}>
                  <Text>
                    Chọn phường/xã <Text style={{ color: "red" }}>*</Text>
                  </Text>
                  <Picker
                    selectedValue={data.IDXa}
                    style={{ height: 50, width: "100%" }}
                    onValueChange={(itemValue, itemIndex) =>
                      changeValuePicker({ IDXa: itemValue })
                    }
                  >
                    {picker.IDXa.map((item, index) => {
                      return (
                        <Picker.Item
                          key={index.toString()}
                          label={item.value}
                          value={item.id}
                        />
                      );
                    })}
                  </Picker>
                </View>
                {/*//! Số nhà đường */}
                <View style={styles.field}>
                  <Text>Số nhà, đường</Text>
                  <TextInput
                    style={styles.textInput}
                    onChangeText={(value) =>
                      changeValuePicker({ DiaChi: value })
                    }
                  ></TextInput>
                </View>
              </View>
            </View>
          </View>
          {/* -------------Đăng ký nguyện vọng------------- */}
          <View style={styles.block}>
            <View style={styles.title}>
              <Text
                style={{ fontSize: 20, fontWeight: "bold", color: "#145374" }}
              >
                Đăng ký nguyện vọng
              </Text>
            </View>
            <View
              style={{
                backgroundColor: "white",
                paddingTop: "10%",
                borderColor: "white",
                borderRadius: 15,
                borderWidth: 0,
                margin: 20,
                padding: "5%",
              }}
            >
              {/* Đăng ký nguyện vọng */}
              <View style={styles.box}>
                {/* <Text>
                  Lưu ý: Nhấn vào nút Nguyện vọng hoặc điền mã trường để lấy tên
                  trường
                </Text> */}
                <ListNV />
              </View>
            </View>
          </View>
          {/* -------------Chế độ ưu tiên------------- */}
          <View style={styles.block}>
            <View style={styles.title}>
              <Text
                style={{ fontSize: 20, fontWeight: "bold", color: "#145374" }}
              >
                Chế độ ưu tiên
              </Text>
            </View>
            <View
              style={{
                backgroundColor: "white",
                paddingTop: "10%",
                borderColor: "white",
                borderRadius: 15,
                borderWidth: 0,
                margin: 20,
                padding: "5%",
              }}
            >
              <View style={styles.box}>
                {/* Đối tượng ưu tiên */}
                <View style={[styles.field, { zIndex: 10003 }]}>
                  <Text>Đối tượng ưu tiên</Text>
                  <Picker
                    selectedValue={data.IDTinh}
                    style={{ height: 50, width: "100%" }}
                    onValueChange={(itemValue, itemIndex) =>
                      changeValuePicker({ IDTinh: itemValue })
                    }
                  >
                    {picker.IDTinh.map((item, index) => {
                      return (
                        <Picker.Item
                          key={index.toString()}
                          label={item.value}
                          value={item.id}
                        />
                      );
                    })}
                  </Picker>

                  {/* Checkbox */}
                  <View
                    style={{
                      margin: 5,
                      backgroundColor: "#FFFFFF",
                      width: "100%",
                      borderColor: "#f1f1f1",
                      alignItems: "stretch",
                      flexDirection: "row",
                      alignSelf: "center",
                      shadowColor: "#000",
                      shadowOffset: {
                        width: 0,
                        height: 5,
                      },
                      shadowOpacity: 0.34,
                      shadowRadius: 6.27,

                      elevation: 10,
                    }}
                  >
                    <CheckBox
                      value={data.CoGiaiThuongQuocGia}
                      tintColors={{ true: "#ff4646", false: "#008577" }}
                      // onValueChange={setData(false)}
                      onValueChange={() =>
                        setData((prevState) => ({
                          ...prevState,
                          CoGiaiThuongQuocGia: !prevState.CoGiaiThuongQuocGia,
                        }))
                      }
                    />
                    <Text style={{ fontSize: 14, alignSelf: "center" }}>
                      Có giải thưởng cấp quốc gia
                    </Text>
                  </View>
                </View>
                <View style={styles.field}>
                  <Text>
                    Bổ sung các giấy tờ liên quan
                    <Text style={{ color: "red" }}> *</Text>
                  </Text>
                  <View
                    style={{
                      marginTop: 5,
                      alignItems: "center",
                      backgroundColor: "#fff5c0",
                    }}
                  >
                    <IconButton
                      icon="camera"
                      color={Colors.red500}
                      size={25}
                      onPress={() => _pickImg()}
                    />
                    {/*--------Camera--------*/}
                    <View
                      style={{
                        flex: 1,
                        alignItems: "center",
                        justifyContent: "center",
                        // paddingTop: Constants.statusBarHeight,
                        backgroundColor: "#ecf0f1",
                      }}
                    >
                      {pickerResult ? (
                        <Image
                          source={{ uri: imageUri }}
                          style={{ width: 200, height: 200 }}
                        />
                      ) : null}
                      {pickerResult ? (
                        <Text style={styles.paragraph}>
                          Keys on pickerResult:{" "}
                          {JSON.stringify(Object.keys(pickerResult))}
                        </Text>
                      ) : null}
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  //? Phân cấp View : container > block = title > box > field(...element)
  container: {
    // backgroundColor:
    width: "100%",
    height: "100%",
    alignItems: "center",
  },
  block: {
    backgroundColor: "#d6d2c4",
    // borderColor: "green",
    // borderWidth: 1,
    width: "100%",
    // margin: "5%",
    // marginBottom: "0%",
  },
  title: {
    backgroundColor: "#d6d2c4",
    position: "absolute",
    top: 5,
    borderRadius: 15,
    // left: "10%",
    alignSelf: "center",
    alignItems: "center",
    width: "60%",
    paddingLeft: 5,
    paddingRight: 5,
    paddingBottom: 5,
    zIndex: 1,
  },
  box: {
    // borderColor: "red",
    // borderWidth: 1,
    borderRightWidth: 0,
    borderBottomWidth: 0,
  },
  field: {
    borderColor: "white",
    borderWidth: 1,
    borderRightWidth: 0,
    borderBottomWidth: 0,
    padding: 5,
    marginBottom: "1%",
  },
  textInput: {
    fontSize: 18,
    borderLeftWidth: 0.5,
    borderBottomWidth: 0.5,
    paddingLeft: 5,
  },
  //? Dropdown
  dropDownStyle: {
    backgroundColor: "#e8e8e8",
    borderColor: "#222831",
    borderWidth: 1,
  },
  labelStyle: {
    fontSize: 16,
    textAlign: "left",
    color: "#000",
  },
  //? Đăng ký nguyện vọng
  dangkynguyenvong: {},
  boxTop: {},
  boxBottom: {},
  crudIcon: {},
});
