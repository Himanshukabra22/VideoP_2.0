import React from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet, TextInput } from "react-native";
import { useRouter } from 'expo-router'
import { Feather } from "@expo/vector-icons";

// constants
import Colors from '../../constants/colors'
import { SCREEN_WIDTH as width, SCREEN_HEIGHT as height } from "../../constants/screen";

const Login = (props) => {
    const router = useRouter();
    const { email, setEmail, password, setPassword, setLogin } = props;
    return (
        <>
            <View style={styles.InputContainer}>
                <View style={styles.InputSubContainer}>
                    <View style={styles.IconView}>
                        <Feather name="mail" size={24} color={Colors.typoWhite} />
                    </View>
                    <TextInput
                        style={[styles.input, { outlineWidth: 0, borderWidth: 0 }]}
                        onChangeText={setEmail}
                        value={email}
                        placeholder="Email"
                        cursorColor={Colors.typoWhite}
                        placeholderTextColor={Colors.typoWhite}
                    />
                </View>
                <View style={styles.InputSubContainer}>
                    <View style={styles.IconView}>
                        <Feather name="unlock" size={24} color={Colors.typoWhite} />
                    </View>
                    <TextInput
                        style={[styles.input, { outlineWidth: 0, borderWidth: 0 }]}
                        onChangeText={setPassword}
                        value={password}
                        placeholder="Password"
                        cursorColor={Colors.typoWhite}
                        placeholderTextColor={Colors.typoWhite}
                        secureTextEntry={true}
                    />
                </View>
            </View>
            <TouchableOpacity
                activeOpacity={0.7}
                style={styles.LoginBtn}
                onPress={() => {
                    console.log("login");
                }}>
                <Text style={styles.LoginTxt}>Login</Text>
            </TouchableOpacity>
            <View style={styles.separatorView}>
                <View style={styles.line} />
                <Text style={styles.separatorTxt}>Or</Text>
                <View style={styles.line} />
            </View>
            <TouchableOpacity
                activeOpacity={0.7}
                style={styles.GoogleLoginBtn}
                onPress={() => {
                    console.log("Google Login");
                }}>
                <View style={styles.GoogleBtnLogoImg}>
                    <Image
                        source={require("../../../assets/images/googleLogo.png")}
                        style={{ width: 24, height: 24 }}
                    />
                </View>
                <View>
                    <Text style={styles.GoogleBtnTxt}>Log In with Google</Text>
                </View>
            </TouchableOpacity>
            <View style={styles.TxtView}>
                <TouchableOpacity activeOpacity={0.5} onPress={() => {
                    router.push('/forgot');
                }}>
                    <Text style={styles.ForgotPasswordTxt}>I forgot my password</Text>
                </TouchableOpacity>
                <View>
                    <Text style={styles.NoAccountTxt}>Don't have an account?
                        <TouchableOpacity
                            activeOpacity={0.6}
                            onPress={() => {
                            setLogin(false);
                        }}>
                            <Text style={{ color: Colors.primary60, fontWeight: '700', fontSize: 16 }}> Sign up</Text>
                        </TouchableOpacity>
                    </Text>
                </View>
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    InputContainer: { marginTop: 40, width: 350 },
    InputSubContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: 20,
        borderWidth: 1,
        borderColor: Colors.typoWhite,
        borderRadius: 4,
        paddingHorizontal: 20,
    },
    IconView: {
        padding: 5,
        borderRadius: 20,
        alignItems: "center",
        justifyContent: "center",
    },
    input: {
        width: "100%",
        height: 42,
        borderRadius: 0,
        paddingHorizontal: 10,
        color: Colors.typoWhite,
    },
    LoginBtn: {
        width: 350,
        height: 42,
        borderRadius: 4,
        backgroundColor: Colors.typoWhite,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 5,
    },
    LoginTxt: { fontSize: 18, fontWeight: "600", color: Colors.primary },
    separatorView: {
        marginTop: 20,
        width: 350,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
    },
    line: { width: 100, height: 1, backgroundColor: Colors.typoWhite },
    separatorTxt: {
        fontSize: 18,
        fontWeight: "600",
        color: Colors.typoWhite,
        marginHorizontal: 10,
    },
    GoogleLoginBtn: {
        marginTop: 20,
        width: 350,
        height: 42,
        borderRadius: 4,
        backgroundColor: Colors.typoWhite,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
    },
    GoogleBtnLogoImg: { marginRight: 10 },
    GoogleBtnTxt: {
        fontSize: 18,
        fontWeight: "600",
        color: Colors.primary,
        position: "relative",
        top: -1,
    },
    TxtView: {
        marginTop: 20,
        width: 350,
        alignItems: "center",
        justifyContent: "center",
    },
    ForgotPasswordTxt: {
        fontSize: 16,
        fontWeight: "600",
        color: Colors.typoWhite,
        marginBottom: 10,
    },
    NoAccountTxt: {
        fontSize: 16,
        fontWeight: "600",
        color: Colors.typoWhite,
    },
});

export default Login;

