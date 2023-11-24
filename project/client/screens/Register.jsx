import {
  View,
  SafeAreaView,
  TextInput,
  TouchableHighlight,
  TouchableNativeFeedback,
  Platform,
} from "react-native";
import React, { useState } from "react";

import globalCss from "../styles/global.css";
import styles from "../styles/screens/Register.css";
import CustomText from "../customComponents/Text";

const Register = ({ navigation }) => {
  const [name, SetName] = useState('')
  const [number, SetNumber] = useState('')
  const [password, SetPassword] = useState('')
  const [confirm, SetConfirm] = useState('')

  const [errEmptyName, SetErrEmptyName] = useState(false)
  const [errEmptyNumber, SetErrEmptyNumber] = useState(false)
  const [errNumberLength, SetErrNumberLength] = useState(false)
  const [errNumberAlreadyRegister, SetErrNumberAlreadyRegister] = useState(false)
  const [errEmptyPassword, SetErrEmptyPassword] = useState(false)
  const [errPasswordLength, SetErrPasswordLength] = useState(false)
  const [errEmptyConfirm, SetErrEmptyConfirm] = useState(false)
  const [errPasswordConfirmMatch, SetErrPasswordConfirmMatch] = useState(false)

  const [onFocusName, setOnFocusName] = useState(false);
  const [onFocusEmail, setOnFocusEmail] = useState(false);
  const [onFocusPassword, setOnFocusPassword] = useState(false);
  const [onFocusConfirmPassword, setOnFocusConfirmPassword] = useState(false);

  const TouchableComponent =
    Platform.OS == "android" ? TouchableNativeFeedback : TouchableHighlight;

  const handleRegister = () => {
    if ([name, number, password, confirm].every((value) => value.trim() !== '')){
      console.log(name, number, password, confirm);
      const trimedNumber = number.includes('+91') ? number.split('+91')[1] : number

      if (trimedNumber.length < 10) SetErrNumberLength(true)
      else if (password.length < 8) SetErrPasswordLength (true)
      else if (password !== confirm) SetErrPasswordConfirmMatch(true)
      else{
        //check number already registered or not
        console.log('api work');
      }
    }else{
      if (name.trim() === '') SetErrEmptyName(true)
      else if (number.trim() === '') SetErrEmptyNumber(true)
      else if (password.trim() === '') SetErrEmptyPassword(true)
      else SetErrEmptyConfirm(true)
    }
  };

  return (
    <SafeAreaView style={[globalCss.container, styles.container]}>
      <CustomText style={styles.heading}>Register</CustomText>

      <TextInput
        placeholder="Name"
        style={[
          styles.inputBox,
          onFocusName && globalCss.onFocusInputBox,
          errEmptyName && globalCss.errInputBox,
          {marginTop: 0}
        ]}
        defaultValue={name}
        onChange={(e) => {SetName(e.nativeEvent.text), SetErrEmptyName(false)}}
        onFocus={() => {setOnFocusName(true)}}
        onBlur={() => setOnFocusName(false)}
      />
      {errEmptyName && <CustomText style={globalCss.inputErrText}>Please enter your name</CustomText>}
      <TextInput
        placeholder="Mobile number"
        keyboardType="number-pad"
        maxLength={13}
        defaultValue={number}
        style={[
          styles.inputBox,
          onFocusEmail && globalCss.onFocusInputBox,
          (errEmptyNumber || errNumberLength || errNumberAlreadyRegister) && globalCss.errInputBox,
        ]}
        onChange={(e) => {SetNumber(e.nativeEvent.text); SetErrEmptyNumber(false); SetErrNumberLength(false); SetErrNumberAlreadyRegister(false)}}
        onFocus={() => setOnFocusEmail(true)}
        onBlur={() => setOnFocusEmail(false)}
      />
      {errEmptyNumber && <CustomText style={globalCss.inputErrText}>Please enter your Mobile number</CustomText>}
      {errNumberLength && <CustomText style={globalCss.inputErrText}>Please enter a valide mobile number</CustomText>}
      {errNumberAlreadyRegister && <CustomText style={globalCss.inputErrText}>Mobile number is already registered</CustomText>}
      <TextInput
        placeholder="Password"
        secureTextEntry={true}
        defaultValue={password}
        style={[
          styles.inputBox,
          onFocusPassword && globalCss.onFocusInputBox,
          (errEmptyPassword || errPasswordLength) && globalCss.errInputBox,
        ]}
        onChange={(e) => {SetPassword(e.nativeEvent.text); SetErrEmptyPassword(false); SetErrPasswordLength(false)}}
        onFocus={() => setOnFocusPassword(true)}
        onBlur={() => setOnFocusPassword(false)}
      />
      {errEmptyPassword && <CustomText style={globalCss.inputErrText}>Please enter your password</CustomText>}
      {errPasswordLength && <CustomText style={globalCss.inputErrText}>password length is too short</CustomText>}
      <TextInput
        placeholder="Confirm Password"
        style={[
          styles.inputBox,
          onFocusConfirmPassword && globalCss.onFocusInputBox,
          (errEmptyConfirm || errPasswordConfirmMatch) && globalCss.errInputBox,
        ]}
        defaultValue={confirm}
        onChange={(e) => {SetConfirm(e.nativeEvent.text); SetErrEmptyConfirm(false); SetErrPasswordConfirmMatch(false)}}
        onFocus={() => setOnFocusConfirmPassword(true)}
        onBlur={() => setOnFocusConfirmPassword(false)}
        secureTextEntry={true}
      />
      {errEmptyConfirm && <CustomText style={globalCss.inputErrText}>Please re-enter your password</CustomText>}
      {errPasswordConfirmMatch && <CustomText style={globalCss.inputErrText}>Password didn't match</CustomText>}

      <TouchableComponent
        onPress={() => handleRegister()}
        background={TouchableNativeFeedback.SelectableBackground()}
        style={{ borderRadius: 5 }}
      >
        <View style={[globalCss.themebg, styles.registerBtn]}>
          <CustomText style={styles.registerBtnText}>REGISTER</CustomText>
        </View>
      </TouchableComponent>

      <View style={styles.loginLink}>
        <CustomText>Already have an account ?</CustomText>
        <CustomText
          style={globalCss.themeColor}
          onPress={() => navigation.navigate("Login")}
        >
          Login
        </CustomText>
      </View>

    </SafeAreaView>
  );
};

export default Register;
