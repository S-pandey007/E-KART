import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Icons from '@/src/components/atoms/Icons'
import { RFValue } from 'react-native-responsive-fontsize';

type IconDecoreProps={
    color:string;
    name:string;
    iconFamily:any;
    size:number;
    onPress?:()=>void
}
const IconDecore = ({color,name,iconFamily,size,onPress}:IconDecoreProps) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Icons color={color} name={name} iconFamily={iconFamily} size={size}/>
    </TouchableOpacity>
  )
}

export default IconDecore

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#ffffffff',
        padding:RFValue(5),
        borderRadius:RFValue(7)
    }
})