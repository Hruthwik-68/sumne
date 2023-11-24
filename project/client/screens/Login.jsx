import {
  View,
  SafeAreaView,
  TextInput,
  Image,
  TouchableNativeFeedback,
  TouchableHighlight,
  Platform,
} from "react-native";
import React, { useState } from "react";

import globalCss from "../styles/global.css";
import styles from "../styles/screens/Login.css";
import CustomText from "../customComponents/Text";

const Login = ({ navigation }) => {
  const [number, SetNumber] = useState('')
  const [password, SetPassword] = useState('')

  const [errEmptyNumber, SetErrEmptyNumber] = useState(false)
  const [errNumberIncorrect, SetErrNumberIncorrect] = useState(false)
  const [errEmptyPassword, SetErrEmptyPassword] = useState(false)
  const [errPasswordIncorrect, SetErrPasswordIncorrect] = useState(false)

  const [onFocusNumber, setOnFocusNumber] = useState(false);
  const [onFocusPassword, setOnFocusPassword] = useState(false);

  const TouchableComponent =
    Platform.OS == "android" ? TouchableNativeFeedback : TouchableHighlight;

  const handleLogin = () => {
    if ([number, password].every((value) => value.trim() !== '')){
      console.log(number, password);
      const trimedNumber = number.includes('+91') ? number.split('+91')[1] : number

        //check number already registered or not
        console.log('api work');
    }else (number.trim() === '') ? SetErrEmptyNumber(true) : SetErrEmptyPassword(true)
  };

  const handleGoogleLogin = () => {};

  const handleAppleLogin = () => {};

  return (
    <SafeAreaView style={[globalCss.container, styles.container]}>
      <CustomText style={styles.heading}>Login</CustomText>

      <TextInput
        placeholder="Mobile number"
        keyboardType="number-pad"
        maxLength={13}
        defaultValue={number}
        style={[
          styles.inputBox,
          onFocusNumber && globalCss.onFocusInputBox,
          (errEmptyNumber || errNumberIncorrect) && globalCss.errInputBox,
        ]}
        onChangeText={(num) => {SetNumber(num); SetErrEmptyNumber(false); SetErrNumberIncorrect(false)}}
        onFocus={() => setOnFocusNumber(true)}
        onBlur={() => setOnFocusNumber(false)}
      />
      {errEmptyNumber && <CustomText style={globalCss.inputErrText}>Please enter the Mobile number</CustomText>}
      {errNumberIncorrect && <CustomText style={globalCss.inputErrText}>Invalid mobile number</CustomText>}
      
      <TextInput
        placeholder="Password"
        secureTextEntry={true}
        defaultValue={password}
        style={[
          styles.inputBox,
          onFocusPassword && globalCss.onFocusInputBox,
          (errEmptyPassword || errPasswordIncorrect) && globalCss.errInputBox,
        ]}
        onChangeText={(num) => {SetPassword(num); SetErrEmptyPassword(false); SetErrPasswordIncorrect(false)}}
        onFocus={() => setOnFocusPassword(true)}
        onBlur={() => setOnFocusPassword(false)}
      />
      {errEmptyPassword && <CustomText style={globalCss.inputErrText}>Please enter the Password</CustomText>}
      {errPasswordIncorrect && <CustomText style={globalCss.inputErrText}>Password is incorrect</CustomText>}

      <TouchableComponent
        onPress={() => handleLogin()}
        background={TouchableNativeFeedback.SelectableBackground()}
        style={{ borderRadius: 5 }}
      >
        <View style={[globalCss.themebg, styles.loginBtn]}>
          <CustomText style={styles.loginBtnText}>LOGIN</CustomText>
        </View>
      </TouchableComponent>

      <View style={styles.registerLink}>
        <CustomText>Don't have an account ?</CustomText>
        <CustomText
          style={globalCss.themeColor}
          onPress={() => navigation.navigate("Register")}
        >
          Register
        </CustomText>
      </View>

      <CustomText style={styles.OR}>OR</CustomText>

      <View style={styles.otherLoginOptions}>
        <TouchableHighlight
          onPress={() => handleGoogleLogin()}
          style={{ borderRadius: 5, marginBottom: 20 }}
        >
          <View style={styles.options}>
            <Image
              source={require("../assets/images/google-logo.png")}
              style={styles.otherRegisterAppsLogo}
            />
            <CustomText style={styles.otherRegisterAppsName}>
              Login with Google
            </CustomText>
          </View>
        </TouchableHighlight>
        <TouchableHighlight
          onPress={() => handleAppleLogin()}
          style={{ borderRadius: 5, marginBottom: 20 }}
        >
          <View style={styles.options}>
            <Image
              source={require("../assets/images/apple-logo.png")}
              style={styles.otherRegisterAppsLogo}
            />
            <CustomText style={styles.otherRegisterAppsName}>
              Login with Apple
            </CustomText>
          </View>
        </TouchableHighlight>
      </View>
    </SafeAreaView>
  );
};

export default Login;
