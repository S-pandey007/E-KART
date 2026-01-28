import {
  FlatList,
  Image,
  Modal,
  NativeScrollEvent,
  NativeSyntheticEvent,
  StyleSheet,
  Text,
  View,
  Pressable,
} from "react-native";
import React, { memo, useRef, useState } from "react";
import { RFValue } from "react-native-responsive-fontsize";

import { screenWidth } from "@/src/utils/Constants";

import Icons from "@/src/components/atoms/Icons";
import CarouselDot from "../../organisms/ScrollImages/CarouselDot";
import { screenHeight } from "@/src/utils/Responsivess";
import { SafeAreaView } from "react-native-safe-area-context";

type ImageItem = {
  uri: string;
  caption?: string;
};

type ImageCarouselProps = {
  images: ImageItem[];
  height?: number;
  visible: boolean;
  onClose: () => void;
};

const ImageCarouselModal = ({
  images,
  height,
  visible,
  onClose,
}: ImageCarouselProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const flatListRef = useRef<FlatList>(null);

  const onScrollEnd = (
    e: NativeSyntheticEvent<NativeScrollEvent>,
  ) => {
    const index = Math.round(
      e.nativeEvent.contentOffset.x / screenWidth,
    );
    setActiveIndex(index);
  };

  const renderItem = ({ item }: { item: ImageItem }) => (
    <View style={[styles.imageWrapper, { height:screenHeight }]}>
      <Image
        source={{ uri: item.uri }}
        style={styles.image}
        resizeMode="contain"
      />

      {/* Caption Overlay */}
      {item.caption && (
        <View style={styles.captionContainer}>
          <Text style={styles.captionText}>{item.caption}</Text>
        </View>
      )}
    </View>
  );

  if (!images?.length) return null;

  return (
    <Modal visible={visible} transparent animationType="fade">
      <SafeAreaView edges={["bottom"]} style={styles.modalContainer}>
        {/* Close Button (UI only) */}
        <Pressable style={styles.closeBtn} onPress={onClose}>
          <Icons
            name="close"
            iconFamily="Ionicons"
            size={26}
            color="#fff"
          />
        </Pressable>

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
              activeScale={1.6}
            />
          ))}
        </View>
      </SafeAreaView>
    </Modal>
  );
};

export default memo(ImageCarouselModal);
const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    backgroundColor: "#000",
  },

  imageWrapper: {
    width: screenWidth,
    justifyContent: "center",
    alignItems: "center",
  },

  image: {
    width: "100%",
    height: "100%",
  },

  captionContainer: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    paddingVertical: RFValue(12),
    paddingHorizontal: RFValue(16),
    backgroundColor: "rgba(0,0,0,0.5)",
  },

  captionText: {
    color: "#fff",
    fontSize: RFValue(14),
  },

  indicatorContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginVertical: RFValue(10),
  },

  closeBtn: {
    position: "absolute",
    top: RFValue(40),
    right: RFValue(20),
    zIndex: 10,
  },
});
