import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import Icons from "@/src/components/atoms/Icons";
import { RFValue } from "react-native-responsive-fontsize";

const SocialLogin = ({ onGoogle }: any) => {
  return (
    <View style={styles.container}>
      {/* google  */}
      <TouchableOpacity style={styles.circle} onPress={onGoogle}>
        <Icons
          iconFamily="Ionicons"
          name="logo-google"
          size={RFValue(22)}
          color="#db4437"
        />
      </TouchableOpacity>
    </View>
  );
};

export default SocialLogin;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: RFValue(20),
    gap: RFValue(18),
  },
  circle: {
    width: RFValue(50),
    height: RFValue(50),
    borderRadius: 100,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    elevation: 3,
  },
});
