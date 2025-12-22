import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import SuggestionText from '../atoms/SuggestionText';
import SuggestionIcon from '../atoms/SuggestionIcon';
import { RFValue } from 'react-native-responsive-fontsize';

type Props={
    title:string;
    subtitle?:string;
    icon?:string;
    onPress?:()=>void;

}
const SuggestionRow:React.FC<Props> = ({
    title,subtitle,icon= "search-outline",onPress
}) => {
  return (
    <TouchableOpacity style={styles.row} onPress={onPress}>
        <SuggestionIcon name={icon} />

        <View style={styles.textWrapper}>
            <SuggestionText text={title}/>
            {
                subtitle &&(
                    <SuggestionText text={subtitle} muted/>
                )
            }
        </View>

        <SuggestionIcon name="arrow-forward-outline" />

    </TouchableOpacity>
  )
}

export default SuggestionRow

const styles = StyleSheet.create({
    row:{
        flexDirection:"row",
        alignItems:'center',
        paddingVertical:RFValue(12),
        paddingHorizontal:RFValue(16),
        backgroundColor:"#FFF"
    },
    textWrapper:{
        flex:1,
        marginHorizontal:RFValue(12)
    }
})