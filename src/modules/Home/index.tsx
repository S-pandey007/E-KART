import { View, Text,StyleSheet, Platform } from 'react-native'
import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '@/src/store/reduxHook'
import { getHomeContent } from './api/actions';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Animated, { interpolate, useAnimatedStyle, useSharedValue,Extrapolate } from 'react-native-reanimated';
import { retry } from 'redux-saga/effects';
import { screenHeight } from '@/src/utils/Constants';
import MenuHeader from './molecules/MenuHeader';
import SearchBar from './molecules/SearchBar';
import MainList from './templates/MainList';

const Home = () => {
  //safeArea context
  const insets = useSafeAreaInsets();

  // fetch data from store
  const dispatch = useAppDispatch();
  const {data,loading,error}=useAppSelector(state=>state.home)

  // Scroll animation
  const scrollYGlobal = useSharedValue(0);
  const moveUpStyle = useAnimatedStyle(()=>{
    const translateY = interpolate(
      scrollYGlobal.value,
      [0,100],
      [0,-100],
      Extrapolate.CLAMP
    )
    return {
      transform:[{translateY:translateY}]
    }
  })

  useEffect(()=>{
    dispatch(getHomeContent(1))
  },[])


  return (
    <View style={styles.container}>
      <View style={{height:Platform.OS==='android' ? insets.top:0}}/>
      
      <Animated.View style={[moveUpStyle]}>
        <View>
          <MenuHeader scrollY={scrollYGlobal}/>
          <SearchBar/>
        </View>
      </Animated.View>

      <Animated.View style={[moveUpStyle,{height:screenHeight}]}>
        <MainList scrollYGlobal={scrollYGlobal}/>
      </Animated.View>
      
      
      
      {/* <Text>{JSON.stringify(data)}</Text>
      <Text>{JSON.stringify(error)}</Text> */}
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"#fff"
  }
})

export default Home