import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Colors } from '@/src/utils/Constants'
import { FONTS } from '@/src/theme/font/fonts'
import { RFValue } from 'react-native-responsive-fontsize'
import { scale } from '@/src/utils/Responsivess'

type Props={
    name:string,
    email?:string,
    btnText?:string;
    onPress?:()=>void
}
const HeaderCard:React.FC<Props> = ({
    name,
    email,
    btnText,
    onPress
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.name}>{name || "Please Login or Signup"}</Text>
        <TouchableOpacity onPress={onPress} style={styles.btnContainer}>
            <Text style={styles.btnText}>{btnText}</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.email}>{email}</Text>
    </View>
  )
}

export default HeaderCard

const styles = StyleSheet.create({
    container:{
        backgroundColor:Colors.primaryBG,
        borderRadius:scale(7),
        marginHorizontal:scale(10)
    },
    header:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        paddingHorizontal:scale(10),
        paddingVertical:scale(10)
    },
    name:{
        fontFamily:FONTS.BOLD,
        fontSize:RFValue(16)
    },
    btnContainer:{
        backgroundColor:"rgb(63, 137, 235)",
        borderRadius:scale(6),
        borderWidth:1,
        borderColor:"#CCC",
        paddingHorizontal:scale(10),
        paddingVertical:scale(6)
    },
    btnText:{
        fontFamily:FONTS.BOLD,
        fontSize:RFValue(12),
        color:"#FFF"
    },
    email:{
        fontFamily:FONTS.REGULAR,
        fontSize:RFValue(12),
        color:"#818080",
         paddingHorizontal:scale(10),
        paddingVertical:scale(5)
    }
})