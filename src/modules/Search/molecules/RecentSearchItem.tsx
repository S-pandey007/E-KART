import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Image } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { FONTS } from '@/src/theme/font/fonts';

type Props={
    title:string;
    image:string;
    onPress?:()=>void;
}

const RecentSearchItem:React.FC<Props> = ({
    title,image,onPress
}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
        <Image source={{uri:image}} style={styles.image}/>
        <Text numberOfLines={2} style={styles.title}>
            {title}
        </Text>
    </TouchableOpacity>
  )
}

export default RecentSearchItem

const styles = StyleSheet.create({
    container:{
        width:RFValue(80),
        alignItems:'center',
        marginRight:RFValue(12),
    },
    image:{
        width:RFValue(60),
        height:RFValue(60),
        borderRadius:RFValue(30),
         backgroundColor: "#f2f2f2",
    },
    title: {
    marginTop: RFValue(6),
    fontSize: RFValue(11),
    textAlign: "center",
    color: "#000",
    fontFamily:FONTS.MEDIUM
  },
})