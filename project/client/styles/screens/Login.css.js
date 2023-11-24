import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 35,
        justifyContent: "center"
    },
    registerLink: {
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
    loginBtn: {
        padding: 15,
        textAlign: 'center',
        fontWeight: "700",
        elevation: 10,
        borderRadius: 5,
        marginTop: 30
    },
    loginBtnText: {
        color: 'white',
        textAlign: 'center',
        fontWeight: "700",
    },
    OR: {
        textAlign: "center",
        marginVertical: 30,
        fontWeight: "700"
    },
    options: {
        borderWidth: 1,
        borderColor: '#f0f3f4',
        borderRadius: 5,
        flexDirection: "row",
        alignItems: "center",
        padding: 10,
        backgroundColor: "white"
    },
    otherRegisterAppsLogo: {
        width: 20,
        height: 20,
        position: "absolute",
        transform: [{translateX: 10}]
    },
    otherRegisterAppsName: {
        flex: 1,
        textAlign: "center",
        fontWeight: "700"
    }
});