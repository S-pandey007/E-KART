import { View } from 'react-native';
import React from 'react';
import { WebView } from "react-native-webview";
import { useRoute } from '@react-navigation/native';
import { navigate } from '@/src/navigation/NavigationUtils';

const RazorpayPaymentWebView = () => {

  const route = useRoute();
  const { txn, price, carts, userId, address } = route.params as any;

  // console.log("RazorpayPaymentWebView Params:", route.params);

  const html = `
    <html>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      </head>
      <body>
        <script src="https://checkout.razorpay.com/v1/checkout.js"></script>

        <script>
          document.addEventListener("DOMContentLoaded", function() {
            var options = {
              key: "${txn?.key}",
              amount: "${txn?.amount}",
              currency: "${txn?.currency}",
              name: "E-KART",
              order_id: "${txn?.order_id}",
              prefill: {
                name: "E-KART User",
                contact: "9770337151",
                email: "shubhampandey8663@gmail.com"
              },
              handler: function (response){
                window.ReactNativeWebView.postMessage(JSON.stringify({
                  status: "success",
                  payment_id: response.razorpay_payment_id,
                  order_id: response.razorpay_order_id,
                  signature: response.razorpay_signature
                }));
              },
              theme: {
                color: "#53a20e"
              }
            };

            var rzp = new Razorpay(options);
            rzp.on('payment.failed', function (response) {
              window.ReactNativeWebView.postMessage(JSON.stringify({
                status: "failed",
                error: response.error
              }));
            });
            rzp.open();
          });
        </script>
      </body>
    </html>
  `;

  const onMessage = (event: any) => {
    const data = JSON.parse(event.nativeEvent.data);
    console.log("Payment success message received:", data);

    if (data.status === "success") {
      navigate("PaymentSuccess", {
        payment: data,
        price,
        carts,
        userId,
        address
      });
    }
  };

  return (
    <WebView
      source={{ html }}
      onMessage={onMessage}
      javaScriptEnabled={true}
      domStorageEnabled={true}
      originWhitelist={['*']}
      style={{ flex: 1 }}
    />
  );
};

export default RazorpayPaymentWebView;
