import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import Icons from "@/src/components/atoms/Icons";
import { RFValue } from "react-native-responsive-fontsize";
import { TextInput } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import { goBack, navigate } from "@/src/navigation/NavigationUtils";

type Props = {
  value: string;
  onChangeText: (text: string) => void;
  onBackPress?: () => void;
  onCameraPress?: () => void;
  placeholder?: string;
  onSubmit?: () => void;
};
const SearchInput: React.FC<Props> = ({
  value,
  onChangeText,
  onBackPress,
  onCameraPress,
  onSubmit,
  placeholder = "Search",
}) => {
  const hastText = value && value.trim().length > 0;
  return (
    <SafeAreaView edges={["top"]} style={styles.safeArea}>
      <View style={styles.container}>
        {/* back button  */}
        <TouchableOpacity onPress={() => goBack()} style={styles.icon}>
          <Icons
            name="arrow-back"
            size={RFValue(20)}
            color="#333"
            iconFamily="Ionicons"
          />
        </TouchableOpacity>

        {/* search box  */}
        <View style={styles.inputWrapper}>
          <Icons
            name="search"
            size={RFValue(18)}
            color="#888"
            iconFamily="Ionicons"
          />

          <TextInput
            value={value}
            onChangeText={onChangeText}
            placeholder={placeholder}
            placeholderTextColor="#999"
            style={styles.input}
            returnKeyType="search"
            onSubmitEditing={() => {
              if (value.trim().length > 0) {
                onSubmit?.();
              }
            }}
          />

          <TouchableOpacity
            onPress={() => {
              if (hastText) {
                onChangeText("");
              } else {
                onCameraPress?.();
              }
            }}
          >
            <Icons
              iconFamily="Ionicons"
              name={hastText ? "close-circle" : "mic-outline"}
              size={RFValue(21)}
              color="#333"
            />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SearchInput;

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: "#dbeafe",
  },
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: RFValue(12),
    paddingVertical: RFValue(8),
    backgroundColor: "#dbeafe",
  },
  icon: {
    marginRight: RFValue(8),
  },
  inputWrapper: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFF",
    borderRadius: RFValue(25),
    paddingHorizontal: RFValue(12),
    height: RFValue(40),
  },
  input: {
    flex: 1,
    fontSize: RFValue(14),
    marginHorizontal: RFValue(8),
    color: "#000",
  },
});
