import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { screenWidth } from '@/src/utils/Constants'
import AppImage from '../atoms/AppImage';
import { RFValue } from 'react-native-responsive-fontsize';


const width = screenWidth;
export const CARD_WIDTH=width*0.40;
export const CARD_HEIGHT=CARD_WIDTH*1.5

type Props={
    image:[];
    views?:number;
    likes:number;
}
const InfluencerCard = ({image,views,likes}:Props) => {
  return (
    <View style={styles.container}>
      <AppImage source={{uri:image?.[0]}}/>

      <View style={styles.overlay}>
        <Text style={styles.views}>{views}</Text>
        <Text style={styles.products}>{likes} Likes</Text>

      </View>
    </View>
  )
}

export default InfluencerCard

const styles = StyleSheet.create({
    container:{
        width:CARD_WIDTH,
        height:CARD_HEIGHT,
        borderRadius:20,
        overflow:'hidden',
        backgroundColor:"#EEE"
    },
    overlay:{
        position:'absolute',
        bottom:RFValue(12),
        left:RFValue(12)
    },
    views:{
        color:'#fff',
        fontWeight:'700',
        marginBottom:4
    },
    products:{
        color:'#000',
        fontSize:12,
        backgroundColor:'#eee',
        fontWeight:'500',
        padding:2,
        borderRadius:7
    }
})