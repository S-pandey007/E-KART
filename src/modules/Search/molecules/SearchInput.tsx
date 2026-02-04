import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import Icons from "@/src/components/atoms/Icons";
import { RFValue } from "react-native-responsive-fontsize";
import { TextInput } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import { goBack, navigate } from "@/src/navigation/NavigationUtils";
import { Pressable } from "react-native";
import { useAppSelector } from "@/src/store/reduxHook";
import { selectTotalItemsCart } from "../../cart/api/slice";
import { scale, scaleH, scaleW } from "@/src/utils/Responsivess";
import { screenHeight, screenWidth } from "@/src/utils/Constants";

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
  const count = useAppSelector(selectTotalItemsCart);
  return (
    <SafeAreaView edges={["top"]} style={styles.safeArea}>
      <View style={styles.container}>
        {/* back button  */}
        <TouchableOpacity onPress={() => goBack()} style={styles.icon}>
          <Icons
            name="arrow-back"
            size={RFValue(23)}
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

        <Pressable onPress={() => navigate("Cart")}>
          <Icons
            name="cart-sharp"
            size={24}
            iconFamily="Ionicons"
            color="#000"
          />
          {count > 0 && (
            <View style={styles.badge}>
              <Text style={styles.badgeText}>{count}</Text>
            </View>
          )}
        </Pressable>
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
    justifyContent: "space-between",
    paddingHorizontal: scale(16),
    paddingVertical: scale(8),
    backgroundColor: "#dbeafe",
  },
  icon: {
    marginRight: scale(8),
  },
  inputWrapper: {
    // flex: 1,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFF",
    borderRadius:scale(25),
    paddingHorizontal: scale(12),
    width:scale(screenWidth*0.78),
    height: scaleH(screenHeight*0.057),
  },
  input: {
    flex: 1,
    fontSize: RFValue(14),
    marginHorizontal: scale(8),
    color: "#000",
  },
  badge: {
    position: "absolute",
    top: -5,
    right: -6,
    backgroundColor: "red",
    borderRadius: scale(10),
    width: scaleW(16),
    height: scaleH(16),
    justifyContent: "center",
    alignItems: "center",
  },
  badgeText: {
    color: "#fff",
    fontSize: RFValue(8),
    fontWeight: "bold",
  },
});
