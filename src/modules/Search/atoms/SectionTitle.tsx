import { StyleSheet, Text, TextStyle, View } from 'react-native'
import React from 'react'
import { RFValue } from 'react-native-responsive-fontsize';
import { FONTS } from '@/src/theme/font/fonts';

type Props={
    title:string;
    rightText?:string;
    onPressRight?:()=>void;
    titleStyle?:TextStyle;
}
const SectionTitle:React.FC<Props> = ({
    title,rightText,onPressRight,titleStyle
}) => {
  return (
    <View style={styles.container}>
      <Text style={[styles.title,titleStyle]}>{title}</Text>

      {
        rightText &&(
            <Text style={styles.rightText} onPress={onPressRight}>
                {rightText}
            </Text>
        )
      }
    </View>
  )
}

export default SectionTitle

const styles = StyleSheet.create({
    container:{
        marginTop:RFValue(10),
        marginBottom:RFValue(10),
        paddingHorizontal:RFValue(16),
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },
    title:{
        fontSize:RFValue(16),
        color:"#000",
        fontFamily:FONTS.BOLD
    },
    rightText: {
    fontSize: RFValue(13),
    color: "#2874f0",
  },
})