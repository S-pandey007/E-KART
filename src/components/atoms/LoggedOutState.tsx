import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { scale } from "@/src/utils/Responsivess";
import { RFValue } from "react-native-responsive-fontsize";
import { FONTS } from "@/src/theme/font/fonts";
import { navigate } from "@/src/navigation/NavigationUtils";
import { Colors } from "@/src/utils/Constants";

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
      <TouchableOpacity onPress={()=>navigate("Login")} style={styles.btnContainer}>
        <Text style={styles.btnText}>Login</Text>
      </TouchableOpacity>
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
  btnContainer:{
    backgroundColor:Colors.primaryBG,
    paddingVertical:scale(10),
    paddingHorizontal:scale(20),
    borderRadius:scale(10)
  },
  btnText:{
    fontFamily:FONTS.MEDIUM,
    fontSize:RFValue(14),
    color:"#000"
  }
});
