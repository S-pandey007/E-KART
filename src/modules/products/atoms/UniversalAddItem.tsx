import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React,{FC} from 'react'
import { Colors, screenWidth } from '@/src/utils/Constants'
import { useAppDispatch, useAppSelector } from '@/src/store/reduxHook'
import { addItem, removeItem, selectItemCountById } from '../../cart/api/slice'
import { RFValue } from 'react-native-responsive-fontsize'
import Icons from '@/src/components/atoms/Icons'

const UniversalAddItem:FC<{item:any}> = ({item}) => {
    const count = useAppSelector(selectItemCountById(item._id))
    const dispatch = useAppDispatch();
  return (
    <View
    style={[styles.container,{backgroundColor:count===0?'#fff':Colors.active}]}
    >
      {
        count===0?(
            <TouchableOpacity
            onPress={()=>dispatch(addItem(item))} style={styles.add}
            >
                <Text style={styles.addText}>ADD</Text>
            </TouchableOpacity>
        ):(
            <View style={styles.counterContainer}>
                <TouchableOpacity onPress={()=>dispatch(removeItem(item))}>
                    <Icons name='minus' iconFamily='MaterialCommunityIcons' color='#fff' size={RFValue(12)}/>
                </TouchableOpacity>
                <Text style={styles.text}>{count}</Text>
                <TouchableOpacity onPress={()=>dispatch(addItem(item))}>
                    <Icons name='plus' iconFamily='MaterialCommunityIcons' color='#fff' size={RFValue(12)}/>
                </TouchableOpacity>
            </View>
        )
      }
    </View>
  )
}

export default UniversalAddItem

const styles = StyleSheet.create({
    container:{
        alignItems:'center',
        justifyContent:'center',
        borderWidth:1,
        borderColor:Colors.active,
        width:screenWidth*0.25,
        marginVertical:5,
        alignSelf:'center'
    },
    add:{
        width:'100%',
        alignItems:'center',
        justifyContent:'center',
        paddingHorizontal:4,
        paddingVertical:4
    },
    addText:{
        color:Colors.active
    },
    counterContainer:{
        flexDirection:'row',
        alignItems:'center',
        width:'100%',
        paddingHorizontal:4,
        paddingVertical:4,
        justifyContent:'space-between'
    },
    text:{
        color:'#fff',
        fontWeight:'500',
        fontSize:RFValue(12)
    }
})