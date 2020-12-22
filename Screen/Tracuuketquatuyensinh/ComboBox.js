import React, { useState } from "react";
import { Text, View, StyleSheet, Alert } from "react-native";
import CheckBox from "@react-native-community/checkbox";
import { Button } from "galio-framework";
import Inputs from "./Input";

import { NavigationContainer, useNavigation } from "@react-navigation/native";

export default function ComboBox() {
  //* State :
  const navigation = useNavigation();
  const [checkboxValue, setCheckboxValue] = React.useState([
    {
      label: "Mã hồ sơ tuyển sinh",
      value1: "",
      type: "1",
      checked: true,
    },
    { label: "Mã học sinh", value1: "", value2: "", type: "2", checked: false },
    {
      label: "Số báo danh (Nếu có)",
      value1: "",
      type: "3",
      checked: false,
    },
  ]);
  const [data, setData] = React.useState();
  //* Lấy API
  const getApi = async (type, value1, value2) => {
    let mahoso = "",
      mahocsinh = "",
      matkhau = "",
      sbd = "";
    switch (type) {
      case "1":
        mahoso = value1;
        break;
      case "2":
        mahocsinh = value1;
        matkhau = value2;
        break;
      case "3":
        sbd = value1;
        break;
      default:
        break;
    }
    const URL = `http://192.168.1.13:1998/api/TSAPIService/tracuuketqua?type=${type}&mahoso=${mahoso}&mahocsinh=${mahocsinh}&matkhau=${matkhau}&sbd=${sbd}`;
    const results = await fetch(URL).then((x) => x.json());

    let a = results.data;

    setData(a);
    // console.log(type, value1, value2);
    // console.log(mahoso, mahocsinh, sbd);
    // console.log(URL);
    // console.log(data);
  };
  //TODO Kiểm tra lại điều kiện chỗ checkboxValue[1] tại sao chỉ check null của ô 1
  //* Kiểm tra value tại ô đó có rỗng không
  const EmptyOrNot = (i) => {
    return i == 0 || 2
      ? checkboxValue[i].value1 == ""
        ? true
        : false
      : checkboxValue[i].value1 == "" || checkboxValue[i].value2 == ""
      ? true
      : false;
  };

  //* Sự kiện cho nút Tra cứu
  const onSubmit = () => {
    let type = "",
      value1 = "",
      value2 = "";
    for (var i = 0; i < checkboxValue.length; i++) {
      if (checkboxValue[i].checked) {
        EmptyOrNot(i)
          ? Alert.alert("Mời nhập đầy đủ thông tin trước khi tra cứu")
          : ((type = checkboxValue[i].type),
            (value1 = checkboxValue[i].value1),
            (value2 = checkboxValue[i].value2),
            getApi(type, value1, value2));
      }
    }
  };
  //* Cập nhật value
  //#region Hàm update với logic cũ
  // const updateValue = (value, checkIndex, valueIndex) => {
  //   const newValue = checkboxValue.map((checkbox, i) => {
  //     switch (checkIndex) {
  //       case 0:
  //         return {
  //           ...checkbox,
  //           value1: value,
  //         };
  //       case 1:
  //         return valueIndex == 1
  //           ? {
  //               ...checkbox,
  //               value1: value,
  //             }
  //           : {
  //               ...checkbox,
  //               value2: value,
  //             };
  //       case 2:
  //         return {
  //           ...checkbox,
  //           value1: value,
  //         };
  //     }
  //   });
  //   setCheckboxValue(newValue);
  // };
  //#endregion
  const updateValue = (value, valueIndex) => {
    const newValue = checkboxValue.map((checkbox, i) => {
      return checkbox.checked
        ? valueIndex == 1
          ? {
              ...checkbox,
              value1: value,
            }
          : {
              ...checkbox,
              value2: value,
            }
        : {
            ...checkbox,
          };
    });
    setCheckboxValue(newValue);
  };
  //* Chỉ cho check 1
  const checkboxHandler = (value, index) => {
    const newValue = checkboxValue.map((checkbox, i) => {
      if (i !== index)
        return {
          ...checkbox,
          checked: false,
        };
      if (i === index) {
        const item = {
          ...checkbox,
          checked: !checkbox.checked,
        };
        return item;
      }
      return checkbox;
    });
    setCheckboxValue(newValue);
  };
  return (
    <View style={styles.container}>
      <View style={styles.checkBoxContainer}>
        {/* Checkbox */}
        {checkboxValue.map((checkbox, i) => (
          <View key={i} style={styles.perCheckContainer}>
            <CheckBox
              style={styles.checkbox}
              value={checkbox.checked}
              tintColors={{ true: "#ff4646", false: "#008577" }}
              onValueChange={(value) => checkboxHandler(value, i)}
            />
            <Text style={styles.label}>{"" + checkbox.label + ""}</Text>
          </View>
        ))}
      </View>
      {/* Input */}
      <View style={styles.inputContainer}>
        <Inputs checkboxValue={checkboxValue} updateValue={updateValue} />
        {/* <Text>0: {checkboxValue[0].value1}</Text>
        <Text>1: {checkboxValue[1].value1}</Text>
        <Text>1: {checkboxValue[1].value2}</Text>
        <Text>2: {checkboxValue[2].value1}</Text> */}
      </View>
      {/* Button */}
      <View style={[styles.inputContainer, { borderSize: 0, borderColor: "" }]}>
        <Button
          round
          style={styles.button2}
          color="#61b15a"
          onPress={() => {
            onSubmit(),
              navigation.navigate("Ketqua", {
                data: data,
              });
          }}
          // onPress={() => onSubmit()}
        >
          Tra cứu
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: "5%",
    marginBottom: "5%",
    width: "94%",
    backgroundColor: "#d6e0f0",
    // borderColor: "blue",d6e0f0,9ad3bc
    // borderWidth: 1,
    alignItems: "center",
    //* bóng mờ
    borderBottomRightRadius: 25,
    borderTopRightRadius: 25,

    borderRightWidth: 1,
    borderTopWidth: 1,
    borderBottomWidth: 1,

    borderColor: "#fff3e2",

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,

    elevation: 10,
  },
  checkBoxContainer: {
    alignItems: "stretch",
    marginTop: "7%",
    marginLeft: "5%",
    marginRight: "5%",
    width: "80%",
  },
  perCheckContainer: {
    backgroundColor: "#FFFFFF",
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,

    borderLeftWidth: 2,
    borderBottomWidth: 1.2,
    borderRightWidth: 2,
    borderTopWidth: 1.2,

    borderColor: "#f1f1f1",

    alignItems: "stretch",
    flexDirection: "row",
    marginBottom: 10,
    marginLeft: "10%",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,

    elevation: 10,
  },
  inputContainer: {
    alignItems: "stretch",
    width: "95%",
    margin: "2%",
  },
  checkbox: {
    margin: "4%",
  },
  label: {
    fontSize: 18,
    paddingTop: "5.7%",
  },
  button1: {
    marginLeft: "10%",
    marginBottom: "5%",
    alignSelf: "center",
    borderRadius: 25,
    shadowColor: "rgba(46, 229, 157, 0.4)",
    shadowOpacity: 1.5,
    elevation: 8,
    shadowRadius: 20,
    shadowOffset: { width: 1, height: 13 },
    backgroundColor: "#2EE59D",
    color: "#FFFFFF",
  },
  button2: {
    marginLeft: "10%",
    marginBottom: "5%",
    alignSelf: "center",
    borderRadius: 25,
    textShadowColor: "black",
    backgroundColor: "#008577",
    shadowColor: "rgba(0, 0, 0, 0.1)",
    shadowOpacity: 0.8,
    elevation: 6,
    shadowRadius: 15,
    shadowOffset: { width: 1, height: 13 },
  },
});
