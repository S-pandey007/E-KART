import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { RFValue } from 'react-native-responsive-fontsize'
import { screenWidth } from '@/src/utils/Constants'

type ChooseColorImageProps={
    image:string;
    title:string;
    selectedOne?:boolean;
    onPress?:()=>void
}

const ChooseColorImage = ({image,title,selectedOne=false,onPress}:ChooseColorImageProps) => {
    // const image="https://images.unsplash.com/photo-1600185365483-26d7a4cc7519"
    return (
    <Pressable onPress={onPress} style={[styles.container,selectedOne &&{borderColor:"#000",opacity:0.85}]}>
      <Image source={{uri:image}} style={styles.image}/>
    </Pressable>
  )
}

export default React.memo(ChooseColorImage);

const styles = StyleSheet.create({
    container:{
        borderRadius:RFValue(10),
        borderWidth:1,
        borderColor:"#ccc",
        padding:RFValue(3),
        alignItems:'center',
        justifyContent:'center',
        width:screenWidth*0.22,
        aspectRatio:3/4,
        backgroundColor:'#fff'
    },
    image:{
        borderRadius:RFValue(8),
        width:'100%',
        height:'100%',
        resizeMode:'cover'
    }
})