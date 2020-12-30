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

import RadioButtonRN from "radio-buttons-react-native";
import { Picker } from "@react-native-picker/picker";
import { IconButton, Colors } from "react-native-paper";
import CheckBox from "@react-native-community/checkbox";
import * as ImagePicker from "expo-image-picker";
import DateTimePicker from "@react-native-community/datetimepicker";
import { useNavigation } from "@react-navigation/native";

export default function Trangdangky({ route }) {
  const { DoiTuongTuyenSinh } = route.params;
  const navigation = useNavigation();

  const [data, setData] = useState({
    MaHocSinh: "",
    MatKhau: "",
    HoTen: "",
    NgaySinh: new Date(),
    DanToc: "",
    GioiTinh: false,

    IDTinhNS: "",
    IDHuyenNS: "",
    IDXaNS: "",
    DiaChiNS: "",

    IDTinhTT: "",
    IDHuyenTT: "",
    IDXaNS: "",
    DiaChiTT: "",

    IDTinh: "",
    IDHuyen: "",
    IDXa: "",
    DiaChi: "",
    NguyenVong: [
      {
        id: "",
        nguyenvong: 1,
        matruong: "",
        idtruong: "",
        tentruong: "Chọn trường",
      },
    ], //Id, MaTruong
    DoiTuongUuTien: [],
    CoGiaiThuongQuocGia: false,
    DanhSachFileDinhKem: [],

    HoTenMe: "",
    NgaySinhMe: "",
    CMNDMe: "",

    HoTenCha: "",
    NgaySinhCha: "",
    CMNDCha: "",

    HoTenNguoiGiamHo: "",
    NgaySinhNguoiGiamHo: "",
    CMNDNguoiGiamHo: "",

    DienThoaiLienHe: "",
    MailLienHe: "",
  });
  //#region DropPicker: Dữ liệu - Thay đổi value khi chọn
  //* Dữ liệu trong dropDown
  const [picker, setPicker] = useState({
    DanToc: [
      {
        id: "",
        name: "Chọn dân tộc",
      },
      {
        id: "1",
        name: "Kinh",
      },
      {
        id: "2",
        name: "Tày",
      },
      {
        id: "3",
        name: "Thái",
      },
      {
        id: "4",
        name: "Mường",
      },
      {
        id: "5",
        name: "Khơ me",
      },
      {
        id: "6",
        name: "Hoa (Hán)",
      },
      {
        id: "7",
        name: "Nùng",
      },
      {
        id: "8",
        name: "H'mông (Mèo)",
      },
      {
        id: "9",
        name: "Dao",
      },
      {
        id: "10",
        name: "Gia - rai",
      },
      {
        id: "11",
        name: "Ê-đê",
      },
      {
        id: "12",
        name: "Ba-na",
      },
      {
        id: "13",
        name: "Sán Chay (Cao Lan-Sán Chỉ)",
      },
      {
        id: "14",
        name: "Chăm (Chàm)",
      },
      {
        id: "15",
        name: "Cơ-ho",
      },
      {
        id: "16",
        name: "Xơ-đăng",
      },
      {
        id: "17",
        name: "Sán Dìu",
      },
      {
        id: "18",
        name: "Hrê",
      },
      {
        id: "19",
        name: "Ra-glai",
      },
      {
        id: "20",
        name: "Mnông",
      },
      {
        id: "21",
        name: "Thổ (4)",
      },
      {
        id: "22",
        name: "XTiêng",
      },
      {
        id: "23",
        name: "Khơ-mú",
      },
      {
        id: "24",
        name: "Bru-Vân Kiều",
      },
      {
        id: "25",
        name: "Cơ-Tu",
      },
      {
        id: "26",
        name: "Giáy",
      },
      {
        id: "27",
        name: "Tà-ôi",
      },
      {
        id: "28",
        name: "Mạ",
      },
      {
        id: "29",
        name: "Gié-Triêng",
      },
      {
        id: "30",
        name: "Co",
      },
      {
        id: "31",
        name: "Chơ - ro",
      },
      {
        id: "32",
        name: "Xinh-mun",
      },
      {
        id: "33",
        name: "Hà Nhì",
      },
      {
        id: "34",
        name: "Chu - ru",
      },
      {
        id: "35",
        name: "Lào",
      },
      {
        id: "36",
        name: "La Chí",
      },
      {
        id: "37",
        name: "Kháng",
      },
      {
        id: "38",
        name: "Phù Lá",
      },
      {
        id: "39",
        name: "La Hủ",
      },
      {
        id: "40",
        name: "La Ha",
      },
      {
        id: "41",
        name: "Pà Thẻn",
      },
      {
        id: "42",
        name: "Lự",
      },
      {
        id: "43",
        name: "Ngái",
      },
      {
        id: "44",
        name: "Chứt",
      },
      {
        id: "45",
        name: "Lô Lô",
      },
      {
        id: "46",
        name: "Mảng",
      },
      {
        id: "47",
        name: "Cơ Lao",
      },
      {
        id: "48",
        name: "Bố Y",
      },
      {
        id: "49",
        name: "Cống",
      },
      {
        id: "50",
        name: "Si La",
      },
      {
        id: "51",
        name: "Pu Péo",
      },
      {
        id: "52",
        name: "Rơ - măm",
      },
      {
        id: "53",
        name: "Brâu",
      },
      {
        id: "54",
        name: "Ơ Đu",
      },
    ],
    // Nơi sinh
    IDTinhNS: [
      {
        id: "",
        name: "Chọn Tỉnh/Thành phố",
      },
    ],
    IDHuyenNS: [
      {
        id: "",
        name: "Chọn Quận/Huyện",
      },
    ],
    IDXaNS: [
      {
        id: "",
        name: "Chọn Phường/Xã",
      },
    ],
    // Thường trú
    IDTinhTT: [
      {
        id: "",
        name: "Chọn Tỉnh/Thành phố",
      },
    ],
    IDHuyenTT: [
      {
        id: "",
        name: "Chọn Quận/Huyện",
      },
    ],
    IDXaTT: [
      {
        id: "",
        name: "Chọn Phường/Xã",
      },
    ],
    // Nơi ở
    IDTinh: [
      {
        id: "",
        name: "Chọn Tỉnh/Thành phố",
      },
    ],
    IDHuyen: [
      {
        id: "",
        name: "Chọn Quận/Huyện",
      },
    ],
    IDXa: [
      {
        id: "",
        name: "Chọn Phường/Xã",
      },
    ],
    DoiTuongUuTien: [],
    listTruong: [
      {
        id: "",
        matruong: "",
        idtruong: "",
        tentruong: "",
      },
    ],
  });
  const [DSdoituonguutien, setDSdoituonguutien] = useState([]);
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

  //#region Nguyện Vọng: Thêm - Xóa - Sửa Value - List - Call API
  //* Data nguyện vọng
  // const [aa, setDaaata] = useState([
  //   {
  //     id: "Mã trường",
  //     name: "Tên",
  //   },
  // ]);
  //* Thêm nguyện vọng
  const ThemNV = () => {
    setData((prevState) => ({
      ...prevState,
      NguyenVong: prevState.NguyenVong.concat([
        {
          id: Math.random(),
          nguyenvong: prevState.NguyenVong.length + 1,
          matruong: "1",
          idtruong: "",
          tentruong: "1",
        },
      ]),
    }));
  };
  //* Xóa nguyện vọng
  const XoaNV = (id) => {
    setData((prevState) => ({
      ...prevState,
      NguyenVong: prevState.NguyenVong.filter((item) => {
        return item.id !== id;
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
            <View>
              <TouchableOpacity onPress={() => {}}>
                <Text
                  style={{
                    padding: 8,
                    textAlignVertical: "center",
                    textAlign: "center",
                  }}
                  numberOfLines={1}
                >
                  Nguyện vọng 1
                </Text>
              </TouchableOpacity>
            </View>
            {/*--------- Bottom -------*/}
            <View style={{ borderTopWidth: 1 }}>
              <Picker
                selectedValue={data.NguyenVong[index].tentruong}
                style={{ height: 40, width: "100%" }}
                onValueChange={(itemValue, itemIndex) =>
                  changeValuePicker({ DanToc: itemValue })
                }
              >
                {picker.listTruong.map((item, index) => {
                  return (
                    <Picker.Item
                      key={index.toString()}
                      label={item.matruong + item.tentruong}
                      value={{
                        nguyenvong: "",
                        matruong: "1",
                        idtruong: "",
                        tentruong: "1",
                      }}
                    />
                  );
                })}
              </Picker>
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
            <View>
              <TouchableOpacity onPress={() => {}}>
                <Text
                  style={{
                    padding: 8,
                    textAlignVertical: "center",
                    textAlign: "center",
                  }}
                  numberOfLines={1}
                >
                  Nguyện vọng {index + 1}
                </Text>
              </TouchableOpacity>
            </View>
            {/*--------- Bottom -------*/}
            <View style={{ borderTopWidth: 1 }}>
              <Picker
                selectedValue={data.DanToc}
                style={{ height: 40, width: "100%" }}
                onValueChange={(itemValue, itemIndex) =>
                  changeValuePicker({ DanToc: itemValue })
                }
              >
                {picker.DanToc.map((item, index) => {
                  return (
                    <Picker.Item
                      key={index.toString()}
                      label={item.name}
                      value={item.name}
                    />
                  );
                })}
              </Picker>
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
              onPress={() => XoaNV(item.id)}
            />
          </View>
        </View>
      );
    });
  //#endregion

  //#region DatePicker
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || data.NgaySinh;
    setShow(Platform.OS === "ios");
    changeValuePicker({ NgaySinh: currentDate });
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode("date");
  };

  const showTimepicker = () => {
    showMode("time");
  };
  //#endregion

  //#region Pass: Ẩn hiện
  //* Ẩn hiện pass
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  //* Ẩn hiện modal
  const [modalVisible, setModalVisible] = useState(false);
  //#endregion

  //#region API - Call:  tỉnh-huyện-xã
  //#region Tỉnh
  //* Tỉnh:
  useEffect(() => {
    fetch(
      "http://192.168.1.13:1998/api/TSAPIService/getaddress?idParent=1&level=1"
    )
      .then((response) => response.json())
      .then((responseJson) => {
        const arrData = [
          {
            id: "",
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
            id: "",
            name: "Chọn Tỉnh/Thành phố",
          },
        ];
        setPicker((prevState) => ({
          ...prevState,
          IDTinhNS: arrDataFail,
          IDTinhTT: arrDataFail,
          IDTinh: arrDataFail,
        }));
      });
  }, [0]);
  //#endregion
  //#region Huyện
  //* Huyện NS
  useEffect(() => {
    //! Cứ khi ID tỉnh thay đổi thì set id và picker huyện-xã về null
    changeValuePicker({ IDHuyenNS: "", IDXaNS: "" });
    setPicker((prevState) => ({
      ...prevState,
      IDHuyenNS: [
        {
          id: "",
          name: "Chọn Quận/Huyện",
        },
      ],
      IDXaNS: [
        {
          id: "",
          name: "Chọn phường/xã",
        },
      ],
    }));
    fetch(
      `http://192.168.1.13:1998/api/TSAPIService/getaddress?idParent=${data.IDTinhNS}&level=2`
    )
      .then((response) => response.json())
      .then((responseJson) => {
        const arrData = [
          {
            id: "",
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
          IDHuyenNS: arrData,
        }));
      })
      .catch((error) => {
        setPicker((prevState) => ({
          ...prevState,
          IDHuyenNS: [
            {
              id: "",
              name: "Chọn Quận/Huyện",
            },
          ],
        }));
      });
  }, [data.IDTinhNS]);
  //* Huyện TT
  useEffect(() => {
    //! Cứ khi ID tỉnh thay đổi thì set id và picker huyện-xã về null
    changeValuePicker({ IDHuyenTT: "", IDXaTT: "" });
    setPicker((prevState) => ({
      ...prevState,
      IDHuyenTT: [
        {
          id: "",
          name: "Chọn Quận/Huyện",
        },
      ],
      IDXaTT: [
        {
          id: "",
          name: "Chọn phường/xã",
        },
      ],
    }));
    fetch(
      `http://192.168.1.13:1998/api/TSAPIService/getaddress?idParent=${data.IDTinhTT}&level=2`
    )
      .then((response) => response.json())
      .then((responseJson) => {
        const arrData = [
          {
            id: "",
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
          IDHuyenTT: arrData,
        }));
      })
      .catch((error) => {
        setPicker((prevState) => ({
          ...prevState,
          IDHuyenTT: [
            {
              id: "",
              name: "Chọn Quận/Huyện",
            },
          ],
        }));
      });
  }, [data.IDTinhTT]);
  //* Huyện
  useEffect(() => {
    //! Cứ khi ID tỉnh thay đổi thì set id và picker huyện-xã về null
    changeValuePicker({ IDHuyen: "", IDXa: "" });
    setPicker((prevState) => ({
      ...prevState,
      IDHuyen: [
        {
          id: "",
          name: "Chọn Quận/Huyện",
        },
      ],
      IDXa: [
        {
          id: "",
          name: "Chọn phường/xã",
        },
      ],
    }));
    fetch(
      `http://192.168.1.13:1998/api/TSAPIService/getaddress?idParent=${data.IDTinh}&level=2`
    )
      .then((response) => response.json())
      .then((responseJson) => {
        const arrData = [
          {
            id: "",
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
              id: "",
              name: "Chọn Quận/Huyện",
            },
          ],
        }));
      });
  }, [data.IDTinh]);
  //#endregion
  //#region Xã
  //* Xã NS
  useEffect(() => {
    //! Cứ khi ID huyện thay đổi thì set id và picker xã về null
    changeValuePicker({ IDXaNS: "" });
    setPicker((prevState) => ({
      ...prevState,
      IDXaNS: [
        {
          id: "",
          name: "Chọn phường/xã",
        },
      ],
    }));
    fetch(
      `http://192.168.1.13:1998/api/TSAPIService/getaddress?idParent=${data.IDHuyenNS}&level=3`
    )
      .then((response) => response.json())
      .then((responseJson) => {
        const arrData = [
          {
            id: "",
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
          IDXaNS: arrData,
        }));
      })
      .catch((error) => {
        setPicker((prevState) => ({
          ...prevState,
          IDXaNS: [
            {
              id: "",
              name: "Chọn Phường/Xã",
            },
          ],
        }));
      });
  }, [data.IDHuyenNS]);
  //* Xã TT
  useEffect(() => {
    //! Cứ khi ID huyện thay đổi thì set id và picker xã về null
    changeValuePicker({ IDXaTT: "" });
    setPicker((prevState) => ({
      ...prevState,
      IDXaTT: [
        {
          id: "",
          name: "Chọn phường/xã",
        },
      ],
    }));
    fetch(
      `http://192.168.1.13:1998/api/TSAPIService/getaddress?idParent=${data.IDHuyenTT}&level=3`
    )
      .then((response) => response.json())
      .then((responseJson) => {
        const arrData = [
          {
            id: "",
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
          IDXaTT: arrData,
        }));
      })
      .catch((error) => {
        setPicker((prevState) => ({
          ...prevState,
          IDXaTT: [
            {
              id: "",
              name: "Chọn Phường/Xã",
            },
          ],
        }));
      });
  }, [data.IDHuyenTT]);
  //* Xã
  useEffect(() => {
    //! Cứ khi ID huyện thay đổi thì set id và picker xã về null
    changeValuePicker({ IDXa: "" });
    setPicker((prevState) => ({
      ...prevState,
      IDXa: [
        {
          id: "",
          name: "Chọn phường/xã",
        },
      ],
    }));
    fetch(
      `http://192.168.1.13:1998/api/TSAPIService/getaddress?idParent=${data.IDHuyen}&level=3`
    )
      .then((response) => response.json())
      .then((responseJson) => {
        const arrData = [
          {
            id: "",
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
              id: "",
              name: "Chọn Phường/Xã",
            },
          ],
        }));
      });
  }, [data.IDHuyen]);
  //#endregion
  //#region Trường
  useEffect(() => {
    fetch(
      `http://192.168.1.13:1998/api/TSAPIService/getschools?idTinh_ThuongTru=${data.IDTinhTT}&Cap=${DoiTuongTuyenSinh}`
    )
      .then((response) => response.json())
      .then((responseJson) => {
        const arrData = [
          {
            id: "",
            idtruong: "",
            matruong: "",
            tentruong: "Chọn trường",
          },
        ];
        responseJson.results.map((item, index) => {
          const obj = {
            id: index + 1,
            idtruong: item.IDTruong,
            matruong: item.MaTruong,
            tentruong: item.TenTruong,
          };
          arrData.push(obj);
        });
        setPicker((prevState) => ({
          ...prevState,
          listTruong: arrData,
        }));
      })
      .catch((error) => error);
  }, [data.IDTinhTT]);
  //#endregion
  //#region Đối tượng ưu tiên
  useEffect(() => {
    fetch("http://192.168.1.13:1998/api/TSAPIService/getdoituonguutien")
      .then((response) => response.json())
      .then((responseJson) => {
        const arrData = [];
        responseJson.results.map((itemParent, indexParent) => {
          const obj = {
            TenLoai: itemParent.TenLoai,
            lstDanhSach: itemParent.lstDanhSach.map(
              (itemChild, indexChild) => ({
                Ma: itemChild.Ma,
                Ten: itemChild.Ten,
                IDLoaiUuTien: itemChild.IDLoaiUuTien,
                check: false,
              })
            ),
          };
          arrData.push(obj);
        });
        setDSdoituonguutien(arrData);
      })
      .catch((error) => setDSdoituonguutien([]));
  }, [0]);
  //#endregion
  //#endregion
  const Them_DoiTuongUuTien = (indexParent, indexChild) => {
    setData((prevState) => ({
      ...prevState,
      DoiTuongUuTien: prevState.DoiTuongUuTien.concat({
        id: indexParent.toString() + indexChild.toString(),
        ma: DSdoituonguutien[indexParent].lstDanhSach[indexChild].Ma,
      }),
    }));
    const arr = DSdoituonguutien.map(
      (item_DSdoituonguutien, index_DSdoituonguutien) => {}
    );
    console.log(data.DoiTuongUuTien);
  };
  const Xoa_DoiTuongUuTien = (indexParent, indexChild) => {
    setData((prevState) => ({
      ...prevState,
      DoiTuongUuTien: prevState.DoiTuongUuTien.filter((item) => {
        return item.id !== indexParent.toString() + indexChild.toString();
      }),
    }));
  };
  const DSDoiTuongUuTien = () => {
    return (
      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            marginTop: 22,
          }}
        >
          <View
            style={{
              width: "95%",
              backgroundColor: "white",
              borderRadius: 20,
              padding: 10,
              alignItems: "center",
              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.25,
              shadowRadius: 3.84,
              elevation: 5,
            }}
          >
            <ScrollView
              nestedScrollEnabled
              style={{ maxHeight: 500, padding: 20 }}
            >
              {DSdoituonguutien.map((itemParent, indexParent) => {
                return (
                  <View
                    style={{
                      paddingTop: 20,
                      paddingVertical: 20,
                      flexDirection: "column",
                    }}
                  >
                    <Text
                      style={{
                        color: Colors.red500,
                        fontWeight: "bold",
                        paddingLeft: 2,
                      }}
                    >
                      ● {itemParent.TenLoai}
                    </Text>
                    {itemParent.lstDanhSach.map((itemChild, indexChild) => {
                      return (
                        <View
                          style={{
                            marginVertical: 5,
                            backgroundColor: "#FFFFFF",
                            width: "90%",
                            borderColor: "#f1f1f1",

                            flexDirection: "row",
                            alignSelf: "center",
                            justifyContent: "flex-start",
                            padding: 5,
                            paddingRight: 10,
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
                            style={{ alignSelf: "center" }}
                            value={itemChild.check}
                            tintColors={{ true: "#ff4646", false: "#008577" }}
                            // onValueChange={setData(false)}
                            onValueChange={(value) =>
                              value
                                ? Them_DoiTuongUuTien(indexParent, indexChild)
                                : Xoa_DoiTuongUuTien(indexParent, indexChild)
                            }
                          />
                          <Text
                            style={{
                              fontSize: 15,
                              flexShrink: 1,
                              textAlign: "justify",
                              flexGrow: 1,
                            }}
                          >
                            {itemChild.Ma}-{itemChild.Ten}
                          </Text>
                        </View>
                      );
                    })}
                  </View>
                );
              })}
            </ScrollView>
            <TouchableOpacity
              style={{
                backgroundColor: "#F194FF",
                borderRadius: 20,
                padding: 10,
                elevation: 2,
                backgroundColor: "#2196F3",
              }}
              onPress={() => {
                setModalVisible(!modalVisible);
              }}
            >
              <Text
                style={{
                  color: "white",
                  fontWeight: "bold",
                  textAlign: "center",
                }}
              >
                Chấp nhận
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    );
  };
  //#region API - Push: Đăng ký
  //* Đăng ký
  const DangKy = async () => {
    try {
      await fetch("http://192.168.1.13:1998/api/TSAPIService/dangkytuyensinh", {
        method: "POST",
        mode: "no-cors",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          MaHocSinh: "a",
          MatKhau: "a",
          HoTen: "a",
          NgaySinh: "a",
          DanToc: "a",
          GioiTinh: false,

          IDTinhNS: 1,
          IDHuyenNS: 1,
          IDXaNS: 1,
          DiaChiNS: "a",

          IDTinhTT: 1,
          IDQuanTT: 1,
          IDXaTT: 1,
          DiaChiTT: "a",

          IDTinh: 1,
          IDQuan: 1,
          IDPhuong: 1,
          DiaChi: "a",
          lstNguyenVong: [],
          lstDoiTuongUuTien: [],
          CoGiaiThuongQuocGia: false,
          lstFileDinhKem: [],

          HoTenMe: "a",
          NamSinhMe: "a",
          CMNDMe: "a",

          HoTenCha: "a",
          NamSinhCha: "a",
          CMNDCha: "a",

          HoTenNguoiGiamHo: "a",
          NamSinhNguoiGiamHo: "a",
          CMNDNguoiGiamHo: "a",

          DienThoai: "a",
          Email: "a",
        }),
      })
        .then((response) => response.json())
        .then((responseJson) => console.log(responseJson));
    } catch (e) {
      console.log(e);
    }
  };
  //#endregion
  return (
    <ScrollView>
      <View style={styles.container}>
        {/* -------------Thông tin học sinh------------- */}
        <View style={styles.block}>
          <View style={styles.title}>
            <Text
              style={{
                fontSize: 20,
                fontWeight: "bold",
                color: "#145374",
                flexGrow: 1,
                textAlign: "center",
              }}
              numberOfLines={1}
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
                  onChangeText={(value) => changeValuePicker({ HoTen: value })}
                >
                  {data.HoTen}
                </TextInput>
              </View>
              {/* Ngày sinh */}
              <View style={styles.field}>
                <Text>
                  Ngày sinh <Text style={{ color: "red" }}>*</Text>
                </Text>
                <View
                  style={{
                    flexDirection: "row",
                    borderLeftWidth: 0.5,
                    borderBottomWidth: 0.5,
                  }}
                >
                  <Text
                    style={{
                      flexGrow: 1,
                      alignSelf: "center",

                      fontSize: 18,

                      paddingLeft: 5,
                    }}
                  >
                    {data.NgaySinh.toDateString()}
                  </Text>
                  <IconButton
                    icon="calendar"
                    color={Colors.red500}
                    size={18}
                    onPress={showDatepicker}
                  />
                  {show && (
                    <DateTimePicker
                      testID="dateTimePicker"
                      value={data.NgaySinh}
                      mode={mode}
                      is24Hour={true}
                      display="default"
                      onChange={onChange}
                      // onConfirm={handleConfirm}
                      // onCancel={handleCancel}
                    />
                  )}
                </View>
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
                        value={item.name}
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
                  selectedBtn={(e) => changeValuePicker({ GioiTinh: e.status })}
                />
              </View>
              {/*//? NƠI SINH ---------------------------------*/}
              <Text style={{ fontSize: 18, fontWeight: "bold", margin: "2%" }}>
                NƠI SINH :
              </Text>
              {/*// Tỉnh thành phố */}
              <View style={styles.field}>
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
              {/*// Quận huyện */}
              <View style={styles.field}>
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
              {/*// Phường xã */}
              <View style={styles.field}>
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
                        label={item.name}
                        value={item.id}
                      />
                    );
                  })}
                </Picker>
              </View>
              {/*// Số nhà đường */}
              <View style={styles.field}>
                <Text>Số nhà, đường</Text>
                <TextInput
                  style={styles.textInput}
                  onChangeText={(value) =>
                    changeValuePicker({ DiaChiNS: value })
                  }
                >
                  {data.DiaChiNS}
                </TextInput>
              </View>

              {/*//? HỘ KHẨU THƯỜNG TRÚ ---------------------------------*/}
              <Text style={{ fontSize: 18, fontWeight: "bold", margin: "2%" }}>
                HỘ KHẨU THƯỜNG TRÚ :
              </Text>
              {/*// Tỉnh thành phố */}
              <View style={styles.field}>
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
                        label={item.name}
                        value={item.id}
                      />
                    );
                  })}
                </Picker>
              </View>
              {/*// Quận huyện */}
              <View style={styles.field}>
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
                        label={item.name}
                        value={item.id}
                      />
                    );
                  })}
                </Picker>
              </View>
              {/*// Phường xã */}
              <View style={styles.field}>
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
                        label={item.name}
                        value={item.id}
                      />
                    );
                  })}
                </Picker>
              </View>
              {/*// Số nhà đường */}
              <View style={styles.field}>
                <Text>Số nhà, đường</Text>
                <TextInput
                  style={styles.textInput}
                  onChangeText={(value) =>
                    changeValuePicker({ DiaChiTT: value })
                  }
                >
                  {data.DiaChiTT}
                </TextInput>
              </View>

              {/*//? NƠI Ở HIỆN TẠI ---------------------------------*/}
              <Text style={{ fontSize: 18, fontWeight: "bold", margin: "2%" }}>
                NƠI Ở HIỆN TẠI :
              </Text>
              {/*// Tỉnh thành phố */}
              <View style={styles.field}>
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
              <View style={styles.field}>
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
              <View style={styles.field}>
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
              {/*// Số nhà đường */}
              <View style={styles.field}>
                <Text>Số nhà, đường</Text>
                <TextInput
                  style={styles.textInput}
                  onChangeText={(value) => changeValuePicker({ DiaChi: value })}
                >
                  {data.DiaChi}
                </TextInput>
              </View>
            </View>
          </View>
        </View>
        {/* -------------Đăng ký nguyện vọng------------- */}
        <View style={styles.block}>
          <View style={styles.title}>
            <Text
              style={{
                fontSize: 20,
                fontWeight: "bold",
                color: "#145374",
                flexGrow: 1,
                textAlign: "center",
              }}
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
              style={{
                fontSize: 20,
                fontWeight: "bold",
                color: "#145374",
                flexGrow: 1,
                textAlign: "center",
              }}
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
              <View style={styles.field}>
                <Text>Đối tượng ưu tiên</Text>
                <View
                  style={{
                    flexDirection: "row",
                    borderLeftWidth: 0.5,
                    borderBottomWidth: 0.5,
                  }}
                >
                  <Text
                    style={{
                      flexGrow: 1,
                      alignSelf: "center",

                      fontSize: 18,

                      paddingLeft: 5,
                    }}
                  >
                    0 mục đã chọn
                  </Text>
                  <IconButton
                    icon="file"
                    color={Colors.red500}
                    size={20}
                    onPress={() => setModalVisible(true)}
                  />
                </View>
                <DSDoiTuongUuTien />
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
                    // onPress={() => _pickImg()}
                    onPress={() => DangKy()}
                    // onPress={() => {
                    //   navigation.navigate("Images");
                    // }}
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
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  //? Phân cấp View : container > block = title > box > field(...element)
  container: {
    width: "100%",
    height: "100%",
    alignItems: "center",
  },
  block: {
    backgroundColor: "#d6d2c4",
    width: "100%",
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
