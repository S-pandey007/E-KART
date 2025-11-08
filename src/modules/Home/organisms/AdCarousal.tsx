import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React,{FC, useState} from 'react'
import { screenHeight, screenWidth } from '@/src/utils/Constants';
import FilmSlip from '../molecules/FilmSlip';
import Carousel from 'react-native-reanimated-carousel';
import Dots from '../atoms/Dots';

const AdCarousal:FC<{data:any}> = ({data}) => {
  
  const [active,setActive] =useState(0);
  const baseOption ={
    vertical:false,
    width:screenWidth,
    height:screenHeight*0.3
  }
  return (
    <View>
      <FilmSlip/>
      <Carousel
      {...baseOption}
      loop
      pagingEnabled
      snapEnabled
      autoPlay
      autoPlayInterval={3580}
      onSnapToItem={(index:any)=>setActive(index)}
      data={data.data}
      renderItem={({item}:any)=>(
        <Pressable style={styles.imageContainer}>
          <Image
          source={item?.image_uri}
          style={styles.img}
          />
        </Pressable>
      )}
      
      />
      {
        active !=null &&

        <View style={styles.dots}>
          {
            data?.data?.map((item:any,index:any)=>{
              return(
              <Dots active={active} index={index} key={index}/>
              )
            })
          }
        </View>
      }
    </View>
  )
}

export default AdCarousal

const styles = StyleSheet.create({
  dots:{
    flexDirection:'row',
    width:100,
    alignSelf:'center',
    marginTop:10,
    justifyContent:'center'
  },
  imageContainer:{
    width:'100%',
    height:'100%'
  },
  img:{
    width:'100%',
    height:'100%',
    resizeMode:'cover'
  }
})