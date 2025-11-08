import { FlatList, Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React,{FC} from 'react'
import { RFValue } from 'react-native-responsive-fontsize'
import { FONTS, screenHeight, screenWidth } from '@/src/utils/Constants'
import { navigate } from '@/src/navigation/NavigationUtils'

const AnimatedHorizonatalList:FC<{data:any}> = ({data}) => {
  return (
    <View style={styles.container}>
      <Text
      style={styles.textStyle}
      >{data?.title}</Text>

      <FlatList
      data={data?.data}
      horizontal
      keyExtractor={(item)=>item?.id}
      renderItem={({item,index})=>(
        <Pressable 
        key={index}
        style={styles.imageContainer}
        onPress={()=>navigate("Categories")}
        >
          <Image
            source={{uri:item?.image_uri}}
            style={styles.image}
          />
        </Pressable>
      )}
      showsHorizontalScrollIndicator={false}
      scrollEventThrottle={16}
      />
    </View>
  )
}


export default AnimatedHorizonatalList

const styles = StyleSheet.create({
  container:{
    marginVertical:15
  },
  textStyle:{
    fontSize:RFValue(16),
    fontFamily:FONTS.heading,
    marginHorizontal:15,
    marginBottom:15,
    fontWeight:'800',
  },
  image:{
    width:'100%',
    height:'100%'
  },
  imageContainer:{
    width:screenWidth*0.45,
    height:screenHeight*0.3,
    marginRight:15
  }
})