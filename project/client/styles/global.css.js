import { Platform, StatusBar, StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        paddingTop: Platform.OS == "android" ? StatusBar.currentHeight : 0
    },
    themeColor: {
        color: '#2fb24a'
    },
    themebg: {
        backgroundColor: "#2fb24a"
    },
    fontFamily: {
        fontFamily: 'Poppins-Regular'
    },
    onFocusInputBox: {
        borderColor: "#2fb24a",
    },
    inputErrText: {
        color: 'red',
        paddingTop: 5
    },
    errInputBox: {
        borderColor: 'red',
        color: 'red'
    }
});