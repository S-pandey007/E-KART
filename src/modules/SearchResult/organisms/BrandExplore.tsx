
import React from 'react';
import {View,Text,FlatList,StyleSheet} from 'react-native'
import BrandCard from '../molecule/BrandCard';
import { RFValue } from 'react-native-responsive-fontsize';
import { FONTS } from '@/src/theme/font/fonts';
type Brand={
   
    _id:string;
    name:string;
    image:string;
}

type Props={
     headingTitle:string;
    brands:Brand[];
}
const BrandExplore:React.FC<Props>=({headingTitle,brands})=>{
    return(
        <View style={styles.container}>
            <Text style={styles.title}>{headingTitle}</Text>
        
        <FlatList
         data={brands}
         horizontal
         showsHorizontalScrollIndicator={false}
         keyExtractor={(item)=>item?._id}
         renderItem={({item})=>(
            <BrandCard key={item?._id} name={item?.name} logo={item?.image} onPress={()=>console.log(item.name)}/>
         )}
        />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        paddingVertical:RFValue(14),
        backgroundColor:"#dbeafe",
    },
    title:{
        fontSize:RFValue(16),
        fontWeight:"600",
        marginBottom:RFValue(12),
        paddingHorizontal:RFValue(12),
        color:"#000",
        fontFamily:FONTS.SEMIBOLD
    }
})

export default BrandExplore

