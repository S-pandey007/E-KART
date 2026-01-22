import { StyleSheet, Text, View } from "react-native";
import React, { memo, useState } from "react";
import DropDownPicker from "react-native-dropdown-picker";
import { RFValue } from "react-native-responsive-fontsize";
import { FONTS } from "@/src/theme/font/fonts";
type Option = {
  label: string;
  value: string;
};

type Props = {
  label: string;
  value: string | null;
  options: Option[];
  placeholder?: string;
  onChange: (value: string) => void;

  disabled?: boolean;
  loading?: boolean;
  zIndex?: number;
  error?: string;
  important?: boolean;
};
const FormDropdown: React.FC<Props> = ({
  label,
  value,
  options,
  placeholder = "Select an option",
  onChange,
  disabled = false,
  loading = false,
  zIndex = 1000,
  error,
  important = false,
}) => {
  const [open, setOpen] = useState(false);

  return (
    <View style={[styles.container, { zIndex: zIndex }]}>
      {/* label  */}
      <Text style={styles.label}>
        {label}
        {important && <Text style={styles.important}> *</Text>}
      </Text>

      {/* dropdown box  */}
      <DropDownPicker
        open={open}
        value={value}
        items={options}
        setOpen={setOpen}
        setValue={(callback) => {
          const val = callback(value);
          if (val) onChange(val as string);
        }}
        listMode="SCROLLVIEW"
        disabled={disabled}
        loading={loading}
        placeholder={placeholder}
        style={[styles.dropdown, error ? styles.inputError : null]}
        dropDownContainerStyle={styles.dropdownContainer}
        textStyle={styles.text}
        placeholderStyle={styles.placeholder}
        listItemLabelStyle={styles.listItemLabel}
        zIndex={zIndex}
        zIndexInverse={1000 - zIndex}
      />
      {/* error message  */}
      {error ? <Text style={styles.errorText}>{error}</Text> : null}
    </View>
  );
};

export default memo(FormDropdown);

const styles = StyleSheet.create({
  container: {},
  label: {
    fontSize: RFValue(12),
    fontFamily: FONTS.MEDIUM,
    color: "#4b5563",
    paddingVertical: RFValue(3),
  },
  dropdown: {
    borderRadius: RFValue(10),
    borderWidth: 1,
    borderColor: "#E5E7EB",
  },
  dropdownContainer: {
    borderRadius: RFValue(10),
    borderWidth: 1,
    borderColor: "#E5E7EB",
  },
  text: {
    fontFamily: FONTS.REGULAR,
    fontSize: RFValue(14),
  },
  placeholder: {
    color: "#999",
  },
  listItemLabel: {
    fontFamily: FONTS.REGULAR,
    fontSize: RFValue(14),
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
