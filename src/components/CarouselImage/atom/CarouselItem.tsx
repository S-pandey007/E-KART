import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { scale } from "@/src/utils/Responsivess";

type Props = {
  uri: string;
  caption?: string;
};
const CarouselItem: React.FC<Props> = ({ uri, caption }) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri }} style={styles.image} />
      {caption && (
        <View style={styles.captionContainer}>
          <Text numberOfLines={1} style={styles.captionText}>
            {caption}
          </Text>
        </View>
      )}
    </View>
  );
};

export default CarouselItem;

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    image:{
        width:'100%',
        height:'100%',
        resizeMode:"contain"
    },
    captionContainer:{
        position:'absolute',
        bottom:scale(24),
        left:scale(16),
        right:scale(16),
        backgroundColor:'rgb(0,0,0,0.55)',
        padding:scale(19),
        borderRadius:scale(10)
    },
    captionText:{
        color:'#fff',
        fontSize:scale(14),
        textAlign:'center'
    }
});
