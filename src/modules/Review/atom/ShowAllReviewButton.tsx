import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { memo } from "react";
import Icons from "@/src/components/atoms/Icons";
import { FONTS } from "@/src/theme/font/fonts";
import { RFValue } from "react-native-responsive-fontsize";
import { scale } from "@/src/utils/Responsivess";


type Props = {
    onPress?:()=>void
};

const ShowAllReviewButton:React.FC<Props> = ({
    onPress
}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <View style={styles.button}>
        <Text style={styles.buttonText}>Show all reviews</Text>
        <Icons
          name="chevron-forward"
          iconFamily="Ionicons"
          size={20}
          color="#000"
        />
      </View>
    </TouchableOpacity>
  );
};

export default memo(ShowAllReviewButton);

const styles = StyleSheet.create({
    container:{
        borderRadius:scale(10),
        borderWidth:scale(1),
        borderColor:"#dad7d7",
        paddingVertical:scale(12)
    },
    button:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        gap:scale(5)
    },
    buttonText:{
        fontFamily:FONTS.BOLD,
        fontSize:RFValue(15)
    }
});
