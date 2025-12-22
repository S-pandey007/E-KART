import React, { FC } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "../modules/Home/index";
import Splash from "../modules/Onboard/index";
import { navigationRef } from "./NavigationUtils";
import MainNavigator from "./MainNavigator";
import Products from "../modules/products";
import Cart from "../modules/cart";
import PaymentSuccess from "../modules/Payment_Success";
import RazorpayPaymentWebView from "../components/organisms/RazorpayPaymentWebView";
import Login from "../modules/login";
import EmailVerification from "../modules/email-Verification";
import Registration from "../modules/registration";
import SearchScreen from "../modules/Search";
import SearchResult from "../modules/SearchResult";

const Stack = createNativeStackNavigator();

const Navigation: FC = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="Splash"
      >
        <Stack.Screen
          name="Splash"
          component={Splash}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="MainNavigator" component={MainNavigator} />
        <Stack.Screen name="Products" component={Products} />
        <Stack.Screen name="Cart" component={Cart} />
        <Stack.Screen name="PaymentSuccess" component={PaymentSuccess} />
        <Stack.Screen
          name="RazorpayPaymentWebView"
          component={RazorpayPaymentWebView}
        />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="EmailVerification" component={EmailVerification} />
        <Stack.Screen name="Registration" component={Registration} />
        <Stack.Screen name="Search" component={SearchScreen}/>
        <Stack.Screen name="SearchResult" component={SearchResult}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
