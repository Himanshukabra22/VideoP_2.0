import React from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet, ImageBackground, TextInput } from "react-native";
import { Feather } from "@expo/vector-icons";

// constants
import Colors from '../src/constants/colors'
import { SCREEN_WIDTH as width, SCREEN_HEIGHT as height } from "../src/constants/screen";

import AuthBg from "../src/components/auth/AuthBg";

const ForgotPassword = (props) => {
    const { email, setEmail } = props;
    return (
        <>
            <View style={styles.Container}>
                <AuthBg />
                <View style={styles.mainContainer}>
                    <View style={styles.LogoView}>
                        <Image
                            source={require("../assets/images/LogoWhite.png")}
                            style={styles.LogoImg}
                        />
                        <View>
                            <Text style={styles.WebTitleTxt}>noise Remover</Text>
                        </View>
                    </View>
                    <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: 20 }}>
                        <Text style={styles.TitleTxt}>Recover your password</Text>
                    </View>
                    <View style={{ alignItems: 'center', justifyContent: 'center', opacity: 0.9 }}>
                        <Text style={styles.InfoTxt}>Enter the email that you used when register to recover your password. You will receive a password reset link.</Text>
                    </View>
                    <View style={styles.InputSubContainer}>
                        <View style={styles.IconView}>
                            <Feather name="mail" size={24} color={Colors.typoWhite} />
                        </View>
                        <TextInput
                            style={[styles.input, { outlineWidth: 0, borderWidth: 0 }]}
                            onChangeText={setEmail}
                            value={email}
                            placeholder="Recovery Email"
                            cursorColor={Colors.typoBlack}
                            placeholderTextColor={Colors.typoWhite}
                        />
                    </View>
                    <TouchableOpacity
                        activeOpacity={0.7}
                        style={styles.SendBtn}
                        onPress={() => {
                            console.log("ForgotPassword Send Btn Clicked");
                        }}
                    >
                        <Text style={styles.SendTxt}>Send link</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: Colors.primary,
        width: width,
        height: height,
        alignItems: "center",
        justifyContent: "center",
    },
    mainContainer: {
        flex: 1,
        marginBottom: 80,
        alignItems: "center",
        justifyContent: "center"
    },
    LogoView: {
        alignItems: "center",
        justifyContent: "center"
    },
    LogoImg: {
        width: 100,
        height: 100
    },
    WebTitleTxt: {
        fontSize: 32,
        fontWeight: "600",
        color: Colors.typoWhite,
        textAlign: "center",
    },
    TitleTxt: {
        marginTop: 30,
        fontSize: 48,
        fontWeight: "600",
        color: Colors.typoWhite,
    },
    InfoTxt: {
        width: 420,
        marginTop: 40,
        fontSize: 18,
        color: Colors.typoWhite,
        textAlign: "center",
    },
    InputSubContainer: {
        marginTop: 30,
        width: 350,
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 20,
        borderWidth: 1,
        borderColor: Colors.typoWhite,
        borderRadius: 4,
        paddingHorizontal: 15,
    },
    IconView: {
        width: 24,
        height: 24,
        alignItems: "center",
        marginRight: 15,
        justifyContent: "center",
    },
    input: {
        width: '100%',
        height: 40,
        color: Colors.typoWhite,
        fontSize: 16,
    },
    SendBtn: {
        width: 350,
        height: 40,
        borderRadius: 4,
        backgroundColor: Colors.typoWhite,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 5,
    },
    SendTxt: { 
        fontSize: 18,
        fontWeight: "700", 
        color: Colors.primary
    },
});

export default ForgotPassword;

