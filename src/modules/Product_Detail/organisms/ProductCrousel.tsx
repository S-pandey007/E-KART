import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ImageCarousel from '@/src/components/organisms/ScrollImages/ImageCarousel'
import { DummyImages } from '@/src/utils/searchData'
import RatingBadge from '../../SearchResult/atoms/RatingBadge'
import Icons from '@/src/components/atoms/Icons'
import CrouselContent from '../molecules/CrouselContent'

const ProductCrousel = () => {
  return (
    <View style={styles.container}>
        <ImageCarousel images={DummyImages} height={450}/>
        <View style={styles.ratingContainer}>
           <CrouselContent/>
        </View>
    </View>
  )
}

export default ProductCrousel

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    ratingContainer:{
        position:'absolute',
        right:'5%',
        top:'4%'
    }
})