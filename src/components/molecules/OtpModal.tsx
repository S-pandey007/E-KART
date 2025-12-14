import { Modal, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { TouchableOpacity } from "react-native";
import Icons from "../atoms/Icons";
import { TextInput } from "react-native-gesture-handler";
import AppButton from "@/src/modules/login/atoms/AppButton";
import { RFValue } from "react-native-responsive-fontsize";

const OtpModal = ({
  visible,
  title = "Enter OTP",
  subtitle = "We have sent an OTP to your email",
  onClose,
  onSubmit,
  otpLength = 6,
}: any) => {
  const [otp, sendOtp] = useState("");
  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
      onRequestClose={onClose}
    >
      <View style={styles.overlay}>
        <View style={styles.modalBox}>
          {/* close button  */}
          <TouchableOpacity style={styles.closeBtn} onPress={onClose}>
            <Icons name="close" iconFamily="Ionicons" size={24} color="#000" />
          </TouchableOpacity>

          {/* title  */}
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.subtitle}>{subtitle}</Text>

          {/* otp input  */}
          <View style={styles.otpContainer}>
            <TextInput
              value={otp}
              onChangeText={sendOtp}
              placeholder="Enter OTP"
              placeholderTextColor="#666"
              keyboardType="numeric"
              maxLength={otpLength}
              style={styles.otpInput}
            />
          </View>

          {/* submit button  */}
          <AppButton title="Submit" onPress={onSubmit} style={styles.button} />
        </View>
      </View>
    </Modal>
  );
};

export default OtpModal;

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalBox: {
    width: "85%",
    backgroundColor: "#fff",
    borderRadius: 16,
    paddingVertical: 30,
    paddingHorizontal: 20,
    elevation: 10,
  },
  closeBtn: {
    position: "absolute",
    right: 15,
    top: 15,
    padding: 5,
  },
  title: {
    fontSize: RFValue(20),
    fontWeight: "bold",
    color: "#000",
    textAlign: "center",
    marginBottom: 6,
  },
  subtitle: {
    fontSize: RFValue(14),
    color: "#666",
    textAlign: "center",
    marginBottom: 25,
  },
  otpContainer: {
    marginBottom: 25,
  },
  otpInput: {
    height: RFValue(50),
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    paddingHorizontal: 10,
    fontSize: RFValue(16),
    color: "#000",
  },
  button: {
    width: "100%",
    backgroundColor: "#000",
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: "center",
  },
});
