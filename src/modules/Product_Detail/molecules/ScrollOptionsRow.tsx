import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { memo } from 'react'
import ScrollableOtpions from '../atoms/ScrollableOtpions';
import { RFValue } from 'react-native-responsive-fontsize';

type ScrollOptions={
    id:string;
    label:string;
    icon:string;
}
type Props={
    options:ScrollOptions[];
}
const ScrollOptionsRow:React.FC<Props> = ({options}) => {
    
    // selected options
    const onSelectOption =(item:ScrollOptions)=>{
        console.debug('selected option:',item);
    }
  return (
    <View style={styles.container}>
      <FlatList
        data={options}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item)=>item.id}
        contentContainerStyle={styles.items}
        renderItem={({item})=>(
            <ScrollableOtpions key={item.id} icon={item.icon} text={item.label} onPress={()=>onSelectOption(item)}/>
        )}
      />
    </View>
  )
}

export default memo(ScrollOptionsRow)

const styles = StyleSheet.create({
    container:{
        width:'100%'
    },
    items:{
        gap:RFValue(12),
        paddingHorizontal:RFValue(14),
    }
})