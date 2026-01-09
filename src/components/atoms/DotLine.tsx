import { StyleSheet, Text, View ,ViewStyle} from 'react-native'
import React from 'react'
import { RFValue } from 'react-native-responsive-fontsize';

type Props={
    color:string;
    thickness:number;
    style?:ViewStyle;
}
const DotLine:React.FC<Props> = ({color,thickness,style}) => {
  return (
    <View
    style={[styles.line,style,{borderBottomColor:color,borderBottomWidth:thickness}]}
    />
  )
}

export default React.memo(DotLine)

const styles = StyleSheet.create({
    line:{
        borderStyle:'dotted',
        width:'100%',
        marginVertical:RFValue(8),
        height:1
    }
})