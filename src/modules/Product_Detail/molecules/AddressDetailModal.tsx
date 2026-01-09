import {
  FlatList,
  Modal,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { memo, useState } from "react";
import Icons from "@/src/components/atoms/Icons";
import { RFValue } from "react-native-responsive-fontsize";
import SectionTitle from "../../Search/atoms/SectionTitle";
import { FONTS } from "@/src/theme/font/fonts";
import { Colors } from "@/src/utils/Constants";
import DotLine from "@/src/components/atoms/DotLine";
import UserAddressLayout from "../atoms/UserAddressLayout";
import { UsersAddress } from "@/src/utils/searchData";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import ModifyAddressModal from "../atoms/ModifyAddressModal";

type Props = {
  isVisible: boolean;
  onClose: () => void;
};
const AddressDetailModal: React.FC<Props> = ({ isVisible, onClose }) => {
  
  const [showModify,setShowModify] = useState(false)
  const [selectedAddress,setSelectedAddress] = useState<any>(null);
    const insets = useSafeAreaInsets();
  const handleModifyPress =(item:any)=>{
    setSelectedAddress(item);
    setShowModify(true)
  }

  const handleEdit = () => {
    console.log("Edit address:", selectedAddress);
    setShowModify(false);
  };

  const handleDelete = () => {
    console.log("Delete address:", selectedAddress);
    setShowModify(false);
  };



  return (
    <View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={isVisible}
        onRequestClose={onClose}
      >
        <View style={styles.overlay}>
          <View
            style={[
              styles.container,
              { paddingBottom: insets.bottom + RFValue(10) },
            ]}
          >
            <Pressable style={styles.closeBtn} onPress={onClose}>
              <Icons
                name="close"
                iconFamily="Ionicons"
                size={RFValue(25)}
                color="#000"
              />
            </Pressable>

            <SectionTitle title="Select delivery address" />

            {/* use currect location */}
            <TouchableOpacity style={styles.locationContainer}>
              <Icons
                name="crosshairs-gps"
                iconFamily="MaterialCommunityIcons"
                size={RFValue(25)}
                color="#125feeff"
              />
              <Text style={styles.locationText}>Use my current location</Text>
            </TouchableOpacity>

            {/* dot line component  */}
            <DotLine
              style={{ paddingVertical: RFValue(5) }}
              color="#ccc"
              thickness={2}
            />

            {/* saved address heading && add new option  */}
            <View style={styles.savedAddressContainer}>
              <Text style={styles.savedAddressText}>Saved addresses</Text>
              <Pressable style={styles.addNewAddressContainer}>
                <Icons
                  name="plus"
                  iconFamily="MaterialCommunityIcons"
                  size={RFValue(23)}
                  color="#125feeff"
                />
                <Text style={styles.addNewAddressText}>Add New</Text>
              </Pressable>
            </View>

            {/* user's saved addres list  */}
            <FlatList
              data={UsersAddress}
              keyExtractor={(item) => item.id}
              renderItem={({ item, index }) => (
                <UserAddressLayout
                  key={index}
                  name={item.name}
                  address={item.addressLine1}
                  currentAddress={false}
                  openEditModel={()=>handleModifyPress(item)}
                />
              )}
              showsVerticalScrollIndicator={false}
            />

            <ModifyAddressModal
            isVisible={showModify}
            onClose={()=>setShowModify(false)}
            onEdit={handleEdit}
            onDelete={handleDelete}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default memo(AddressDetailModal);

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.4)",
    justifyContent: "flex-end",
  },
  container: {
    backgroundColor: "#fff",
    padding: RFValue(16),
    borderTopLeftRadius: RFValue(16),
    borderTopRightRadius: RFValue(16),
  },
  closeBtn: {
    alignSelf: "flex-end",
    padding: RFValue(4),
  },
  locationContainer: {
    flexDirection: "row",
    // justifyContent:'center',
    alignItems: "center",
    gap: RFValue(10),
    backgroundColor: Colors.primaryBG,
    marginHorizontal: RFValue(10),
    paddingHorizontal: RFValue(5),
    paddingVertical: RFValue(7),
  },
  locationText: {
    color: "#2b73f8ff",
    fontFamily: FONTS.SEMIBOLD,
  },
  savedAddressContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: RFValue(10),
    paddingVertical: RFValue(10),
  },
  savedAddressText: {
    fontFamily: FONTS.BOLD,
    fontSize: RFValue(15),
  },
  addNewAddressContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: RFValue(5),
  },
  addNewAddressText: {
    fontFamily: FONTS.BOLD,
    color: "#2b73f8ff",
  },
});
