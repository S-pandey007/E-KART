import {
  StyleSheet,
  Text,
  View,
  TextInputProps,
  TextInput,
} from "react-native";
import React, { memo } from "react";
import { RFValue } from "react-native-responsive-fontsize";
import { FONTS } from "@/src/theme/font/fonts";

type Props = TextInputProps & {
  label: string;
  error?: string;
  important?: boolean;
};
const FormInput: React.FC<Props> = ({
  label,
  error,
  style,
  important = false,
  ...inputPops
}) => {
  return (
    <View style={styles.wrapper}>
      {/* label  */}
      <Text style={styles.label}>
        {label}
        {important && <Text style={styles.important}> *</Text>}
      </Text>

      {/* input  */}
      <View style={[styles.inputContainer, error ? styles.inputError : null]}>
        <TextInput
          {...inputPops}
          placeholderTextColor="#9ca3af"
          style={[styles.input, style]}
        />
      </View>

      {/* error message  */}
      {error ? <Text style={styles.errorText}>{error}</Text> : null}
    </View>
  );
};

export default memo(FormInput);

const styles = StyleSheet.create({
  wrapper: {
    paddingVertical: RFValue(10),
  },
  label: {
    fontSize: RFValue(12),
    fontFamily: FONTS.MEDIUM,
    color: "#4b5563",
    paddingVertical: RFValue(3),
  },
  inputContainer: {
    height: RFValue(46),
    borderRadius: RFValue(10),
    borderWidth: 1,
    borderColor: "#E5E7EB",
    paddingHorizontal: RFValue(10),
    justifyContent: "center",
    backgroundColor: "#FFFFFF",
  },
  input: {
    fontFamily: FONTS.REGULAR,
    fontSize: RFValue(14),
    color: "#111827",
    paddingVertical: 0, // android fix
  },

  inputError: {
    borderColor: "#EF4444",
  },

  errorText: {
    paddingVertical: RFValue(4),
    paddingHorizontal: RFValue(4),
    fontFamily: FONTS.REGULAR,
    fontSize: RFValue(11),
    color: "#EF4444",
  },
  important: {
    color: "#EF4444",
    fontSize: RFValue(14),
  },
});
