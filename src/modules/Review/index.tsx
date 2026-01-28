import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import SectionTitle from '../Search/atoms/SectionTitle'
import OverallRating from './molecules/OverallRating'

const Review = () => {
  return (
    <View>
      <SectionTitle title='Ratings and reviews'/>
      <OverallRating/>
    </View>
  )
}

export default Review

const styles = StyleSheet.create({})