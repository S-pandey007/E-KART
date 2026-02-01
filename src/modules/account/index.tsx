import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  FlatList,
  ToastAndroid,
} from "react-native";
import React, { useEffect } from "react";
import HeaderCard from "./atom/HeaderCard";
import { SafeAreaView } from "react-native-safe-area-context";
import OptionsCollection from "./molecules/OptionsCollection";
import { scale } from "@/src/utils/Responsivess";
import RecentlyViewedList from "./molecules/RecentlyViewedList";
import AdvertisementBannerAtom from "@/src/components/atoms/AdvertisementBannerAtom";
import { AdvertisementBannerImage } from "@/src/utils/searchData";
import AccountSettingsList from "./molecules/AccountSettingsList";
import { Colors } from "@/src/utils/Constants";
import MyActivity from "./molecules/MyActivity";
import { useAppDispatch, useAppSelector } from "@/src/store/reduxHook";
import { FONTS } from "@/src/theme/font/fonts";
import { RFValue } from "react-native-responsive-fontsize";
import { clearCart } from "../cart/api/slice";
import { setData } from "./api/slice";
import { logout } from "../login/api/api";
import { navigate } from "@/src/navigation/NavigationUtils";
import LoggedOutState from "@/src/components/atoms/LoggedOutState";
import { AccountIcons } from "@/images/productDetails";

const Account = () => {
  // fecth user from redux is user already login
  const user = useAppSelector((state) => state.account.user);
  const dispatch = useAppDispatch();

  // function for handle logout logic
  const handleLogout = async () => {
    const result = await logout(user?.data.accessToken);
    console.log("logout result", result);
    if (result.success) {
      ToastAndroid.show("Logout Successfull", ToastAndroid.LONG);
      navigate("Home");
      await dispatch(clearCart());
      await dispatch(setData(null));
    } else {
      ToastAndroid.show("Logout Failed", ToastAndroid.LONG);
    }
  };
  return (
    <SafeAreaView
      edges={["top"]}
      style={{ flex: 1, backgroundColor: Colors.primaryBG }}
    >
      <FlatList
        data={[{ id: "dummy" }]}
        keyExtractor={(item) => item.id}
        renderItem={null}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <>
            {/* Header */}
            <View style={styles.headContainer}>
              <HeaderCard
                name={
                  user ? user.data.userSafe.fullName : "Please Login or Signup"
                }
                email={user ? user.data.userSafe.email : ""}
                btnText={user ? "Logout" : "Login"}
                onPress={user ? () => handleLogout() : () => navigate("Login")}
              />
              {user && <OptionsCollection />}
            </View>
            {user ? (
              <>
                {/* Recently Viewed */}
                <RecentlyViewedList />

                {/* Sponsored Banner */}
                <AdvertisementBannerAtom image={AdvertisementBannerImage} />

                {/* Account Options */}
                <AccountSettingsList />

                {/* my activity  */}
                <MyActivity />
              </>
            ) : (
              <>
                <LoggedOutState image={AccountIcons.userLogin} />
              </>
            )}
          </>
        }
      />
    </SafeAreaView>
  );
};

export default Account;

const styles = StyleSheet.create({
  headContainer: {
    backgroundColor: "#FFF",
    paddingVertical: scale(10),
  },
  loginAlertContainer: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: scale(10),
  },
  loginAlertText: {
    fontFamily: FONTS.MEDIUM,
    fontSize: RFValue(16),
  },
});
