import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import AppText from "../atoms/AppText";
import Icons from "@/src/components/atoms/Icons";
import AppInput from "../atoms/AppInput";
import { RFValue } from "react-native-responsive-fontsize";

const LoginField = ({
  label,
  placeholder,
  value,
  onChangeText,
  iconName,
  isPassword = false,
}: any) => {
  const [showPassword, setShowPassword] = React.useState(false);
  return (
    <View style={styles.container}>
      {/* label  */}
      <AppText weight="MEDIUM" style={styles.label}>
        {label}
      </AppText>

      {/* input  */}
      <View style={styles.inputContainer}>
        <Icons iconFamily="Ionicons" size={18} name={iconName} />
        <AppInput
          style={{ flex: 1 }}
          placeholder={placeholder}
          value={value}
          onChangeText={onChangeText}
          secureTextEntry={isPassword && !showPassword}
        />

        {/* password  */}
        {isPassword && (
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Icons
              iconFamily="Ionicons"
              size={18}
              name={showPassword ? "eye-off-outline" : "eye-outline"}
              color="#999"
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default LoginField;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginBottom: RFValue(10),
  },
  label: {
    marginBottom: RFValue(6),
    fontSize: RFValue(13),
    color: "#000",
  },
  inputContainer: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: RFValue(8),
    paddingHorizontal: RFValue(10),
    height: RFValue(48),
    borderWidth: 1,
    borderColor: "#ccc",
  },
});
