import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { filters } from '@/src/utils/searchData';
import FilterChip from '../atoms/FilterChip';

type FilterItem={
    id:string;
    title:string;
}

type Props={
    data:FilterItem[];
    onSelect?:(item:FilterItem)=>void;
}
const FilterChipList:React.FC<Props> = ({
    data,onSelect
}) => {
  return (
    <View style={styles.container}>
      <FlatList
      data={data}
      horizontal
      showsHorizontalScrollIndicator={false}
      keyExtractor={(item)=>item.id}
      renderItem={({item})=>(
        <FilterChip title={item.title} onPress={()=>onSelect?.(item)}/>
      )}
      />
    </View>
  )
}

export default FilterChipList

const styles = StyleSheet.create({
    container:{
        paddingVertical:8,
        paddingHorizontal:12,
        backgroundColor:"#ffffff",
        borderBottomColor:"#eee",
        borderBottomWidth:1
    }
})