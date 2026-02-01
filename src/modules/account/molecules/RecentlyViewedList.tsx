import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { freshSelectionProducts } from '@/src/utils/searchData'
import RecentlyViewedCard from '@/src/components/molecules/RecentlyViewedCard'
import SectionTitle from '../../Search/atoms/SectionTitle'
import { scale } from '@/src/utils/Responsivess'

const RecentlyViewedList = () => {
  return (
    <View style={styles.container}>
    <SectionTitle title='Recently Viewed Store'/>
      <FlatList
      data={freshSelectionProducts}
      keyExtractor={(item)=>item.id}
      horizontal
      showsHorizontalScrollIndicator={false}
      
      renderItem={({item})=>(
        <RecentlyViewedCard
        key={item.id}
        image={item.image}
        title={item.title}
        />
      )}
      
      />
    </View>
  )
}

export default RecentlyViewedList

const styles = StyleSheet.create({
    container:{
        backgroundColor:"#FFF",
        paddingBottom:scale(15)
    }
})