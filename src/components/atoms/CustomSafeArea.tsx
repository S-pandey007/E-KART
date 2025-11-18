import { StyleSheet, Text, View, ViewStyle } from 'react-native'
import React, { FC } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { Colors } from '@/src/utils/Constants';

interface CustomSafeAreaProps{
    children:React.ReactNode;
    style?:ViewStyle
}

const CustomSafeArea:FC<CustomSafeAreaProps> = ({children,style}) => {
  return (
    <SafeAreaView style={[styles.container,style]}>
            {children}
    </SafeAreaView>
  )
}

export default CustomSafeArea

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:Colors.background
    }
})