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
      style={{ flex: 1 }}
    >
      {user ? (
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
                  name={user.data.userSafe.fullName}
                  email={user.data.userSafe.email}
                  btnText="Logout"
                  onPress={handleLogout}
                />
                <OptionsCollection />
              </View>

              <RecentlyViewedList />
              <AdvertisementBannerAtom image={AdvertisementBannerImage} />
              <AccountSettingsList />
              <MyActivity />
            </>
          }
        />
      ) : (
        <View style={styles.loggedOutWrapper}>
          <LoggedOutState image={AccountIcons.userLogin} />
        </View>
      )}
    </SafeAreaView>
  );
};

export default Account;

const styles = StyleSheet.create({
  headContainer: {
    backgroundColor: "#FFF",
    paddingVertical: scale(10),
  },
  loggedOutWrapper: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  loginAlertText: {
    fontFamily: FONTS.MEDIUM,
    fontSize: RFValue(16),
  },
});
