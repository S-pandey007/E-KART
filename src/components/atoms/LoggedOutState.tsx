import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { scale } from "@/src/utils/Responsivess";
import { RFValue } from "react-native-responsive-fontsize";
import { FONTS } from "@/src/theme/font/fonts";

type Props = {
  image?: string;
  text?: string;
};

const LoggedOutState: React.FC<Props> = ({
  image,
  text = "Please login or signup",
}) => {
  return (
    <View style={styles.container}>
      <Image
        source={image}
        style={styles.image}
      />
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

export default LoggedOutState;

const styles = StyleSheet.create({
  container: {
    flex: 1,                     
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: scale(20),
  },

  image: {
    width: "60%",                 
    aspectRatio: 1,               
    resizeMode: "contain",
    marginBottom: scale(16),
  },

  text: {
    fontFamily: FONTS.MEDIUM,
    fontSize: RFValue(14),
    color: "#555",
    textAlign: "center",
  },
});
