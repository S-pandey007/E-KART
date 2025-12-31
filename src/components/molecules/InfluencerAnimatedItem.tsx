import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Animated, { interpolate, useAnimatedStyle } from 'react-native-reanimated'
import InfluencerCard from './InfluencerCard'

type product={
    _id:string;
    name:string;
    likes:number;
    views:number;
    tags:[];
    images:[];

}

type Props={
    item:product;
    SPACING:number;
    index:number;
    scrollX:any,
    SNAP_INTERVAL:number
}

const InfluencerAnimatedItem = ({item,SPACING,index,scrollX,SNAP_INTERVAL}:Props) => {

    const animatedStyle=useAnimatedStyle(()=>{
        const inputRange=[
            (index-1)*SNAP_INTERVAL,
            (index)*SNAP_INTERVAL,
            (index+1)*SNAP_INTERVAL,
        ];

        const scale=interpolate(
            scrollX.value,
            inputRange,
            [0.85,1,0.85]
        );

        const rotate = interpolate(

            scrollX.value,
            inputRange,

            [-8,0,8]
        );

        return{
            transform:[
                {perspective:1000},
                {scale},
                {rotateZ:`${rotate}deg`}
            ]
        }
    })
  return (
    <Animated.View style={[animatedStyle,{marginRight:SPACING}]}>
        <InfluencerCard image={item?.images}
        views={item.views}
        likes={item.likes}
        />

    </Animated.View>
  )
}

export default InfluencerAnimatedItem
