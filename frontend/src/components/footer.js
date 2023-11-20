import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Linking, TextInput } from 'react-native';

// constants
import Colors from '../constants/colors';
import { SCREEN_WIDTH as width, SCREEN_HEIGHT as height } from '../constants/screen';

const Profiles = (props) => {
    console.log(props);
    return (
        <>
            <TouchableOpacity activeOpacity={0.65} onPress={() => {
                if (props.id === 1) {
                    Linking.openURL('https://github.com/Heet-Goyani');
                } else if (props.id === 2) {
                    Linking.openURL('https://github.com/antriksh1305');
                } else if (props.id === 3) {
                    Linking.openURL('https://github.com/Himanshukabra22');
                }
            }}>
                <View style={styles.profileContainer}>
                    <View>
                        <Image source={props.imgSource} style={styles.profileImg} />
                    </View>
                    <View>
                        <Text style={styles.profileNameTxt}>{props.name}</Text>
                    </View>
                    <View>
                        <Text style={styles.profileDesignationTxt}>{props.designation}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        </>
    );
}

const Footer = () => {
    const Arr = [
        { id: 1, name: 'Heet Goyani', designation: 'Frontend Developer', imgSource: require('../../assets/images/heet.png') },
        { id: 2, name: 'Antriksh Gupta', designation: 'Frontend Developer', imgSource: require('../../assets/images/antriksh.png') },
        { id: 3, name: 'Himanshu Kabra', designation: 'Backend Developer', imgSource: require('../../assets/images/himanshu.png') },
    ];

    const [email, setEmail] = useState('');
    return (
        <>
            <View style={styles.container}>
                <Image source={require('../../assets/images/Footer.png')} style={styles.footerBg} />
                <View style={styles.leftMainContainer}>
                    <View>
                        <Text style={styles.MadeByTxt}>Project by</Text>
                    </View>
                    <View style={styles.leftMainSubContainer}>
                    {
                        Arr.map((item, index) => {
                            return (
                                <React.Fragment key={item.id}>
                                    <Profiles id={item.id} name={item.name} designation={item.designation} imgSource={item.imgSource} />
                                </React.Fragment>
                            )
                        })
                    }
                    </View>
                </View>
                <View style={styles.rightMainContainer}>
                    <View>
                        <Text style={styles.Txt1}>Want to Collaborate?</Text>
                    </View>
                    <View>
                        <Text style={styles.Txt2}>Provide your email address and{'\n'}we will get in touch.</Text>
                    </View>
                    <View style={styles.rightMainSubContainer}>
                        <View style={styles.InputArea}>
                            <TextInput
                                style={styles.input}
                                onChangeText={setEmail}
                                value={email}
                                placeholder="Enter Your Email"
                                cursorColor={Colors.typoBlack}
                                placeholderTextColor={Colors.typoBlack}
                            />
                        </View>
                        <TouchableOpacity activeOpacity={0.6} style={styles.ConnectBtn}>
                            <Text style={styles.ConnectBtnTxt}>Connect</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    footerBg: {
        width: '100%',
        height: 400,
        backgroundColor: Colors.bg,
        position: 'absolute',
        bottom: 0,
        left: 0,
    },
    container: {
        flexDirection: 'row',
        width: '100%',
        height: 300,
        backgroundColor: Colors.bg,
    },
    leftMainContainer: {
        width: '50%',
        // height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    MadeByTxt: {
        fontSize: 24,
        fontWeight: '600',
        color: Colors.typoBlack,
        marginBottom: 20,
    },
    leftMainSubContainer: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },
    profileContainer: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    profileImg: {
        width: 90,
        height: 90,
        marginBottom: 10,
    },
    profileNameTxt: {
        fontSize: 16,
        fontWeight: '400',
        color: Colors.typoBlack,
    },
    profileDesignationTxt: {
        fontSize: 16,
        fontWeight: '600',
        color: Colors.typoBlack,
    },
    rightMainContainer: {
        width: '50%',
        // height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    Txt1: {
        fontSize: 48,
        fontWeight: '600',
        color: Colors.typoBlack,
        marginBottom: 20,
    },
    Txt2: {
        fontSize: 20,
        fontWeight: '400',
        color: Colors.typoBlack,
        textAlign: 'center',
        marginBottom: 20,
    },
    rightMainSubContainer: {
        position: 'relative',
        left: -30,
        width: '80%',
        flexDirection: 'row',
    },
    InputArea: {
        width: '55%',
        height: 50,
        borderWidth: 1,
        borderColor: Colors.primary60,
        backgroundColor: Colors.typoWhite,
        marginBottom: 20,
    },
    input: {
        width: '100%',
        height: '100%',
        paddingHorizontal: 20,
        fontSize: 16,
        fontWeight: '600',
        color: Colors.typoBlack,
        opacity: 0.6,
        position: 'relative',
        bottom: 2,
    },
    ConnectBtn: {
        marginLeft: 20,
        width: '40%',
        height: 50,
        borderRadius: 10,
        backgroundColor: Colors.primary,
        alignItems: 'center',
        justifyContent: 'center',
    },
    ConnectBtnTxt: {
        fontSize: 20,
        fontWeight: '600',
        color: Colors.typoWhite,
    },
});

export default Footer;
