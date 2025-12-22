import { StyleSheet, Text, TouchableOpacity, View ,ViewStyle} from 'react-native'
import React from 'react'
import { RFValue } from 'react-native-responsive-fontsize';
import { FONTS } from '@/src/theme/font/fonts';

type Props = {
  title: string;
  onPress?: () => void;
  style?: ViewStyle;
};

const DiscoverChip:React.FC<Props> = ({
    title,onPress,style
}) => {
  return (
    <TouchableOpacity activeOpacity={0.7} style={[styles.chip, style]} onPress={onPress}>
        <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  )
}

export default DiscoverChip

const styles = StyleSheet.create({
    chip:{
        paddingVertical:RFValue(8),
        paddingHorizontal:RFValue(14),
        backgroundColor:"#e5eefaff",
        borderRadius:RFValue(20),
        marginRight:RFValue(20),
        marginBottom:RFValue(10)
    },
    text:{
        fontSize:RFValue(13),
        fontFamily:FONTS.MEDIUM
    }
})