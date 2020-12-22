import React, { Component } from "react";
import { Text, View, TextInput, StyleSheet, Alert } from "react-native";

//* Giới hạn độ dài input
const MaxLength = (value, lenght) => {
  var TextLength = value.length.toString();
  if (TextLength == lenght) {
    Alert.alert(`Độ dài quy định của mã là ${lenght} ký tự`);
  }
};
const Inputs = (props) => {
  let view;
  props.checkboxValue.map((checkbox, i) => {
    //* Kiểm tra ô nào check
    if (checkbox.checked) {
      //* Gọi view riêng cho mỗi loại
      switch (i) {
        case 0:
          return (view = (
            <View>
              <TextInput
                style={styles.input}
                placeholder="Nhập mã hồ sơ"
                keyboardType="default"
                value={checkbox.value1}
                multiline={false}
                onChangeText={(value) => {
                  MaxLength(value, 25);
                  props.updateValue(value, 1);
                }}
              />
            </View>
          ));
        case 1:
          return (view = (
            <View>
              <TextInput
                style={styles.input}
                placeholder="Nhập mã học sinh"
                keyboardType="default"
                value={checkbox.value1}
                multiline={false}
                onChangeText={(value) => {
                  MaxLength(value, 50);
                  props.updateValue(value, 1);
                }}
              />
              <TextInput
                style={styles.input}
                secureTextEntry
                value={checkbox.value2}
                placeholder="Nhập mật khẩu"
                keyboardType="default"
                multiline={false}
                onChangeText={(value) => props.updateValue(value, 2)}
              />
            </View>
          ));
        case 2:
          return (view = (
            <View>
              <TextInput
                style={styles.input}
                placeholder="Nhập số báo danh"
                keyboardType="default"
                value={checkbox.value1}
                multiline={false}
                onChangeText={(value) => {
                  MaxLength(value, 25);
                  props.updateValue(value, 1);
                }}
              />
            </View>
          ));
      }
    }
  });
  //! Nếu không có true thì trả ra null
  return view || null;
};
const styles = StyleSheet.create({
  container: {
    alignItems: "stretch",
    width: "100%",
    borderColor: "red",
    borderWidth: 1,
    margin: "2%",
  },
  input: {
    borderRadius: 20,
    borderColor: "#008577",
    borderWidth: 1,
    height: 40,
    marginLeft: "10%",
    marginRight: "1%",
    marginTop: "2%",
    paddingLeft: 20,
    fontSize: 20,
  },
});

export default Inputs;
