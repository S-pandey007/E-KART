import { View, Text, StyleSheet } from "react-native";
import React, { FC, useEffect, useState } from "react";
import Animated, {
  interpolate,
  useAnimatedStyle,
} from "react-native-reanimated";
import { SafeAreaView } from "react-native-safe-area-context";
import { menuData } from "@/src/utils/db";
import MenuItems from "../atoms/MenuItems";
import Icons from "@/src/components/atoms/Icons";
import { Colors } from "@/src/utils/Constants";
import { RFValue } from "react-native-responsive-fontsize";
import { FONTS } from "@/src/theme/font/fonts";
import { useCurrentLocation } from "@/src/utils/GeoLocation";

const MenuHeader: FC<{ scrollY: any }> = ({ scrollY }) => {
  const [focusedIndex, setFocusedIndex] = useState();
   const { address, loading, getCurrentAddress } = useCurrentLocation();
  const opacityFadingStyles = useAnimatedStyle(() => {
    const opacity = interpolate(scrollY.value, [0, 80], [1, 0]);
    return {
      opacity,
    };
  });

 useEffect(() => {
  if (getCurrentAddress) {
    getCurrentAddress();
  }
}, []);

  return (
    <Animated.View style={[styles.container, opacityFadingStyles]}>
      {/* <SafeAreaView/> */}
      <View style={styles.flexRow}>
        {menuData.map((item, index) => (
          <MenuItems
            key={index}
            item={item}
            isFocused={focusedIndex === index}
            onSelect={() => setFocusedIndex(index)}
          />
        ))}
      </View>

      <View style={styles.addressContainer}>
        <Icons size={16} name="home" iconFamily="Ionicons" />
        <Text style={styles.homeText}>HOME</Text>
        {
          address ?(
            <Text style={styles.addressText} numberOfLines={1}>
            {address["district"]},{address?.city},{address?.country}-{address?.pinCode}
            </Text>
          ):(
            <Text style={styles.addressText} numberOfLines={1}>
            Fetching location....
            </Text>
          )
        }
        
        <Icons size={16} name="chevron-forward-sharp" iconFamily="Ionicons" />
      </View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  flexRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 5,
  },

  //  address styles
  addressContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 5,
  },
  homeText: {
    marginHorizontal: 5,
    // fontWeight:'bold',
    color: Colors.text,
    fontSize: RFValue(14),
    fontFamily: FONTS.BOLD,
  },
  addressText: {
    flex: 1,
    color: Colors.text,
    fontSize: RFValue(13),
  },
});

export default MenuHeader;
