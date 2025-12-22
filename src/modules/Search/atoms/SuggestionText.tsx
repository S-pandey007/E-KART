import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { RFValue } from 'react-native-responsive-fontsize';


type Props ={
    text:string;
    muted?:boolean;
}
const SuggestionText:React.FC<Props> = ({text,muted}) => {
  return (
    <Text
    numberOfLines={2}
    style={[styles.text, muted && styles.muted]}
    >
        {text}
    </Text>
  )
}

export default SuggestionText

const styles = StyleSheet.create({
    text:{
        fontSize:RFValue(14),
        color:"#111",
    },
    muted:{
        color:"#6b7280",
        fontSize:RFValue(12)
    }
})