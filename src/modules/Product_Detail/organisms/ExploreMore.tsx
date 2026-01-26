import { StyleSheet, Text, View } from 'react-native'
import React, { memo } from 'react'
import SectionTitle from '../../Search/atoms/SectionTitle'
import ScrollableOtpions from '../atoms/ScrollableOtpions'
import ScrollOptionsRow from '../molecules/ScrollOptionsRow'
import { ScrollableOptionsData } from '@/src/utils/searchData'
import ExploreMoreProduct from '../molecules/ExploreMoreProduct'

const ExploreMore = () => {
  return (
    <View>
      <SectionTitle title='Explore more like this'/>
      <ScrollOptionsRow options={ScrollableOptionsData}/>
      <ExploreMoreProduct/>
    </View>
  )
}

export default memo(ExploreMore)

const styles = StyleSheet.create({})