import { View, Text, TouchableOpacity, FlatList, Image } from 'react-native'
import React, { useEffect } from 'react'
import { useRoute } from '@react-navigation/native'
import { useAppSelector } from '@/src/store/reduxHook';
import { getOrderByUserId } from './api/api';
import CustomSafeArea from '@/src/components/atoms/CustomSafeArea';
import { orderStyles } from '@/src/styles/orderStyles';
import LoginModal from './molecules/LoginModal';
import { formatDate } from '@/src/utils/Constants';

const Account = () => {

  const route = useRoute();
  const item = route?.params as any;
  const user = useAppSelector(state=> state.account.user) as any;
  const [isVisible, setIsVisible] = React.useState(false);
  const [orders, setOrders] = React.useState<any[]>([]);

  const fetchOrders = async()=>{
    const data = await getOrderByUserId(user?._id)
    if(data){
      setOrders(data)
    }
  }

  useEffect(()=>{
    if(user){
      fetchOrders()
    }else{
      setOrders([])
    }
  },[user])

  useEffect(()=>{
    if(item?.isRefresh && user){
      fetchOrders()
    }
  },[item])

  const renderItem = ({item}:any)=>(
    <View style={orderStyles.orderContainer}>
      <Image source={{uri:item?.product?.image_uri}} style={orderStyles.image}/>
      <View style={orderStyles.orderDetails}>
        <Text style={orderStyles.itemName}>{item?.product?.name}</Text>
        <Text style={orderStyles.price}>{item?.product?.price}</Text>
      </View>
    </View>
  )

  return (
    <>
      <CustomSafeArea>
        <View style={orderStyles.container}>
          <Text>{user?user?.phone:"Account"}</Text>
          <View style={orderStyles.flexRow}>
            <Text>{user? user?.address:"Login"}</Text>
            <TouchableOpacity style={orderStyles.btn} onPress={()=> setIsVisible(true)}>
              <Text style={orderStyles.btnText}>{user?"Update":"Login"}</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={orderStyles.listContainer}>
          <Text style={orderStyles.heading}>Your Orders</Text>
          <FlatList
          data={orders}
          keyExtractor={(item)=>item?._id?.toString()}
          renderItem={({item})=>(
            <View style={orderStyles.order}>
              <FlatList
                data={item?.items}
                keyExtractor={(item,index)=>index.toString()}
                renderItem={renderItem}
                scrollEnabled={false}
              />
              <Text style={orderStyles.address}>
                {item?.address}
              </Text>
              <Text style={orderStyles.deliveryDate}>
                Delivery by:{formatDate(item?.deliveryDate)}
              </Text>
              <View style={orderStyles.statusContainer}>
                <Text style={orderStyles.statusText}>{item?.status}</Text>
              </View>
            </View>
          )}

          ListEmptyComponent={
            <View>
                <Text style={orderStyles.emptyText}>
                  {!user?"Please login to see your orders.":"No orders found."}
                </Text>
            </View>
          }
          showsVerticalScrollIndicator={false}
          
          />
        </View>

      </CustomSafeArea>
      <LoginModal onClose={()=>setIsVisible(false)} visible={isVisible}/>
    </>
  )
}

export default Account