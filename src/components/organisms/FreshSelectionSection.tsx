import { FlatList, StyleSheet, View, Animated } from "react-native";
import React, { useRef } from "react";
import { RFValue } from "react-native-responsive-fontsize";

import { freshSelectionProducts } from "@/src/utils/searchData";
import FreshProductCard from "../molecules/FreshProductCard";
import FreshTitleBanner from "../molecules/FreshTitleBanner";
import { Colors } from "@/src/utils/Constants";

const BANNER_WIDTH = RFValue(170);

type Products = {
  id: string;
  title: string;
  image: string;
  rating: number;
  originalPrice: number;
  sellingPrice: number;
  discountPercent: number;
};

type Props = {
  onExplorePress?: () => void;
  onProductPress?: (item: Products) => void;
  freshCollection:any;
};

const FreshSelectionSection: React.FC<Props> = ({freshCollection,
  onExplorePress,
  onProductPress,
}) => {
  const scrollX = useRef(new Animated.Value(0)).current;
  const translateX = React.useRef(new Animated.Value(150)).current;
  const listX = React.useRef(new Animated.Value(150)).current;
  React.useEffect(() => {
    Animated.timing(translateX, {
      toValue: 0, // stop position
      duration: 800,
      useNativeDriver: true,
    }).start();
  }, []);
  
  React.useEffect(() => {
    Animated.timing(listX, {
      toValue: 0, // stop position
      duration: 1000,
      // delay:800,
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <Animated.View style={[styles.container]}>
      {/* BANNER (BEHIND LIST) */}
      <Animated.View
        style={[
          styles.banner,
          {
            opacity: scrollX.interpolate({
              inputRange: [0, BANNER_WIDTH / 1.5],
              outputRange: [1, 0],
              extrapolate: "clamp",
            }),
            transform: [
              {
                translateX: scrollX.interpolate({
                  inputRange: [0, BANNER_WIDTH],
                  outputRange: [0, -40],
                  extrapolate: "clamp",
                }),
              },
              { translateX },
            ],
          },
        ]}
      >
        <FreshTitleBanner image={freshCollection?.BrandIcon} title={freshCollection?.BrandTitle} onPress={onExplorePress} />
      </Animated.View>

      {/* PRODUCT LIST (ABOVE BANNER) */}
      <Animated.FlatList
        horizontal
        style={[{ transform: [{ translateX: listX }] }]}
        data={freshCollection?.freshCollection || []}
        keyExtractor={(item) => item.id}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingLeft: BANNER_WIDTH + RFValue(12),
          paddingRight: RFValue(12),
        }}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: true }
        )}
        scrollEventThrottle={16}
        renderItem={({ item }) => (
          <FreshProductCard
          key={item.id}
            title={item.title}
            image={item.image}
            rating={item.rating}
            originalPrice={item.originalPrice}
            sellingPrice={item.sellingPrice}
            discountPercentage={item.discountPercent}
            onPress={() => onProductPress?.(item)}
          />
        )}
      />
    </Animated.View>
  );
};

export default FreshSelectionSection;
const styles = StyleSheet.create({
  container: {
    height: RFValue(240),
    marginVertical: RFValue(12),
    // backgroundColor:Colors.primaryBG,
    justifyContent: "center",
  },
  banner: {
    position: "absolute",
    top: 0,
    bottom: 0,
    width: BANNER_WIDTH,
    zIndex: 1,
  },
  flatListWrapper: {
    position: "absolute",
  },
});
