import { View, Text ,StyleSheet, FlatList, TouchableOpacity} from 'react-native'
import React from 'react'
import CustomSafeArea from '@/src/components/atoms/CustomSafeArea'
import { RFValue } from 'react-native-responsive-fontsize'
import { useAppSelector } from '@/src/store/reduxHook'
import { selectCartItems } from './api/slice'
import { Colors } from '@/src/utils/Constants'
import { navigate } from '@/src/navigation/NavigationUtils'
import OrderItem from './atoms/OrderItem'
import PlacedOrderButton from './atoms/PlacedOrderButton'

const Cart = () => {
  const carts = useAppSelector(selectCartItems)
  const user= useAppSelector(state=>state.account.user) as any
  const rederItem=({item}:any)=>(
    <OrderItem item={item}/>
  )
  return (
    <CustomSafeArea>
      <View style={styles.container}>
        <Text style={styles.heading}>My Cart</Text>
        <Text style={styles.number}>Deliver to: {user?.phone ? user?.phone :" "} </Text>
        <Text style={styles.address}>{user?.address ? user?.address : "Login first to place your order"}</Text>
      </View>

      {
        carts.length>0?(
          <FlatList
          data={carts}
          renderItem={rederItem}
          keyExtractor={(item)=>item._id.toString()}
          contentContainerStyle={styles.listContainer}
          />
        ):
        (
          <View style={styles.emptyCOntainer}>
            <Text style={styles.emptyText}>Your cart is empty</Text>
            <TouchableOpacity style={styles.shopNowButton} onPress={()=>navigate("Categories")}>
              <Text style={styles.shopNowText}>Shop Now</Text>
            </TouchableOpacity>
          </View>
        )
      }

      {
        carts.length>0 &&
        <PlacedOrderButton />
      }
    </CustomSafeArea>
  )
}

const styles = StyleSheet.create({
  number:{
    fontWeight:'500'
  },
  address:{
    color:"#666",
    marginTop:3
  },
  container:{
    padding:16,
    borderBottomWidth:5,
    borderColor:"#f0f2f5",
    backgroundColor:"#fff"
  },
  heading:{
    fontSize:RFValue(14),
    fontWeight:'600',
    color:"#000",
    marginBottom:8
  },
  emptyCOntainer:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    padding:16
  },
  emptyText:{
    fontSize:RFValue(16),
    color:'#666',
    marginBottom:16
  },
  shopNowButton:{
    backgroundColor:Colors.active,
    padding:11
  },
  shopNowText:{
    fontSize:RFValue(12),
    color:'#fff',
    fontWeight:'500'
  },

  listContainer:{
    paddingTop:8,
    paddingBottom:100
  }
})

export default Cart