import * as React from "react";
import { Button, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
function Tracuuketquatuyensinh() {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Tra cứu kết quả tuyển sinh</Text>
    </View>
  );
}
export default Tracuuketquatuyensinh;
