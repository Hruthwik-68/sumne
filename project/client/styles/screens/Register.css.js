import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 35,
        justifyContent: "center"
    },
    loginLink: {
        flexDirection: "row",
        gap: 5,
        justifyContent: 'center',
        marginTop: 30,
    },
    heading: {
        fontSize: 40,
        marginBottom: 20
    },
    inputBox: {
        borderWidth: 2,
        borderColor: "transparent",
        backgroundColor: "#e0e3e4",
        borderRadius: 5,
        padding: 10,
        paddingStart: 15,
        marginTop: 30,
    },
    registerBtn: {
        padding: 15,
        textAlign: 'center',
        fontWeight: "700",
        elevation: 10,
        borderRadius: 5,
        marginTop: 30
    },
    registerBtnText: {
        color: 'white',
        textAlign: 'center',
        fontWeight: "700",
    },
});