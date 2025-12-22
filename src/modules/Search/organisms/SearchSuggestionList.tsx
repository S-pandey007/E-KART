import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import SuggestionRow from '../molecules/SuggestionRow';
import { RFValue } from 'react-native-responsive-fontsize';

type Props ={
    loading:boolean;
    products:string[];
    categories:string[];
    onSelect:(value:string,type:"product" | "category")=>void;
}

const SearchSuggestionList:React.FC<Props> = ({
    loading,products,categories,onSelect
}) => {
    if(loading){
        return(
            <View style={styles.container}>
                <Text style={styles.loading}>Searching...</Text>
            </View>
        )
    }

    if(!products.length && !categories.length){
        return(
            <View style={styles.container}>
                <Text style={styles.empty}>No results found</Text>
            </View>
        )
    }
  return (
    <View style={styles.container}>
        {
            products.map((item)=>(
                <SuggestionRow key={item} title={item} icon='search-outline' onPress={()=>onSelect(item,"product")}/>
            ))
        }

        {
            categories.map((item)=>(
                <SuggestionRow
                key={item}
                title={item}
                subtitle='in Categories'
                icon='grid-outline'
                onPress={()=>onSelect(item,"category")}                />
            ))
        }
    </View>
  )
}

export default SearchSuggestionList

const styles = StyleSheet.create({
    container:{
        backgroundColor:"#fff",
        borderTopWidth:1,
        borderColor:"#e5e7eb"
    },
    loading:{
        padding:RFValue(16),
        textAlign:"center",
        color:"#6b7280"
    },
    empty:{
        padding:RFValue(16),
        textAlign:"center",
        color:"#9ca3af"
    }
})