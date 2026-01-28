import { StyleSheet,TouchableOpacity,View } from "react-native";
import React from "react";
import { screenWidth } from "@/src/utils/Responsivess";
import ImageTile from "../atom/ImageTile";

const GAP = 8;
const CONTAINER_WIDTH = (screenWidth*0.9 - GAP * 2);
const SMALL = (CONTAINER_WIDTH - GAP) / 2;

type Props = {
  images: string[];
  onPress?: (index:number) => void;
};
const ImageGrid: React.FC<Props> = ({ images, onPress }) => {
  if (!images?.length) return null;

  return (
    <View style={styles.container}>
      <View style={styles.topRow}>
        {/* BIG IMAGE */}
        <TouchableOpacity
        onPress={onPress?.(0)}
          style={styles.bigTile}
        >
          <ImageTile onPress={onPress?.(0)} uri={images[0]?.uri} />
        </TouchableOpacity>

        {/* RIGHT STACK */}
        <View style={styles.rightColumn}>
          <TouchableOpacity
          onPress={onPress?.(1)}
            style={styles.smallTile}
          >
            <ImageTile onPress={onPress?.(1)} uri={images[1]?.uri} />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={onPress?.(2)}
            style={styles.smallTile}
          >
            <ImageTile
            onPress={onPress?.(2)}
              uri={images[2]?.uri}
              overlayText={
                images.length > 3 ? `+${images.length - 3}` : undefined
              }
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};


export default ImageGrid;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: GAP,
  },

  topRow: {
    flexDirection: "row",
    gap: GAP,
  },

  bigTile: {
    width: SMALL,
    height: SMALL * 2 + GAP,
  },

  rightColumn: {
    width: SMALL,
    gap: GAP,
  },

  bottomRow: {
    flexDirection: "row",
    gap: GAP,
    marginTop: GAP,
  },

  smallTile: {
    width: SMALL,
    height: SMALL,
  },
});

