import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { RFValue } from 'react-native-responsive-fontsize';

type Props = {
  name: string;
  image: string;
  category?: string;
  onPress?: () => void;
};

const ProductCard:React.FC<Props> = ({
    name,image,category,onPress
}) => {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
        <Image source={{uri:image}} style={styles.image}/>

        <Text numberOfLines={1} style={styles.name}>
            {name}
        </Text>

        {
            category &&(
                <Text numberOfLines={1} style={styles.category}>
                    {category}
                </Text>
            )
        }
    </TouchableOpacity>
  )
}

export default ProductCard

const styles = StyleSheet.create({
    card:{
        flex:1,
        margin:RFValue(6),
        backgroundColor:"#FFF",
        borderRadius:RFValue(10),
        padding:RFValue(10),
        elevation:2
    },
    image:{
        width:'100%',
        height:RFValue(120),
        borderRadius:RFValue(8),
        backgroundColor:'#f2f2f2',
        marginBottom:RFValue(8)
    },
    name:{
        fontSize:RFValue(13),
        color:'#000'
    },
    category:{
        fontSize:RFValue(11),
        color:"#777",
        marginTop:RFValue(2)
    }
})