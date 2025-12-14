import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TouchableOpacity,
  Platform,
  View,
} from "react-native";
import React, { useState } from "react";
import { RFValue } from "react-native-responsive-fontsize";
import HeaderSection from "../login/organisms/HeaderSection";
import LoginField from "../login/molecules/LoginField";
import AppButton from "../login/atoms/AppButton";
import AppText from "../login/atoms/AppText";
import SocialLogin from "../login/organisms/SocialLogin";
import { navigate } from "@/src/navigation/NavigationUtils";
import SocialRegistration from "./molecules/socialRegistration";
import { TouchableWithoutFeedback } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

const Registration = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  return (
    <View style={styles.container}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={Platform.OS === "ios" ? 80 : 0}
      >
        {/* <TouchableWithoutFeedback> */}
        <ScrollView
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={{ paddingBottom: RFValue(40) }}
        >
          {/* header  */}
          <HeaderSection line1="Create an" line2="Account" />

          {/* data field name */}
          <LoginField
            placeholder="Name"
            iconName="person"
            value={name}
            onChangeText={setName}
          />

          {/* data field email */}
          <LoginField
            placeholder="Email"
            iconName="mail"
            value={email}
            onChangeText={setEmail}
          />

          {/* data field password */}
          <LoginField
            placeholder="Password"
            iconName="lock-closed"
            value={password}
            onChangeText={setPassword}
            isPassword
          />

          {/* data field confirm password */}
          <LoginField
            placeholder="Confirm Password"
            iconName="lock-closed"
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            isPassword
          />

          {/* registeration button  */}
          <AppButton
            title="Register"
            onPress={() => {
              console.log("Login");
            }}
          />

          {/* OR CONTINUE WITH */}
          <AppText weight="MEDIUM" style={styles.orText}>
            Or Continue with
          </AppText>

          {/* SOCIAL LOGIN */}
          <SocialRegistration
            style={styles.socialLogin}
            onGoogle={() => console.log("Google")}
          />

          {/* CREATE ACCOUNT LINK */}
          <TouchableOpacity onPress={() => navigate("Login")}>
            <AppText style={styles.createText}>
              Already have an account? <AppText weight="BOLD">Login</AppText>
            </AppText>
          </TouchableOpacity>
        </ScrollView>
        {/* </TouchableWithoutFeedback> */}
      </KeyboardAvoidingView>
    </View>
  );
};

export default Registration;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: RFValue(20),
    paddingHorizontal: RFValue(20),
  },
  orText: {
    marginVertical: RFValue(20),
    textAlign: "center",
    fontSize: RFValue(13),
    color: "#999",
  },
  createText: {
    marginTop: RFValue(15),
    textAlign: "center",
    fontSize: RFValue(13),
    color: "#666",
  },
  socialLogin: {
    marginTop: RFValue(15),
  },
});
