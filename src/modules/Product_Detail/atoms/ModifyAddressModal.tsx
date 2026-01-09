import { Modal, Pressable, StyleSheet, Text, View } from "react-native";
import React, { memo } from "react";
import { RFValue } from "react-native-responsive-fontsize";
import Icons from "@/src/components/atoms/Icons";
import { useSafeAreaInsets } from "react-native-safe-area-context";

type Props = {
  isVisible: boolean;
  onClose: () => void;
  onEdit: () => void;
  onDelete: () => void;
};

const ModifyAddressModal: React.FC<Props> = ({
  onDelete,
  onEdit,
  isVisible,
  onClose,
}) => {
        const insets = useSafeAreaInsets();
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={isVisible}
      onRequestClose={onClose}
    >
      <Pressable style={styles.overlay} onPress={onClose} >
        <View style={[styles.container,{ paddingBottom: insets.bottom + RFValue(10) }]}>
          {/* edit option */}
          <Pressable style={styles.option} onPress={onEdit}>
            <Icons
              name="create-outline"
              iconFamily="Ionicons"
              size={RFValue(18)}
              color="#8f8f8f"
            />
            <Text style={styles.optionText}>Edit</Text>
          </Pressable>

          {/* divider */}
          <View style={styles.divider} />

          {/* delete option */}
          <Pressable style={styles.option} onPress={onDelete}>
            <Icons
              name="trash-outline"
              iconFamily="Ionicons"
              size={RFValue(18)}
              color="#f35b5b"
            />
            <Text style={[styles.optionText, styles.deleteText]}>Delete</Text>
          </Pressable>
        </View>
      </Pressable>
    </Modal>
  );
};

export default memo(ModifyAddressModal);

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.4)",
    justifyContent: "flex-end",
  },
  container: {
    backgroundColor: "#fff",
    paddingVertical: RFValue(12),
    borderTopLeftRadius: RFValue(16),
    borderTopRightRadius: RFValue(16),
  },
  option: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: RFValue(12),
    paddingHorizontal: RFValue(16),
  },
  optionText: {
    fontSize: RFValue(14),
    color: "#333",
    marginLeft: RFValue(10),
    fontWeight: "500",
  },
  deleteText: {
    color: "#f35b5b",
    fontWeight: "600",
  },
  divider: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: "#e0e0e0",
    marginHorizontal: RFValue(16),
  },
});
