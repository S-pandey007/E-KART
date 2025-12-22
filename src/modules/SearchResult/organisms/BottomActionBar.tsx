import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import Ionicons from "@expo/vector-icons/Ionicons";
import { SafeAreaView } from "react-native-safe-area-context";

type Props = {
  onSort?: () => void;
  onFilter?: () => void;
};

const BottomActionBar: React.FC<Props> = ({
  onSort,
  onFilter,
}) => {
  return (
    <SafeAreaView edges={["bottom"]}>
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.action}
        onPress={onSort}
      >
        <Ionicons name="swap-vertical" size={RFValue(18)} />
        <Text style={styles.text}>Sort</Text>
      </TouchableOpacity>

      <View style={styles.divider} />

      <TouchableOpacity
        style={styles.action}
        onPress={onFilter}
      >
        <Ionicons name="filter" size={RFValue(18)} />
        <Text style={styles.text}>Filter</Text>
      </TouchableOpacity>
    </View>
    </SafeAreaView>
  );
};

export default BottomActionBar;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    height: RFValue(48),
    borderTopWidth: 1,
    borderColor: "#DDD",
    backgroundColor: "#fff",
  },
  action: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    marginLeft: RFValue(6),
    fontSize: RFValue(14),
    fontWeight: "500",
  },
  divider: {
    width: 1,
    backgroundColor: "#DDD",
  },
});
