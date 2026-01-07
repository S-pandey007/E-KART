import {
  FlatList,
  Image,
  NativeScrollEvent,
  NativeSyntheticEvent,
  StyleSheet,
  View,
} from "react-native";
import React, { memo, useRef, useState } from "react";
import { RFValue } from "react-native-responsive-fontsize";

import { screenWidth } from "@/src/utils/Constants";
import CarouselDot from "./CarouselDot";

type ImageCarouselProps = {
  images: string[];
  height?: number;
};

const ImageCarousel = ({
  images,
  height = RFValue(260),
}: ImageCarouselProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const flatListRef = useRef<FlatList>(null);

  const onScrollEnd = (
    e: NativeSyntheticEvent<NativeScrollEvent>
  ) => {
    const index = Math.round(
      e.nativeEvent.contentOffset.x / screenWidth
    );
    setActiveIndex(index);
  };

  const renderItem = ({ item }: { item: string }) => (
    <View style={[styles.imageWrapper, { height }]}>
      <Image
        source={{ uri: item }}
        style={styles.image}
        resizeMode="cover"
      />
    </View>
  );

  if (!images?.length) return null;

  return (
    <View style={styles.container}>
      <FlatList
        ref={flatListRef}
        data={images}
        keyExtractor={(_, index) => index.toString()}
        renderItem={renderItem}
        horizontal
        pagingEnabled
        snapToInterval={screenWidth}
        decelerationRate="fast"
        showsHorizontalScrollIndicator={false}
        onMomentumScrollEnd={onScrollEnd}
        initialNumToRender={1}
        maxToRenderPerBatch={1}
        windowSize={2}
        removeClippedSubviews
      />

      {/* Pagination */}
      <View style={styles.indicatorContainer}>
        {images.map((_, index) => (
          <CarouselDot
            key={index}
            active={index === activeIndex}
          />
        ))}
      </View>
    </View>
  );
};

export default memo(ImageCarousel);
const styles = StyleSheet.create({
  container: {
   
   backgroundColor:'#fff'
  },

  imageWrapper: {
    width: screenWidth,
    height: '100%',
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: RFValue(10),
  },

  image: {
    width: "100%",
    height: "100%",
  },

  indicatorContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginVertical: RFValue(10),
  },
});
