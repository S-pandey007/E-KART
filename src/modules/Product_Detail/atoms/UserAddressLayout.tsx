import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { memo } from "react";
import Icons from "@/src/components/atoms/Icons";
import { Colors } from "@/src/utils/Constants";
import { FONTS } from "@/src/theme/font/fonts";
import { RFValue } from "react-native-responsive-fontsize";

type Props = {
  icon?: string;
  name: string;
  currentAddress?: boolean;
  address: string;
  openEditModel?:()=>void
};
const UserAddressLayout: React.FC<Props> = ({
  icon,
  name,
  currentAddress=true,
  address,
  openEditModel
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.Leftcontainer}>
        <View style={styles.usersContainer}>
          <Icons
            name={icon ||"home-outline"}
            iconFamily="Ionicons"
            color="#000"
            size={16}
          />
          <Text style={styles.nameText}>{name || "Shubham Pandey"}</Text>
         {
            currentAddress &&
          <View style={styles.CurrentlySelectedContainer}>
            <Text style={styles.CurrentlySelectedText}>Currently selected</Text>
          </View>
            
         }
        </View>
        <Text numberOfLines={1} style={styles.address}>
          {address || "C0013, shrinagr Gudhiyari raipur chhattisgarh"}
        </Text>
      </View>
      <Pressable onPress={openEditModel} >
      <Icons
        iconFamily="Ionicons"
        name="ellipsis-horizontal"
        color="#000"
        size={18}
      />
      </Pressable>
    </View>
  );
};

export default memo(UserAddressLayout);

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        paddingVertical:RFValue(7),
    },
    Leftcontainer:{
        paddingHorizontal:RFValue(10),
    },
    usersContainer:{
         flexDirection:'row',
        alignItems:'center',
        gap:RFValue(6)
    },
    nameText:{
        fontFamily:FONTS.SEMIBOLD,
        fontSize:RFValue(13)
    },
    CurrentlySelectedContainer:{
        backgroundColor:Colors.primaryBG,
        paddingHorizontal:RFValue(3),
        borderRadius:RFValue(3)
    },
    CurrentlySelectedText:{
        color:'#125feeff',
        fontFamily:FONTS.SEMIBOLD,
         fontSize:RFValue(13)
    },
    address:{
        color:"#6d6c6cff",
        paddingVertical:RFValue(2)
    }
});
