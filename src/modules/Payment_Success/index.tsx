import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect } from 'react';
import { Colors, screenHeight } from '@/src/utils/Constants';
import { useRoute } from '@react-navigation/native';
import { goBack, navigate } from '@/src/navigation/NavigationUtils';
import LottieView from 'lottie-react-native';
import axios from 'axios';
import { BASE_URL } from '@/src/store/config';
import { useAppDispatch } from '@/src/store/reduxHook';
import { clearCart } from '../cart/api/slice';

const PaymentSuccess = () => {
  const route = useRoute();
  const { payment, price, carts, userId, address } = route.params as any;
 const dispatch = useAppDispatch();
  useEffect(() => {
    createFinalOrder();
  }, []);

  //FINAL ORDER CREATION API WITH ERROR HANDLING
  const createFinalOrder = async () => {
    try {
      const today = new Date();
      const deliveryDate = new Date();
      deliveryDate.setDate(today.getDate() + 7);

      await axios.post(`${BASE_URL}/order`, {
        razorpay_order_id: payment?.order_id,
        razorpay_payment_id: payment?.payment_id,
        razorpay_signature: payment?.signature,
        userId,
        cartItems: carts,
        deliveryDate,
        address,
      });

      console.log("Final order created successfully!");
      await dispatch(clearCart());
    } catch (error) {
      console.error("Error creating final order:", error);
    }

    // Redirect after 4 seconds
    setTimeout(() => {
      goBack();
      navigate("MainNavigator", {
        screen: "Account",
        params: { isRefresh: true }
        });
    }, 4000);
  };

  return (
    <View style={styles.container}>
      <LottieView
        source={require('../../../assets/animations/confirm.json')}
        autoPlay
        duration={2000}
        loop={false}
        speed={1}
        style={styles.lottieView}
      />
      <Text style={styles.orderPlacedText}>
        ORDER PLACED — ₹{price}
      </Text>
      <View style={styles.deliveryContainer}>
        <Text style={styles.deliveryText}>Delivering to Home</Text>
      </View>
      <Text style={styles.addressText}>{address}</Text>
    </View>
  );
};

export default PaymentSuccess;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  lottieView: {
    width: screenHeight * 0.6,
    height: 150,
  },
  orderPlacedText: {
    opacity: 0.7,
    textAlign: 'center',
    fontSize: 16,
    marginTop: 10,
  },
  deliveryContainer: {
    borderBottomWidth: 2,
    paddingBottom: 4,
    marginTop: 15,
    marginBottom: 3,
    borderColor: Colors.active,
  },
  deliveryText: {
    textAlign: 'center',
  },
  addressText: {
    opacity: 0.8,
    textAlign: 'center',
    marginTop: 5,
  },
});
