import * as React from "react";
import { View, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

import ComboBox from "./ComboBox";

function Tracuuketquatuyensinh() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.InContainer}>
        <ComboBox />
      </View>
      <View style={styles.OutContainer}></View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {},
  InContainer: {
    alignItems: "flex-start",
    width: "100%",
  },

  OutContainer: {
    alignItems: "flex-end",
    width: "100%",
    height: "35%",
  },
});
export default Tracuuketquatuyensinh;
