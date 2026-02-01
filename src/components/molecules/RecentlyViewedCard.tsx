import { StyleSheet, Text, View ,Image, TouchableOpacity} from 'react-native'
import React from 'react'
import { scale } from '@/src/utils/Responsivess'
import { FONTS } from '@/src/theme/font/fonts'
import { RFValue } from 'react-native-responsive-fontsize'
import { screenWidth } from '@/src/utils/Constants'

type Props={
  image:string;
  title:string;
  onPress?:()=>void;
}

const RecentlyViewedCard:React.FC<Props> = ({
  image,
  title,
  onPress
}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Image source={{uri:image ||"https://images.unsplash.com/photo-1549298916-b41d501d3772"}} style={styles.image}/>
      <Text style={styles.title} numberOfLines={1}>{title||"Men's Jakect"}</Text>
    </TouchableOpacity>
  )
}

export default RecentlyViewedCard

const styles = StyleSheet.create({
  container:{
    width:screenWidth*0.4,
    backgroundColor:'#fff',
    borderWidth:1,
    borderColor:"#CCC",
    borderRadius:scale(5),
    alignItems:'center',
    gap:scale(7),
    paddingVertical:scale(7),
    marginHorizontal:scale(5)
  },
  image:{
    width:'90%',
    aspectRatio:1,
    resizeMode:'contain',
  },
  title:{
    fontFamily:FONTS.MEDIUM,
    fontSize:RFValue(13),
    paddingHorizontal:scale(5)
  
  }

})