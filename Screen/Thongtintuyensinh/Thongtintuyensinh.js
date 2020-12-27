import React, { useState, useEffect } from "react";
import {
  KeyboardAvoidingView,
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  Image,
  TouchableOpacity,
  Button,
  Modal,
  Alert,
} from "react-native";

import { Picker } from "@react-native-picker/picker";

export default function Thongtintuyensinh() {
  const [data, setData] = useState({
    IDTinh: "",
    IDHuyen: "",
    IDXa: "",
    CapTS: "",
    NamTS: "",
  });
  //#region DropPicker: Dữ liệu - Thay đổi value khi chọn
  //* Dữ liệu trong dropDown
  const [picker, setPicker] = useState({
    IDTinh: [
      {
        id: "0",
        name: "Chọn Tỉnh/Thành phố",
      },
    ],
    IDHuyen: [
      {
        id: "0",
        name: "Chọn Quận/Huyện",
      },
    ],
    IDXa: [
      {
        id: "0",
        name: "Chọn Phường/Xã",
      },
    ],
    CapTS: [
      {
        id: "0",
        name: "Chọn cấp tuyển sinh",
      },
      {
        id: "1",
        name: "Cấp 1",
      },
      {
        id: "2",
        name: "Cấp 2",
      },
      {
        id: "3",
        name: "Cấp 3",
      },
    ],
    NamTS: [
      {
        id: "0",
        name: "Chọn năm tuyển sinh",
      },
      {
        id: "1",
        name: "2018",
      },
      {
        id: "2",
        name: "2019",
      },
      {
        id: "3",
        name: "2020",
      },
      {
        id: "4",
        name: "2021",
      },
    ],
  });
  //* Chọn giá trị cho Picker
  const changeValuePicker = (arg) => {
    setData((prevState) => ({
      ...prevState,
      ...arg,
    }));
  };
  //#endregion
  //#region API - Call:  tỉnh-huyện-xã
  //* Tỉnh:
  useEffect(() => {
    fetch(
      "http://192.168.1.13:1998/api/TSAPIService/getaddress?idParent=1&level=1"
    )
      .then((response) => response.json())
      .then((responseJson) => {
        const arrData = [
          {
            id: "0",
            name: "Chọn Tỉnh/Thành phố",
          },
        ];
        responseJson.results.map((item, index) => {
          const obj = {
            id: item.ID,
            name: item.TenDiaChi,
          };
          arrData.push(obj);
        });
        setPicker((prevState) => ({
          ...prevState,
          IDTinhNS: arrData,
          IDTinhTT: arrData,
          IDTinh: arrData,
        }));
      })
      .catch((error) => {
        const arrDataFail = [
          {
            id: "0",
            name: "Chọn Tỉnh/Thành phố",
          },
        ];
        setPicker((prevState) => ({
          ...prevState,
          IDTinh: arrDataFail,
        }));
      });
  }, []);
  //* Huyện
  useEffect(() => {
    fetch(
      `http://192.168.1.13:1998/api/TSAPIService/getaddress?idParent=${data.IDTinh}&level=2`
    )
      .then((response) => response.json())
      .then((responseJson) => {
        const arrData = [
          {
            id: "0",
            name: "Chọn Quận/Huyện",
          },
        ];
        responseJson.results.map((item, index) => {
          const obj = {
            id: item.ID,
            name: item.TenDiaChi,
          };
          arrData.push(obj);
        });
        setPicker((prevState) => ({
          ...prevState,
          IDHuyen: arrData,
        }));
      })
      .catch((error) => {
        setPicker((prevState) => ({
          ...prevState,
          IDHuyen: [
            {
              id: "0",
              name: "Chọn Quận/Huyện",
            },
          ],
        }));
      });
  }, [data.IDTinh]);
  //* Xã
  useEffect(() => {
    fetch(
      `http://192.168.1.13:1998/api/TSAPIService/getaddress?idParent=${data.IDHuyen}&level=3`
    )
      .then((response) => response.json())
      .then((responseJson) => {
        const arrData = [
          {
            id: "0",
            name: "Chọn Phường/Xã",
          },
        ];
        responseJson.results.map((item, index) => {
          const obj = {
            id: item.ID,
            name: item.TenDiaChi,
          };
          arrData.push(obj);
        });
        setPicker((prevState) => ({
          ...prevState,
          IDXa: arrData,
        }));
      })
      .catch((error) => {
        setPicker((prevState) => ({
          ...prevState,
          IDXa: [
            {
              id: "0",
              name: "Chọn Phường/Xã",
            },
          ],
        }));
      });
  }, [data.IDHuyen]);
  //#endregion

  return (
    <View>
      {/*// Tỉnh thành phố */}
      <View style={[styles.field, { zIndex: 11003 }]}>
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
                label={item.name}
                value={item.id}
              />
            );
          })}
        </Picker>
      </View>
      {/*// Quận huyện */}
      <View style={[styles.field, { zIndex: 11002 }]}>
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
                label={item.name}
                value={item.id}
              />
            );
          })}
        </Picker>
      </View>
      {/*// Phường xã */}
      <View style={[styles.field, { zIndex: 11001 }]}>
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
                label={item.name}
                value={item.id}
              />
            );
          })}
        </Picker>
      </View>
      {/*// Cấp tuyển sinh */}
      <View style={[styles.field, { zIndex: 11001 }]}>
        <Text>
          Chọn cấp tuyển sinh <Text style={{ color: "red" }}>*</Text>
        </Text>
        <Picker
          selectedValue={data.CapTS}
          style={{ height: 50, width: "100%" }}
          onValueChange={(itemValue, itemIndex) =>
            changeValuePicker({ CapTS: itemValue })
          }
        >
          {picker.CapTS.map((item, index) => {
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
      {/*// Năm tuyển sinh */}
      <View style={[styles.field, { zIndex: 11001 }]}>
        <Text>
          Chọn năm tuyển sinh <Text style={{ color: "red" }}>*</Text>
        </Text>
        <Picker
          selectedValue={data.NamTS}
          style={{ height: 50, width: "100%" }}
          onValueChange={(itemValue, itemIndex) =>
            changeValuePicker({ NamTS: itemValue })
          }
        >
          {picker.NamTS.map((item, index) => {
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
    </View>
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
    width: "60%",
    backgroundColor: "#d6d2c4",
    position: "absolute",
    top: 5,
    borderRadius: 15,
    // left: "10%",
    alignSelf: "center",
    alignItems: "center",
    flexDirection: "row",
    paddingLeft: 2,
    paddingRight: 2,
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
