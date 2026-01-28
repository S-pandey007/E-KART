import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { scale } from '@/src/utils/Responsivess';
import { RFValue } from 'react-native-responsive-fontsize';

type Props={
    uri:string;
    onPress?:()=>void;
    overlayText?:string;
}
const ImageTile:React.FC<Props> = ({uri,onPress,overlayText}) => {
  return (
    <Pressable onPress={onPress} style={styles.container}>
        <Image source={{uri}} style={styles.image}/>
        {
            overlayText &&(
                <View style={styles.overlay}>
                    <Text style={styles.overlayText}>{overlayText}</Text>
                </View>
            )
        }
    </Pressable>
  )
}

export default ImageTile

const styles = StyleSheet.create({
    container:{
        borderRadius:scale(12),
        overflow:'hidden',
        backgroundColor:'#eee'
    },
    image:{
        width:'100%',
        height:'100%'
    },
    overlay:{
        ...StyleSheet.absoluteFillObject,
        backgroundColor:'rgba(0,0,0,0.5)',
        justifyContent:'center',
        alignItems:'center'
    },
    overlayText:{
        color:"#FFF",
        fontSize:RFValue(18),
        fontWeight:"600",
    }
})