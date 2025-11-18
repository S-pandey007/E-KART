import { ActivityIndicator, Alert, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { RFValue } from 'react-native-responsive-fontsize'
import { useAppSelector } from '@/src/store/reduxHook'
import { selectTotalCartPrice ,selectCartItems} from '../api/slice'
import LoginModal from '../../account/molecules/LoginModal'
import { createTransaction } from '../api/gatway'
import { navigate } from '@/src/navigation/NavigationUtils'

const PlacedOrderButton = () => {
    const user = useAppSelector(state=>state.account.user) as any;
    const carts = useAppSelector(selectCartItems);
    const price=useAppSelector(selectTotalCartPrice)
    const [loading,setLoading]=React.useState(false);
    const [isVisible,setIsVisible]=React.useState(false);

 
    // const handlePlaceOrder = async()=>{
    //     setLoading(true)
    //     const data= await createTransaction(price,user?._id)
    //     if(data){
    //         const order = await createOrder(data?.key,data?.amount,data?.order_id,carts,user?._id,user?.address)
    //         setLoading(false)
    //         if(order?.type==="error"){
    //             Alert.alert("Error","Payment Failed. Please try again.")
    //         }
    //     }else{
    //         setLoading(false)
    //         Alert.alert("Error","Unable to initiate transaction. Please try again later.")
    //     }
    // }

    const handlePlaceOrder = async()=>{
        setLoading(true)

        const txn = await createTransaction(price,user?._id);

        setLoading(false);

        if(!txn?.success){
            Alert.alert("Error","Unable to create Razorpay order");
            return;
        }

        navigate("RazorpayPaymentWebView",{
            txn,price,carts,userId:user?._id,address:user?.address
        })
    }
  return (
    <>
        <View style={styles.container}>
            <View>
                <Text style={styles.strikePrice}>₹{price+1200}</Text>
                <Text style={styles.price}>
                    ₹{price}
                    <Text style={{fontSize:RFValue(10)}}>{" "}00</Text>
                </Text>
            </View>

            <TouchableOpacity disabled={loading}
            style={styles.button}
            onPress={()=>{
                if(user){
                    handlePlaceOrder()
                }else{
                    setIsVisible(true)
                }
            }}
            >
            {
                loading ? 
                <ActivityIndicator color='black' size='small'/>:
                <Text style={styles.btnText}>
                    Place Order
                </Text>
            }

            </TouchableOpacity>
        </View>

        {
            isVisible && <LoginModal onClose={()=> setIsVisible(false)} visible={isVisible}/>
        }
    </>
  )
}

export default PlacedOrderButton

const styles = StyleSheet.create({
    strikePrice:{
        fontSize:RFValue(12),
        color:'#888',
        textDecorationLine:'line-through'
    },
    price:{
        fontSize:RFValue(15),
        color:'#000',
        fontWeight:'600'
    },
    button:{
        backgroundColor:"#ffc201",
        padding:10,
        borderRadius:5,
        width:150,
        justifyContent:'center',
        alignItems:'center',
        paddingHorizontal:20
    },
    btnText:{
        color:'#222',
        fontWeight:'600',
        fontSize:RFValue(14)
    },
    container:{
        position:'absolute',
        bottom:8,
        borderTopWidth:2,
        borderColor:'#f0f2f5',
        width:'100%',
        padding:15,
        paddingBottom:Platform.OS==='ios' ? 30:10,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between'
    }
})