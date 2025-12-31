import { StyleSheet, Text, View, FlatList } from "react-native";
import React from "react";
import { screenWidth } from "@/src/utils/Constants";
import { CARD_WIDTH } from "../molecules/InfluencerCard";
import Animated, {
  useAnimatedScrollHandler,
  useSharedValue,
} from "react-native-reanimated";
import InfluencerAnimatedItem from "../molecules/InfluencerAnimatedItem";
import SectionTitle from "@/src/modules/Search/atoms/SectionTitle";

const width = screenWidth;
const SPACING = 16;
const SNAP_INTERVAL = CARD_WIDTH + SPACING;

const InfluencerCarousel = ({ influencerData }: any) => {
  const scrollX = useSharedValue(0);

  const onScroll = useAnimatedScrollHandler({
    onScroll: (event) => {
      scrollX.value = event.contentOffset.x;
    },
  });

  return (
    <View>
      <View style={styles.titleWrapper}>
        <SectionTitle title="Top influencer picks" />
      </View>
      <Animated.FlatList
        data={influencerData}
        keyExtractor={(item) => item._id}
        horizontal
        showsHorizontalScrollIndicator={false}
        snapToInterval={SNAP_INTERVAL}
        decelerationRate="fast"
        bounces={false}
        contentContainerStyle={{
          paddingHorizontal: (width - CARD_WIDTH) / 2,
        }}
        onScroll={onScroll}
        scrollEventThrottle={16}
        renderItem={({ item, index }) => (
          <InfluencerAnimatedItem
            item={item}
            key={item._id}
            index={index}
            SPACING={SPACING}
            SNAP_INTERVAL={SNAP_INTERVAL}
            scrollX={scrollX}
          />
        )}
      />
    </View>
  );
};

export default InfluencerCarousel;

const styles = StyleSheet.create({
  titleWrapper: {
    alignItems: "center",
  },
});
