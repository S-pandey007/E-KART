import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { RFValue } from "react-native-responsive-fontsize";
import HeaderSection from "./organisms/HeaderSection";
import EmailField from "./molecules/EmailField";
import AppButton from "../login/atoms/AppButton";
import OtpModal from "@/src/components/molecules/OtpModal";
import { Image } from "react-native";
import { emailVerify } from "@/src/utils/Image";
import AppInfoText from "./atom/AppInfoText";
import { navigate } from "@/src/navigation/NavigationUtils";

const EmailVerification = () => {
  const [email, setEmail] = useState("");
  const [otpModalVisible, setOtpModalVisible] = useState(false);
  return (
    <View style={styles.container}>
      <HeaderSection />
      <Image source={emailVerify} style={styles.image} />
      <AppInfoText>Check your email for the verification code.</AppInfoText>
      <EmailField value={email} onChangeText={setEmail} iconName="mail" />
      <AppButton
        style={styles.button}
        title="Send OTP"
        onPress={() => navigate("Registration")}
      />

      <OtpModal
        visible={otpModalVisible}
        title="Verify OTP"
        subtitle="Enter the OTP sent to your email"
        otpLength={6}
        onClose={() => setOtpModalVisible(false)}
        onSubmit={(enteredOtp: any) => {
          console.log("OTP:", enteredOtp);
          // Call API verify endpoint
        }}
      />
    </View>
  );
};

export default EmailVerification;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: RFValue(30),
    paddingHorizontal: RFValue(20),
  },
  image: {
    width: RFValue(170),
    height: RFValue(170),
    alignSelf: "center",
    resizeMode: "contain",
    marginBottom: RFValue(10),
  },
  button: {
    marginTop: RFValue(20),
  },
});
