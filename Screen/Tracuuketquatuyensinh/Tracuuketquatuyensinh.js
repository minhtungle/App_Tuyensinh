import * as React from "react";
import { View, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

import ComboBox from "./ComboBox";

function Tracuuketquatuyensinh() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <ComboBox />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {},
});
export default Tracuuketquatuyensinh;
