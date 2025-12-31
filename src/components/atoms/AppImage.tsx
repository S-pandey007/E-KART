import { Image, ImageProps, StyleSheet, Text, View } from 'react-native'
import React from 'react'

type Props = ImageProps &{
    borderRadius?:number
}
const AppImage = ({borderRadius=16,style,...props}:Props) => {
  return (
    <Image
    {...props}
    style={[styles.image,style,{borderRadius:borderRadius}]}
    />
  )
}

export default AppImage

const styles = StyleSheet.create({
    image:{
        width:'100%',
        height:'100%',
        resizeMode:'cover'
    }
})