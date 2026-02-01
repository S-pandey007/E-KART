import React, { memo } from "react";
import { StyleSheet, Image, TouchableOpacity, ViewStyle } from "react-native";
import { scale } from "@/src/utils/Responsivess";
import SectionTitle from "@/src/modules/Search/atoms/SectionTitle";
import { RFValue } from "react-native-responsive-fontsize";

type Props = {
  image: string;
  title?: string;
  onPress?: () => void;
  style?: ViewStyle;
};

const AdvertisementBannerAtom: React.FC<Props> = ({
  image,
  onPress,
  style,
  title,
}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.9}
      onPress={onPress}
      style={[styles.container, style]}
      disabled={!onPress}
    >
      <SectionTitle
        title={title || "Sponsored"}
        titleStyle={{ fontSize: RFValue(15) }}
      />
      <Image
        source={{
          uri:
            image ||
            "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
        }}
        style={styles.image}
      />
    </TouchableOpacity>
  );
};

export default memo(AdvertisementBannerAtom);
const styles = StyleSheet.create({
  container: {
    width: "100%",
    borderRadius: scale(10),
    overflow: "hidden",
    // marginVertical: scale(10),
    paddingHorizontal: scale(10),
    backgroundColor: "#FFF",
    paddingBottom: scale(12),
  },

  image: {
    width: "100%",
    aspectRatio: 16 / 8,
    resizeMode: "cover",
  },
});
