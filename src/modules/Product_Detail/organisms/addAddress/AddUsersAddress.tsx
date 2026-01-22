import {
  Pressable,
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import { Modal } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { RFValue } from "react-native-responsive-fontsize";
import Icons from "@/src/components/atoms/Icons";
import SectionTitle from "@/src/modules/Search/atoms/SectionTitle";
import FormSectionHeading from "../../atoms/addAddress/FormSectionHeading";
import DotLine from "@/src/components/atoms/DotLine";
import FormInput from "../../atoms/addAddress/FormInput";
import FormDropdown from "../../atoms/addAddress/FormDropdown";
import PrimaryButton from "../../atoms/addAddress/PrimaryButton";
import DeliveryDetail from "../DeliveryDetail";
import { addressSchema } from "@/src/validations/address.validation";
import { de } from "zod/v4/locales";

type Props = {
  isVisible: boolean;
  onClose: () => void;
};

const AddUsersAddress: React.FC<Props> = ({ isVisible, onClose }) => {
  const insets = useSafeAreaInsets();

  // person details
  const [name, setName] = React.useState("");

  // contact details
  const [phone, setPhone] = useState("");
  const [altPhone, setAltPhone] = useState("");
  const [email, setEmail] = useState("");

  // address details
  const [addressType, setAddressType] = useState("");
  const [addressLine1, setAddressLine1] = useState("");
  const [addressLine2, setAddressLine2] = useState("");
  const [landmark, setLandmark] = useState("");

  // location details
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [postalCode, setPostalCode] = useState("");

  // error state
  const [errors, setErrors] = useState({});
  // final delivery address object
  const DeliveryDetail = {
    name,
    phone,
    altPhone,
    email,
    addressType,
    addressLine1,
    addressLine2,
    landmark,
    country,
    state,
    city,
    postalCode,
  };

  const handleSaveAddress = () => {
    const result = addressSchema.safeParse(DeliveryDetail);

    if (!result.success) {
      const fieldErrors: Record<string, string> = {};

      result.error.issues.forEach((err) => {
        const fieldName = err.path[0] as string;
        fieldErrors[fieldName] = err.message;
      });

      setErrors(fieldErrors);
      return;
    }

    setErrors({});
    console.log("saved address", DeliveryDetail);
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
          <KeyboardAvoidingView
            style={{ flex: 1 }}
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            keyboardVerticalOffset={Platform.OS === "ios" ? 80 : 0}
          >
            <View style={styles.container}>
              <ScrollView
                showsVerticalScrollIndicator={false}
                keyboardShouldPersistTaps="handled"
                contentContainerStyle={{
                  paddingBottom: insets.bottom + RFValue(10),
                  flexGrow: 1,
                }}
              >
                <Pressable style={styles.closeBtn} onPress={onClose}>
                  <Icons
                    name="close"
                    iconFamily="Ionicons"
                    size={RFValue(25)}
                    color="#000"
                  />
                </Pressable>

                <SectionTitle title="Add delivery address" />
                <DotLine color="#e2e0e0" thickness={2} />

                {/* personal info and address form fields go here  */}
                <FormSectionHeading title="Personal Details" />
                <FormInput
                  label="Person Name"
                  placeholder="enter full name"
                  keyboardType="default"
                  value={name}
                  onChangeText={setName}
                  error={errors.name}
                  important={true}
                />

                {/* contact details  */}
                <FormSectionHeading title="Contact Details" />
                <FormInput
                  label="Phone"
                  placeholder="enter phone number"
                  keyboardType="phone-pad"
                  value={phone}
                  onChangeText={setPhone}
                  error={errors.phone}
                  important={true}
                />
                <FormInput
                  label="Alternate Phone"
                  placeholder="enter alternate phone number"
                  keyboardType="phone-pad"
                  value={altPhone}
                  error={errors.altPhone}
                  onChangeText={setAltPhone}
                />
                <FormInput
                  label="Email"
                  placeholder="enter email address"
                  keyboardType="default"
                  value={email}
                  error={errors.email}
                  onChangeText={setEmail}
                  important={true}
                />

                {/* address details  */}
                <FormSectionHeading title="Address Details" />

                <FormDropdown
                  label="Address Type"
                  value={addressType}
                  options={[
                    { label: "Home", value: "home" },
                    { label: "Office", value: "office" },
                    { label: "Other", value: "other" },
                  ]}
                  onChange={setAddressType}
                  error={errors.addressType}
                  important={true}
                />

                <FormInput
                  label="Address Line 1"
                  placeholder="enter address line 1"
                  keyboardType="default"
                  value={addressLine1}
                  onChangeText={setAddressLine1}
                  important={true}
                  error={errors.addressLine1}
                />
                <FormInput
                  label="Address Line 2"
                  placeholder="enter address line 2"
                  keyboardType="default"
                  value={addressLine2}
                  error={errors.addressLine2}
                  onChangeText={setAddressLine2}
                />
                <FormInput
                  label="Landmark"
                  placeholder="enter landmark"
                  keyboardType="default"
                  value={landmark}
                  error={errors.landmark}
                  onChangeText={setLandmark}
                />

                {/* location details  */}
                <FormSectionHeading title="Location Details" />
                <FormInput
                  label="Country"
                  placeholder="enter country"
                  keyboardType="default"
                  value={country}
                  error={errors.country}
                  onChangeText={setCountry}
                  important={true}
                />
                <FormInput
                  label="State"
                  placeholder="enter state"
                  keyboardType="default"
                  value={state}
                  error={errors.state}
                  onChangeText={setState}
                  important={true}
                />
                <FormInput
                  label="City"
                  placeholder="enter city"
                  keyboardType="default"
                  value={city}
                  error={errors.city}
                  onChangeText={setCity}
                  important={true}
                />
                <FormInput
                  label="Postal Code"
                  placeholder="enter postal code"
                  keyboardType="phone-pad"
                  value={postalCode}
                  error={errors.postalCode}
                  onChangeText={setPostalCode}
                  important={true}
                />

                <PrimaryButton
                  title="Save Address"
                  loading={false}
                  onPress={() => handleSaveAddress()}
                />
              </ScrollView>
            </View>
          </KeyboardAvoidingView>
        </View>
      </Modal>
    </View>
  );
};

export default AddUsersAddress;

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.4)",
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
});
