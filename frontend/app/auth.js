import React, { useState, useRef } from "react";
import {
    View,
    Text,
    Image,
    StyleSheet,
    Button,
} from "react-native";
import LoadingBar from 'react-top-loading-bar';
import { Snackbar } from 'react-native-paper';

// constants
import Colors from "../src/constants/colors";
import {
    SCREEN_WIDTH as width,
    SCREEN_HEIGHT as height,
} from "../src/constants/screen";

import AuthBg from "../src/components/auth/AuthBg";
import Login from '../src/components/auth/login';
import Signup from '../src/components/auth/signup';

const Auth = () => {
    const ref = useRef(null);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [login, setLogin] = useState(true);

    const [visible, setVisible] = useState(false);
    const [snackVisible, setSnackVisible] = useState(true);

    return (
        <>
            <View style={styles.Container}>
                <AuthBg />
                {/* Loading Bar */}
                {/* <LoadingBar color={Colors.typoWhite} ref={ref} style={{ height: 3, borderRadius: 20 }} />
                <Button onPress={() => ref.current.continuousStart()}>
                    <Text>
                        Start Continuous Loading Bar
                    </Text>
                </Button>
                <Button onPress={() => ref.current.complete()}>
                    <Text>
                        Complete
                    </Text>
                </Button> */}
                {/* Snackbar */}
                {/* <Snackbar
                    visible={snackVisible}
                    onDismiss={() => setSnackVisible(false)}
                    action={{
                        label: 'Undo',
                        onPress: () => {
                            console.log('snackbar button clicked!')
                        },
                    }}
                    duration={2000}
                    style={{ backgroundColor: Colors.typoWhite, color: Colors.primary }}
                >
                <Text style={{ color: Colors.primary }}>
                    Hey there! I&apos;m a Snackbar.
                </Text>
                </Snackbar> */}
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
                    {
                        login ? <Login email={email} setEmail={setEmail} password={password} setPassword={setPassword} setLogin={setLogin} /> : <Signup email={email} setEmail={setEmail} password={password} setPassword={setPassword} setLogin={setLogin} />
                    }
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
    },
    mainContainer: {
        flex: 1,
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
});

export default Auth;
