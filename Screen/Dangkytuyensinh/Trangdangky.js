import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  Button,
} from "react-native";
import RadioButtonRN from "radio-buttons-react-native";
import DropDownPicker from "react-native-dropdown-picker";
import { TouchableOpacity } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/FontAwesome";

export default function Trangdangky({ route }) {
  // const { DoiTuongTuyenSinh } = route.params;
  const [data, setData] = useState({});
  return (
    <ScrollView>
      <View style={styles.container}>
        {/* Thông tin học sinh */}
        <View style={styles.block}>
          <View style={styles.title}>
            <Text style={{ fontSize: 20 }}>Thông tin học sinh</Text>
          </View>
          <View
            style={{
              borderColor: "white",
              borderRadius: 15,
              borderWidth: 1,
              margin: 20,
              padding: "5%",
            }}
          >
            <View style={styles.box}>
              {/*//! Mã học sinh */}
              <View style={styles.field}>
                <Text>
                  Mã học sinh <Text style={{ color: "red" }}>*</Text>
                </Text>
                <TextInput style={styles.textInput}></TextInput>
              </View>
              {/*//! Mật khẩu */}
              <View style={[styles.field, { marginBottom: "5%" }]}>
                <Text>
                  Mật khẩu <Text style={{ color: "red" }}>*</Text>
                </Text>
                <TextInput style={styles.textInput}></TextInput>
              </View>
              {/*//! Họ và tên */}
              <View style={styles.field}>
                <Text>
                  Họ và tên <Text style={{ color: "red" }}>*</Text>
                </Text>
                <TextInput style={styles.textInput}></TextInput>
              </View>
              {/*//! Ngày sinh */}
              <View style={styles.field}>
                <Text>
                  Ngày sinh <Text style={{ color: "red" }}>*</Text>
                </Text>
                <TextInput style={styles.textInput}></TextInput>
              </View>
              {/*//! Dân tộc */}
              <View style={[styles.field, { zIndex: 10000 }]}>
                <Text>
                  Dân tộc <Text style={{ color: "red" }}>*</Text>
                </Text>
                <DropDownPicker
                  items={[]}
                  // Thanh tìm kiếm
                  searchable={true}
                  searchablePlaceholder="Nhập thông tin ..."
                  searchablePlaceholderTextColor="#707070"
                  searchableError={() => <Text>Không có dữ liệu</Text>}
                  // Style Item
                  defaultNull
                  placeholder="CHỌN DÂN TỘC"
                  dropDownMaxHeight={240}
                  dropDownStyle={styles.dropDownStyle}
                  labelStyle={styles.labelStyle}
                  activeLabelStyle={{ color: "#61b15a" }}
                  // onClose={Keyboard.dismiss()}
                  // onChangeItem={(item) => this.changeValueA(item)}
                />
              </View>
              {/*//! Giới tính */}
              <View style={styles.field}>
                <Text>Giới tính</Text>
                <RadioButtonRN
                  data={[
                    {
                      label: "Nữ",
                    },
                    {
                      label: "Nam",
                    },
                  ]}
                  circleSize={10}
                  activeColor="#61b15a"
                  style={styles.radioButton}
                  // selectedBtn={(e) => console.log(e)}
                />
              </View>
              {/*//! NƠI SINH ---------------------------------*/}
              <Text style={{ fontSize: 18, fontWeight: "bold", margin: "2%" }}>
                NƠI SINH :
              </Text>
              {/*//! Tỉnh thành phố */}
              <View style={[styles.field, { zIndex: 11003 }]}>
                <Text>
                  Chọn tỉnh/thành phố <Text style={{ color: "red" }}>*</Text>
                </Text>
                <DropDownPicker
                  items={[]}
                  // Thanh tìm kiếm
                  searchable={true}
                  searchablePlaceholder="Nhập thông tin ..."
                  searchablePlaceholderTextColor="#707070"
                  searchableError={() => <Text>Không có dữ liệu</Text>}
                  // Style Item
                  defaultNull
                  placeholder="Chọn tỉnh/thành phố"
                  placeholderStyle={styles.placeholderStyle}
                  dropDownMaxHeight={120}
                  dropDownStyle={styles.dropDownStyle}
                  labelStyle={styles.labelStyle}
                  activeLabelStyle={{ color: "#61b15a" }}
                  // onClose={Keyboard.dismiss()}
                  // onChangeItem={(item) => this.changeValueA(item)}
                />
              </View>
              {/*//! Quận huyện */}
              <View style={[styles.field, { zIndex: 11002 }]}>
                <Text>
                  Chọn quận/huyện <Text style={{ color: "red" }}>*</Text>
                </Text>
                <DropDownPicker
                  items={[]}
                  // Thanh tìm kiếm
                  searchable={true}
                  searchablePlaceholder="Nhập thông tin ..."
                  searchablePlaceholderTextColor="#707070"
                  searchableError={() => <Text>Không có dữ liệu</Text>}
                  // Style Item
                  defaultNull
                  placeholder="Chọn quận/huyện"
                  placeholderStyle={styles.placeholderStyle}
                  dropDownMaxHeight={120}
                  dropDownStyle={styles.dropDownStyle}
                  labelStyle={styles.labelStyle}
                  activeLabelStyle={{ color: "#61b15a" }}
                  // onClose={Keyboard.dismiss()}
                  // onChangeItem={(item) => this.changeValueA(item)}
                />
              </View>
              {/*//! Phường xã */}
              <View style={[styles.field, { zIndex: 11001 }]}>
                <Text>
                  Chọn phường/xã <Text style={{ color: "red" }}>*</Text>
                </Text>
                <DropDownPicker
                  items={[]}
                  // Thanh tìm kiếm
                  searchable={true}
                  searchablePlaceholder="Nhập thông tin ..."
                  searchablePlaceholderTextColor="#707070"
                  searchableError={() => <Text>Không có dữ liệu</Text>}
                  // Style Item
                  defaultNull
                  placeholder="Chọn phường/xã"
                  placeholderStyle={styles.placeholderStyle}
                  dropDownMaxHeight={120}
                  dropDownStyle={styles.dropDownStyle}
                  labelStyle={styles.labelStyle}
                  activeLabelStyle={{ color: "#61b15a" }}
                  // onClose={Keyboard.dismiss()}
                  // onChangeItem={(item) => this.changeValueA(item)}
                />
              </View>
              {/*//! Số nhà đường */}
              <View style={styles.field}>
                <Text>Số nhà, đường</Text>
                <TextInput style={styles.textInput}></TextInput>
              </View>

              {/*//! HỘ KHẨU THƯỜNG TRÚ ---------------------------------*/}
              <Text style={{ fontSize: 18, fontWeight: "bold", margin: "2%" }}>
                HỘ KHẨU THƯỜNG TRÚ :
              </Text>
              {/*//! Tỉnh thành phố */}
              <View style={[styles.field, { zIndex: 10003 }]}>
                <Text>
                  Chọn tỉnh/thành phố <Text style={{ color: "red" }}>*</Text>
                </Text>
                <DropDownPicker
                  items={[]}
                  // Thanh tìm kiếm
                  searchable={true}
                  searchablePlaceholder="Nhập thông tin ..."
                  searchablePlaceholderTextColor="#707070"
                  searchableError={() => <Text>Không có dữ liệu</Text>}
                  // Style Item
                  defaultNull
                  placeholder="Chọn tỉnh/thành phố"
                  placeholderStyle={styles.placeholderStyle}
                  dropDownMaxHeight={120}
                  dropDownStyle={styles.dropDownStyle}
                  labelStyle={styles.labelStyle}
                  activeLabelStyle={{ color: "#61b15a" }}
                  // onClose={Keyboard.dismiss()}
                  // onChangeItem={(item) => this.changeValueA(item)}
                />
              </View>
              {/*//! Quận huyện */}
              <View style={[styles.field, { zIndex: 10002 }]}>
                <Text>
                  Chọn quận/huyện <Text style={{ color: "red" }}>*</Text>
                </Text>
                <DropDownPicker
                  items={[]}
                  // Thanh tìm kiếm
                  searchable={true}
                  searchablePlaceholder="Nhập thông tin ..."
                  searchablePlaceholderTextColor="#707070"
                  searchableError={() => <Text>Không có dữ liệu</Text>}
                  // Style Item
                  defaultNull
                  placeholder="Chọn quận/huyện"
                  placeholderStyle={styles.placeholderStyle}
                  dropDownMaxHeight={120}
                  dropDownStyle={styles.dropDownStyle}
                  labelStyle={styles.labelStyle}
                  activeLabelStyle={{ color: "#61b15a" }}
                  // onClose={Keyboard.dismiss()}
                  // onChangeItem={(item) => this.changeValueA(item)}
                />
              </View>
              {/*//! Phường xã */}
              <View style={[styles.field, { zIndex: 10001 }]}>
                <Text>
                  Chọn phường/xã <Text style={{ color: "red" }}>*</Text>
                </Text>
                <DropDownPicker
                  items={[]}
                  // Thanh tìm kiếm
                  searchable={true}
                  searchablePlaceholder="Nhập thông tin ..."
                  searchablePlaceholderTextColor="#707070"
                  searchableError={() => <Text>Không có dữ liệu</Text>}
                  // Style Item
                  defaultNull
                  placeholder="Chọn phường/xã"
                  placeholderStyle={styles.placeholderStyle}
                  dropDownMaxHeight={120}
                  dropDownStyle={styles.dropDownStyle}
                  labelStyle={styles.labelStyle}
                  activeLabelStyle={{ color: "#61b15a" }}
                  // onClose={Keyboard.dismiss()}
                  // onChangeItem={(item) => this.changeValueA(item)}
                />
              </View>
              {/*//! Số nhà đường */}
              <View style={styles.field}>
                <Text>Số nhà, đường</Text>
                <TextInput style={styles.textInput}></TextInput>
              </View>

              {/*//! NƠI Ở HIỆN TẠI ---------------------------------*/}
              <Text style={{ fontSize: 18, fontWeight: "bold", margin: "2%" }}>
                NƠI Ở HIỆN TẠI :
              </Text>
              {/*//! Tỉnh thành phố */}
              <View style={[styles.field, { zIndex: 10003 }]}>
                <Text>
                  Chọn tỉnh/thành phố <Text style={{ color: "red" }}>*</Text>
                </Text>
                <DropDownPicker
                  items={[]}
                  // Thanh tìm kiếm
                  searchable={true}
                  searchablePlaceholder="Nhập thông tin ..."
                  searchablePlaceholderTextColor="#707070"
                  searchableError={() => <Text>Không có dữ liệu</Text>}
                  // Style Item
                  defaultNull
                  placeholder="Chọn tỉnh/thành phố"
                  placeholderStyle={styles.placeholderStyle}
                  dropDownMaxHeight={120}
                  dropDownStyle={styles.dropDownStyle}
                  labelStyle={styles.labelStyle}
                  activeLabelStyle={{ color: "#61b15a" }}
                  // onClose={Keyboard.dismiss()}
                  // onChangeItem={(item) => this.changeValueA(item)}
                />
              </View>
              {/*//! Quận huyện */}
              <View style={[styles.field, { zIndex: 10002 }]}>
                <Text>
                  Chọn quận/huyện <Text style={{ color: "red" }}>*</Text>
                </Text>
                <DropDownPicker
                  items={[]}
                  // Thanh tìm kiếm
                  searchable={true}
                  searchablePlaceholder="Nhập thông tin ..."
                  searchablePlaceholderTextColor="#707070"
                  searchableError={() => <Text>Không có dữ liệu</Text>}
                  // Style Item
                  defaultNull
                  placeholder="Chọn quận/huyện"
                  placeholderStyle={styles.placeholderStyle}
                  dropDownMaxHeight={120}
                  dropDownStyle={styles.dropDownStyle}
                  labelStyle={styles.labelStyle}
                  activeLabelStyle={{ color: "#61b15a" }}
                  // onClose={Keyboard.dismiss()}
                  // onChangeItem={(item) => this.changeValueA(item)}
                />
              </View>
              {/*//! Phường xã */}
              <View style={[styles.field, { zIndex: 10001 }]}>
                <Text>
                  Chọn phường/xã <Text style={{ color: "red" }}>*</Text>
                </Text>
                <DropDownPicker
                  items={[]}
                  // Thanh tìm kiếm
                  searchable={true}
                  searchablePlaceholder="Nhập thông tin ..."
                  searchablePlaceholderTextColor="#707070"
                  searchableError={() => <Text>Không có dữ liệu</Text>}
                  // Style Item
                  defaultNull
                  placeholder="Chọn phường/xã"
                  placeholderStyle={styles.placeholderStyle}
                  dropDownMaxHeight={120}
                  dropDownStyle={styles.dropDownStyle}
                  labelStyle={styles.labelStyle}
                  activeLabelStyle={{ color: "#61b15a" }}
                  // onClose={Keyboard.dismiss()}
                  // onChangeItem={(item) => this.changeValueA(item)}
                />
              </View>
              {/*//! Số nhà đường */}
              <View style={styles.field}>
                <Text>Số nhà, đường</Text>
                <TextInput style={styles.textInput}></TextInput>
              </View>
            </View>
          </View>
        </View>
        {/* Đăng ký nguyện vọng */}
        <View style={styles.block}>
          <View style={styles.title}>
            <Text style={{ fontSize: 20 }}>Đăng ký nguyện vọng</Text>
          </View>
          <View
            style={{
              borderColor: "white",
              borderRadius: 15,
              borderWidth: 1,
              margin: 20,
              padding: "5%",
            }}
          >
            <View style={styles.box}>
              {/*//! Đăng ký nguyện vọng  */}
              <View
                style={{
                  borderColor: "white",
                  borderWidth: 1,
                  borderRightWidth: 0,
                  borderBottomWidth: 0,
                  padding: 5,
                  marginBottom: "1%",
                  flexDirection: "column",
                }}
              >
                <View
                  style={{
                    borderColor: "red",
                    borderWidth: 0.5,
                    flexDirection: "row",
                  }}
                >
                  <Text
                    style={{
                      alignSelf: "center",
                      paddingLeft: 5,
                      flexGrow: 1,
                      width: 20,
                    }}
                  >
                    Tên trường
                  </Text>
                  <TextInput
                    style={{
                      borderWidth: 0.5,
                      flexGrow: 2,
                    }}
                  />
                  <Icon.Button
                    name="plus"
                    backgroundColor="#3b5998"
                    style={{
                      width: 40,
                    }}
                    onPress={() => alert("Login with Facebook")}
                  ></Icon.Button>
                </View>
                <View>
                  <Text>Tên trường</Text>
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
  //? Phân cấp View : container > block(title) > box > field(...element)
  container: {
    width: "100%",
    height: "100%",
    alignItems: "center",
  },
  block: {
    // borderColor: "green",
    borderWidth: 1,
    width: "100%",
    // margin: "5%",
    // marginBottom: "0%",
  },
  title: {
    position: "absolute",
    top: 5,
    // left: "10%",
    alignSelf: "center",
    backgroundColor: "#F2F2F2",
    paddingLeft: 3,
    paddingRight: 3,
    zIndex: 1,
  },
  box: {
    // borderColor: "red",
    borderWidth: 1,
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
    borderLeftWidth: 0.5,
    borderBottomWidth: 0.8,
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
