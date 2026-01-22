import { FONTS } from "@/src/theme/font/fonts";
import React, { memo } from "react";
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { RFValue } from "react-native-responsive-fontsize";


type Props = {
  title: string;
  onPress: () => void;

  disabled?: boolean;
  loading?: boolean;
};

const PrimaryButton: React.FC<Props> = ({
  title,
  onPress,
  disabled = false,
  loading = false,
}) => {
  const isDisabled = disabled || loading;

  return (
    <TouchableOpacity
      activeOpacity={0.85}
      disabled={isDisabled}
      onPress={onPress}
      style={[
        styles.container,
        isDisabled && styles.disabledContainer,
      ]}
    >
      {loading ? (
        <ActivityIndicator color="#FFFFFF" />
      ) : (
        <Text style={styles.text}>{title}</Text>
      )}
    </TouchableOpacity>
  );
};

export default memo(PrimaryButton);

const styles = StyleSheet.create({
  container: {
    height: RFValue(48),
    borderRadius: RFValue(12),
    backgroundColor: "#5F33D6",
    alignItems: "center",
    justifyContent: "center",
    marginTop: RFValue(20),
  },

  disabledContainer: {
    opacity: 0.6,
  },

  text: {
    fontFamily: FONTS.MEDIUM,
    fontSize: RFValue(15),
    color: "#FFFFFF",
    letterSpacing: 0.4,
  },
});
