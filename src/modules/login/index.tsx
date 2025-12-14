import { Alert, StyleSheet, Text, View } from "react-native";
import React from "react";
import AppText from "./atoms/AppText";
import AppInput from "./atoms/AppInput";
import AppButton from "./atoms/AppButton";
import LoginField from "./molecules/LoginField";
import HeaderSection from "./organisms/HeaderSection";
import { TouchableOpacity } from "react-native";
import SocialLogin from "./organisms/SocialLogin";
import { RFValue } from "react-native-responsive-fontsize";
import { goBack, navigate } from "@/src/navigation/NavigationUtils";
import { googleBackendAPI, login } from "./api/api";
import { ToastAndroid } from "react-native";
import { useAppDispatch } from "@/src/store/reduxHook";
import { setData } from "../account/api/slice";
import FieldError from "@/src/components/atoms/FieldError";
import { validateLogin } from "@/src/utils/emailValidation";
// import useGoogleLogin from "./api/googleLogin";
import { signIn } from "./api/googleLogin";

const Login = () => {
  const dispatch = useAppDispatch();
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [isDisable, SetIsDisable] = React.useState(false);
  const [showError, setShowError] = React.useState(false);
  const [errorMsg, setErrorMsg] = React.useState("");
  // const { promptAsync } = useGoogleLogin();
  // login logic
  const handelLogin = async () => {
    // validation
    if (!email || !password) {
      setShowError(true);
      setErrorMsg("Please enter email and password");
      return;
    }
    if (!validateLogin(email)) {
      setShowError(true);
      setErrorMsg("Please enter valid email & password");
      return;
    }
    console.log(`email: ${email}, password: ${password}`);
    SetIsDisable(true);
    const result = await login(email, password);
    if (result) {
      ToastAndroid.show("Login Successfull", ToastAndroid.LONG);
      dispatch(setData(result));
      goBack();
    } else {
      ToastAndroid.show("Login Failed", ToastAndroid.LONG);
    }
    SetIsDisable(false);
  };

  // google login function 
  const googleLogin = async () => {
    console.log("Google Login logic started");
    const result=await signIn();
    console.log("Google signin response token : ",result)
    console.log("Google signin response token : ",result.token)
    if(!result.success){
      console.log("Google Login Failed:", result.error);
      Alert.alert("Google Login Failed","Please try again later.");
    }

    const res = await googleBackendAPI(result.token);
    if (!res || !res.success) {
      console.log("Google Backend API Failed:", res);
      ToastAndroid.show("Login Failed", ToastAndroid.LONG);
    }
    ToastAndroid.show("Login Successfull", ToastAndroid.LONG);
      dispatch(setData(res));
      goBack();
    console.log("Google Login Successfull")
  };


  return (
    <View style={styles.container}>
      {/* header  */}
      <HeaderSection line1="Welcome" line2="Back!" />

      {/* email  */}
      <LoginField
        label="Email"
        placeholder="Enter Email"
        value={email}
        onChangeText={setEmail}
        iconName="mail"
      />
      {showError && <FieldError error={errorMsg} />}

      {/* password  */}
      <LoginField
        label="Password"
        iconName="lock-closed"
        placeholder="Enter Password"
        isPassword
        value={password}
        onChangeText={setPassword}
      />
      {showError && <FieldError error={errorMsg} />}

      {/* FORGOT PASSWORD */}
      <TouchableOpacity>
        <AppText weight="MEDIUM" style={styles.forgotText}>
          Forgot Password?
        </AppText>
      </TouchableOpacity>

      {/* login button  */}
      <AppButton title="Login" onPress={handelLogin} disabled={isDisable} />

      {/* OR CONTINUE WITH */}
      <AppText weight="MEDIUM" style={styles.orText}>
        Or Continue with
      </AppText>

      {/* SOCIAL LOGIN */}
      <SocialLogin onGoogle={googleLogin} />

      {/* CREATE ACCOUNT LINK */}
      <TouchableOpacity onPress={() => navigate("EmailVerification")}>
        <AppText style={styles.createText}>
          Don&apos;t have an account?{" "}
          <AppText weight="BOLD">Create New Account</AppText>
        </AppText>
      </TouchableOpacity>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: RFValue(40),
    paddingHorizontal: RFValue(20),
  },
  forgotText: {
    alignSelf: "flex-end",
    marginBottom: RFValue(20),
    fontSize: RFValue(13),
    color: "#999",
  },
  orText: {
    marginVertical: RFValue(20),
    textAlign: "center",
    fontSize: RFValue(13),
    color: "#999",
  },
  createText: {
    marginTop: RFValue(25),
    textAlign: "center",
    fontSize: RFValue(13),
    color: "#666",
  },
});
