import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Linking, TextInput, ScrollView } from 'react-native';

// constants
import Colors from '../src/constants/colors';
import { SCREEN_WIDTH as width, SCREEN_HEIGHT as height } from '../src/constants/screen';

//  components
import Header from '../src/components/header';
import InfoBanner from '../src/components/infoBanner';
import Footer from '../src/components/footer';

const Upload = () => {
    const [driveUrl, setDriveUrl] = useState('');

    const onLinkSubmit = () => {
        console.log('reached here');
        // const url = 'https://drive.google.com/file/d/1U4I2e6yV0Q2oQ1oQy4j3Gf7qk8H1J2X_/view?usp=sharing';
        // const url = driveUrl;
        // const id = url.split('/')[5];
        // const newUrl = `https://drive.google.com/uc?export=download&id=${id}`;
        // Linking.openURL(newUrl);
    };

    const handleKeyDown = (e) => {
        // Check if Ctrl key and 'V' key are pressed simultaneously
        console.log(e.ctrlKey, e.key);
        if (e.ctrlKey && e.key === 'v') {
            // Perform your onSubmit logic here
            onLinkSubmit();
        }
    };

    return (
        <>
            <Header />
            <ScrollView style={styles.main} showsVerticalScrollIndicator={false}>
                <View style={styles.container}>
                    <View style={styles.firstContainer}>
                        <View style={styles.headingView}>
                            <Text style={styles.headingTxt}>Paste the Drive URL{'\n'}to remove the background</Text>
                        </View>
                        <View style={styles.driveInputView}>
                            <TextInput
                                style={styles.driveInput}
                                placeholder="Google Drive URL"
                                onChangeText={(text) => setDriveUrl(text)}
                                value={driveUrl}
                                onKeyPress={(e) => handleKeyDown(e)}
                            />
                            <TouchableOpacity activeOpacity={0.75} style={styles.driveInputBtn} onPress={() => onLinkSubmit()}>
                                <Text style={styles.driveInputBtnTxt}>Upload</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.InstructionsView}>
                            <View>
                                <Text style={styles.commonTxt}>Download automatically start when paste link with <Text style={{ fontWeight: '700' }}>( CTRL + V )</Text> keys</Text>
                            </View>
                            <View style={styles.NoteView}>
                                <Text style={styles.commonTxt}><Text style={styles.NoteTxt}>Note:</Text> Ensure that the Google Drive link provided is not restricted.{'\n'}Set <Text style={styles.BoldTxt}>'Manage Access'</Text> to <Text style={styles.BoldTxt}>"Anyone with the link"</Text> for smooth accessibility.</Text>
                            </View>
                        </View>
                    </View>
                    {/* <View style={{
                        // marginTop: 100,
                        width: '100%',
                    }}> */}
                    <InfoBanner />
                    {/* </View> */}
                    {/* <View style={{ marginTop: 100, width: '100%' }}>
                <Footer />
            </View> */}
                </View>
            </ScrollView>
        </>
    );
};

const styles = StyleSheet.create({
    main: {
        width: width,
        backgroundColor: Colors.bg,
        maxWidth: width - 17,
    },
    container: {
        width: '100%',
        backgroundColor: Colors.bg,
        alignItems: 'center',
    },
    firstContainer: {
        width: '100%',
        height: height - 90,
        alignItems: 'center',
        paddingTop: 100,
    },
    headingView: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: 50,
    },
    headingTxt: {
        fontSize: 60,
        fontWeight: 'bold',
        color: Colors.typogreydark,
        letterSpacing: 0.75,
        textAlign: 'center',
    },
    driveInputView: {
        width: '100%',
        justifyContent: 'center',
        flexDirection: 'row',
        marginTop: 50,
    },
    driveInput: {
        width: '40%',
        height: 60,
        borderTopLeftRadius: 4,
        borderBottomLeftRadius: 4,
        borderWidth: 1,
        paddingHorizontal: 20,
    },
    driveInputBtn: {
        width: '10%',
        height: 60,
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
        backgroundColor: Colors.typoBlack,
        alignItems: 'center',
        justifyContent: 'center',
        // marginLeft: 10,
    },
    driveInputBtnTxt: {
        fontSize: 20,
        fontWeight: '600',
        color: Colors.typoWhite,
    },
    InstructionsView: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
    },
    NoteView: {
        marginTop: 40,
    },
    commonTxt: {
        fontSize: 16,
        fontWeight: '400',
        color: Colors.typogrey,
        textAlign: 'center',
    },
    NoteTxt: {
        fontSize: 18,
        fontWeight: '700',
    },
    BoldTxt: {
        fontWeight: '600',
    },
});

export default Upload;
