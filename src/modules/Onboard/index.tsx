import { View, Text,StyleSheet,Image } from 'react-native'
import React,{FC, useEffect} from 'react'
import { logo_t } from '@/src/utils/Image'
import { Colors,screenWidth ,screenHeight} from '@/src/utils/Constants'
import { resetAndNavigate } from '@/src/navigation/NavigationUtils'


const Splash:FC= () => {

  useEffect(()=>{
    const timeoutId = setTimeout(()=>{
      resetAndNavigate("MainNavigator");
    },1000)

    return ()=>clearTimeout(timeoutId)
  },[])
  
  return (
    <View style={styles.container}>
      <Image
      source={logo_t}
      style={styles.image}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:"center",
    alignItems:'center',
    backgroundColor:Colors.primary
  },
  image:{
    width:screenWidth*0.35,
    height:screenHeight*0.35,
    resizeMode:'contain'
  }
})
export default Splash