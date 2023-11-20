import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';

// constants
import Colors from '../constants/colors';
import { SCREEN_WIDTH as width, SCREEN_HEIGHT as height } from '../constants/screen';
import * as Platform from '../constants/platform';

const Header = () => {
    const router = useRouter();
    const img = 'https://lh3.googleusercontent.com/a/ACg8ocJeNOks3NynMczVETRtQorWS8-SWU4XxublttudK3Y1VOI=s192-c-rg-br100';
    const [profileImg, setProfileImg] = useState('');

    return (
        <View style={styles.container}>
            <View style={styles.leftSubContainer}>
                <Image source={require('../../assets/images/Logo.png')} style={styles.LogoImg} />
                <View style={styles.websiteNameBox}>
                    <Text style={styles.text1}>noise</Text><Text style={styles.text2}> Remover</Text>
                </View>
            </View>
            {
                profileImg === '' ?
                    <View style={styles.AuthContainer}>
                        <TouchableOpacity activeOpacity={0.5} onPress={() => {
                            router.push('/auth');
                        }}>
                            <Text style={styles.LogInTxt}>Log in</Text>
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={0.5} style={styles.AuthButton} onPress={() => {
                            router.push('/auth');
                        }}>
                            <Text style={styles.SignupTxt}>Sign up</Text>
                        </TouchableOpacity>
                    </View>
                    :
                    <TouchableOpacity activeOpacity={0.6} style={styles.ProfileImgBox}>
                        <Image style={styles.ProfileImg} source={{ uri: img }} />
                    </TouchableOpacity>
            }
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        marginTop: Platform.IS_LARGE_SCREEN ? 5 : 10,
        height: 60,
        width: '100%',
        backgroundColor: Colors.bg,
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingHorizontal: Platform.IS_LARGE_SCREEN ? 20 : width / 40,
        zIndex: 1,
    },
    leftSubContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    LogoImg: {
        height: Platform.IS_MEDIUM_SCREEN? 30 : 40,
        width: Platform.IS_MEDIUM_SCREEN ? 30 : 40,
        marginTop: 2,
        marginRight: 5,
    },
    websiteNameBox: {
        flexDirection: 'row',
    },
    text1: {
        color: Colors.typoBlack,
        fontSize: 20,
        fontWeight: '400',
    },
    text2: {
        color: Colors.primary,
        fontSize: 20,
        fontWeight: '700',
    },
    AuthContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    LogInTxt: {
        color: Colors.typogrey,
        fontSize: Platform.IS_LARGE_SCREEN ? 16 : 20,
        fontWeight: '500',
    },
    AuthButton: {
        padding: 10,
        paddingHorizontal: 20,
        marginLeft: Platform.IS_MEDIUM_SCREEN ? 10 : 20,
        backgroundColor: Colors.primary,
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
    },
    SignupTxt: {
        color: Colors.bg,
        fontSize: Platform.IS_LARGE_SCREEN ? 14 : 20,
        fontWeight: '500',
    },
    ProfileImgBox: {
        height: 40,
        width: 40,
        borderRadius: 20,
        overflow: 'hidden',
    },
    ProfileImg: {
        height: 40,
        width: 40,
    },
});

export default Header;
