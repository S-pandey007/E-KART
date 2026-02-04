import { Pressable, StyleSheet, Text, View } from 'react-native'
import React,{FC} from 'react'
import { RFValue } from 'react-native-responsive-fontsize';
import Icons from '@/src/components/atoms/Icons';
import { goBack, navigate } from '@/src/navigation/NavigationUtils';
import { TextInput } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';

interface SearchBarProps{
    cartLength:number;
}
const SearchBar:FC<SearchBarProps>= ({cartLength}) => {
  return (
    <View style={styles.container}>
        {/* <SafeAreaView/> */}
        <Pressable onPress={()=> goBack()} >
            <Icons size={24} iconFamily='MaterialCommunityIcons' name='arrow-left' color='#000'/>
        </Pressable>

        <View style={styles.searchContainer}>
            <Icons size={20} name='search' iconFamily='MaterialIcons' color='#000'/>

            <TextInput
                style={styles.searchInput}
                placeholder='Search Products'
                placeholderTextColor={"#666"}
            />
        </View>
        {/* <Icons name='heart-outline' size={24} iconFamily='Ionicons' color='#000'/> */}
        <Pressable onPress={()=>navigate("Cart")}>
            <Icons name='cart-sharp' size={24} iconFamily='Ionicons' color='#000'/>
            {
                cartLength>0 &&
                <View style={styles.badge}>
                    <Text style={styles.badgeText}>
                        {cartLength}
                    </Text>
                </View>
            }
        </Pressable>
    </View>
  )
}

export default SearchBar

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        alignItems:'center',
        padding:10,
        gap:5
    },
    searchContainer:{
        flexDirection:'row',
        alignItems:'center',
        backgroundColor:'#fff',
        borderRadius:20,
        paddingHorizontal:10,
        width:'65%',
        marginHorizontal:10
    },
    searchIcon:{
        marginRight:15
    },
    searchInput:{
        flex:1,
        height:48,
        color:'#000'
    },
    cartContainer:{
        position:'relative'
    },
    badge:{
        position:'absolute',
        top:-5,
        right:-6,
        backgroundColor:'red',
        borderRadius:10,
        width:16,
        height:16,
        justifyContent:'center',
        alignItems:'center'
    },
    badgeText:{
        color:'#fff',
        fontSize:RFValue(8),
        fontWeight:'bold'
    }
})