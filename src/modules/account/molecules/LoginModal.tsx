import {
  Alert,
  Modal,
  StyleSheet,
  ScrollView,
  Text,
  View,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
  TextInput,
} from "react-native";
import React, { FC, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/src/store/reduxHook";
import { loginOrSignup } from "../api/api";
import { setData } from "../api/slice";
import { navigate } from "@/src/navigation/NavigationUtils";
import { clearCart } from "../../cart/api/slice";
import { modalStyles } from "@/src/styles/modalStyles";
import Icons from "@/src/components/atoms/Icons";
import { Colors } from "@/src/utils/Constants";

const LoginModal: FC<{ visible: boolean; onClose: () => void }> = ({
  visible,
  onClose,
}) => {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.account.user) as any;
  const [number, setNumber] = React.useState("");
  const [address, setAddress] = React.useState("");

  const hadleLogin = async () => {
    const data = await loginOrSignup(number, address);
    if (data) {
      dispatch(setData(data));
      onClose();
    } else {
      Alert.alert("There was an error during login");
    }
  };

  useEffect(() => {
    if (user?.phone) {
      setNumber(user?.phone);
      setAddress(user?.address || "");
    }
  }, [user]);

  const handleLogout = async () => {
    onClose();
    navigate("Home");
    setAddress("");
    setNumber("");
    await dispatch(clearCart());
    await dispatch(setData(null));
  };

  return (
    <Modal
      visible={visible}
      animationType="slide"
      transparent={true}
      onRequestClose={onClose}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={modalStyles.modalContainer}>
          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={modalStyles.keyboardAvoidingView}
          >
            <ScrollView contentContainerStyle={modalStyles.scrollViewContent}>
              <View style={modalStyles.modalContent}>
                <TouchableOpacity style={modalStyles.closeIcon} onPress={onClose}>
                  <Icons
                    size={20}
                    name="close"
                    color="#fff"
                    iconFamily="Ionicons"
                    
                  />
                </TouchableOpacity>
                <Text style={modalStyles.title}>
                  Login for the best experience
                </Text>
                <Text style={modalStyles.subTitle}>
                  Enter your phone number to procced
                </Text>

                <TextInput
                 style={modalStyles.input}
                 placeholder="enter your number"
                 value={number}
                 maxLength={10}
                 onChangeText={setNumber}
                 keyboardType="phone-pad"
                />
                <TextInput
                 style={modalStyles.textareainput}
                 placeholder="enter your address here"
                 value={address}
                 
                 onChangeText={setAddress}
                 multiline={true}
                 placeholderTextColor={'#ccc'}
                />

                <View style={modalStyles.buttonContainer}>
                    <TouchableOpacity style={modalStyles.button} onPress={()=>{hadleLogin()}}>
                        <Text style={modalStyles.buttonText}>{!user ?'Login':"Save"}</Text>
                    </TouchableOpacity>

                    {
                        user &&
                        <TouchableOpacity 
                        onPress={()=>{
                            handleLogout()
                        }}
                        style={[modalStyles.button,{backgroundColor:"transparent",borderWidth:1,borderColor:Colors.active}]}
                        >
                            <Text style={[modalStyles.buttonText,{color:Colors.active}]}>Logout</Text>
                        </TouchableOpacity>
                    }
                </View>
              </View>
            </ScrollView>
          </KeyboardAvoidingView>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

export default LoginModal;

const styles = StyleSheet.create({});
