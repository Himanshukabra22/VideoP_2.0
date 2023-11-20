import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { Link } from 'expo-router';
import { useRouter } from 'expo-router';

// constants
import Colors from '../constants/colors';
import { SCREEN_WIDTH as width, SCREEN_HEIGHT as height } from '../constants/screen';
import * as Platform from '../constants/platform';

const UploadVideo = (props) => {
    const router = useRouter();
    return (
        <>
            <View style={styles.UploadVideoBox}>
                <View>
                    <Image source={require('../../assets/images/Cloud_Upload.png')} style={styles.Img} />
                </View>
                <View style={styles.subContainer}>
                    {/* <Link href="/upload" > */}
                    <TouchableOpacity activeOpacity={0.75} style={styles.UploadVideoBtn} onPress={() => {
                        router.push('/upload');
                    }}>
                        <Text style={styles.UploadVideoBtnTxt}>Upload Video Link</Text>
                    </TouchableOpacity>
                {/* </Link> */}
                    <View>
                        <Text style={styles.Txt}>from Google Drive</Text>
                    </View>
                </View>
            </View>
        </>
    )
};

const styles = StyleSheet.create({
    UploadVideoBox: {
        aspectRatio: 1.245,
        height: Platform.IS_XXLARGE_SCREEN ? (Platform.IS_XLARGE_SCREEN ? 250 : 300) : 330,
        alignItems: 'center',
        justifyContent: 'space-evenly',
        paddingVertical: 10,
        paddingTop: 40,
        borderRadius: 25,
        shadowColor: Colors.typoBlack,
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.2,
        shadowRadius: 30,
        elevation: 20,
        backgroundColor: Colors.typoWhite,
    },
    subContainer: {
        height: '40%',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-around',
        marginBottom: 20,
    },
    Img: {
        width: Platform.IS_LARGE_SCREEN ? 40 : 100,
        height: Platform.IS_LARGE_SCREEN ? 40 : 100,
    },
    Txt: {
        color: Colors.typogrey,
        fontSize: Platform.IS_LARGE_SCREEN ? 16 : 20,
        fontWeight: '600',
        textAlign: 'center',
    },
    UploadVideoBtn: {
        paddingHorizontal: 34,
        paddingVertical: 16,
        backgroundColor: Colors.primary,
        borderRadius: 40,
        alignItems: 'center',
        justifyContent: 'center',
    },
    UploadVideoBtnTxt: {
        color: Colors.typoWhite,
        fontSize: Platform.IS_LARGE_SCREEN ? 16 : 24,
        fontWeight: '600',
    },
});

export default UploadVideo;