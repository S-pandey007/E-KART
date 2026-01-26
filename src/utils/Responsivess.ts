import { Dimensions, PixelRatio, Platform } from "react-native";
const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get("window");

const BASE_WIDTH = 375;
const BASE_HEIGHT = 812;

// Scale width according to screen width
export const scaleW = (size: number) => (SCREEN_WIDTH / BASE_WIDTH) * size;

// Scale height according to screen height
export const scaleH = (size: number) => (SCREEN_HEIGHT / BASE_HEIGHT) * size;

// Scale uniformly
export const scale = (size: number) => {
  const scaled = Math.min(scaleW(size), scaleH(size));
  return Math.round(PixelRatio.roundToNearestPixel(scaled));
};

export const RFValue = (fontSize: number) => {
  const ratio = Math.min(SCREEN_WIDTH / BASE_WIDTH, SCREEN_HEIGHT / BASE_HEIGHT);
  const newSize = fontSize * ratio;
  return Math.round(PixelRatio.roundToNearestPixel(newSize));
};

export const spacing = (value: number) => scale(value);

export const screenHeight = Dimensions.get("window").height;
export const screenWidth = Dimensions.get("window").width;

